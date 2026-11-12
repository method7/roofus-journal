---
title: Writing our own skill to take the AI sound out of copy
date: 2026-11-12
status: accepted
tags: [skills, copy, house-style]
summary: We looked at three published skills that edit out the signs of AI writing and chose to write a short one of our own, because none fits Method7 house style without being rewritten.
draft: false
---

## In plain English

Copy written by AI has habits readers spot quickly: "it's not just X, it's
Y", everything in threes, words like "pivotal", and a punchy last line that
repeats the point. We looked for a ready-made skill that teaches an AI agent
to edit those habits out. The best one is good, but it clashes with our house
style in several places, so we are writing a short one of our own that
borrows its ideas and credits it.

## Context

A skill is a short instruction sheet an AI agent loads when a job calls for
it (decision 0005). Our `uk-house-style` skill already covers British
spelling, dates, plain words and the ban on em-dashes, but not the wider
habits that make copy sound machine-written. Issue #2 asked for a skill that
covers them without fighting our house style.

Skills published by other people are instructions written by strangers, and
some include programs the agent is told to run. So every candidate was read
as plain text before it was judged, and nothing was installed or run. We
also rewrote one deliberately bad paragraph by following each skill's
instructions by hand, to see how each one pulls. The full comparison, with
the before and after, is in the research note "Skills that take the AI sound
out of copy" in the journal's private research folder.

## Options

Anthropic publishes no skill for this, so all three candidates come from
the community. All three use the MIT licence, which lets us copy and change
them as long as we keep the author's credit.

1. **`humanizer`, by Siqi Chen**
   (https://github.com/blader/humanizer). One instruction file, no
   programs, and the most widely used of the three. It lists 26 habits,
   strongest first, with an example of each, and it guards against hidden
   instructions in the text it edits. But it bans the en-dash that our house
   style uses for asides and ranges, it is written in American English, its
   examples include real em-dashes (which would fail our automatic check),
   and several examples are copied from a Wikipedia page whose licence asks
   for different terms. Its newest version also tells the agent to add
   details "you know to be true", a risk for a journal that has to be
   accurate. It changes often, with 28 releases this year.
2. **`avoid-ai-writing`, by Conor Bronsdon**
   (https://github.com/conorbronsdon/avoid-ai-writing). The most careful
   about facts: it never lets the agent invent a detail or an experience.
   But it tells the agent to run its own programs on every rewrite, which
   breaks our rule for outside code, its full package is 676 files, too big
   to check properly, and it allows some em-dashes.
3. **`stop-slop`, by Hardik Pandya**
   (https://github.com/hardikpandya/stop-slop). Small and easy to read,
   with no programs. But its rules are blunt ("kill all adverbs", never use
   the passive), one of its own examples has an em-dash, and in our test
   its rewrite added claims the original never made.
4. **Write our own.** A short skill using the habits `humanizer` and
   Wikipedia identify, plus `avoid-ai-writing`'s rule never to invent a
   fact, written in our own spelling, punctuation and examples.

## Decision

Option 4. No candidate can be used as it stands, because each
would fail our em-dash check the moment it was copied in. Adapting
`humanizer` would mean rewriting most of its rules and examples, and then
redoing that work for every new release. Writing our own is a few hours'
work and gives us something we control.

The new skill will copy no text from the others and will credit `humanizer`,
`avoid-ai-writing` and Wikipedia's "Signs of AI writing" page
(https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) for the ideas.
Because these habits are the same in every Method7 project, it lives in
`method7/house-rules` next to `uk-house-style` and is copied into Roofus at a
fixed version, in the same way.

## Consequences

- Writing the skill becomes a new issue. Nothing is installed by this
  decision.
- We keep it up to date ourselves. When we want new habits added, someone
  reads `humanizer`'s change log and the Wikipedia page and adds what is
  useful, when it suits us rather than on someone else's release schedule.
- Agents writing copy will have two skills to follow. The new one has to
  say that `uk-house-style` wins on spelling and punctuation.
- Simon accepted this on 12 November 2026, with the skill living in
  `method7/house-rules`.
