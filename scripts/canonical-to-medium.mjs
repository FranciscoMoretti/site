#!/usr/bin/env node

import { readFile } from 'node:fs/promises'

const DEVTO_API = 'https://dev.to/api'
const HASHNODE_API = 'https://gql.hashnode.com'

const args = process.argv.slice(2)
const apply = args.includes('--apply')
const includeDevto = !args.includes('--no-devto')
const includeHashnode = !args.includes('--no-hashnode')
const mapPath = readArg('--map') || 'canonical-map.json'

await loadEnvFile('.env.local')
await loadEnvFile('.env')

function readArg(name) {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : undefined
}

async function loadEnvFile(path) {
  try {
    const file = await readFile(path, 'utf8')
    for (const line of file.split(/\r?\n/)) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) {
        continue
      }

      const [key, ...valueParts] = trimmed.split('=')
      if (!process.env[key]) {
        process.env[key] = valueParts.join('=').replace(/^["']|["']$/g, '')
      }
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error
    }
  }
}

function requireEnv(name) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing ${name}`)
  }
  return value
}

async function readArticles() {
  const raw = await readFile(mapPath, 'utf8')
  const parsed = JSON.parse(raw)
  return Array.isArray(parsed) ? parsed : parsed.articles
}

function validateArticle(article, index) {
  if (!article.mediumUrl) {
    throw new Error(`Article ${index + 1} is missing mediumUrl`)
  }
  new URL(article.mediumUrl)
}

function updateFrontMatterCanonical(markdown, mediumUrl) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!match) {
    return null
  }

  const frontMatter = match[1]
  const lines = frontMatter.split(/\r?\n/)
  const canonicalLine = `canonical_url: ${JSON.stringify(mediumUrl)}`
  const existingIndex = lines.findIndex((line) => /^canonical_url\s*:/.test(line))

  if (existingIndex >= 0) {
    lines[existingIndex] = canonicalLine
  } else {
    lines.push(canonicalLine)
  }

  return `---\n${lines.join('\n')}\n---\n${markdown.slice(match[0].length)}`
}

async function devtoRequest(path, options = {}) {
  const response = await fetch(`${DEVTO_API}${path}`, {
    ...options,
    headers: {
      'api-key': requireEnv('DEVTO_API_KEY'),
      'content-type': 'application/json',
      ...(options.headers || {}),
    },
  })

  const body = await response.text()
  const json = body ? JSON.parse(body) : null

  if (!response.ok) {
    throw new Error(`DEV returned ${response.status}: ${body}`)
  }

  return json
}

async function updateDevtoCanonical(article) {
  if (!article.devtoArticleId) {
    return 'skipped: no devtoArticleId'
  }

  if (!apply) {
    return `dry-run: would update DEV article ${article.devtoArticleId}`
  }

  const current = await devtoRequest(`/articles/${article.devtoArticleId}`)
  const update = {
    canonical_url: article.mediumUrl,
  }

  const bodyWithCanonical = current.body_markdown
    ? updateFrontMatterCanonical(current.body_markdown, article.mediumUrl)
    : null

  if (bodyWithCanonical) {
    update.body_markdown = bodyWithCanonical
  }

  await devtoRequest(`/articles/${article.devtoArticleId}`, {
    method: 'PUT',
    body: JSON.stringify({ article: update }),
  })

  return `updated DEV article ${article.devtoArticleId}`
}

async function updateHashnodeCanonical(article) {
  if (!article.hashnodePostId && !article.hashnodeInput) {
    return 'skipped: no hashnodePostId/hashnodeInput'
  }

  if (!apply) {
    return `dry-run: would update Hashnode post ${article.hashnodePostId || article.hashnodeInput.id}`
  }

  const mutation =
    process.env.HASHNODE_UPDATE_MUTATION ||
    `mutation UpdatePost($input: UpdatePostInput!) {
      updatePost(input: $input) {
        post {
          id
          slug
          title
          url
        }
      }
    }`

  const input = {
    ...(article.hashnodeInput || {}),
    id: article.hashnodePostId || article.hashnodeInput?.id,
    canonicalUrl: article.mediumUrl,
  }

  const response = await fetch(HASHNODE_API, {
    method: 'POST',
    headers: {
      authorization: requireEnv('HASHNODE_TOKEN'),
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: mutation,
      variables: { input },
    }),
  })

  const json = await response.json()

  if (!response.ok || json.errors) {
    throw new Error(`Hashnode update failed: ${JSON.stringify(json.errors || json)}`)
  }

  return `updated Hashnode post ${input.id}`
}

async function main() {
  const articles = await readArticles()
  if (!Array.isArray(articles)) {
    throw new Error(`${mapPath} must be an array or an object with an articles array`)
  }

  console.log(
    `${apply ? 'Applying' : 'Dry run'} Medium canonical migration for ${articles.length} articles`
  )

  for (const [index, article] of articles.entries()) {
    validateArticle(article, index)
    const label = article.title || article.mediumUrl
    console.log(`\n${index + 1}. ${label}`)

    if (includeDevto) {
      console.log(`   DEV: ${await updateDevtoCanonical(article)}`)
    }

    if (includeHashnode) {
      console.log(`   Hashnode: ${await updateHashnodeCanonical(article)}`)
    }
  }

  if (!apply) {
    console.log('\nDry run only. Re-run with --apply to update platforms.')
  }
}

main().catch((error) => {
  console.error(error.message)
  process.exitCode = 1
})
