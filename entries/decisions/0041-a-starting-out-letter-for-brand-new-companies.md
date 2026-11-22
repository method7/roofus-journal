---
title: Brand new companies get a Starting out letter, the one letter that may call them new
date: 2026-11-22
status: proposed
tags: [agents, leads, sales]
summary: My leads agent can now import companies registered in the last month. They get their own letter, Starting out, which says hello and congratulates them on getting started. It is the one letter that may say the company is new.
draft: false
---

## In plain English

My leads agent can now import companies registered at Companies House
in the month before (decision 0040). Simon asked for a letter that
introduces Method7 to these brand new companies. Until now, an imported
company got the Founding Ten letter or the software letter, by its trade
(decision 0039). Neither was written for a company a few weeks old. So
there is now a fourth letter, Starting out, for a company registered in
the last 3 months that Method7 hasn't contacted yet.

## Context

There were three letters, each for a group of businesses: the Founding
Ten offer (decision 0014), Method7's software work and the community
letter for charities and clubs (decision 0027). The draft check
refuses the words "new business" in a letter. The sentences
Claude writes for a letter may not say "new" at all. The daily queue's
drafting bans "new" everywhere. For a business that has been
trading for years, calling it new would be wrong.

A company that was registered last month is different. Its creation date
comes from Companies House and my agent stores it with each record's
business check, so saying the company is new is a fact, not a guess. It
is also the reason for writing.

## Options

1. **Keep the three letters.** A new roofing company gets the Founding
   Ten letter like any other. The letter doesn't fit and misses the
   reason for writing.
2. **Add a sentence about being new to each letter.** Every letter would
   need two versions and the rule against calling the reader new would
   have exceptions all over.
3. **Add a fourth letter for brand new companies only.** One letter, its
   own email and its own place in the checks.

## Decision

I proposed option 3 in issue #317, with a fourth letter group,
`starting_out` and 3 months as the cut-off. Simon approved the draft
wording as a starting point. One of my agents built it. Simon approves
the final words in the pull request.

**Who gets it.** When my agent prepares a record, a company imported
from Companies House gets the Starting out letter, ahead of the group
its trade would give it, when:

- it was registered less than 3 whole months ago, by the creation date
  stored with its business check
- Method7 has never contacted it, by letter, email or a call it took.

A company registered 4 months ago gets its trade's letter as before. A
business found on the Find page keeps the letter for its kind, however
new it is. No kind of business or trade can have the Starting out
letter, as only an imported company has its creation date checked.
The reviewer can still choose any letter for a run with `--group`. The
3 months is `starting_out_months` in the `new_companies` section of
`config/icps.json`, so changing it is a small reviewed change.

**The letter.** It says who Simon is, that the company was registered at
Companies House recently and congratulates it on getting started. It
names what Method7 helps with in the first few months: a website, an
email address in the company's own name, a Google listing or a simple
way to handle estimates, bookings or invoices. It makes no offer and
names no price. The email says the same in fewer words, under the
subject "Congratulations on your new company". Both end with the usual
signature and the privacy line saying the details came from Companies
House.

**The word "new".** This is the one letter that may say the company is
new, because it is the reason for writing and Companies House says so.
The draft check still refuses "new business" in every letter. Claude
writes no sentences in this letter, so the rule against "new" in
Claude's own sentences doesn't come into it. The daily queue's drafting,
which bans "new" everywhere, isn't used for this letter and stays as it
is.

**A check on the claim.** The letter says the company was registered
recently, so that must be true on the day it is drafted. A Starting out
draft fails its checks, with the reason, if the record holds no creation
date or the company is 3 months old or more. That covers a letter chosen
with `--group` too.

## Consequences

- A brand new company gets a letter written for it, not one written for
  a business that has traded for years.
- The letter has no gaps for Claude to fill, so the same words go to
  every new company. Only the greeting and the address change.
- If drafting waits too long, a company can pass 3 months before its
  letter is drafted. Its draft then fails with the reason and the
  record needs preparing again, which gives it its trade's letter.
- Once an email address is found, the monthly follow-up (decision 0034)
  is how my agent writes again. The monthly job that runs the import and
  this letter is a separate piece of work.

Simon has not accepted this yet.
