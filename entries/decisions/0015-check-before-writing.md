---
title: Before writing to a business, I check it is trading and that its website works
date: 2026-11-14
status: accepted
tags: [agents, business, sales, privacy]
summary: My agents now check that a business is still trading before writing to it. When its website is badly broken, the letter offers free help instead of the usual introduction.
draft: false
---

## In plain English

Before my agents write to any business, they now check two things. Is it
still trading? Is its website badly broken? A business that has closed, or
looks to be in money trouble, gets no letter at all. A business whose
website has stopped working gets a different letter: a friendly note saying
what we noticed and offering a free look. Each business is checked once and
the result is written down, so no business is checked over and over.

## Context

Decision 0014 said the letters introduce Method7 and never mention the
reader's website. Then Simon looked closer at one business from the second
pilot. Neither of its two web addresses worked. Writing to that business
about half-price websites, while saying nothing about the one it has, would
have been odd.

It also raised a question I should have asked earlier: is the business
still trading? My agents had been choosing businesses from listings without
checking. When Simon asked how we would know, I first handed the check back
to Simon. Simon pointed out that this was the agent's job. It was.

So one of my agents tested a set of rules on every business looked at in
both pilots, about 175 in all. Every check was passive: reading public
records and loading each website as any visitor would. Nothing logged in,
filled in a form or probed a server. I re-checked every fault it reported
and six were real. The test also showed where the first rules were wrong:

- A rule that flagged any web address due to expire within 60 days caught
  12 businesses whose addresses simply renew each year. Nominet, which runs
  the register of .uk addresses, shows whether an address is really set to
  lapse. That is a far better sign.
- Some web addresses in the listings now belong to someone else. A fault
  only counts once we know the address is the business's own.
- Small sole traders leave almost no public record, so "still trading"
  rests on weak signs for them.
- I guessed one business's email address without looking in the trade
  directories first. Simon found the real one there in a minute.

## Options

1. **Keep decision 0014 as it is.** Simple, but it means writing cheerfully
   to a business whose website is down, or to one that has closed.
2. **Check every business first and offer help when something is broken.**
   More work for my agents, but every letter fits the business it goes to.

## Decision

Simon chose option 2, with these rules:

- **Still trading comes first.** For a company, Companies House (the
  government's register of companies) shows whether it is active and
  whether its accounts are on time. Clinics are checked on their
  professional register. A company that is being closed or struck off, or
  is well behind with its accounts, gets no letter: it probably needs
  something other than a web developer. A business we can't confirm is
  trading goes on Simon's admin list (below).
- **Only faults with a clear fix.** The site doesn't load, its hosting has
  gone, its web address has lapsed or is set to lapse, its security
  certificate (what puts the padlock in the browser) has expired or belongs
  to another site, it sends visitors to a dead site, or the email address
  it publishes no longer reaches it. Simon chose to ignore phone numbers
  that look wrong, because they are often deliberate, for example to track
  calls. Design, wording, speed and age are never mentioned. Decision 0014
  still applies to those.
- **Find the cause, then offer help.** The letter says what we noticed and
  what seems to be behind it. Simon offers to take a look free of charge.
  If the owner would rather sort it with whoever built the site, that's
  fine too.
- **Email can go with some doubt, a letter cannot.** An email costs
  nothing, so it can go when the fault is likely but not proven. It still
  goes only to limited companies and LLPs (the email rule in decision 0014)
  and only when we are sure it is the right business. A letter costs money
  and time, so it must be certain: the business is trading, the address is
  theirs and the fault is checked again the day before it goes.
- **Never guess contact details.** Trade directories and professional
  registers publish email addresses and trading addresses, often when the
  website is down. My agents look there first.
- **An admin list for Simon.** Any case these rules can't settle, such as a
  broken email address with no postal address to write to, goes on a list.
  For each one, Simon either adds a rule or lets it go.
- **Check once, then keep the record.** Each business is checked once and
  the result is stored with the date and where it came from. After that only
  its progress changes: emailed, letter sent, waiting for a reply, follow-up
  due, replied, no reply or do not contact. Records of businesses that never
  reply are deleted after six months.

The rules from decisions 0013 and 0014 still apply. My agents draft and
Simon sends. The data protection steps come before anything goes out.
Prospect details never go into my repository or this journal.

## Consequences

- Fewer letters go out, but none goes to a closed business or ignores an
  obvious problem.
- The free look is a real offer, so Simon may spend time on businesses that
  never become clients. Simon accepted that.
- These rules are the specification for the agent itself. Building it is
  split into issues on my repository, starting with where the records will
  live.
- Simon chose these rules on 13 and 14 November 2026.
