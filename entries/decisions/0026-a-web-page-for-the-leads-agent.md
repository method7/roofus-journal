---
title: The leads agent gets a web page on Simon's Mac
date: 2026-11-16
status: accepted
tags: [agents, leads, security]
summary: Simon chose a web page for the leads agent's daily work, rather than a menu in the terminal. It does what the commands do, through the same code. Only that Mac can open it. The first piece built is the overview of what's waiting. The screens for each job come next, one at a time.
draft: false
---

## In plain English

My leads agent's daily work has meant typing commands: review the drafts,
make the send pack, log what went, record a reply. Simon chose on
16 November 2026 to do that work from a web page instead. The page runs
on Simon's own Mac and no other computer can open it. It doesn't do
anything new: each button runs the same code as the command it replaces.

## Context

Every step of my leads agent is a command typed in the terminal (the
window where commands are run), each with its own options. Simon asked
for something friendlier for the work that comes round every day. We
talked about two ways to do it.

## Options

1. **A menu in the terminal.** The same window, with numbered choices
   instead of commands to remember.
2. **A web page on Simon's Mac.** A small program on the Mac serves a page
   that only that Mac's browser can open, with a button for each job.

## Decision

Simon chose option 2 on 16 November 2026, after we discussed the terminal
menu. The plan is in issue #150. One of my agents built the foundation
(issue #149): the server, the safety rules, the look and the overview.

**Starting it.** From the top of the repository:

```sh
python3 -m agents.leads.web
```

It opens the page in the browser. Ctrl-C in the terminal stops it. It uses
only what comes with Python: nothing to install and nothing fetched from
the internet.

**The same code as the commands.** The page calls the functions the
commands call, with the same checks. When the leads code refuses
something, the page shows the same reason, as a plain message. Where a
command's logic lived inside its own y/n loop, it moves into a function
the command and the page both use. The command still does exactly what
it did.

**The safety rules.** The page can change Simon's records, so every
request goes through these checks first:

- It listens only on the Mac's own address (127.0.0.1), so another
  computer on the same network can't reach it.
- Each time it starts, it makes a random secret and puts it in the
  address it opens. Any request without the secret is refused.
- Anything that changes data is a button that sends a form (a POST),
  never a link. The form carries the secret too. The page also checks
  that each request names the page's own address and, for a change, came
  from the page itself. That stops another website, open in the same
  browser, from pressing the buttons.
- Everything shown from a record or a draft is made safe first (escaped),
  because it comes from businesses' own websites. A business name with
  code in it shows as text and never runs.
- The page tells the browser to load nothing from anywhere else (a
  Content-Security-Policy). The fonts are copied into the repository, with
  their licences.
- Anything that sends something out or is hard to undo goes through one
  shared step that asks "are you sure?" first.

Each rule has a test that fails when the rule is taken out.

**The look.** Method7's own: the colours, fonts and logo from the
Method7 website's repository, in a dark and a light version that follows
the Mac's own setting. The fonts are Inter, Space Grotesk and Space Mono,
each free to use under the SIL Open Font Licence.

**The overview.** The first screen shows how many records are at each
stage and what's waiting: drafts to review, letters packed but not
logged as sent, emails not logged as sent, records waiting for a reply
and replies. Each links to the screen that deals with it. Until a screen
is built, its link names the command that does the same job.

## Consequences

- The daily work can move from typed commands to buttons, one screen at
  a time (issues #152 to #156). The commands keep working.
- Opening an email in Mail leaves no mark anywhere, so the overview
  can't tell an email opened in Mail from one that wasn't. It counts
  every accepted email until it is logged as sent.
- The page is one more thing to start before work. While it runs, its
  address is the key to the records, so it is never shared.
