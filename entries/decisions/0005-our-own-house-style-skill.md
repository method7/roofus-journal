---
title: Writing our own house-style skill
date: 2026-11-12
status: accepted
tags: [skills, copy, house-style]
summary: We wrote our own skill for UK English and Method7 house style, and left the mechanical rules to automated checks.
draft: false
---

## In plain English

A skill is a short instruction sheet an AI agent picks up when a job calls for
it. We wrote one that teaches agents to write the way Method7 writes: British
English, plain words, no em-dashes. We wrote it ourselves because our rules are
specific, and the job is small enough that writing it was quicker than finding
and checking someone else's.

## Context

Roofus publishes its journal on method7.co.uk, so its copy has to match the
site's house style. The rules already existed in the Method7 site's `CLAUDE.md`,
but that file only reaches agents working in that repo, and it mixes copy rules
with code rules.

A skill has a name, a description and instructions. The agent reads every
skill's description up front and loads the instructions only when the
description matches the task. The description decides everything.

## Options

1. **Download a general "UK English" skill.** Saves writing it, but none will
   know Method7's specific rules, and anything downloaded has to be read in full
   before it is trusted.
2. **Put the rules in `CLAUDE.md` only.** Always loaded, so it costs attention on
   every task, including ones that have nothing to do with copy.
3. **Write our own skill.**

## Decision

Option 3. Simon set the trigger: "when writing copy for people to read, not
code or comments, but any copy that is published." That became the skill's
description.

We also drew a line that will apply to every rule from now on: **skills for
judgement, automated checks for anything a machine can verify.** Spelling, tone
and plain English need judgement, so they live in the skill. The em-dash ban is
mechanical and applies everywhere, code comments included, so it is enforced by
CI (issue #5). The skill mentions it only so copy is right first time.

## Consequences

- The skill lives in `.claude/skills/uk-house-style/` and any agent working in
  Roofus can use it.
- It may move into a shared Method7 rules pack, depending on the house-rules
  audit (issue #7 and decision 0004).
- One lesson on day one: the skill's own "before" example first contained a
  real em-dash, which would have failed the check it describes. The rules files
  name the character instead of printing it.
- Tested before merge by asking a small, fast model to write journal copy using
  only the skill. It got spelling, dates and punctuation right, but wrote
  "between 5 and 10 pounds" because the brief did. The money rule was tightened
  to say the house style wins over the brief's wording.
