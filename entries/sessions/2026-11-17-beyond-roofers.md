---
title: Day six, later – looking beyond roofers
date: 2026-11-17
tags: [session]
summary: The afternoon of 17 November. Simon can now choose which kinds of business to look for from seven lists, where to look and how much to spend. Charities get a letter of their own and are emailed only where the law allows. Larger firms are kept off the letters.
draft: false
---

This log carries on from the morning's entry, which ended with the web
page's seven screens built and 32 businesses waiting to hear back.

## What we did

- **Folded up the call sheet.** Simon asked for each business on the
  Calls screen to fold away, so the sheet is a short list. Each one now
  shows its name, town and phone numbers, ready to tap. Opening it shows
  the rest and the form for logging the call.
- **Let Simon choose what to look for.** The Find screen could only
  search for roofers. Simon asked to choose kinds of business from a
  list, then for it to be split into lists, each folded away, with
  nothing ticked to start. There are seven, with 134 kinds in all for
  Simon to prune:
  - Trades
  - Clinics
  - Fitness and coaching
  - Tutors and teaching
  - Creatives
  - Charities and community groups
  - Professional services
- **Gave each list its own letter.** Every kind of business needs a
  default letter. Simon chose them: the Founding Ten offer (ten websites
  at half price) for trades, clinics, coaches, tutors and creatives.
  Charities and community groups get the new charity letter.
  Professional services get the letter about Method7's software work.
  Each kind shows its letter in a dropdown, which Simon can change
  before searching.
- **Let Simon choose where and how much.** Each search can now cover
  some of the 15 postcode districts rather than all of them. Simon sets
  a limit on how many searches the page sends to Google in each run,
  since each one is paid for. The page refuses a limit above 200, so a
  typing slip can't run up a bill.
- **Added a letter for charities and community groups.** Simon wrote it:
  special rates for building, hosting and updating their websites, with
  Moonrakers Judo Club as an example (decision 0027). Simon accepted the
  decision the same afternoon.
- **Kept larger firms off the letters.** Simon was concerned that
  professional services would bring in national firms with one local
  office. A business is now held back for Simon to check by hand when
  the accounts it files at Companies House are a larger company's, when
  it has more than six directors or when its website is a branch page on
  a bigger firm's site. Nothing is deleted. A button on the business's
  own page lets Simon overrule it for one that is a genuine independent.
- **Made it possible to email charities where the law allows.** Simon
  asked for a switch to email any business that publishes no address.
  Under the Privacy and Electronic Communications Regulations, a sales
  email without consent may go only to a company or another body
  corporate (an organisation that exists in law apart from its members).
  Sole traders, partnerships and unincorporated clubs count as
  individuals, so I recommended against the switch. Simon chose a
  narrower fix: charities that are bodies corporate can now be emailed.
  Some are found on Companies House. For the rest, Simon pointed out
  that charities show their charity number on their websites. My leads
  agent now reads it there and looks it up on the Charity Commission's
  register, which says whether the charity is a charitable incorporated
  organisation, a charitable company or something else. Simon added the
  register's key, the password that lets my leads agent use it.

The same 32 businesses have been contacted and are still waiting to hear
back: 15 by email and 17 by letter.

## What changed

Merged on 17 November, in order:

1. Fold each business away on the call sheet, with its numbers on show.
2. Choose the kinds of business to search for, with a letter for each
   new kind.
3. Choose the postcode districts and the most searches for each run.
4. Put the kinds of business into lists, each with a default letter.
5. A letter for charities, clubs and community groups, in Simon's words.
6. Hold back businesses that look like part of a larger firm for Simon
   to check.
7. Accept decision 0027, the letter for charities and community groups.
8. Let Simon mark a business as a genuine independent.
9. Email charities and other bodies corporate that Companies House
   lists.
10. Read a charity's number from its website and check it on the Charity
    Commission's register before any email.
11. Note that the register's web address and the way to send the key are
    confirmed.

## What went wrong

- **My first idea for spotting larger firms was wrong.** I proposed
  treating a company whose registered office is in another town as part
  of a larger firm. The leads agent's own guide says a small company's
  registered office is often its accountant's, elsewhere. I dropped it
  before anything was built.
- **I left a test unrun.** Accepting decision 0027 failed its automatic
  checks. One of them keeps track of which decisions later ones change.
  I hadn't run it before sending the work to GitHub. I fixed it.
- **An old test failed at random.** The overrule button's automatic
  checks failed on GitHub but passed on Simon's Mac. An older test
  opened the records file and never closed it. Python, the language the
  leads agent is written in, closed it later in the middle of another
  test. The warning it gave made that test fail. I fixed the old test
  and checked that nothing else leaves the records open.
- **One of my agents stopped rather than guess.** The Charity
  Commission's public documents didn't give the register's web address
  or how to send the key. The agent stopped and said so. Simon
  downloaded the register's own description from its website, which
  confirmed the values I had set.
- **Commas before "and" kept slipping into what I wrote.** The checks
  caught each one before it was saved.

## What I learned

- **Read the guide before proposing a rule.** The reason my head-office
  idea was wrong was already written down.
- **Run every set of tests, not just the one that seems relevant.**
- **An agent that stops is better than one that guesses.** If a setting
  had been wrong, the register would have refused every request and
  every charity would have stayed letter-only. Stopping meant the values
  were checked against the register's own description instead.

## Next

- The third pilot: the whole leads agent on 20 new businesses, now
  across more kinds of business.
- Simon prunes the lists of kinds.
- A command to delete a business's details six months after the last
  contact, as the privacy notice promises.
