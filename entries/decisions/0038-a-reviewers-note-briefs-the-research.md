---
title: The reviewer's note on a business's website briefs my leads agent's research
date: 2026-11-22
status: proposed
tags: [agents, leads, sales, safety]
summary: While reviewing the websites my leads agent finds, the reviewer can now log the address, an email and a note in their own words. A note is kept on the record for the research step. In two later steps a research stage will be briefed by the note and the email or letter will be drafted from it. Only the reviewer's note gives the research its orders. Anything read from a business's website is data. An email the reviewer types can be used to contact the business. Its privacy line says truthfully where it was found.
draft: false
---

## In plain English

When Simon reviews the websites my leads agent finds, Simon often spots
something worth telling the business about: a site that is down, or a
menu with pages missing. Until now there was nowhere to write it down.

Now each row has an **Email** box and a **Note** box under the website.
The note is Simon's own words about what was noticed and where. It is
kept on the record for the research step. Later, a research stage will read
the note, look at the business's site and check what it finds. Later
still, the email or letter will be drafted from the note and the
research. This decision records all three steps. Only the first is
built.

An email Simon types can be used to contact the business straight away.
When it isn't on the business's own web domain, the email says "I found
your email address publicly listed online."

## Context

On 22 November 2026 Simon was reviewing "Websites found" and found two
opportunities with nowhere to log them.

- For a building firm, Simon found the business's website and an email
  address. The site was down. That is just the kind of thing a small
  business would want to hear about.
- A bakery, from an earlier search, has a website whose menu is missing
  pages: Google lists pages that can't be reached from the site itself.

The page had a box for the website and nothing else. The email and what
Simon had seen were lost as soon as the page moved on.

## Options

1. **A dropdown of problems**, such as "site down" or "menu missing",
   for the reviewer to pick from.
2. **A free-text note**, in the reviewer's own words, saying what was
   noticed and where.
3. **Both.**

## Decision

Simon chose option 2 on 22 November 2026 (issue #292). Simon's point
was that the research agent is briefed from the note. The standard
checks run on every site anyway. A dropdown would only repeat the
list of checks. The note needs to say what was noticed and where, which a
list can't.

The design comes in three steps.

**A: the reviewer logs it (built now).** Each row on the waiting list
and the not-found list has a Website box, then an optional Email box and
an optional Note box of up to 1,000 characters. They are saved with the
row's other answers, through the usual check before anything changes,
which says how many emails and notes will be saved. They can be saved
on a row left on Leave for now, or on a not-found row with no address
typed. A note with Decline is refused, because a note is about their
website and Decline says it isn't theirs.

- The email is kept like the other emails my agent holds, with the same
  refusals: a placeholder such as `info@email.com` is never kept. Its
  source says who found it and on what day.
- Simon chose on 22 November 2026 that any email the reviewer types, or
  my agent finds, is public and may be used to contact the business. The
  rule on who may be emailed doesn't change: only a limited company, LLP,
  plc or corporate charity gets an email. A sole trader or partnership
  still gets a letter.
- The privacy line says truthfully where the email came from, chosen by
  its domain. An email on the business's own web domain, such as
  info@example.co.uk for example.co.uk, counts as from its website, so
  the line says "your website" as before. Any other, such as a Gmail
  address, gets Simon's approved words: "I found your email address
  publicly listed online." When the draft also uses details from
  somewhere else, such as a director's name from Companies House, the
  sentence names both. My agent checks every email draft for the right
  line.
- The note is kept as a review check, beside the business check and the
  health check. Each one keeps the day, the note as typed, the website
  being looked at (or none) and who reviewed. A record keeps every note,
  newest first.
- A note is kept on the record for the research step, which reads the
  notes from the record. The Websites found page keeps no list of noted
  records. Each row on it shows its record's notes, under "Notes for
  research, newest first". The record's own page shows them all.
  Nothing else about the record changes yet.

At first a record with a note was flagged for research and the Websites
found page listed those records on a tab of their own, Flagged for
research. A record answered with a note then showed on two tabs. On 22
November 2026 Simon asked what that list was for, as every answered
record goes through research anyway. Every
saved website goes on to research. The note only tells the research what
to look at first and the research reads it from the record. So the tab
went (issue #324) and each note shows on its own row instead.

**B: research from the note (a later issue).** A research stage is
briefed by the note. It reads the business's own site the way a
visitor's browser does: no forms, no logins and no guessing at hidden
addresses. It runs the standard checks: whether the site is down, its
security, how it works on phones, whether it is out of date, pages
missing from the menu, contact details and speed. It saves dated facts,
each with the web address that backs it and tagged by kind. The health
check confirms any technical fault. It gets its own model and its own
daily cap in `config/models.json`.

**C: drafting uses it (a later issue).** The email or letter is drafted
from the note and the research. The fact checker holds every claim to
the note or a saved fact. A person says yes before anything is sent, as
now.

**Safety.** Only the reviewer's note instructs the research agent.
Anything read from a business's website is data, never instructions. A
page that tells an AI what to do is treated as text on a page.

**The reviewer is not one person.** Roofus is meant for any business, so
the page says "the reviewer" and "you", never a name. Who reviewed is a
setting, `reviewer` in `config/find.json`, which holds "Simon" here.
Without it the record says "the reviewer".

## Consequences

- What Simon notices while reviewing is kept, with the day and the site,
  instead of being lost.
- An email the reviewer types can be used to contact the business
  straight away, if it is a company rather than a sole trader or
  partnership. It rests on the reviewer's
  word that the address is public. Its privacy line says where it came
  from, so a business can see how it was found.
- Notes wait on their records until step B is built. Until then a note
  is kept and shown. It changes nothing else.
- The facts saved in step B could later make a full written report for
  the business, built from the same facts the email or letter uses.

Simon has not accepted this yet.
