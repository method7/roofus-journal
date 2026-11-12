---
title: One shared, pinned home for Method7's house rules
date: 2026-11-12
status: accepted
tags: [house-style, ci, agents, process]
summary: Method7's general rules move into one small public repository that every project uses at a fixed version, with an automatic check that blocks a change breaking them.
draft: false
---

## In plain English

Method7's projects each wrote down their own house rules, and the copies have
drifted: three different instructions for the same punctuation rule, and no
project checks it automatically. We propose keeping the rules that belong to
Method7 as a whole in one public place, with a check every project runs before
a change can go live. Each project's own product rules stay with that project.

## Context

The audit in [What house rules Method7 projects already follow](../research/house-rules-audit.md)
read six Method7 projects. It found:

- The most widely held rule, no em-dashes, is written in four projects and
  Roofus but checked automatically in none of their CI (the checks GitHub runs
  before a change can merge). One project enforces it for user-facing copy only,
  through its lint rules.
- Projects disagree on how far that rule reaches and what replaces the dash.
- `astro-site-template`, which new Method7 sites start from, carries none of the
  house rules at all.
- Roofus needs a house-style check (issue #5) and a house-style skill for its
  agents (issue #1), and both should take whatever shape is chosen here.

There is a precedent. The Method7 website uses the public `@method7/discoverable`
package, installed from one exact commit, so it needs no password and only moves
to a newer version through a reviewed change.

## Options

1. **Leave it as it is.** Each project copies what it needs. Costs nothing now;
   the audit shows what it costs later.
2. **A shared text only**, copied into each project's `CLAUDE.md`. Always read by
   agents, but enforces nothing.
3. **A skill pack only**, under `.claude/skills`. Teaches agents how to check and
   fix copy, but a skill is loaded on demand, so it is the wrong home for a rule
   that must always apply.
4. **Shared lint and format configs.** Too few projects lint, and the stacks
   differ too much for one config to fit.
5. **A public `method7/house-rules` repository** holding a short rules text, one
   portable check script, a reusable GitHub Actions workflow that runs it, and a
   `house-style` skill. Projects call the workflow pinned to a commit and copy
   the text and skill in, recording which commit they came from.

## Decision

Option 5.

It reuses the pattern Method7 already trusts for `discoverable` and for the
journal mirror (decision 0003): public, pinned to a commit, no credentials,
updated by pull request. It works for every project, including WordPress ones
with no Node. A fix to the check is made once and reaches every project with a
one-line change. It follows the `discoverable` principle of sharing the
mechanism and never the content: product rules, copy voice, lint settings,
deploy workflows and agent working style all stay in their own projects.

Simon settled the two questions the shared text could not leave open:

- **How far the em-dash ban reaches: everywhere**, including code comments and
  commit messages, as on method7.co.uk and in Roofus. A machine can check a
  whole repository in one command; "copy only" would first need a list of which
  files count as copy. `delulu.energy` currently bans it only in user-facing
  copy, deliberately, and will need a one-off clean-up.
- **What replaces it: the method7.co.uk wording.** A spaced en-dash for an
  aside, otherwise a comma, colon or full stop; an unspaced en-dash for ranges.
  This replaces the "use hyphens" advice in `m7-wp-starter`.

## Consequences

- One new public repository to create and look after, with an explicit licence
  (`discoverable` has none, which should not be repeated).
- Roofus issue #5 becomes "call the shared workflow" and issue #1 is written in
  the shared repository and copied into Roofus.
- Other projects adopt it one pull request at a time. `delulu.energy` would
  clean or exclude the em-dashes in its documentation, or record why it does not
  adopt the wider rule. `astro-site-template` gains the rule, so every new site
  starts with it.
- Copied text can drift from its source. The check script can warn when a
  project's copy no longer matches the commit it records.
- Not shared, on purpose: lint and format configs, Claude Code permission files,
  deploy workflows, Dependabot settings, a CI spelling check, and each product's
  own rules.
- Accepted by Simon on 12 November 2026.
- The audit behind this decision stays internal (`draft: true`): its security
  section names specific weak spots. One of them, an agent permission in the
  Method7 site that allowed reading SSH keys, was removed the same day.
