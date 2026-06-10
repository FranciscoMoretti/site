# Francisco Moretti

Minimal personal site built with Next.js, React, Tailwind CSS, and Bun.

## Commands

```bash
bun install
bun run dev
bun run build
```

## Medium Canonical Migration

Use `scripts/canonical-to-medium.mjs` to update cross-posted articles so Medium is the canonical URL.

1. Copy `canonical-map.example.json` to `canonical-map.json`.
2. Fill in each Medium URL and the matching DEV / Hashnode article IDs.
3. Set tokens in `.env.local` or your shell:

```bash
DEVTO_API_KEY=
HASHNODE_TOKEN=
```

4. Run a dry run:

```bash
bun run canonical:medium -- --map canonical-map.json
```

5. Apply the updates:

```bash
bun run canonical:medium -- --map canonical-map.json --apply
```

Hashnode API access now requires a Pro publication. If needed, skip Hashnode with `--no-hashnode` and update those posts manually.
