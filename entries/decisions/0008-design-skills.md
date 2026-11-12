---
title: Which design skills build the journal pages
date: 2026-11-12
status: accepted
tags: [skills, design, site]
summary: The agent that builds the journal pages will use Anthropic's design skill for how to work and a written brief for what to make, rather than a ready-made theme.
draft: false
---

## In plain English

Before an agent designs the journal pages on method7.co.uk, it needs guidance
on how to design well, and on what this particular site looks like. We chose
one design skill from Anthropic for the first job and wrote our own brief for
the second. Nothing new is installed.

## Context

A skill is a short instruction sheet an AI agent loads when a job calls for
it (decision 0005). The journal has to look considered rather than
templated, but it lives inside an existing site with its own colours, fonts
and automated checks, so it must not become a different brand. Third-party
skills are code written by strangers, so each candidate was read in full
before being judged, and none was installed.

## Options

1. **`frontend-design`, from Anthropic** (github.com/anthropics/skills,
   Apache 2.0 licence, already installed). One instruction file and no
   scripts. It teaches a way of working: ground the design in the subject,
   plan colours, type and layout before writing code, check the plan against
   the brief, spend boldness on one element, and critique the result. It
   lists the habits that make pages look machine-made. Two catches: its own
   text uses US spelling and nine em-dashes, and one of the "generic" looks it
   warns against, near-black with a bright acid green, is Method7's actual
   brand. It also says a brief that sets a direction must be followed exactly,
   which resolves that.
2. **`brand-guidelines`, from Anthropic** (same repository, Apache 2.0). No
   scripts. It applies Anthropic's own colours and fonts, mainly to slide
   decks. Wrong brand, so unusable as it stands, but its shape (one file
   stating the palette, the fonts and when to use each) is a good pattern
   for a Method7 version later.
3. **`webapp-testing`, from Anthropic** (same repository, Apache 2.0). Ships
   Python scripts that start a web server and drive a browser to take
   screenshots. It tells the agent to run its scripts without reading them
   first, which breaks our rule for outside code. It also needs a browser
   library the site does not have, and the browser tools Claude already has
   can take the same screenshots.

Two more in that repository were ruled out on their descriptions alone:
`theme-factory` applies preset colour themes, and `web-artifacts-builder`
runs scripts that install a different set of web tools.

## Decision

Option 1, for process only, with `uk-house-style` for every word on the
pages. What to build comes from `journal/design-brief.md`, which is written
against the site's own design tokens, components and checks, and overrides
the skill wherever they disagree. We decline options 2 and 3.

We are not writing a Method7 design skill yet. The brief covers one build.
If a second page build needs the same guidance, the brief's reusable parts
(tokens, components, what the site's checks demand) become a skill, shaped
like option 2.

## Consequences

- Nothing to install or vet beyond what is already here.
- The builder has two sources of design guidance and must let the brief win.
  The brief says so at the top.
- The skill's US spelling and em-dashes could leak into copy. The house-style
  skill and the em-dash check on both repositories catch that.
- Writing the brief found a fault in what is already published: decision
  0004 links to a private research file, which the site's link check would
  reject. The brief tells the builder to handle it; the entry itself needs a
  separate fix.
- Accepted by Simon on 12 November 2026.
