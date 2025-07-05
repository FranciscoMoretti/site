# Guide: Implementing Auto Resume (Resumable Streams) with Vercel AI SDK

This guide shows how to implement resumable streams that automatically continue interrupted AI responses when users refresh the page or lose connection.

## Overview

The implementation consists of:

1. **Server-side resumable stream context** using `resumable-stream` package
2. **Database storage** for stream IDs linked to chats
3. **Client-side auto resume hook** that detects incomplete responses
4. **GET/POST endpoint pattern** for resuming and creating streams

## 1. Dependencies

Add the resumable stream package:

```bash
bun add resumable-stream
```

## 2. Database Schema

Add a table to track stream IDs per chat:

```43:146:lib/db/schema.ts
export const chatStream = pgTable('ChatStream', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  chatId: uuid('chatId')
    .notNull()
    .references(() => chat.id, {
      onDelete: 'cascade',
    }),
  streamId: text('streamId').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
});

export type ChatStream = InferSelectModel<typeof chatStream>;
```

## 3. Database Queries

Add functions to save and retrieve stream IDs:

```456:482:lib/db/queries.ts
export async function saveStreamId({
  chatId,
  streamId,
}: {
  chatId: string;
  streamId: string;
}) {
  try {
    return await db.insert(chatStream).values({
      chatId,
      streamId,
    });
  } catch (error) {
    console.error('Failed to save stream ID in database');
    throw error;
  }
}

export async function getStreamsByChatId({ chatId }: { chatId: string }) {
  try {
    const streams = await db
      .select()
      .from(chatStream)
      .where(eq(chatStream.chatId, chatId))
      .orderBy(asc(chatStream.createdAt));

    return streams.map((stream) => stream.streamId);
  } catch (error) {
    console.error('Failed to get streams by chat ID from database');
    throw error;
  }
}
```

## 4. Server Implementation

### Create the resumable stream context:

```40:47:app/(chat)/api/chat/route.ts
import { createResumableStreamContext } from 'resumable-stream';
import { after } from 'next/server';

const streamContext = createResumableStreamContext({
  waitUntil: after,
  // For production, you would configure Redis here
  keyPrefix: 'parlagen:resumable-stream',
  // Uses process.env.REDIS_URL
});
```

### GET handler for resuming streams:

```59:108:app/(chat)/api/chat/route.ts
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const chatId = searchParams.get('chatId');

  if (!chatId) {
    return new Response('chatId is required', { status: 400 });
  }

  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    // Verify user owns this chat
    const chat = await getChatById({ id: chatId });
    if (!chat || chat.userId !== session.user.id) {
      return new Response('Unauthorized', { status: 401 });
    }

    const streamIds = await getStreamsByChatId({ chatId });

    if (!streamIds.length) {
      return new Response('No streams found', { status: 404 });
    }

    const recentStreamId = streamIds.at(-1);

    if (!recentStreamId) {
      return new Response('No recent stream found', { status: 404 });
    }

    const emptyDataStream = createDataStream({
      execute: () => {},
    });

    const stream = await streamContext.resumableStream(
      recentStreamId,
      () => emptyDataStream,
    );

    if (stream) {
      return new Response(stream, { status: 200 });
    }

    /*
     * For when the generation is "active" during SSR but the
     * resumable stream has concluded after reaching this point.
     */

    const messages = await getMessagesByChatId({ id: chatId });
    const mostRecentMessage = messages.at(-1);

    if (!mostRecentMessage || mostRecentMessage.role !== 'assistant') {
      return new Response(emptyDataStream, { status: 200 });
    }

    const streamWithMessage = createDataStream({
      execute: (buffer) => {
        buffer.writeData({
          type: 'append-message',
          message: JSON.stringify(mostRecentMessage),
        });
      },
    });

    return new Response(streamWithMessage, { status: 200 });
  } catch (error) {
    console.error('Error in GET /api/chat:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
```

### POST handler modifications:

Key changes in the POST handler:

1. **Generate and save stream ID**:

```268:275:app/(chat)/api/chat/route.ts
      const messageId = generateUUID();
      const streamId = generateUUID();

      // Record this new stream so we can resume later
      await saveStreamId({ chatId, streamId });

      // Save placeholder assistant message immediately (needed for document creation)
      await saveMessage({
```

2. **Create resumable stream**:

```402:404:app/(chat)/api/chat/route.ts
      return new Response(
        await streamContext.resumableStream(streamId, () => stream),
      );
```

## 5. Client-Side Auto Resume Hook

Create the auto resume hook:

```1:52:hooks/use-auto-resume.ts
'use client';

import { useEffect } from 'react';
import type { UseChatHelpers } from '@ai-sdk/react';
import type { YourUIMessage } from '@/lib/ai/tools/annotations';

export type DataPart = { type: 'append-message'; message: string };

export interface UseAutoResumeProps {
  autoResume: boolean;
  initialMessages: YourUIMessage[];
  experimental_resume: UseChatHelpers['experimental_resume'];
  data: UseChatHelpers['data'];
  setMessages: UseChatHelpers['setMessages'];
}

export function useAutoResume({
  autoResume,
  initialMessages,
  experimental_resume,
  data,
  setMessages,
}: UseAutoResumeProps) {
  useEffect(() => {
    if (!autoResume) return;

    const mostRecentMessage = initialMessages.at(-1);

    if (
      mostRecentMessage?.role === 'user' ||
      (mostRecentMessage?.role === 'assistant' &&
        mostRecentMessage.parts.length === 0)
    ) {
      experimental_resume();
    }

    // we intentionally run this once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const dataPart = data[0] as DataPart;

    if (dataPart.type === 'append-message') {
      const message = JSON.parse(dataPart.message) as YourUIMessage;
      setMessages([...initialMessages, message]);
    }
  }, [data, initialMessages, setMessages]);
}
```

## 6. Integrate into Chat Component

Use the hook in your chat component:

```67:75:components/chat.tsx
  // Auto-resume functionality
  useAutoResume({
    autoResume: true,
    initialMessages,
    experimental_resume,
    data: chatData,
    setMessages,
  });
```

## How It Works

1. **Stream Creation**: When POST request starts, generate unique `streamId` and save to DB
2. **Resumable Stream**: Wrap the AI stream with `streamContext.resumableStream(streamId, streamFactory)`
3. **Auto Detection**: Client hook checks if last message is incomplete (user message or empty assistant)
4. **Resume**: Client calls `experimental_resume()` which triggers GET request
5. **Stream Recovery**: GET handler looks up recent `streamId` and attempts to resume the stream
6. **Fallback**: If stream concluded, send the completed message via data stream

## Key Benefits

- **Zero user intervention**: Automatically resumes interrupted streams
- **Robust error handling**: Falls back to completed messages when stream is done
- **Production ready**: Uses proper stream context with Redis support
- **Clean separation**: GET for resume, POST for new streams

## Production Considerations

For production, configure Redis for the resumable stream context:

```typescript
const streamContext = createResumableStreamContext({
  waitUntil: after,
  keyPrefix: 'myapp:resumable-stream',
  redis: {
    // Redis configuration for production
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD,
  },
})
```

This implementation ensures seamless user experience even when connections are interrupted, making your AI chat application more robust and user-friendly.
