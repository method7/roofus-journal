---
title: GitHub enforces the rules on main
date: 2026-11-12
status: accepted
tags: [github, guardrails, ci]
summary: Nothing reaches the main branch without a pull request and passing checks, and nobody can bypass that, including Simon.
draft: false
---

## In plain English

Until now, our process held only because everyone followed it. Now GitHub
enforces it: every change goes through a pull request, the automatic checks
must pass before the merge button works, and nobody can skip that, including
the owner. An agent using Simon's login can't skip it either.

## Context

Roofus had a process (decision 0001) and automatic checks (issue #5), but a
failing check was only a warning, and anyone with access could still push
straight to `main`. Agents act through Simon's GitHub login, so "anyone with
access" includes every agent.

## Options

1. **Rely on the process.** Free, and it has held so far, but only because
   nobody forgot.
2. **Classic branch protection rules.** They work, but GitHub is replacing them.
3. **A ruleset on `main`**, GitHub's newer version, with an empty bypass list.

## Decision

Option 3, applied by Simon on 12 November 2026. The ruleset `Protect main`:

- requires a pull request for every change
- requires both checks to pass on an up-to-date branch: the shared house-style
  check and the journal check
- requires every review comment to be resolved before merging
- blocks force pushes and deleting the branch
- lets nobody bypass it

**Required approvals are set to 0, on purpose.** Agents open pull requests as
Simon, and GitHub does not let anyone approve their own pull request, so
requiring an approval would lock Simon out. Simon's approval is the act of
merging. Claude Code's own safety check stops agents merging on his behalf.

## Consequences

- Tested the same day: a direct push to `main` was refused, citing both rules.
- The fuller fix is to give agents their own GitHub identity, so their pull
  requests can require Simon's approval. That belongs with the agent safety
  baseline (issue #13).
- Renaming a CI job silently changes its check's name, and the ruleset would
  then wait for a check that never arrives. Renames need the ruleset updated
  in the same change.
- The same day, the same ruleset was applied to `method7/house-rules`, copied
  from Roofus. It required Roofus's check names, which differ in one capital
  letter and include a journal check house-rules does not have, so no pull
  request there could ever have merged. Caught by comparing the ruleset with
  the check names CI actually reports, before anything got stuck. A ruleset
  has to be written for each repo's own checks.
