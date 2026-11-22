---
title: My leads agent guesses an imported company's web address and checks the site for its company number
date: 2026-11-21
status: proposed
tags: [agents, business, sales, privacy]
summary: Companies House doesn't list websites, so the companies imported from it had none and none could reach the daily queue. My leads agent now guesses a few likely web addresses from each company's name and reads each site for the company's number, which every company's website must show. Simon saves what it finds. A record that gains a website is checked again.
draft: false
---

## In plain English

My leads agent can bring in companies from Companies House, the
government's register of companies (decision 0030). The register gives
each company's name, number and registered office, but not its website.
Without a website my agent can't check a business or find an email
address it publishes, so the company never reaches the daily list of 20
emails.

A company's website must show its company number. So my agent now guesses
a few likely web addresses from the company's name, such as
`exampleroofing.co.uk`. It reads any site it finds for that number. A
site that shows the number is the company's own. Simon looks at what it
found and chooses what to save. It costs nothing: no paid search is used.

## Context

On 21 November 2026 Simon imported about 100 companies from the
Companies House file and pressed Enrich, the step that checks each record
and decides whether it can be emailed. Not one could be: 92 were stopped
by the free checks before any Claude call, because they had no website.
Earlier, 3 of 50 had passed.

There was a second problem. Enrich looked at a record once only. A record
stopped for having no website was never looked at again, even if it
gained one later.

What the law says. Regulation 25 of the Company, Limited Liability
Partnership and Business (Names and Trading Disclosures) Regulations 2015
says a company must show its registered number on its websites
([regulation 25 on legislation.gov.uk](https://www.legislation.gov.uk/uksi/2015/17/regulation/25)).
My agent already reads that number from a business's website (decision
0022). Companies House gives it, so the two can be compared.

## Options

1. **Change nothing.** Imported companies stay out of the daily list.
2. **Pay for a search engine** to look each company up. It finds more,
   but every search costs money and a search result still has to be
   checked.
3. **Guess the address and check the number.** It is free. A match by
   number is as sure as my agent gets. It misses a company whose web
   address isn't close to its name.

## Decision

Simon chose option 3 on 21 November 2026 (issue #271). One of my agents
built it. Whether a paid search is needed for the companies it can't find
is decided after a trial.

**Guessing.** My agent takes the company's name without "the" at the
start, a suffix such as "Ltd", "Limited" or "LLP" and its punctuation. It
tries it joined up and with hyphens. It also tries it with "the" if the
name starts with it, or without a part in brackets, such as
"(Salisbury)". Each is
tried as `.co.uk`, `.com` and `.uk`. There are never more than 12 guesses
for one company.

**Checking.** A guessed name that has no address on the internet is
skipped without reading anything. For one that has, my agent reads the
home page and at most three more pages it links to: contact, about,
privacy, terms, legal or company pages, where a site's footer usually
points. It stops reading a site once a page gives a company number. It
reads pages the way it already does for the confirm step: each request
has a time limit, says it comes from Roofus and is one second after the
last. No company gets more than 16 requests.

**Five results.**

- **Confirmed:** a page shows the company's own number.
- **Likely:** no number, but the site has the company's name and a page
  gives its town, the postcode of its registered office or any postcode
  inside the area. A small company's registered office is often its
  accountant's, in another town, so a postcode in the area counts too.
- **Another company's:** a page shows a different company number. That
  site is someone else's, for sure.
- **Possible:** my agent read a site at a guessed address, but nothing
  proves it is the company's. The address matches the name, so the site
  is offered to Simon to look at rather than thrown away. It says what
  was and wasn't seen, such as "No company number and no town or
  postcode of its registered office."
- **Not found:** no guessed address could be read, or each one led to a
  social network.

When a company's guesses give different results, confirmed wins, then
likely, then another company's, then possible, then not found. Of two the
same, the first guess is kept, as it is the best.

Possible was added and Likely widened to any postcode in the area
after Simon's live trial on 22 November 2026 (issue #288). A bakery came
back as not found, yet a web search for its name gave its site at
exactly the `.com` address my agent had guessed. My agent had read that
site and thrown it away, because the site gave no company number and the
bakery's registered office was elsewhere.

The rules for a company's own website still apply (decisions 0022 and
0024). A site on a social network, or one giving a postcode outside the
area, is shown but can't be saved.

**Simon's check.** Nothing is saved without Simon. The Find screen lists
the confirmed, likely, another company's and possible results. Simon
saves the confirmed ones together, after one confirm step. Simon answers
yes or no to each likely or possible one. A saved website is kept with
the page that proves it, so the rest of my agent treats it as the
company's own. Decision 0037 later changed this check. The company
number is proof either way, so my agent saves a confirmed site and
counts another company's as not found, without asking. Simon now answers
each likely and possible result on its own.

**Checked again.** Enrich now looks at a record again when its website
has changed since it was last checked. A record whose website hasn't
changed is not checked again. Each check now notes the website it used.
A record checked before this change that was stopped for having no
website counts as having had none.

**The counts.** The step ends with how many companies were confirmed,
likely, possible, another company's and not found, the number of web
requests and the time taken. Simon judges the trial by these.

## Consequences

- Imported companies with a website close to their name can reach the
  daily list, at no cost.
- A company whose web address is unlike its name, such as one trading
  under another name, is not found. The trial shows how many that is.
- A guess can land on a parked page or another business's site. The
  company number rules out most of these. A likely or possible one needs
  Simon's yes, because without the number only Simon's look at the site
  can tell.
- Looking up a name on the internet (a DNS lookup) has no time limit of
  its own, so a slow lookup can slow a run.
- The results are kept by the page only until the next check or until
  the page stops. Running the check again reads the same sites again.
- Re-checking a record that gained a website uses one of the day's
  Claude calls, under the same daily limit.
- No lawyer has looked at reading business websites this way.

Simon has not accepted this yet.
