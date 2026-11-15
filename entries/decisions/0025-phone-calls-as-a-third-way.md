---
title: Simon can phone a business whose own website gives a phone number
date: 2026-11-15
status: accepted
tags: [agents, business, sales, privacy]
summary: Some small trades give a phone number on their website and no postal address, so no letter can reach them. Simon decided to add a phone call as a third way to reach a business, beside the letter and the email. My leads agent makes a call sheet and keeps what each call led to. The numbers come only from the business's own website. Before a sales call, each number must be checked against the TPS and Corporate TPS. My agent reminds Simon but doesn't check. No lawyer has looked at this.
draft: false
---

## In plain English

My leads agent writes to local businesses for Simon to send: an email to
some, a letter to most. Some small trades can't get either. Their website
gives a phone number but no address, so there is nowhere to post a
letter. Simon decided on 15 November 2026 that they can get a phone call
instead, a short chat.

My agent doesn't make the call. It makes a call sheet for Simon to
print: the business, its phone numbers, the page of its own website each
number came from and a few lines to start the chat. Simon makes the call,
then tells my agent how it went with one command. The record keeps each
call with its date.

Every number on the sheet carries the same reminder: "TPS and Corporate
TPS: check before calling." Those are the registers of people and of
companies that have opted out of sales calls made by a person. My agent
doesn't check them. Simon does, before each call.

## Context

Simon gave two examples on 15 November 2026. One was a thatcher whose
only website is a free Google Sites page with two phone numbers and no
address. Another was a flat roofer whose contact page gives a mobile and
a landline. A business with no postal address and no email my rules can
use goes on the admin list, the list of cases my rules can't settle. Yet
both publish a phone number for customers to ring.

My agent already read phone numbers from a business's own website, with
the page each came from. It marked a number with too few or too many
digits "check this number". Until now nothing used them. Under decision
0015, Simon chose to ignore phone numbers that look wrong and my rules
counted a phone number for nothing.

## Options

1. **Leave them on the admin list.** Nothing reaches them.
2. **Find an address somewhere else.** Ruled out: Google's terms forbid
   keeping its addresses (decision 0018) and guessing is never allowed
   (decision 0015).
3. **Phone them, from the number on their own website.** The number is
   the one the business chose to publish for customers.

## Decision

Simon chose option 3 and asked for it as an option Simon controls
(issue #111). One of my agents built it.

**Who can get a call.** A business that is trading, shows no money
trouble, isn't marked do not contact and has a phone number from its own
website. A closed business, one in money trouble or one marked do not
contact never gets a call.

- When there is no reliable way to post or email it, the action is
  "call" instead of the admin list.
- When a letter or email can go, it still goes. The record is also marked
  as one that can be called, so Simon can choose.
- Simon can choose a call for any record that can be called and hasn't
  been drafted or sent yet, with `prepare --call` and the record's
  number.

**Where the numbers come from.** Only the business's own website, with
the page each number came from. A phone number Google lists for a
business is never used or kept (decision 0018). When the site gives
numbers on more than one page, the sheet shows every page that gave
numbers, as my agent kept the pages and not which number was on which.

**The call sheet.** One command shows the sheet and saves it as a file to
print, outside my repository:

```sh
LEADS_DB=~/leads/leads.db LEADS_OUTPUT=~/leads/drafts python3 -m agents.leads.calls
```

For each business it gives the name, town, trade, website, each number
with its page and any "check this number" mark, the reminder about the
TPS and Corporate TPS, the last call and a few lines for the chat. The
lines come from a fixed template for the business's group: the Founding
Ten offer for trades, Method7's software work for the rest
(decision 0014). They begin with who is calling.

**Logging a call.** One command, with the record's number and how it
went:

```sh
LEADS_DB=~/leads/leads.db python3 -m agents.leads.calls --log 3 --outcome no_answer
```

The outcome is one of four:

- **no_answer**: the business stays on the sheet.
- **call_back**, with `--on` and the day: the business leaves the sheet
  and comes back on that day.
- **interested**: the record moves on, as it does when a business
  replies to a letter.
- **not_interested**: the record is marked do not contact, which can't
  be undone. My agents never draft anything for it or put it on the call
  sheet again.

**What is kept.** For each call: the day, the outcome, the day to call
back if there is one and any few words Simon adds with `--note`. Each
call also goes in the record's history with its day. Nothing is
recorded from the call itself.

**The TPS and Corporate TPS.** The Information Commissioner's Office
(ICO) says on its
[telephone marketing guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/telephone-marketing/):

> In general, you must not make marketing calls to any number listed on
> the Telephone Preference Service (TPS) or Corporate TPS (CTPS), unless
> that person has specifically consented to your calls.

> The TPS is the Telephone Preference Service. It is a central register
> of individuals who have opted out of receiving live marketing calls.

> The CTPS is the Corporate TPS. It works in the same way as the TPS,
> but for companies and other corporate bodies (limited liability
> partnerships, Scottish partnerships and government bodies).

On calls to businesses it says:

> For business-to-business (B2B) calls, you will therefore need to
> screen against both the TPS and the CTPS registers, as well as your
> own ‘do not call’ list.

The same page says "You must always say who is calling" and that a
caller must "allow your number (or an alternative contact number) to be
displayed to the person receiving the call". It also says: "Due to
changes made by the Data (Use and Access) Act, this guidance is under
review and may be subject to change."

What that means here: before Simon makes one of these calls, Simon looks
up each number on both registers and doesn't call a number that is on
either. The page adds that "some businesses (sole traders and some
partnerships) register with the TPS". My agent doesn't look the numbers up. It reminds Simon on every number,
but the reminder never stops the sheet or the logging. Checking the
numbers automatically could be a later issue, if Simon wants it. The
"do not call" list is the records marked do not contact, which is where
"not interested" puts a business.

I checked these words against the ICO's page on 15 November 2026. As the
page says it may change, Simon reads it again before the first call.

**No lawyer has looked at this.** I haven't worked out everything the
law asks of Method7 when it makes sales calls. This decision doesn't
settle it. Decision 0013 still applies too: before the first call,
Method7 needs a short written case for why contacting these businesses
is legitimate, a privacy notice that says where their details came from
and a list of anyone who asks not to be contacted again.

## Consequences

- A trade with a phone number and no address can now be reached, by
  Simon, by phone.
- A business that can get a letter can be called as well, if Simon
  chooses.
- My agent never dials, never sends anything and never checks the TPS.
  Simon calls and Simon checks.
- A call takes more of Simon's time than a letter.
- Simon decided this on 15 November 2026.
