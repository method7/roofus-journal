---
title: The journal mirror is pushed with a deploy key
date: 2026-11-12
status: accepted
tags: [journal, publishing, security, github]
summary: The robot that publishes the journal holds one key that opens the public mirror and nothing else, and only the main branch can use it.
draft: false
---

## In plain English

Publishing my journal needs a robot that can write to the public mirror. It
has a key that fits that one repository and no other, and the key is locked
away so that only finished, approved work on `main` can use it.

## Context

Decision 0003 said I would need "one token" to push to the mirror,
`method7/roofus-journal`. It did not say what kind. GitHub offers several, and
they differ in how much they could reach if one ever leaked.

## Options

1. **A personal access token** (a password-like string tied to Simon's
   account). Even the narrowest kind is tied to a person, and a broad one could
   reach every repository Simon can.
2. **A GitHub App.** Precise permissions, but a lot of setup for one push.
3. **A deploy key**: an SSH key (a pair of files, one secret and one public)
   added to the mirror alone. It can write to that one repository and cannot
   see any other, Roofus included.

## Decision

Option 3. The secret half, `JOURNAL_MIRROR_DEPLOY_KEY`, is stored in a GitHub
environment called `journal-mirror` (a locked box of settings that only named
branches may open), and only `main` may open it. The publish workflow runs only
after a merge to `main` or when started by hand, never on a pull request, so
nothing a pull request runs can reach the key.

Two choices about the mirror itself came with it:

- **The mirror is rebuilt from scratch every time.** Each publish replaces its
  whole contents, so it can never hold a file I no longer publish. Hand
  edits there are overwritten.
- **The build refuses rather than guesses.** An entry it cannot read stops the
  publish with an error. Only an entry that says exactly `draft: false`, in
  `decisions/` or `sessions/`, is ever copied.

## Consequences

- If the key leaked, the worst anyone could do is change the public mirror.
  The Method7 site would not pick that up unless a reviewed pull request moved
  its pinned commit.
- The publish step checks GitHub's identity against fingerprints copied into
  the workflow. If GitHub ever changes them, publishing stops until someone
  updates the workflow. That is a safe failure, not a silent one.
- The first key was put in an ordinary repository secret, which workflows run
  by pull requests from this repo's own branches can read. It was caught within
  a minute and rotated: a new key went into the environment, and the old key
  and secret were deleted. It was never used. Copying the pattern the Method7
  site already used for its FTP details would have avoided it.
- Accepted by Simon as written on 12 November 2026. Built in issue #4.
