---
title: Companies my leads agent imports take their letter from their trade
date: 2026-11-22
status: proposed
tags: [agents, leads, sales]
summary: Companies my leads agent imports from Companies House were never found under a kind of business, so they had no letter group and every one with no website went on the admin list. Now each target group says which letter its companies get. Builders, trades, cleaning and transport get the Founding Ten letter. The other four groups get the software letter.
draft: false
---

## In plain English

My leads agent writes one of three introduction letters. Which one a
business gets depends on its letter group (decision 0014). A business
found on the Find page gets the group of the kind of business it was
found under, such as roofers. The companies I import from the Companies
House file (decisions 0030 and 0036) were never found that way, so they
had no group. Without one, every imported company with no website went
on the admin list instead of getting a letter. Now each of my target
groups says which letter its companies get. An imported company takes
the letter of the target group its trade falls in.

## Context

The import already chooses companies by their trade code, the SIC code
Companies House gives every company, such as 43910 for roofing. Each
target group in `config/icps.json` lists the codes it covers. When I
import a company I store its Companies House check, which holds its
codes. I didn't keep which target group it matched. The prepare step
(the one that chooses each record's action) only knew about kinds
of business from the Find page.

Many of these companies have no website: Companies House doesn't list
one, my website finder can't always guess it (decision 0035) and the
reviewer can now mark a record as having none (issue #309). So today
every one of them ends up on the admin list, waiting for Simon to choose
a letter by hand.

## Options

1. **Leave it to `--group`.** Simon gives a group for each run by hand.
   It works, but one group covers every record in the run, whatever its
   trade.
2. **Keep the matched target group at import.** It needs a change to the
   import and does nothing for the companies already imported.
3. **Give each target group a letter group and work it out from the
   stored trade codes.** No change to the import. It works for every
   company imported so far.

## Decision

Option 3. Simon asked for imported records to get a letter group and I
proposed this mapping in issue #315. Each active target group now has a
`letter_group`. The starting mapping is:

- **Field service and logistics** (builders, trades, cleaning and
  transport): the Founding Ten letter. These are the trades the Founding
  Ten was written for.
- **Food and drink manufacturers, regulated and compliance-led
  businesses, manufacturing and engineering and established business
  services**: the software letter. Their problems are forms, records and
  systems, which is Method7's software work.

When a record has no kind of business and came from Companies House, the
prepare step reads the trade codes in its stored check and gives it the
letter group of the first target group they match. It matches them in
exactly the way the import does, with the same piece of code, so a code
that means "not trading" never counts. If no target group matches, the
record stays on the admin list with a plain reason. `--group` still
wins. A record found on the Find page keeps the group of its kind.

My strategy check refuses an active target group with no letter group
or one that isn't one of the three. It says which group and what is
allowed.

## Consequences

- An imported company with no website now gets an introduction letter
  instead of waiting on the admin list.
- The letter follows the trade, not the company: two companies in the
  same target group always get the same letter. Simon can change a
  group's letter in `config/icps.json` in a small reviewed change.
- A company with codes in two target groups gets the letter of the one
  that comes first in `config/icps.json`, as the import does.
- No new letter or wording comes with this. Brand new companies are to
  get a letter of their own (issue #317).

Simon has not accepted this yet.
