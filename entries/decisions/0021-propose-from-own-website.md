---
title: My leads agent reads a business's own website and Simon confirms it with one key
date: 2026-11-15
status: accepted
updatedBy: ["0022", "0023", "0024"]
tags: [agents, business, sales, privacy]
summary: Typing each business's name and town by hand was too slow. Now my leads agent reads the business's own website and saves what it says as a proposal. Simon confirms or rejects each one with a single key. Nothing from Google is kept except its place ID.
draft: false
---

## In plain English

My leads agent keeps a business on file only once Companies House (the
government's register of companies) or the business's own website
confirms who it is (decision 0018). Companies House doesn't list sole
traders or partnerships. Some companies don't match on it either.
Until now Simon confirmed each business it couldn't by reading the
business's website and typing its name and town into a command (decision
0019). That was slow.

Now my agent reads the website itself and saves what the site says as a
proposal: a suggested record that nothing else uses yet. Simon goes
through the proposals one by one and presses one key for each: yes, no,
skip or stop. No typing.

## Context

Decision 0019 let Simon confirm a business by hand. It said what that
costs: reading the website, then typing what it says, one business at a
time. A typing mistake goes into the record. Every business Companies
House couldn't confirm waited for that, whatever kind of business it was.

Three things were already in place:

- Google's search gives the business's web address if it has one. My
  finding step didn't ask for it yet.
- My health check (the step that looks for faults on a business's website)
  already opens business websites, with a time limit on every request.
- Google's terms say a business's name and address from Google Maps must
  not be copied and saved. Only Google's place ID (its own code for a
  place) may be kept (decision 0018).

## Options

1. **Keep confirming by hand.** Simon reads every website and types what
   it says.
2. **Read the website and ask Simon to check it.** My agent reads the name,
   town and postcode from the business's own site and saves them as a
   proposal. Simon confirms or rejects each one with one key.

## Decision

Simon chose option 2 on 15 November 2026. One of my agents built it.

**What my agent asks Google for.** As well as the place ID, name and
address, my finding step now asks Google for the business's web address.
It uses that address only to open the business's site, in memory. It is
never saved.

**What my agent reads from the site.** For each business Companies House
doesn't confirm, my agent opens its home page and, if something is
missing, one contact or about page linked from it. Nothing else. From
those pages it reads:

- the business's name: first from the facts some sites write into their
  pages for search engines (called structured data), then from the name
  the site gives itself for sharing on social media, then from the page
  title
- its town and postcode: from that structured data, or the first UK
  postcode written on the page
- the address of each page it read from
- the email addresses and phone numbers the pages publish, each with the
  page it came from

It follows the same care as my health check: a time limit on each
request, a limit on how much of a page it reads and no links to other
sites. It doesn't ask Claude (the AI model my agents run on) to read
anything. It just reads the page.

**What is kept.** What the site says is saved as a proposal, not as a
record, so no later step can see it: not the business check, not the rules
step and not drafting. A proposal also notes why Companies House didn't
confirm the business and any similar companies Companies House found. A
site that gives no name, or a postcode outside the area my agent works in,
gives no proposal. That business is marked "not confirmed", with the
reason.

**The website address.** Simon chose to keep the website address as the
site gives it. That address is read from the site itself: the address a
page says is its own, or the one it ends up on after any redirects (when a
site sends the visitor on to another address). Anything after a "?" is
dropped, because a link from elsewhere can add it. Google's copy of the
address is used only to find the site and is never stored. A test checks
that a marker hidden in Google's copy turns up nowhere in the records.

**Simon's check.** Simon runs one command and sees each proposal in turn:
its name, town and postcode, the page it was read from, why Companies
House didn't confirm it and any similar companies Companies House found.
Google's name for the business is never shown. Then Simon presses:

- **y** to confirm it. The record is added from the proposal, with the
  business's own website as its source. The business check runs on it.
  If the business is already on file, the new place is linked to that
  record instead of adding a second one.
- **n** to reject it. The proposal is deleted.
- **s** to skip it for now.
- **q** to stop.

**Confirming by hand stays.** A business with no website, or a site my
agent can't read, is still confirmed by hand as decision 0019 describes.

## Consequences

- Simon checks a business with one key instead of reading its site and
  typing.
- The proposal is only as good as the site. A page title can say more than
  the name, such as "Home | Example Roofing". Simon sees exactly what was
  read and rejects anything wrong.
- A site that doesn't give a postcode can still be proposed. The check
  shows "not given on the site" and Simon decides.
- Asking Google for the web address costs more. Google prices each search
  by the fields asked for. Its
  [Text Search page](https://developers.google.com/maps/documentation/places/web-service/text-search)
  puts the web address in its dearer "Enterprise" tier. The name and
  address alone were in the "Pro" tier. Google's
  [pricing page](https://developers.google.com/maps/billing-and-pricing/pricing)
  gives the Enterprise tier a free allowance of 1,000 searches a month
  instead of 5,000. After that it costs $35 per 1,000 searches instead of
  $32. A run makes at most 40 searches, so about 25 full runs a month fit
  in the free allowance before anything is charged.
- Proposals wait until Simon reviews them. Nothing removes an old one yet.
- No lawyer has looked at reading business websites this way.

Update, 15 November 2026: the first live run showed what this decision
warned about. Three records were confirmed with page titles as names, one
of them cut off mid-word. Two "site under maintenance" pages were
proposed as businesses. So Simon asked for three changes (issue #88).
My agent now splits a page title at its separators, such as "|" or " - ".
It drops parts like "Home" or a web address and keeps the part that
matches the name Google lists the business under. It uses Google's name
only for that choice: the name kept is always the site's own words,
whole and with its own capitals. If it can't tell which part is the name,
it proposes nothing. A placeholder page ("under maintenance", "coming
soon") gives no proposal either, with its own reason. In the review,
Simon can now press **e** to type a corrected name and town before
confirming. The record notes that Simon typed them. A page on a
social site such as Facebook is still proposed, but the review now says
it isn't the business's own website. Whether to propose such pages at all
is still for Simon to decide.

Update, 15 November 2026: decision 0022 adds two things to this one. My
agent now reads the company number a business's website shows and looks
it up on Companies House. An active company with the business's name is
added from Companies House, with no proposal. When Companies House has
exactly one company with the business's name, registered in another
town, my agent proposes that company. Simon confirms or rejects it with
one key, but can't edit its name, because it is Companies House's.

Update, 15 November 2026: decision 0023 changes what happens after Simon
confirms a business. In the first live run, all 11 businesses Simon
confirmed from their websites went on the admin list, because Companies
House had companies with similar names. Simon decided that a **y** in
the review, or a confirmation by hand, now counts as confirming the
business trades. If Companies House doesn't match it, it passes the
business check for letters only, never email. A company with exactly
the same name that is closed or in trouble still sends it to Simon's
admin list. A letter also needs the business's address, which nothing
adds from its website yet.

Update, 15 November 2026: decision 0024 adds the business's address to
what my agent reads from its own website. It reads the address from the
site's structured data, or from the lines just before a postcode when they
plainly form an address. It keeps it exactly as written, with its page.
The review shows it. Simon keeps it with **y**, or types or removes it
with **e**. It is used only to post a letter. A sole trader's address can
be their home, so decision 0024 says what is kept and how Simon removes
it. No lawyer has looked at this either.
