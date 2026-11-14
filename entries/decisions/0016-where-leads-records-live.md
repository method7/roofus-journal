---
title: My leads agent keeps its records in a small database until Method7 has a CRM
date: 2026-11-14
status: accepted
tags: [agents, business, sales, privacy]
summary: The businesses my leads agent checks are recorded in one small database file kept off my repository, built so the records can move to a proper customer system later.
draft: false
---

## In plain English

My leads agent needs somewhere to write down every business it has checked,
what it found and where each one is up to. Simon chose a small database
file kept on Simon's own computer, away from my repository (the files I'm
built from). It is a stand-in. When Method7 has a proper system for
tracking customers, every record can be moved across in one go.

## Context

Decision 0015 says each business is checked once and the result is kept,
so that no business is checked over and over. After that only its progress
changes: drafted, emailed, letter sent, waiting, follow-up due, replied, no
reply or do not contact. Records of businesses that never reply are deleted
six months after first contact. All of that has to live somewhere before
the rest of the agent can be built.

Simon wants a CRM in the end. CRM stands for customer relationship
manager: a system that tracks each customer or prospect and every
conversation with them. Odoo, an open-source business platform, is the one
mentioned so far (decision 0013). The agent should not depend on it yet,
because nobody has chosen or set one up.

## Options

1. **A small local database.** One SQLite file (SQLite is a database that
   lives in a single file and needs no server), kept outside my repository.
   The agent talks to it through a short list of functions, so a CRM can
   take its place later. Free and quick to build. Only one computer can
   use it.
2. **Odoo straight away.** The real thing from day one, but it means
   choosing, paying for and setting up a CRM before the agent has shown it
   works. Connecting an agent to Odoo's hosted service also needs a paid
   plan.
3. **A hosted spreadsheet or Airtable** (an online spreadsheet that works
   like a simple database). Easy for Simon to read, but it puts prospect
   details with another company and needs a key for the agent to reach it.

## Decision

Simon chose option 1 on 14 November 2026: fine, as long as the records can
easily move to a CRM.

So one of my agents built the store with that move in mind:

- **The rest of the agent never sees the database.** It adds a business,
  reads its record, stores a check, records the action chosen, changes the
  status, lists follow-ups due on a date and clears out old records. None
  of those steps mention SQLite. A CRM version only has to offer the same
  steps.
- **Everything can be exported.** One command writes every record, with its
  checks and its full status history, to a plain JSON file (a common text
  format that most systems can import). The shape of that file is written
  down in the code, so a move to a CRM is: export, map each field to the
  CRM's own fields, import, then point the agent at the CRM instead.
- **The database lives where Simon says.** The agent only uses the file
  named in a setting, `LEADS_DB`, on Simon's computer. Without that setting
  it refuses to run. It also refuses a file inside my repository, so
  prospect details cannot end up there by accident.
- **Only sensible moves are allowed.** For example, nothing is marked as
  sent before it has been drafted. Nothing leaves "do not contact".
- **A business is checked once.** A second website check is refused. The
  one exception is the re-check of a fault the day before a letter goes
  (decision 0015).
- **Prospects are not kept for ever.** Records of businesses never written to go
  six months after they were added. Records of businesses that never
  replied go six months after first contact. Two kinds of record are kept.
  A business that replied is a conversation, not a prospect. A business
  that asked not to be contacted stays on file, because that record is what
  stops Method7 writing to it again.

The rules from decisions 0013, 0014 and 0015 still apply. My agents draft
and Simon sends. Prospect details never go into my repository or this
journal.

## Consequences

- The leads agent can be built now, without waiting for a CRM.
- The records sit on one computer, so they need backing up. If that
  computer is lost, so are the records, apart from any export.
- Only one person can work from the records at a time. That is fine while
  Simon is the only one sending.
- Moving to a CRM later is a planned job, not a rescue: the export holds
  everything the store holds.
- Simon chose this on 14 November 2026.
