---
title: The reviewer's note on a business's website briefs my leads agent's research
date: 2026-11-22
status: proposed
tags: [agents, leads, sales, safety]
summary: While reviewing the websites my leads agent finds, the reviewer can now log the address, an email and a note in their own words. A note is kept on the record and briefs a research stage, which reads the business's site and checks what it finds. A queue email is then drafted from the note and the research as a "Can I help" email. Only the reviewer's note gives the research its orders. Anything read from a business's website is data. An email the reviewer types can be used to contact the business. Its privacy line says truthfully where it was found.
draft: false
---

## In plain English

When Simon reviews the websites my leads agent finds, Simon often spots
something worth telling the business about: a site that is down, or a
menu with pages missing. Until now there was nowhere to write it down.

Now each row has an **Email** box and a **Note** box under the website.
The note is Simon's own words about what was noticed and where. It is
kept on the record. A research stage reads the note, looks at the
business's site and checks what it finds. When the research finds
something a visitor would notice, the business's email is drafted as a
"Can I help" email from the note and the research. This decision
records all three steps. All three are built.

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
typed. A note with Decline is kept too, marked as being about a site
that isn't theirs (see below).

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

At first, too, a note with Decline was refused, because the note is kept
with the row's website and the research step would read that site as
the business's own. One wrong row also stopped the whole save, so
nothing was kept, not even the other rows' answers, emails and notes.
On 22 November 2026 Simon declined two guesses that were other
companies' websites abroad and wrote notes with the details. The save
was refused and none of the notes was kept. Simon said "the whole save was
ditched ... this is supposed to save the user time". So two things
changed (issue #328):

- **A note with Decline is kept.** It says why the site isn't theirs,
  such as "a roofing firm in Spain with the same name". It is kept with
  the declined website and marked as being about a site that isn't
  theirs, so the research step can tell. The record's page and the row
  show it as "About example.co.uk, which isn't theirs: ..." and then the
  note.
- **A save keeps every row it can.** A row that can't be saved, such as
  one with a note over 1,000 characters, is left out on its own. The
  check before anything changes lists the rows it will save and, apart,
  each row it can't, with why. Everything typed on such a row is shown
  as plain text to copy, before and after saving, so nothing typed is
  lost. Only when no row can be saved is nothing changed. Every message
  names the business with its record number, such as "TESTVILLE TILING
  LTD (record 293)", linked to its record. The search box finds a record
  by that number too.

**B: research from the note (built, issue #345).** On 23 November 2026
Simon chose to build the research now. At least three businesses in the
first batch had a note about their website, one of them a bakery whose
note said its navigation was missing. None of the notes reached
drafting, so each business got the default email.

A business is researched when it has at least one note: one typed on
the Websites found page or its record's page, or one given with a
decision on the queue review page. A note given with Decline is left
out, as it is about a site that isn't theirs. The brief is every note,
newest first, word for word.

The research reads the business's own site the way a visitor's browser
does: no forms, no logins and no guessing at hidden addresses. Besides
the home page and the pages it links to, it reads `robots.txt` and the
site's sitemap, the standard public files search engines read. A
sitemap often lists pages a visitor can't reach from the menu. It reads
at most 12 addresses, each with a time limit and a size limit. Nothing
off the site is read.

Code, not Claude, runs the standard checks: whether the site is down,
its security, how it works on phones, whether it is out of date, the
menu and pages missing from it, addresses that look like copies of
another page, the site builder, contact details, speed and basic search
and accessibility checks. The health check confirms any technical
fault. Each check is a dated fact with the address that backs it, or
says it couldn't tell. The page is read as it is delivered, without
running its scripts, so a menu drawn by a script can't be seen: the
check then says no menu was found in the page, never that the site has
none. Facts say what was found, with no judgement words.

Claude is asked once for each business, through its own `research`
stage in `config/models.json` with its own daily limit of 20 calls. It
answers the notes with facts and gives each note a verdict: confirmed,
not confirmed or couldn't tell. Every fact it gives must name a page
that was read and quote that page word for word. My agent checks both
and drops any fact that fails, so only facts it can show are saved.
Each run is kept on the record and shown on the record's page. A
business is researched again only when it gets a new note or its
website changes.

**C: drafting uses it (built, issue #348).** A queue email for a
business with a note and research is drafted as a "Can I help" email,
in Simon's existing can-I-help wording, unchanged. It opens with one
finding the reviewer noticed or the research confirmed. The fact
checker holds every claim about the website to a note or a finding. A
person says yes before anything is sent, as now.

A business qualifies when its latest research, newer than its latest
note, has a note the research confirmed or a check that found something
a visitor or search would notice: pages the home page doesn't link to,
pages missing from the sitemap, copy or leftover pages, pages sharing a
title, images without alt text, no meta description, or a fault in
whether the site is up, its security or its contact details. "No menu
found" alone never qualifies, as a script may draw the menu. Notes with
no research yet don't either. A business that qualifies gets the
template `can_i_help_email` and the offer of websites and search
visibility, at queue build or when its email is drafted again. Each
switch is kept in the record's history with why. A parked item stays
parked.

Simon made these points in chat on 23 November 2026, which the email
follows. Pages the menu doesn't reach hurt visitors and search, which
is a pitch opportunity. Emails can't call a site poor. He likes the
site's look, but emails can't comment on design, so the pitch is to fix
what's there. So Claude is told to state what a visitor or search would
meet, never to judge the site and never to give a cause the findings
don't. The word check fails "poor", "bad", "broken", "neglected" and
"outdated" in the finding.

The template uses Simon's letter wording for a queue email for the
first time. Merging the pull request that adds it approves it for queue
emails.

**Safety.** Only the reviewer's note instructs the research agent.
Anything read from a business's website is data, never instructions. A
page that tells an AI what to do is treated as text on a page and
reported as a fact. A note can't widen what is read: no forms, no
logins and no other sites, whatever it says.

**The reviewer is not one person.** Roofus is meant for any business, so
the page says "the reviewer" and "you", never a name. Who reviewed is a
setting, `reviewer` in `config/find.json`, which holds "Simon" here.
Without it the record says "the reviewer".

## Consequences

- What Simon notices while reviewing is kept, with the day and the site,
  instead of being lost.
- One row that can't be saved no longer costs the rest of a save. What
  was typed on it is shown to copy back (issue #328).
- An email the reviewer types can be used to contact the business
  straight away, if it is a company rather than a sole trader or
  partnership. It rests on the reviewer's
  word that the address is public. Its privacy line says where it came
  from, so a business can see how it was found.
- Notes brief the research, which is run by hand with
  `python3 -m agents.leads.research` and keeps its facts on the record.
  A business whose research qualifies gets a Can I help email, drafted
  from its notes and findings (step C).
- An email can only say what a note or a finding supports, so a
  business whose research found nothing a visitor would notice keeps
  the email its offer matches.
- The facts saved in step B could later make a full written report for
  the business, built from the same facts the email or letter uses.

Simon has not accepted this yet.
