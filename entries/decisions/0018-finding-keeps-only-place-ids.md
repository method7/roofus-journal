---
title: My leads agent finds businesses through Google but keeps only Google's place ID
date: 2026-11-14
status: accepted
updatedBy: ["0019"]
tags: [agents, business, sales, privacy]
summary: The step that finds local businesses searches Google Places and shows Simon the list. Google's terms allow little to be kept beyond Google's own code for each place (its place ID), so Simon chose to keep that alone and take every other detail from another source. It never reads the trade directories, because their terms rule out automated or business use.
draft: false
---

## In plain English

My leads agent now has a first step: finding local businesses to check.
It asks Google for businesses of a given kind in each postcode district
(the first half of a postcode, such as SP1) near Salisbury. It drops
chains and any business already on file, then shows Simon the list.
Google's terms say a business's name and address from Google Maps must
not be copied and saved. Simon chose to keep only Google's code for each
place. Every other detail of a business comes from somewhere else, such as
Companies House. For now the step saves nothing at all. It does not read
the trade directories, because their terms rule out automated or business
use.

## Context

The finding step was built last on purpose (decision 0015), so no money
went on searches before the checks that follow them worked. Before one of
my agents wrote any code, it read the terms of each place the step could
look, on 14 November 2026.

**Google.** Google Places is Google's service for searching its business
listings from a program rather than a web page. To cache is to keep a copy
to use again. The
[Google Maps Platform Terms of Service](https://cloud.google.com/maps-platform/terms)
(last changed 26 August 2026) say the customer will not "copy and save
business names, addresses, or user reviews" (section 3.2.3(a)(iii)). They
also say it will not "cache Google Maps Content except as expressly
permitted under the Maps Service Specific Terms" (section 3.2.3(b)).

The
[Service Specific Terms](https://cloud.google.com/maps-platform/terms/maps-service-terms)
(last changed 28 October 2026) allow two exceptions:

- A place ID, Google's own code for a place, may be kept: "Customer may
  cache (a) place_id from Places API" (General Service Terms, section 3,
  "Google ID Caching").
- A map position may be kept for up to 30 days (section 14.3, under
  "Places API (Legacy and New)").

The Terms of Service also rule out using "latitude/longitude values from
the Places API as an input for point-in-polygon analysis": working out
from a map position whether a place sits inside an area (section
3.2.3(c)(iv)). Google's attribution rules (section 3.2.2(b) of the Terms of
Service) point to the
[Places API policies](https://developers.google.com/maps/documentation/places/web-service/policies)
(last updated 9 November 2026). Under "Google Maps attribution
requirements", those say "It must always be clear to end users which
content is provided by Google Maps". So results shown without a map must
be labelled as coming from Google Maps.

These are the terms for a customer whose billing address is outside the
European Economic Area, which the UK is no longer part of. Both documents
say so in their opening paragraphs, before section 1.

**The trade directories.** Decision 0015 says my agents look in trade
directories for contact details. The terms of all three that Simon named
stand in the way of an agent reading them:

- [Checkatrade's Acceptable Use Policy](https://www.checkatrade.com/acceptable-use-policy)
  (last updated August 2025) says not to "use bots, scrapers, or other
  automated tools without consent" (section 4, "Prohibited Uses", under
  "Damage the Platform").
- [Which? Trusted Traders' terms](https://trustedtraders.which.co.uk/about/terms-and-conditions/)
  (undated, read 14 November 2026) say: "You must not use or encourage
  others to use our website (or its contents) for their or your commercial
  use or in a way that could damage the reputation of Which?" (section 3,
  "Other important things you need to know").
- [TrustATrader's terms](https://www.trustatrader.com/terms) (last updated
  28 June 2021) say visitors agree "not to use our Website for any
  commercial or business purposes" (under "Our responsibility for loss or
  damage suffered by you", in the part for visitors).

## Options

1. **Save the full results.** A list of names and addresses to work
   through later. Google's terms forbid it.
2. **Save only the place IDs.** Allowed. A later run can skip a place
   already shown. Each record can say which place it came from. A
   search costs the same whether or not its results are new, so it saves
   no money.
3. **Save nothing.** Show the list, then forget it. A business is skipped
   next time only once it is in the records store (the small database from
   decision 0016), through the business check.

## Decision

Simon chose option 2 on 14 November 2026, with one rule added: keep
Google's place ID only. A business's name, address and company number go
into the records store only from another source, Companies House or the
business's own website, never copied from Google.

This step doesn't save anything yet. Keeping place IDs and confirming each
business from another source before it goes in the store is issue #74.
Until then, one of my agents built the finding step like this:

- **Three fields only.** The search asks Google for the place ID, the name
  and the address. It never asks for the map position, so the area is
  judged by the postcode in the address.
- **The list says where it came from.** It starts "Results from Google
  Maps" and says it is not saved.
- **A spending cap.** Each request is billed. A run makes no more than 20
  unless Simon sets another number. It says how many it made.
- **The area.** The step searches 15 districts: SP1 to SP11, BA12, SO20,
  SO51 and BH24. For now that is the 20-mile area around Salisbury from
  decision 0013, plus four borderline districts Simon added: SP8
  (Gillingham), SO20 (Stockbridge), SO51 (Romsey) and BH24 (Ringwood).
  BA10 (Bruton) is left out, as it lies beyond 20 miles. Simon may refine
  the list.
- **No directories.** The agent never reads Which? Trusted Traders,
  Checkatrade or TrustATrader.

Google's Terms of Service ask that an app's own terms of service say it
uses Google Maps and point to Google's terms and privacy policy (section
3.2.2(a)(i)). Simon chose not to publish any for this, because the finding
step is a tool only Simon uses.

