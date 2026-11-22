---
title: The company number settles the sure websites and Simon's look settles the rest
date: 2026-11-21
status: proposed
tags: [agents, leads, sales]
summary: My leads agent saves a website whose page shows the company's own number and treats one that shows another company's number as not found, without asking. Simon answers the likely and possible sites one by one. Simon can accept each, decline it or type the right address, then save every choice with one button. When Simon accepts a site, that look counts as the proof that it is the company's own, even when the site uses a shorter name than the one on the register.
draft: false
---

## In plain English

My leads agent guesses the websites of companies imported from Companies
House and shows Simon what it finds (decision 0035). Every company's
website must show its company number, so the number is proof either way.
A site that shows the company's own number is saved straight away. A site
that shows another company's number is not theirs, so the record counts
as not found.

Simon answers the rest, the likely and possible sites, on one list: accept
each, decline it or type the right address. One button saves them all.
When Simon accepts a site, the fact that Simon has looked at it is the
proof. The name no longer has to match.

## Context

On 21 November 2026 the first useful run found 2 confirmed sites, 4
likely ones and 1 that belonged to another company. Simon looked at them
and found three problems.

- The confirmed sites were saved as a group. Simon wanted to confirm each
  one first.
- Two likely sites were right, but the page said they couldn't be saved:
  "Its website gives a different name and not the company's number." One
  used a short trading name, such as "Example" for "EXAMPLE AND COMPANY
  LIMITED". The other wrote "Ltd" in place of "Holdings Limited". Simon
  had no way to say yes.
- The site that belonged to another company was a wrong guess, but Simon
  might know the right address. There was no way to type it in.

The name rule comes from the confirm step, where my agent saves what a
site says without Simon looking at each one (decisions 0022 and 0024). It
keeps a site only if its name is the company's name or it shows the
company number. That makes sense when nobody looks. Here Simon looks at
every site that the number doesn't settle.

On 22 November 2026, after answering a run one row at a time, Simon
changed the first point: "If a company number matches, confirmed, we
should automatically accept. If the company number does not match, leave
the record as not found. Neither need confirming by a human." (issue
#296). The number is the proof, so a person's look adds nothing.

## Options

1. **Keep the name rule.** Right sites with a shorter name stay unsaved.
2. **Loosen the name rule for everyone**, so a shorter name always
   counts. The confirm step would then keep more wrong sites, with
   nobody looking.
3. **Let Simon's look override the name rule here only.** Each site
   without proof is answered on its own. The rules for a social site and
   a postcode outside the area still apply.

## Decision

Simon asked for option 3 on 21 November 2026 (issue #280) and for the
number to settle the sure results on 22 November 2026 (issue #296). My
agents built both.

**The number settles it.** When my agent checks a company:

- **Confirmed**, a page shows the company's own number: the site is
  saved there and then, with that page as its proof. The record says the
  website finder answered it, not Simon. A confirmed site on a social
  network, or one giving a postcode outside the area, can't be saved as
  it is. It waits for Simon with its reason, as before.
- **Another company's**, a page shows a different company number: the
  record counts as not found. It is listed under Not found with what was
  seen, such as "A page shows company number 09999999, not this
  company's." The site that was read is kept too. My agent checks it
  again after the set time, 3 months.

Each company's line in the run says what happened, such as "confirmed,
saved" or "another company's website, so not found". The counts say
how many were confirmed and saved. Results kept before this change and
still waiting are settled the same way the next time the check runs,
before any new company is checked. Opening a page never changes them.

**One list for the rest.** Every likely and possible result that is
waiting sits in one list, with any confirmed one that can't be saved as
it is. Each row shows the company, the guessed site as a link that opens
in a new tab, what my agent saw and a box holding the address found.
Simon chooses **Accept**, **Decline** or **Leave for now**, the default.
Simon can type a different address in the box. The results not found are
folded away below.

**One button.** **Save my choices** goes through the usual check before
anything changes. The check says how many will be accepted, declined and
changed. Afterwards the page says what happened to each row.

- **Accept** saves the address in the box, on Simon's yes. A site on a
  social network, or one giving a postcode outside the area, still can't
  be accepted as it is. The row says why and stays waiting.
- **Decline** sends the record back to not found. My agent checks it
  again after the set time, 3 months.
- **A different address** typed in the box is read once, as my agent
  reads a guess. If a page shows the company number, that is the proof.
  If not, Simon's word is. A site that can't be read, or is a social
  site, isn't saved. Only a plain web address is accepted, such as
  `www.example.co.uk`. Anything else is refused before anything changes.
- **Leave for now** changes nothing.

The button that saved all the confirmed sites at once has gone.

The confirm step and the other places that save a site without anyone
looking at it keep the name rule.

## Consequences

- Right sites with a shorter or different name can now be saved, so
  more imported companies can reach the daily list.
- Confirmed sites reach the daily list without waiting for Simon.
  Simon's list is shorter: only the sites the number can't settle.
- A confirmed site is only as good as the number on its page. A site
  that copies another company's number would be saved. That is unlikely,
  as the law requires a company's own number on its own website.
- A site saved on Simon's word is only as good as Simon's look. My agent
  can't tell a mistake from a right answer. The record says the site was
  accepted or typed by Simon.
- A likely or possible result waits for Simon's answer. It isn't
  checked again until Simon answers.
- A typed address costs a few web requests, the same as a guess. No paid
  search is used.

Simon has not accepted this yet.
