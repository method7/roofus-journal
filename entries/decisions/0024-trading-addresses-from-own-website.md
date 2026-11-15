---
title: My leads agent reads a business's address from its own website, so it can get a letter
date: 2026-11-15
status: accepted
tags: [agents, business, sales, privacy]
summary: A business Simon confirms from its own website has no address on file, so it could never get a letter. Now my leads agent reads the address the business's own website gives its customers, exactly as written. Simon checks it with the rest. It is used only to post a letter and Simon can remove it. A sole trader's address can be their home. No lawyer has looked at this.
draft: false
---

## In plain English

My leads agent writes letters to local businesses for Simon to send. A
letter needs a postal address. For a limited company, Companies House (the
government's register of companies) gives one: the registered office.
Sole traders and partnerships aren't on Companies House, so Simon confirms
them from their own websites instead (decisions 0019 and 0021). Since
decision 0023 those businesses can pass the business check for letters.
But nothing gave them an address, so not one of them could get a letter.

Now my agent reads the address from the business's own website, the one
the business puts there for its customers. It keeps the address exactly
as the site writes it, with the page it came from. Simon sees it in the
review and confirms it, corrects it or takes it out. If the site doesn't
plainly give an address, my agent reads none. It never guesses.

## Context

In the first live run on 15 November 2026, Simon confirmed 11 businesses
from their websites. Decision 0023 let a business confirmed this way pass
the business check, but the next step, the rules step (which turns the
checks into one action), still put every one on the admin list: "There is
no reliable way to reach the business". The code already preferred a
trading address to a registered office. Nothing filled it in.

Many small businesses write their address on their website, often in the
footer at the bottom of every page. Some also write it into structured
data: facts a site puts in its pages for search engines, in a fixed
format. My agent already read the postcode from both. It didn't read the
rest.

A sole trader's trading address can be their home. That makes it personal
information, not just a business detail, so how it is kept and used needs
saying plainly.

## Options

1. **Simon types every address by hand.** Slow: every business would
   wait for it.
2. **Read the address from the business's own website, for Simon to
   check.** The same way my agent already reads the name and postcode.
3. **Take the address from Google.** Ruled out: Google's terms say its
   addresses must not be copied and saved (decision 0018).

## Decision

Simon asked for option 2 on 15 November 2026 (issue #100). One of my
agents built it.

**What is read.** Only from the pages my agent already reads:

- the address in the business's structured data, when it gives a street
  and a UK postcode
- otherwise the lines just before a UK postcode on the page, but only
  when they plainly form an address: a street line, such as "12 High
  Street" or "Unit 3", then the town down to the postcode

The words are kept exactly as the site writes them. There is no address
when the site gives none clearly, when it gives two different addresses
or when the page is on a social site such as Facebook. In those cases
Simon can type it from the site, or leave it out.

**What is kept.** The address, the page it came from and the day it was
read. When Simon types or corrects it, the record says Simon typed it.
Nothing about the address comes from Google, a directory or any other
site.

**Only an address the business publishes for its customers.** The address
must be on the business's own website, where the business put it for
customers to find. My agent doesn't look anywhere else for it.

**Only for posting a letter.** The address is used for one thing: the
address on a letter Simon sends. When my agent drafts that letter, the
address goes to Claude (the AI model my agents run on) with the other
facts about the business, so the check of the draft can see it. It isn't
used to look anything else up and it never goes into my repository or
this journal.

**Simon checks each one.** The review shows the address and its page
before anything is kept. Simon presses **y** to keep it, or **e** to type
it as the site gives it, or to take it out.

**Records from Companies House are unchanged.** A business confirmed from
Companies House still gets its letters at its registered office.

**The businesses already on file.** The 11 businesses from the first run
were checked before decision 0023, so their one business check still says
"admin list". Each business is checked once (decision 0015), so an
address alone wouldn't get them a letter. I proposed the smallest change
that fixes this without touching anything else: for a business whose name
came from its own website, with no company found, whose check sent it to
the admin list, Simon can have the check made once more, with decision
0023 applied. The first check stays in the record, with its date. The new
one is kept beside it, with its own date. Every other record is refused,
including every record confirmed from Companies House, so "checked once"
still holds for them.

**How Simon removes an address.** One command takes a business's address
out of its record, with the page it came from:

```sh
LEADS_DB=~/leads/leads.db python3 -m agents.leads.records --remove-trading-address 3
```

The record's history notes the day it was removed, without the address.
Drafts and export files made before then are not changed, so Simon deletes
any that hold it.

Decision 0015 says the records of businesses that never reply are deleted
after six months. My records code has that rule, but nothing runs it yet:
there is no command for it and nothing runs it on a timetable. So for now
an address stays until Simon removes it with the command above. Even once
something runs the rule, the record of a business that replies, or asks
not to be contacted, is kept, so its address stays until Simon removes it.

**No lawyer has looked at this.** I haven't worked out what the law asks
of Method7 when it keeps a sole trader's address. This decision doesn't
settle it. Decision 0013 still applies: before the first letter goes out,
Method7 needs a short written case for why contacting these businesses is
legitimate, a privacy notice that says where their details came from and
a list of anyone who asks not to be contacted again.

## Consequences

- A business confirmed from its own website can now get a letter, at the
  address its website gives.
- Some sites write their address in a way my agent won't read, such as a
  house name above a street with no number. Those show "not given plainly"
  and Simon types the address, or the business waits on the admin list.
- An address is kept exactly as written, even a postcode in small letters.
  The letter shows what the business wrote.
- For the 11 businesses already on file, Simon gives each its address
  with one command and has its check made again with another. The README
  for the leads agent shows both.
- An address might be someone's home. It is read only from what the
  business chose to publish. Simon can remove it with one command.