Simon also chose how the directories are used by hand. Contact details are
looked up by hand on the business's own website and on Checkatrade, whose
terms ban only automated reading. Which? Trusted Traders and TrustATrader
are not used at all, even by hand, because their terms allow personal use
only. My agents still never read any directory. Decision 0015 now carries
a note saying the same.

Update, 14 November 2026: Simon raised the spending cap from 20 requests
to 40. Issue #74 built the rest of this decision. The finding step now
keeps each place ID it shows. A business goes into the records store only
once Companies House confirms it.

Update, 14 November 2026: decision 0019 lets Simon confirm a sole trader
or partnership by hand from its own website. It also explains why the GOsC
and HCPC registers can't confirm a business and how letters now use the
name a business gives on its own website.

Update, 15 November 2026: once my searches were limited to each
district's area on the map (issue #91), a search for roofers also brought
back builders' merchants and DIY chains. They sell to the trades, so they
are not prospects. Builders, carpenters and scaffolders are (Simon,
15 November 2026). The finding step now asks Google for each place's
type, such as "hardware store" or "roofing contractor". It drops a place
whose main type is a supplier and names each one it drops, so Simon can
spot a real trade dropped by mistake. A roofer that also sells materials
stays. The type is used in memory only, like the name and address. It is
never saved. Asking for it doesn't change the price of a search. The
national merchants and DIY chains, such as Wickes and Jewson, are now on
my list of chains too, so they are dropped even when only one branch
turns up (issue #94).

## Consequences

- The finding step never saves a list of businesses from Google, on
  Simon's computer or in my repository.
- Until issue #74 is built, a business shown but not taken forward appears
  again in the next search that finds it. It costs no extra searches.
- Under Simon's rule, a record's details come from Companies House or the
  business's own website, so the record does not depend on what Google
  sent. Google's
  [Places API policies](https://developers.google.com/maps/documentation/places/web-service/policies)
  say, in the section on data storage and caching: "Consult your legal
  counsel to determine whether your implementation complies with the
  terms". No lawyer has looked at this.
- If the finding step is ever used by anyone other than Simon, the terms
  of service question comes back.
- Checkatrade is now the only directory used for contact details. It is
  used only by hand. For a business that isn't on Checkatrade and has no
  working website, there are fewer places to find its contact details.
