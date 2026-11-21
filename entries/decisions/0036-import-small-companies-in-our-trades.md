---
title: My leads agent imports small companies in its target trades and guesses web addresses the way small businesses name them
date: 2026-11-21
status: proposed
tags: [agents, leads, sales]
summary: The first trial of the website finder found nothing, because the import chose the oldest companies in the area and the guesses missed obvious names. My leads agent now imports only small companies in the trades Method7 targets, spread across those trades. It tries the short names small businesses use for their websites.
draft: false
---

## In plain English

My leads agent brings in companies from the Companies House file, then
guesses their websites (decisions 0030 and 0035). The first trial found
no websites at all. The import had chosen the oldest companies in the
area, such as a church finance board and a listed company, which Method7
can't help. The guesses also missed short names: a company registered as
"Example and Company Limited" usually has a site called `example.co.uk`.
Now the import keeps only small companies in the trades Method7 targets
and spreads its choice across them. The guesses try the short name first.

## Context

On 21 November 2026 the website finder checked 25 imported companies: 0
confirmed, 0 likely, 0 another company's and 25 not found. The reader
itself worked. Looking at the 25, there were two causes (issue #276).

**The import picked the oldest companies.** It sorted the companies in
Wiltshire and Swindon established first, then oldest first. It took the
first ones. So it chose companies from the 1890s to the 1920s: holding
companies, a venture capital firm, a sports club, a professional society.
Several were large. Each target group in `config/icps.json` already lists
the trade codes it covers (the SIC codes Companies House gives each
company), but the import didn't use them. The file also gives each
company's kind of accounts, which shows its size.

**The guesses missed obvious names.** Companies House writes some old
names as "EXAMPLE,LIMITED(THE)". My agent didn't take the suffix off.
Words such as "and company", "group" or "services" were never dropped,
though a small business rarely puts them in its web address. A site that
gave only the short name and the company's town wasn't counted as likely,
because the whole registered name had to match.

## Options

1. **Keep the import as it was and pay for a search engine.** It doesn't
   fix the choice of companies: a search would find websites for
   businesses Method7 can't help.
2. **Choose by trade code and size, spread across the target groups.**
   Uses what the free file already gives. Age stays a preference only.
3. **Choose one target group at a time.** Simpler, but it bets each
   import on one trade before any outreach results exist, which decision
   0030 chose not to do.

## Decision

Simon asked for option 2 in issue #276. One of my agents built it.

**Which companies are chosen.** The import now leaves out:

- a company whose trade code doesn't start with one of the codes of an
  active target group in `config/icps.json`. A code that means "not
  trading" never counts
- a large company, one that files full or group accounts. Micro, small
  and other exempt accounts are a small company's
- a PLC (a public limited company).

Then it takes one company from each target group in turn until it has as
many as Simon asked for. Established companies come first, then younger
ones the same way, so age is still a preference and never a reason to
leave a company out (decision 0030). Within a group the order is mixed
but the same each time, not oldest first. The preview says how many were
chosen from each group and how many were left out for each reason.

**Guessing.** My agent now tidies the name first: a suffix after a comma
or bracket goes and "(THE)" counts as "the". Then it tries, most likely
first, the name without filler words ("and company", "& co", "and sons",
"group", "holdings", "services", "contractors", "UK"), the whole name, each with
"and" dropped, each with "the" and the name with any place in brackets
left in. It still tries no more than 12 web addresses for one company.

**Likely.** A site that shows no company number now counts as likely when
its name is the company's name once the filler words are dropped from
both, as long as it gives the company's town or the postcode of its
registered office. So a site called "Exampleworth" in the right town is
likely for "Exampleworth and Company Limited". Simon still says yes or no
to each likely one.

## Consequences

- Fewer companies reach the import, but more of them are businesses
  Method7 could help. A small company with no trade code, or one whose
  code is outside the target groups, is no longer imported.
- Every target group gets a share of each import, so early results say
  something about each one.
- A company that files medium-sized accounts is still imported. Whether
  it should be is left to the trial results.
- Dropping filler words makes some guesses shorter and more common, so
  more of them belong to someone else. The company number check rules
  most of those out. A likely one still needs Simon's yes.
- The list of filler words is short and kept in the code, so changing it
  is a small reviewed change.

Simon has not accepted this yet.
