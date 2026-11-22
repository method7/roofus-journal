---
title: Simon answers each website my leads agent finds and his look overrides the name rule
date: 2026-11-21
status: proposed
tags: [agents, leads, sales]
summary: Simon now answers every website my leads agent finds one by one. He can accept it, decline it or type the right address, then save all his choices with one button. When he accepts a site, his look counts as the proof that it is the company's own, even when the site uses a shorter name than the one on the register.
draft: false
---

## In plain English

My leads agent guesses the websites of companies imported from Companies
House and shows Simon what it finds (decision 0035). Until now Simon
could save all the sure ones as a group and say yes or no to each likely
one. Some right sites couldn't be saved at all, because their name wasn't
exactly the company's name.

Now Simon goes down one list and answers each site on its own: accept it,
decline it or type the right address. One button saves them all. When
Simon accepts a site, the fact that he has looked at it is the proof.
The name no longer has to match.

## Context

On 21 November 2026 the first useful run found 2 confirmed sites, 4
likely ones and 1 that belonged to another company. Simon looked at them
and found three problems.

- The confirmed sites were saved as a group. Simon wanted to confirm each
  one himself.
- Two likely sites were right, but the page said they couldn't be saved:
  "Its website gives a different name and not the company's number." One
  used a short trading name, such as "Example" for "EXAMPLE AND COMPANY
  LIMITED". The other wrote "Ltd" in place of "Holdings Limited". Simon
  had no way to say yes.
- The site that belonged to another company was a wrong guess, but Simon
  might know the right address. He had no way to type it in.

The name rule comes from the confirm step, where my agent saves what a
site says without Simon looking at each one (decisions 0022 and 0024). It
keeps a site only if its name is the company's name or it shows the
company number. That makes sense when nobody looks. Here Simon looks at
every site before it is saved.

## Options

1. **Keep the name rule.** Right sites with a shorter name stay unsaved.
2. **Loosen the name rule for everyone**, so a shorter name always
   counts. The confirm step would then keep more wrong sites, with
   nobody looking.
3. **Let Simon's look override the name rule here only.** Each site is
   answered on its own. The rules for a social site and a postcode
   outside the area still apply.

## Decision

Simon asked for option 3 on 21 November 2026 (issue #280). One of my
agents built it.

**One list.** Every confirmed, likely and another company's result that
is waiting sits in one list. Each row shows the company, the guessed site
as a link that opens in a new tab, what my agent saw and a box holding
the address found. Simon chooses **Accept**, **Decline** or **Leave for
now**, the default. Simon can type a different address in the box. The
results not found are folded away below.

**One button.** **Save my choices** goes through the usual check before
anything changes. The check says how many will be accepted, declined and
changed. Afterwards the page says what happened to each row.

- **Accept** saves the address in the box. A confirmed site keeps the
  page that shows the company number as its proof. Any other site is
  saved on Simon's yes. A site on a social network, or one giving a
  postcode outside the area, still can't be accepted as it is. The row
  says why and stays waiting.
- **Decline** sends the record back to not found. My agent checks it
  again after the set time, 3 months.
- **A different address** typed in the box is read once, as my agent
  reads a guess. If a page shows the company number, that is the proof.
  If not, Simon's word is. A site that can't be read, or is a social
  site, isn't saved. Only a plain web address is accepted, such as
  `www.example.co.uk`. Anything else is refused before anything changes.
- **Leave for now** changes nothing.

The button that saved all the confirmed sites at once has gone.

The confirm step and the other places that save a site without Simon
looking at it keep the name rule.

## Consequences

- Right sites with a shorter or different name can now be saved, so
  more imported companies can reach the daily list.
- A site saved on Simon's word is only as good as his look. My agent
  can't tell a mistake from a right answer. The record says the site was
  accepted or typed by Simon.
- Another company's result now waits for Simon's answer. It isn't
  checked again until he answers.
- A typed address costs a few web requests, the same as a guess. No paid
  search is used.

Simon has not accepted this yet.
