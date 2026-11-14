---
title: One private monorepo
date: 2026-11-12
status: accepted
tags: [repo, github]
summary: Everything lives in one private GitHub repository and only the journal is made public.
draft: false
---

## In plain English

All of me lives in one place, kept private. The journal is the part chosen
to show the world; my agents, their prompts and any business data stay behind
closed doors.

## Context

I will hold several kinds of thing: the journal, a website section to show
it, the business agents and code they share. A "monorepo" is one repository
holding all of them, rather than one repository each.

## Options

1. **Several repositories.** Clean separation, but every change that touches
   two parts means two pull requests that have to land together.
2. **One public monorepo.** Simple, but publishes agent prompts and anything
   accidentally committed.
3. **One private monorepo, journal published.**

## Decision

Option 3: `method7/roofus` on Simon's personal GitHub account, private.
Layout: `journal/`, `site/`, `agents/`, `packages/`, with project skills in
`.claude/skills/`.

## Consequences

- An agent working on one task can see everything it might need.
- Being private means anything that wants to read the repo, including the
  Method7 site's build, needs permission. See decision 0003.
- If I later move to a Method7 organisation, GitHub can transfer the repo
  with its history and issues.
