---
title: Keep the research for two years
date: 2026-11-20
status: accepted
tags: [agents, business, sales, privacy]
summary: My leads agent was to delete a business's record six months after Simon last wrote to it. Simon paid for that research, so I propose keeping it for two years after the last contact. Only Simon can delete old records, by answering yes to a list. Nothing is deleted without that answer.
draft: false
---

## In plain English

For every business my leads agent finds, it keeps a record: the
company's details, its website, the checks it made, a score and every
letter, email and call. Decisions 0015 and 0016 said a business that
never replied is deleted six months after the last letter. Simon paid
for that research and wants to keep it, so I propose two years after
the last contact instead. Old records are still deleted, but only when
Simon asks: my agent lists exactly what would go and deletes it only
when Simon types "y".

## Context

Each record holds what Simon's money bought: searches on Google, checks
on Companies House, readings of the business's own website, a health
check of the site, a score and the history of every contact. Most of it
is about the business, not a person. Deleting it after six months would
mean paying again for the same work if Simon wanted to write to the
business a second time.

Two things had to stay true:

- **A limit people can rely on.** The privacy notice on method7.co.uk
  promises one. Today it says: "If I've written to your business and you
  haven't replied, I delete your details six months after my letter."
  That page will change, but it must still promise a limit and the
  agent must keep it.
- **Nothing paid for twice.** On 15 November 2026 Simon asked that a
  clean-up never makes the agent pay again for the same Google searches
  or Companies House imports.

The clean-up (the code calls it the purge: deleting old records for
good) had been written, but nothing ran it. It counted from the first contact,
not the last. It also deleted without asking anyone.

## Options

1. **Keep six months.** The promise stays as it is, but most of the
   research is thrown away before it can be used again.
2. **Keep everything for ever.** Nothing is lost, but there is no limit
   to promise and the records only grow.
3. **Two years after the last contact, deleted only when Simon says.**
   Long enough to get back in touch more than once. Short enough to
   promise a limit.

## Decision

I propose option 3.

- **Two years from the last contact.** The last contact is the latest
  letter, email, phone call, outreach email confirmed sent or "not now"
  reply. A business never contacted is kept for two years after it was
  added. A business that replied, or that asked not to be contacted
  again, is kept, as before.
- **Simon decides every delete, in person.** One command lists every
  record, backup and draft that would go and why. Then it asks Simon
  to type "y". Any other answer deletes nothing. There is no way to
  skip the question, so no agent, script or timer can delete anything
  by itself. Nothing else in my agent runs it. My agents never run it
  on the real records.
- **Nothing personal is left behind.** A deleted business leaves no
  name, address, email, phone number or person's name in any part of
  the records. Two things stay, with nothing else beside them: Google's
  code for the place (marked as seen) and the company number (marked
  as imported). So the business is never found, paid for or imported
  again as new.
- **Backups and drafts too.** A backup holds every record, so a backup
  more than two years old is deleted too. So is every draft letter,
  email, pack and call sheet that names a business being deleted. A
  draft written for another business is never deleted, even when it
  mentions one that goes.
- **A "not now" business** keeps its two years from the "not now"
  reply, so Simon can now pick a day to get back in touch up to two
  years ahead, not six months.

### The businesses already written to

**The 32 businesses already written to were told six months.** The
letters and emails sent so far point to the privacy notice. The notice
said six months when they went. I don't think the code should
decide this, so it treats them like every other business. Simon could:

1. keep them for two years like the rest, once the privacy notice says
   so, on the view that the notice in force now is the one that counts
2. delete each of them six months after its letter, as they were told.
   That needs a way to delete one record early, which doesn't exist yet
3. tell them about the change when Simon next writes to them.

Simon chose the third, on 21 November 2026: each of them is told
about the change in the next letter or email Simon sends it. Like
every other business, each is kept for two years after the last
contact, then listed for Simon to delete.

## Consequences

- The research stays useful for two years. A business that said "not
  now" can be contacted again without paying to find and check it again.
- The privacy notice on method7.co.uk has to change from six months to
  two years. That is a separate piece of work on the Method7 site. It
  should go live before any record is kept past its six months.
- Nothing is deleted until Simon runs the command. If Simon never runs
  it, records stay longer than two years, so it needs a reminder. A
  timer that runs it by itself was ruled out on purpose.
- A backup made shortly before a business's two years ended still holds
  it, until that backup is two years old itself. So a business can
  survive in a backup for up to two more years. Simon may want backups
  kept for less time than records, or cleaned when records are deleted.
- A draft pack that names a deleted business is deleted whole, even
  where it names other businesses too. By then the pack is at least two
  years old.
- A business that turns up again under a different Google place code
  is new to my agent and can be added again. Keeping its name to catch
  that would break the promise above.
- Decisions 0024 and 0031 also mention six months. This change doesn't
  mark them as updated: Simon can say whether it should.

Simon accepted this on 21 November 2026.
