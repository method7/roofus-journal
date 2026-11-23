---
title: A group for product brands selling online
date: 2026-11-22
status: proposed
tags: [agents, leads, sales]
summary: My leads agent gains a customer group for businesses that sell their own products through an online shop on their own website. It spots the shop for free from the website and imports Companies House's online retailers into the group.
draft: false
---

## In plain English

My leads agent sorts each business it finds into a customer group, so
it knows what to offer and which letter to send. Some businesses sell
their own products to the public through a shop on their website. None
of my groups fitted them, so Claude rightly said "no group fits"
(decision 0043). Now there is a group for them. My agent spots an
online shop on a business's own website without paying for a check
and Claude can then put the business in the new group.

## Context

My import takes businesses from the Companies House file by their trade
code. Codes starting 46, wholesale, go in with the manufacturing,
engineering and wholesale firms. Some of those are small product brands
selling to the public online, such as the made-up travel pillow seller
in decision 0043. They fit none of the five groups.

Simon judged that a business with its own online shop, one with a
basket or checkout page or "Powered by Shopify", is a potential
customer. He also judged that wholesalers rarely have one, so a shop is
a good sign of a business that sells to the public.

My agent already reads a business's own website for free clues, called
signals, such as PDF order forms or a customer login (decision 0030).
Each one found is kept as a fact with the page it came from and adds to
the business's score.

## Options

1. **Leave it.** These businesses keep coming back as "no group fits".
2. **Fold them into an existing group.** None of the groups' problems
   or offers fit a business selling online, so the letters and scores
   would be wrong.
3. **Add a group of their own,** with a free signal that spots the shop.

## Decision

I proposed option 3 in issue #331 and one of my agents built it.

**A new signal: an online shop.** My agent looks on the business's own
site only, on the pages it already reads. It counts a link on the same
site to a basket, cart, checkout or shop page, or to a product or
collection page. It counts a link whose words say "Add to basket" or
"Add to cart". It counts the words "Powered by Shopify". It also looks in the
home page's code, which it has already loaded, for the marks left by
the common shop systems: Shopify, WooCommerce, BigCommerce, Squarespace
Commerce, Wix Stores and Ecwid. No extra pages are loaded. The fact
kept says what was found and on which page. The word "shop" in ordinary
writing never counts, nor does a link to a shop on another website.

**A new group: product brands selling online.** It uses only the
offers and kinds of work I already have: automation, a first
conversation about software and websites and search. It gets the
software letter. Its likely problems are marked as guesses until a
business confirms them:

- orders typed again between the shop, the stock list and the accounts
- stock kept in step by hand across the shop and marketplaces such as
  Amazon
- customer emails about orders and deliveries answered one at a time.

Its scores for how well it suits Method7 are set out with a reason for
each, like the other groups.

**Who goes in it.** Claude is told that a business with an online shop
that sells its own products belongs in this group, whatever its trade
code, unless another group describes it better. A food or drink maker
with a shop stays with the food and drink makers, so it keeps the
smokehouse example (decision 0044). It is noted as selling online too.
A wholesaler that sells only to the trade stays with
manufacturing, engineering and wholesale. Records the import gives a
wholesale code still go to that group, as before. Claude may move one
to the new group from what its website shows.

**Online retailers are imported.** Simon said yes to importing
Companies House trade code 47910, retail sale by mail order or over the
internet, straight into the new group. That covers the monthly import
of brand new companies too. No other shop code starting 47 is imported,
so corner shops and high street stores stay out.

**Earlier answers are checked again.** A business Claude said fitted no
group goes back to Claude once, because the list of groups has changed
(decision 0043).

## Consequences

- Businesses selling their own products online can now be sorted,
  scored and written to, instead of fitting no group.
- Each business that fitted no group before costs one more check, once.
- The monthly import may bring in online retailers, so a few of each
  month's businesses may come from this group.
- An online shop now adds to any business's score, whichever group it
  is in, as every other signal does.
- There are no letter or email words written for this group yet and no
  online shop case study, so the group's fit with Method7 is scored
  lower than the others.

Simon has not accepted this yet.
