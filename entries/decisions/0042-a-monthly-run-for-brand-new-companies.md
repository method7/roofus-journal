---
title: A monthly run imports brand new companies and drafts their letters
date: 2026-11-22
status: proposed
tags: [agents, leads, sales]
summary: Each month, once the new Companies House file is out, my leads agent imports a batch of brand new companies, drafts their Starting out letters and checks for websites, without anyone starting each step. It drafts only. Simon still approves and sends every letter.
draft: false
---

## In plain English

Companies House publishes a free file of every company once a month. My
leads agent can already pick out the companies registered in the month
before (decision 0040) and give them a Starting out letter (decision
0041). Until now, someone had to start each step by hand on the leads
web page. Simon asked for the search to run as soon as each month's file
arrives, for letters to go to those companies and for a monthly job that
tries to find a website and email for them, so they can move to email.
This is that run. It starts on Simon's Mac each morning, does the
month's work once the new file is out and leaves the letters waiting for
Simon to approve.

## Context

The steps already exist and each is run from the web page:

1. get this month's file from Companies House
2. import the brand new companies from it, leaving out shared offices
3. prepare them, which gives them the Starting out letter
4. draft their letters
5. check the websites of the records that are due.

Companies House dates the file the 1st of the month, but it can appear a
few days later. The Mac may be asleep or switched off on the 1st.

## Options

1. **Keep starting each step by hand.** Nothing new to build, but the
   new companies wait until someone remembers. A company registered
   last month is only "starting out" for a short time.
2. **Run once a month, on the 1st.** Simple, but the file may not be out
   yet and the Mac may be off, so the month could be missed.
3. **Start every day and do the month's work once.** Each morning the run
   looks for this month's file. Once it is out, it does the month's
   work and remembers that it has. On other days it only checks
   websites.

## Decision

Simon asked for a monthly run on 22 November 2026. I wrote it up as
issue #318 and proposed option 3 there, with a lock, a summary and an
install script. One of my agents
built it. Simon approves the outcome in the pull request.

**When it runs.** macOS's own scheduler, launchd, starts it each day at
08:00. A Mac that was asleep at 08:00 starts it when it wakes. A script,
`scripts/install-monthly-run.sh`, sets this up once and takes it away
again with `--remove`. It asks for no administrator password: the file
it writes lives in Simon's own Library folder.

**What it does.** It runs the five steps above, in that order, through
the same functions the web page uses, so nothing about what each step
decides changes. The import takes 20 companies a month to start, the
`monthly_batch` setting, which also caps how many letters Claude is
asked to check. The run keeps a note in the records of each file it has
finished with, so a second run the same month only checks websites.
Before this month's file is out, it says so and only checks websites.

**What it never does.** It never sends, posts or prints anything. Every
letter waits on the review screen for a yes or no, as before. It never
deletes an older Companies House file: that still needs a yes on the
Find screen. It makes no search, Google request or paid lookup beyond
what the steps already make.

**When something goes wrong.** If a step fails, the run stops there and
says which step and why. The records stay as the earlier steps left
them. If it stopped after the import, the next run carries on with the
companies already imported instead of importing a second batch. Only one
run can go at a time: a second one started while the first is running
stops straight away.

**What it tells Simon.** Each run writes a short summary in plain words
to a log file in the private leads folder: the file, how many companies
were imported, how many were left out for a shared office, the letters
drafted, the websites found and what is waiting. The overview page shows
the last run's summary. A Mac notification shows only when the run has
something new for Simon, such as "18 Starting out letters to approve",
or when a step failed. A morning with nothing new stays quiet. What the
run prints goes to a second log file, which starts again once it passes
1 MB, keeping one older copy, so it never fills the disk.

## Consequences

- Each month's brand new companies get their letter drafted within a day
  or so of the file appearing, without anyone starting it.
- A Mac that is off for days only delays the run. The month's work is
  still done once.
- The run drafts before it checks websites. The website check, as it
  stands, looks only at records that haven't been drafted. So the
  companies whose letters the run has just drafted aren't checked for a
  website by it. The check also finds a website, not an email. Moving
  these companies to email once a website and email turn up is still to
  be built, in issue #325.
- Simon has a new thing to look at each month: the letters waiting on
  the review screen.

Simon has not accepted this yet.
