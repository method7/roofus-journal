---
title: A business Simon confirms from its own website can be cleared for letters
date: 2026-11-15
status: accepted
updatedBy: ["0024"]
tags: [agents, business, sales]
summary: Every business Simon confirmed from its own website in the first live run failed the business check, because Companies House had companies with similar names. Now Simon's confirmation counts as proof the business trades, so it can pass the check for letters only, never email. A closed or failing company with the same name still sends it to Simon. A letter still needs the business's address, which nothing adds yet.
draft: false
---

## In plain English

Before my leads agent writes to a business, its business check asks
whether the business is still trading (decision 0015). For a limited
company, Companies House (the government's register of companies)
answers that. Sole traders and partnerships aren't on it, so Simon
confirms them from the business's own website (decisions 0019 and 0021).

Until now, Simon's confirmation didn't count. The business check still
went looking on Companies House and found companies with similar names,
such as "Example Roofing Services Ltd" for "Example Roofing". A similar
name isn't the same business, so the check put the business on the admin
list: the list of businesses Simon decides about by hand. In the first
live run on 15 November 2026, all 11 businesses Simon confirmed from
their websites went on it. None could get a letter.

Now Simon's confirmation counts. If Companies House doesn't match the
business, it passes the business check for letters only, never email.
That doesn't send a letter yet. A letter needs an address. Nothing
adds one from the business's website so far. Until something does, the
next step still holds these businesses on the admin list.

## Context

Names in a trade repeat a lot. Search Companies House for any roofer or
thatcher and it lists other companies with "roofing" or "thatching" in
their names. The business check treated every one of those as a doubt
(decision 0015), so a business confirmed from its own website almost
never reached "may be contacted". Simon had already read the website and
said the business is real and trading. The check asked the same question
again of a register that can't answer it for a sole trader.

## Options

1. **Change nothing.** Every business confirmed from its website goes on
   the admin list and Simon decides each one twice.
2. **Let Simon's confirmation count, with a check for the same name.**
   Simon's confirmation stands for "trading". A company with exactly the
   same name that is closed or in trouble may be the same business, so
   that still goes to Simon.
3. **Let Simon's confirmation count, full stop.** Simpler, but it would
   miss a business whose own company has just gone into liquidation.

## Decision

Simon chose option 2 on 15 November 2026 (issue #87). One of my agents
built it.

**What counts.** A business counts as confirmed from its own website when
Simon presses **y** on a proposal read from its website, including after
correcting the name or town with **e**, or confirms it by hand with
`--own-website`. Its name and town then come from the website, not from
Companies House.

**What the check does.** The business check still searches Companies
House for the business. If it finds a matching company, nothing changes:
that company is checked exactly as before, for money trouble, strike-off
notices and the rest. If it finds no match:

- With only similar names, or nothing at all, the business counts as
  trading and passes the business check, for letters only. The similar names stay on
  the record, so Simon can still see them.
- With a company of exactly the same name that is closed, dissolved, in
  liquidation, in administration, in receivership or in another
  insolvency process, the business goes on the admin list. The reason
  names the company, its number and its status. It may be the same
  business, so Simon decides.
- With a company of exactly the same name whose status Companies House
  doesn't give, or gives as something unfamiliar, it goes on the admin
  list too. My agent doesn't guess.
- With an active company of exactly the same name registered elsewhere,
  the business passes the business check, for letters only. The record
  notes that company.

**How far it looks.** Companies House sends 20 companies a page and a
same-name company is often near the end of the list. So for these
businesses my agent reads up to three pages, as the confirm step does
(decision 0022). It stops at the first page that has a company of
exactly that name. A second same-name company further down, or one
after the first 60, isn't seen.

Simon's rule allowed either the admin list or "do not contact" for a
same-name company in trouble. I built it as the admin list. A shared
name doesn't prove it is the same business. "Do not contact" would
settle it without Simon ever seeing it.

**Letters only.** My agent emails only a limited company or LLP that
Companies House has matched and shows as trading (decision 0014). A
business confirmed from its own website has no matched company, so it
always gets post only, even when its website says "Ltd".

**Companies House records are unchanged.** A business confirmed from
Companies House, from a company number on its website or from a
same-name company Simon confirmed (decision 0022) is checked exactly as
before.

## Consequences

- Businesses Simon confirms from their websites now pass the business
  check for letters only, instead of failing it. They don't get a letter
  yet: see the last point.
- A business that is really a limited company, but whose company name
  differs from the one on its website, gets a letter rather than an
  email. That costs a stamp, not a mistake.
- My agent can't see money trouble for a business with no company, such
  as overdue accounts. Simon's reading of the website is all there is.
- An active same-name company in another town isn't checked for money
  trouble. If it is the same business, Simon should confirm it from
  Companies House instead, as decision 0022 describes.
- The 11 businesses already in Simon's records keep the check they had.
  Each business is checked once (decision 0015) and there is no command
  to check one again yet.
- A letter still needs an address to go to. A business with no company
  has no registered office on file. Nothing yet adds its trading
  address from its website. Until something does, the rules step (which
  turns the checks into one action) still puts it on the admin list for
  having no way to reach it.

Update, 15 November 2026: decision 0024 gives these businesses an
address. My agent now reads the address a business's own website gives
and Simon checks it in the review, so a business confirmed from its
website can get a letter. The 11 businesses already on file kept the
check that sent them to the admin list. For a business like those, whose
name came from its own website and which has no company, Simon can now
have the business check made once more, with this decision applied. The
first check stays in the record, with its date. Every other record still
has one business check (decision 0015).

Update, 15 November 2026: Simon still had to type that re-check for each
of these businesses, one command at a time. Simon asked for that to stop
(issue #109) and one of my agents built a harvest for records already on
file (see the update to decision 0024). It shows Simon what each record
still lacks, one record at a time. When Simon presses y on a business
confirmed from its own website whose check came before this decision, my
agent makes its one re-check straight away, under the same rules as the
command. The first check stays. Every other record still has one
business check (decision 0015).
