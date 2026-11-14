---
title: My leads agent reads its keys from one private file on Simon's computer
date: 2026-11-14
status: accepted
tags: [agents, security, privacy]
summary: The keys my leads agent needs are kept in one file on Simon's own computer, outside my repository and readable only by Simon's account, under three names Simon chose.
draft: false
---

## In plain English

My leads agent uses two outside services that need a key. It will need a
third later. Each one wants a key before it will answer. Simon chose to
keep all of those keys in one file on Simon's own computer, away from my
repository (the files I'm built from). Only Simon's account can read it.
The agent reads its keys from there, so nobody has to type them in before
each run.

## Context

An API key is a private code that lets a program use another company's
service. Whoever holds the key can use the service in Method7's name
and, for a paid service, run up its bill, so a key has to be kept as
carefully as a password.

The leads agent needs three:

- one for Companies House, to check that a business is still trading
  (decision 0015)
- one for Claude, to write the tailored sentences in each draft and to
  fact-check it
- one for Google Places, for the step that finds businesses to check. That
  step isn't built yet.

House rule 9 says no key ever goes into my repository. House rule 11 says
an agent never reads a key file. Until now the agent only looked for its
keys in environment variables: settings handed to a program when it
starts, which have to be set again in each new terminal window (where
commands are typed).

## Options

1. **Set the keys by hand before each run.** Nothing is stored, but Simon
   has to find and paste each key every time. Keys pasted into a terminal
   also tend to end up in its history (the list of commands typed before).
2. **A `.env` file in the repository.** This is a common habit, but it puts
   the keys one slip away from being shared with the code. House rule 9
   rules it out.
3. **The macOS keychain.** A store built into the Mac, but the agent would
   then only work on a Mac. It also needs more code to reach.
4. **A secrets manager** (an online service that stores keys and hands
   them out to programs). Good for a team or a server. For one person on
   one computer it is another account and another bill.
5. **One private file on Simon's computer.** A plain text file outside the
   repository that only Simon's account can open. It is quick to set up
   and works the same on a Mac or a Linux computer.

## Decision

Simon chose option 5 on 14 November 2026. The file is
`~/.config/roofus/keys.env`, in Simon's own settings folder. Simon also
chose the three names:

- `COMPANIES_HOUSE_API_KEY` for Companies House
- `LEADS_ANTHROPIC_API_KEY` for Claude. It has its own name, separate from
  any other Claude key on the computer, so the leads agent never picks up
  a Claude key meant for another tool.
- `GOOGLE_PLACES_API_KEY` for the finding step, which doesn't use it yet

One of my agents built a small piece of code that fetches the keys for
the leads agent. It follows these rules:

- **A key set by hand still wins.** If a key is set as an environment
  variable, that one is used. The file is only read when it isn't.
- **No file means no key.** A missing file is not an error. The step that
  needs the key says it isn't set.
- **An unsafe file is refused.** If other users on the computer can read
  the file, or it sits inside my repository, the agent stops. The message
  says what is wrong. It never shows a key.
- **Keys are never shown.** No key is printed, logged or put in an error
  message.

The repository holds `keys.env.example`, which lists the three names with
no values, so the file can be set up from it.

I got one thing wrong first. The drafting step looked for its Claude key
under `ANTHROPIC_API_KEY`, a general name that other tools on the computer
may also use. One of my agents moved it to `LEADS_ANTHROPIC_API_KEY`,
the name Simon chose.

## Consequences

- A run no longer needs the keys typed in first.
- The keys sit on one computer, in plain text, guarded by the file's
  permissions (the computer's record of who may open it). Anyone who can
  sign in as Simon can read them. If that computer is lost, I recommend
  cancelling each key and making a new one.
- The leads agent's code reads the file only when Simon runs it. My other
  agents, the ones that build and review me, are told never to open it.
  For now that is only a written rule: Claude Code's safety settings block
  `.env` files but not this one. The tests use made-up keys in files of
  their own.
- When the finding step is built (issue #56), it should read
  `GOOGLE_PLACES_API_KEY` the same way.
- Simon chose this on 14 November 2026.
