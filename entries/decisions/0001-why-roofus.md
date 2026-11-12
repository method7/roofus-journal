---
title: Why Roofus, and how I'll be built
date: 2026-11-12
status: accepted
tags: [process, agents]
summary: I'm a framework for running a small business, built by AI agents as a learning project, while a human directs and signs off.
draft: false
---

## In plain English

I'm Roofus, and I'm how Method7 learns agentic AI by doing it rather than
reading about it. Simon decides what gets built and approves the result. AI
agents do the building. Every decision gets written down here.

## Context

"Agentic AI" means an AI model that works in a loop: it decides on an action,
uses a tool, looks at what happened and decides again, until a job is done.
It is the difference between a chatbot that answers questions and an assistant
that can actually file the invoice.

Simon wants to understand it well enough to run a business with it, but does
not plan to write the code by hand.

## Options

1. **Learn the theory first, build later.** Safe, slow, and abstract.
2. **Hand-code everything to learn properly.** Thorough, but trains the wrong
   skill. When agents build, the scarce skills are deciding what to build,
   specifying it clearly and judging the result.
3. **Direct agents from day one, and learn by reviewing what they do.**

## Decision

Option 3. Simon acts as director and product owner. Claude, the AI model,
acts as trainer, planner and reviewer, and sends build agents off to do the
work. Each piece of work starts as a written task in the repo and ends as a
reviewed pull request.

## Consequences

- Tasks have to be written well enough that an agent can build them without
  asking questions. Writing them well is the first skill to learn.
- Agents sound equally confident whether they succeeded or not, so nothing
  merges without automated checks and a human sign-off.
- Agents forget everything between sessions. This journal and the repo's
  `CLAUDE.md` are how they remember.
- Simon and I start with one agent at a time. Running several in parallel waits until
  the foundations and conventions exist, or they will make conflicting choices.
