---
title: My leads agent reads the company number on a business's website and proposes a same-name company in another town
date: 2026-11-15
status: accepted
tags: [agents, business, sales, privacy]
summary: Limited companies must show their company number on their websites, so my leads agent now reads it and looks it up on Companies House. A company with exactly the same name but registered in another town is no longer lost. It becomes a proposal Simon confirms with one key.
draft: false
---

## In plain English

My leads agent keeps a business on file only once Companies House (the
government's register of companies) or the business's own website
confirms who it is (decision 0018). Until now it looked a business up on
Companies House by its name and town. That missed two kinds of company
it could have found.

First, many company websites show their company number, the number
Companies House gives each company. The law says a limited company must
show it on its website. Now my agent reads that number and looks the
company up by it. If the company is active and has the business's name,
it is added straight from Companies House, with no check by Simon.

Second, a company's registered office (the address it gives Companies
House for official post) is often its accountant's, in another town. My
agent needed the same name and the same town, so it set these companies
aside as "similar". Now, when Companies House has exactly one company
with the same name registered elsewhere, my agent proposes it. Simon
confirms or rejects it with one key, as with the proposals read from a
business's own website (decision 0021).

## Context

The first live run of the confirm step on 15 November 2026 showed four
things:

- Simon reviewed two proposals read from business websites that showed a
  company number. My agent didn't look for one, so it couldn't use it.
- Several companies had exactly the business's name but a registered
  office in another town. My agent treated them as near misses: NEW LOOK
  ROOFING LIMITED, H2O ROOFING AND BUILDING LTD, GIBBS ROOFING SOUTHERN
  LTD, A WELLS & SONS LTD and MPS SERVICES GROUP LIMITED. Companies House
  sends 20 companies a page. The same-name company was often last on the
  list, so it could have fallen off the end.
- "S.G.ROOF CLEANING AND MOSS REMOVAL LTD" and "SG Roof Cleaning and Moss
  Removal" didn't count as the same name, because of the dots.
- The reason shown was always "Companies House has only companies with a
  similar name or in another town", even when one had exactly the same
  name. Simon couldn't tell the two apart.

What the law says. The Company, Limited Liability Partnership and
Business (Names and Trading Disclosures) Regulations 2015 cover what a
company must show. Regulation 25 says "Every company shall disclose the
particulars set out in paragraph (2) on" its business letters, its order
forms "and (c) its websites". Paragraph (2) lists them, including "the
company's registered number" and "the address of the company's
registered office"
([regulation 25 on legislation.gov.uk](https://www.legislation.gov.uk/uksi/2015/17/regulation/25)).
Not every site follows it, but many put the number in the footer, such
as "Company No. 12345678" or "Registered in England and Wales, number
12345678".

## Options

1. **Change nothing.** Simon keeps reviewing businesses that Companies
   House could have confirmed.
2. **Read the number and propose same-name companies.** My agent reads a
   company number from the website pages it already reads and looks it
   up. A same-name company registered elsewhere becomes a proposal for
   Simon.
3. **Accept a same-name company without asking.** Faster, but two
   businesses can share a name in different towns. A wrong match would
   put another business's details in a record.

## Decision

Simon asked for option 2 on 15 November 2026 (issue #86). One of my
agents built it.

**Reading the number.** My agent only takes a number where the page says
it is the company's number or registration number, such as "Company No."
or "Registered in England and Wales, number". It must be 8 characters:
8 digits, or 2 letters then 6 digits, such as SC123456 for a Scottish
company. A phone number, a VAT number (a different number, given by HM
Revenue & Customs), a postcode or an order number is never taken. If the pages
give two different numbers, such as a group's and its own, my agent
takes neither, because it can't tell which is the business's.

**Looking it up.** My agent looks the number up on Companies House. If
the company is active and its name is the same as the website's name or
the name Google lists the business under, the record is added from
Companies House: its name, town, legal form and registered office. The
website page is recorded as the source of the number. The business check
then runs on that company. Google's name is only compared in memory.
It is never kept (decision 0018). If the company is closed, has a
different name or doesn't exist, nothing comes from Companies House. My
agent proposes what the website says instead, as before, with the reason
and what Companies House has for that number, so Simon can see why.

**The same name in another town.** When Companies House has exactly one
company with the same name, my agent proposes it from Companies House.
The proposal shows the company's name, number, registered office and
status, from its Companies House page. If the business's own website was
read, its address is shown too. A closed company, such as a dissolved
one, isn't counted, because it can't be the business trading now, but
Simon still sees it in the list. Two or more open companies with the
same name, each registered elsewhere, give no proposal from Companies
House. The reason says so and my agent goes on to read the website as
before.

To make sure a same-name company isn't missed, my agent now reads up to
three pages of Companies House's search, but only while it hasn't found
a company with exactly that name and Companies House has more to send.

**Simon's check.** In the review, a proposal from Companies House says
so at the top: "A company with the same name, registered in another
town." Simon presses **y** to confirm it, **n** to reject it, **s** to
skip it or **q** to stop. Confirming adds the record from Companies
House alone and runs the business check on that company. The **e** key,
which lets Simon correct a name read from a website, doesn't work on
these. The name is Companies House's. A name Simon typed must never go
into the record as if Companies House gave it. Simon can still set
the name the business uses on its website afterwards, as decision 0019
describes.

**The same name.** Names count as the same when they differ only in
capitals, punctuation, "the" at the start or a suffix such as "Ltd". Now
"&" and "and" are the same and initials are joined up. So "S.G.ROOF"
and "SG Roof" match, as do "R. T. ROOFING" and "R T Roofing".

**Clearer reasons.** "Companies House has a company with the same name,
registered in another town" is now its own reason, apart from similar
names. So is having more than one such company.

## Consequences

- More businesses are confirmed without Simon. Fewer wait in the review.
- A record confirmed from a same-name company takes its town from the
  registered office. That may be the accountant's town, not where the
  business works.
- A business whose company has a different name from the one it trades
  under, such as "Smith Roofing" run by "J SMITH CONTRACTORS LTD", is
  still not confirmed from its number. My agent proposes what the website
  says, with the reason. Simon decides.
- A number written with 7 digits, or with spaces in it, isn't read. Those
  businesses go through the review as before.
- Simon's records file needs no change. Proposals made before keep
  working.
- Whether a business confirmed this way may be written to is still for
  the business check to decide. Issue #87 looks at that next.
- No lawyer has looked at reading business websites this way.
