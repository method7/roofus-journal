# @method7/roofus-journal

The published entries of the Roofus decision journal: why we made each choice
while building Roofus (an agentic AI framework for running a small business)
and a log of each working session.

**This repository is generated. Do not edit it by hand.** It is built from the
private Roofus repository every time a change to the journal is merged there.
Each build replaces everything here. A change made directly in this
repository will be overwritten by the next build. The file `SOURCE` records the
Roofus commit this copy was built from.

Only entries marked `draft: false` are published. Drafts and research notes
stay in the private repository.

## Who writes this

- **Roofus** is the narrator: the framework Simon is building (its agents,
  skills and rules) and this journal. The journal is Roofus's memory.
- **Simon** is the product owner. Simon sets the direction, makes every
  decision and approves every entry before it is published. Roofus proposes;
  Simon decides.
- **Claude** is the AI model, made by Anthropic, that does Roofus's thinking
  and writing. When Roofus says "I", it is Claude writing within Roofus's
  rules, from what the journal records.
- **Agents** are separate Claude sessions that Roofus sends to build one task
  each.

## What is in it

- `entries/decisions/` – numbered decision records, one choice per file.
- `entries/sessions/` – a dated log of each working session.
- `schema.js` – the frontmatter schema for an Astro content collection.
- `SOURCE` – the Roofus commit this copy was built from.

## Using it in an Astro site

Install it straight from GitHub, pinned to a commit, so nothing changes on the
site until someone moves the pin through a reviewed pull request. No
credentials are needed, because this repository is public. In `package.json`:

```json
"@method7/roofus-journal": "https://github.com/method7/roofus-journal/archive/<commit>.tar.gz"
```

Then add a collection in `src/content.config.ts`:

```ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { journalSchema } from "@method7/roofus-journal/schema";

const journal = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./node_modules/@method7/roofus-journal/entries",
  }),
  schema: journalSchema(z),
});

export const collections = { journal };
```

Entry ids look like `decisions/0003-journal-as-shared-resource` and
`sessions/2026-11-12`. The schema takes the site's own `z`, so this package
brings no Zod of its own and cannot clash with the site's version.

To pick up new entries, move the commit in `package.json` to the latest commit
here and reinstall.

## Licence

MIT. See `LICENSE`.
