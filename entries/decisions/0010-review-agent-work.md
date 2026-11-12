---
title: Agent work is reviewed before it reaches Simon
date: 2026-11-12
status: accepted
tags: [process, agents, skills, review]
summary: Every piece of work an AI agent does is checked by someone other than that agent before Simon sees it, following a written skill rather than one session's habits.
draft: false
---

## In plain English

When an AI agent finishes a job, it writes a report saying what it did.
Those reports sound equally sure of themselves whether or not the agent got
everything right. So before any agent's work reaches Simon, someone else
checks it against the real thing: the actual change, the actual web page,
the actual source. We have written down how to do that check, so it no
longer depends on one Claude session remembering.

## Context

On 12 November, agents built about fifteen pieces of work. Claude checked
each one before passing it to Simon, and the checks found something most
times:

- an audit that would have published a map of security weak spots
- a brief that was wrong about the code it described
- credits to other people's work that the agent had not checked
- a test that proved nothing

None of those checks was written down anywhere. They lived in Claude's
habits during one session. A new session, a different AI model, or an agent
that Simon ran directly would have skipped them. It is the same problem as
a small business whose process lives in one employee's head.

## Options

1. **Trust the reports.** Fast, and wrong often enough to matter.
2. **Automated checks only.** Our automated checks (CI) already catch
   mechanical problems, such as em-dashes, badly formed journal entries and
   broken links. They cannot tell whether a change did what was asked, looks
   right on a phone, or credits the right author.
3. **Simon reviews everything in detail.** Simon is the final approver, but
   reading every line of every change would turn Simon into the bottleneck
   and defeat the point of agents.
4. **A written review step, followed before anything reaches Simon.** A
   skill sets out what to check for each kind of work, and `CLAUDE.md`
   makes it a rule.

## Decision

Option 4. A skill, `review-agent-work`, holds the judgement part: treat a
report as a claim, check it against reality, and use a checklist for code,
website changes, copy, research and the journal. It also covers merges and
what follows them, instructions found inside the work, and how to report
back to Simon, including the reviewer's own mistakes. `CLAUDE.md` makes the
step a rule. CI keeps the mechanical checks, and the review makes sure CI
actually ran.

Review is a separate step from building. The agent that did the work is
never the only one who checks it.

## Consequences

- Work takes a little longer to reach Simon, and arrives with a short
  account of what was checked and what was not.
- The review step now works the same in any session, and can be improved
  in one place.
- It is different from the agent safety rules (issue #13). Those decide
  what agents are allowed to do, and stop harm before it happens. Review
  catches what got through.
- The skill lives in Roofus while we refine it. Once it has settled, it
  moves to `method7/house-rules`, so every Method7 project uses it.
- Simon agreed the approach on 12 November 2026.
