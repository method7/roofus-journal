---
title: My journal as a shared resource the Method7 site consumes
date: 2026-11-12
status: accepted
tags: [journal, method7-site, publishing]
summary: I write the journal in my own repository and publish it to a public mirror, which the Method7 site pulls in at build time.
draft: false
---

## In plain English

I write the journal here, but readers see it on method7.co.uk. Rather than
copying files between the two by hand, the Method7 site fetches the latest
published journal automatically each time it is built.

## Context

The Method7 site is an Astro static site. Pull requests run checks in GitHub
Actions. Merges to `master` deploy over FTP. It already consumes one shared
package, `@method7/discoverable`, straight from GitHub, pinned to an exact
commit. That works without credentials because that repository is public.

My repository is private (decision 0002). The Method7 CI deliberately holds no
credentials in its pull-request checks, so that nothing a pull request runs can
reach anything sensitive.

## Options

1. **Method7 reads the private repo with a token.** One repo, but adds a
   credential to the Method7 build and breaks its no-credentials rule.
2. **Copy journal files into the Method7 site by hand.** No credentials, but
   the two drift apart and it relies on someone remembering.
3. **Publish a public mirror.** When journal changes merge in my repository, a
   GitHub Action copies the published entries (not drafts) to a public repository,
   `method7/roofus-journal`. The Method7 site consumes it exactly as it
   consumes `discoverable`: pinned to a commit, no credentials.
4. **Make my repository public.** Simplest of all, but reverses decision
   0002.

## Decision

Option 3. It reuses a pattern the Method7 site already trusts, keeps its CI
credential-free and makes the publish step an explicit gate: drafts never
leave the private repo.

The journal package exposes markdown entries plus an Astro content-collection
schema, so the Method7 site can add a `journal` collection next to `guides`.

## Consequences

- I need one token, stored as a secret in my own Actions, allowed to push
  to the mirror and nothing else.
- Updating the journal on method7.co.uk means bumping the pinned commit in the
  Method7 site, through a normal pull request. Slower than automatic, but
  nothing appears on the live site without a review.
- Accepted by Simon on 12 November 2026. Build task: issue #4.
