---
title: My leads agent can import only brand new companies and leaves out those registered at a shared office
date: 2026-11-22
status: proposed
tags: [agents, leads, sales]
summary: Each month's Companies House file includes the companies registered the month before. My leads agent can now import only those, about 200 a month in our area. It leaves out the ones registered at an accountant's, a formation agent's or a business centre, where a letter may never reach the owner.
draft: false
---

## In plain English

A brand new company is a good time to say hello: its owner is setting
things up and may not have chosen who helps yet. The free monthly file
from Companies House (decisions 0030 and 0036) already gives the date each
company was registered. So my leads agent can now import only the
companies registered in the month before the file. Many new companies use
their accountant's address, or a business centre's, as their registered
office. A letter sent there may never reach the owner, so my agent leaves
those out.

## Context

The file is dated the 1st of each month, such as
`BasicCompanyDataAsOneFile-2026-11-01`. Simon counted the companies my
agent would import that were registered from 21 September to the end of
October 2026: 275, so about 200 a month.

Simon looked one of their addresses up by hand and found it was an
accountant's office, used as the company's registered office. A company's registered
office is the address Companies House writes to. It doesn't have to be
where the business works. Formation agents in London (firms that set up
companies for other people) were already left out, as they're outside
our area. The ones left are likely to be local accountants, virtual offices
and business centres.

The file gives two signs of a shared office without looking anything up:

- many companies are registered at the same address
- one of the companies at that address is itself an accountant, a
  bookkeeper or a business centre, by its trade code (the SIC code
  Companies House gives each company).

An address that begins "c/o" (care of) says so outright.

## Options

1. **Keep importing as now.** New companies are mixed in with all the
   others and many letters go to accountants.
2. **Import new companies, keeping every address.** Simple, but a large
   share of the letters would go to someone other than the owner.
3. **Import new companies and leave out shared offices, using only the
   file.** No extra lookups and no cost. A real business that happens to
   share a building with two others is left out too.
4. **Look each address up somewhere else first.** More accurate, but it
   costs money or time for every company, before any results exist.

## Decision

Simon asked for brand new companies, with those at an accountant's
address left out. Option 3 is how I proposed doing that, in issue
#316. One of my agents built it.

**Brand new only.** On the Find page, a tick on the Companies House
import step says "Only companies registered in the month before this
file". The command has `--new-only`. Either one takes the date from the
file's name and keeps only companies registered on or after the first
day of the month before it. The 1 November file gives companies
registered since 1 October. January's file gives December's.

**Shared offices.** With the tick, my agent counts the active companies
in the area at each registered address as it reads the file. The address
is the first line and the postcode, compared ignoring case, spaces and
punctuation, so "Unit 5, Example Park" and "UNIT 5 EXAMPLE PARK" match.
It leaves a company out when:

- its address holds 3 or more active companies
- another company at its address is an accountant or bookkeeper (SIC
  69201, 69202 or 69203) or a business centre (SIC 82110 or 68320). The
  accountant firm itself isn't left out for that reason
- its address begins "c/o" or "care of".

The preview says how many were left out as "registered at a shared
office (an accountant's, an agent's or a business centre)". The limit of
3, the trade codes and how many to import each month (20 to start) are in
the `new_companies` section of `config/icps.json`, so changing them is a
small reviewed change. Without the tick, the import is exactly as before.

## Consequences

- Each month's import can be the companies registered the month before,
  which fits a monthly hello.
- Fewer letters go to an accountant's office. Some real businesses that
  share a building are left out too. If that turns out to be many, the
  limit of 3 can be raised.
- An accountant that is itself new is still imported, as it may need
  Method7's help like any other new business.
- The letter these new companies get and a monthly job to run the import
  are separate pieces of work.

Simon has not accepted this yet.
