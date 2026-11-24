---
title: A monthly run imports brand new companies and drafts their letters
date: 2026-11-22
status: proposed
tags: [agents, leads, sales]
summary: Each month, once the new Companies House file is out, my leads agent imports a batch of brand new companies, drafts their Starting out letters and checks for websites, without anyone starting each step. It keeps looking for a website and email for the companies it has written to. It drafts only. Simon still approves and sends every letter.
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
5. check the websites of the records that are due
6. read the emails on a business's own website (the harvest), for the
   reviewer to accept one by one.

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

**What it does.** It runs the six steps above, in that order, through
the same functions the web page uses, so nothing about what each step
decides changes. The import takes 20 companies a month to start, the
`monthly_batch` setting, which also caps how many letters Claude is
asked to check. The run keeps a note in the records of each file it has
finished with, so a second run the same month only checks websites
and looks for emails. Before this month's file is out, it says so and
does only those.

**Looking again after a letter.** Simon's words, on 22 November 2026:
"we can monthly run a cron job that tries to find a website - email
address - if it does then we drop them on the email list". Most brand
new companies have no website when they are imported, so their first
letter goes by post. Until now the website check stopped looking at a
record once it was drafted. Now it also looks at the companies drafted
or written to by letter that still have no website and no usable email,
on the same timetable as any other record. A website it saves changes
nothing else about the record. Then the run reads the websites those
companies hold for their emails and phone numbers, as the harvest
already does for a drafted record. Each email waits for the reviewer's
yes, on the Find page or in the terminal. The run never says yes
itself.

**Moving to email.** A saved email alone didn't move a company to
email: the record's stored action still said "not by email now", so
its next follow-up stayed a letter. I proposed changing only that one
setting, `email_now`, when the reviewer says yes to an email for a
company already written to. It applies only to a limited company or
other body corporate whose action already allows email and post. Simon
chose that option. Nothing else on the record changes: not its status,
its drafts, its first contact or who may be emailed. Its next monthly
follow-up is then an email. A sole trader or a partnership keeps its
action, so its follow-up stays a letter.

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
drafted, the websites found, the emails found and what is waiting. The
overview page shows the last run's summary. A Mac notification shows
only when the run has something new for Simon, such as "18 Starting out
letters to approve" or "3 emails found, waiting for your yes", or when a
step failed. A morning with nothing new stays quiet. What the
run prints goes to a second log file, which starts again once it passes
1 MB, keeping one older copy, so it never fills the disk.

## Consequences

- Each month's brand new companies get their letter drafted within a day
  or so of the file appearing, without anyone starting it.
- A Mac that is off for days only delays the run. The month's work is
  still done once.
- The run drafts before it checks websites, so a company whose letter
  it has just drafted is checked straight away and again every few
  months after its letter goes, until a website turns up (issue #325).
- A company written to by post can move to email once its website shows
  an email and the reviewer says yes. Until then, its follow-ups stay
  letters.
- Simon has new things to look at each month: the letters waiting on
  the review screen and the emails waiting for a yes.

Simon has not accepted this yet.

Update, 24 November 2026: since issue #359 (decision 0050), the website
check in step 5 also saves a likely site, one with the company's name
that gives its town or a postcode in the area, as it saves one that
shows the company number. In step 6, the emails and phone numbers of a
website the website finder saved itself are saved straight away, with
their pages, instead of waiting for the reviewer's yes. The free mail
check still runs on each new email. For a company written to by letter
that may be emailed, its next follow-up becomes an email, as a yes would
make it. Emails from any other website still wait for the reviewer. The
summary now says how many emails were saved this way and how many
websites were saved as likely matches.
