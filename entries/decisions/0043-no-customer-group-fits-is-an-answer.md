---
title: "No customer group fits" is an answer
date: 2026-11-22
status: proposed
tags: [agents, leads, sales]
summary: When Claude finds that a business fits none of my customer groups, my leads agent now keeps that as the answer instead of treating it as an error, so the business isn't sent to Claude again every run and the daily limit on Claude's checks counts every one.
draft: false
---

## In plain English

My leads agent sorts each business it finds into one of a few customer
groups, such as food and drink makers or engineering firms, so it can
pick the right letter. Claude does the sorting. It is told never to
force a fit. Sometimes a business really fits none of them. Until now
my agent treated that honest answer as an error. It kept nothing, so the
same business went back to Claude on every run. Those checks never
counted towards the day's limit. Now "no group fits" is kept as the
answer.

## Context

Enrich, the step that sorts businesses (decision 0030), first checks
each record for free: is it trading, does it have a website and a
published email. Only then does it ask Claude to choose a customer
group from the active ones in my settings. Claude may make up to 100
of these checks a day.

Simon reported a record that kept failing and asked what Companies House
held for it. A made-up stand-in for it is "Testville Travel Pillows
Ltd". Companies House lists it under wholesale of household goods, so my
import took it in with the manufacturing and engineering firms. Its
website sells one travel pillow to the public. Claude rightly said no
group fits. My agent called that an error and kept nothing.

That had two costs. The record went to Claude again on every run, a
paid check each time, with the same answer. The daily limit only
counted the businesses that came back with a group, so a check that
ended any other way was forgotten by the next run. On a busy day more
than 100 checks could be made.

## Options

1. **Leave it.** Nothing to build, but the same records are checked
   again and again and the limit isn't true.
2. **Stop importing that trade.** It would stop this one record, but a
   business can fit no group for many reasons, so others would follow.
3. **Keep "no group fits" as the answer** and count every check Claude
   makes towards the limit.

## Decision

I proposed option 3 in issue #330 and one of my agents built it.

**Claude may say no group fits.** Its instructions now say that leaving
the group blank is the right answer when none fits. The ban on making
up a fit stays. A blank group, or one that isn't among the active
groups, is kept as the record's profile, marked not eligible, with the
reason "no matching group" and the list of groups it was checked
against.

**It is checked again only when something changes.** A record kept
this way goes back to Claude when its website changes, as before, or
when a customer group is added or taken away. Nothing else sends it
back, so a new group can pick it up without the old ones being asked
the same question.

**Other bad answers are still errors.** An offer that doesn't exist, an
answer that can't be read or a failed call is still an error. Nothing is
kept and the record is tried again on the next run.

**Every check counts.** My agent now notes each check just before it
asks Claude, whatever the answer turns out to be. The day's limit counts
those notes. To start the count, each business already sorted into a
group counts as one check on the day it was sorted.

**Plainer words.** The Queue page said "Classification cap" and
"Classification calls left today". It now says "Businesses Claude may
check" and "Claude checks left today". A record no group fits shows as
"doesn't match any customer group".

## Consequences

- A business no group fits costs one check, not one every run.
- The daily limit is true: a second run on the same day sees fewer
  checks left after any check, including one that failed.
- A failed check now uses up one of the day's checks, so a day with
  many failures may stop sooner than before.
- Records that fit a group are sorted exactly as before.
- The records file gains a small table of the checks made (layout
  version 16).
- A business like the travel pillow seller still waits for a group
  that fits it. Issue #331 looks at adding one for online shops.

Simon has not accepted this yet.
