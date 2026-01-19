---
layout: post
title:  automate the small stuff
date:   2026-01-19 06:22:00 +0100
categories:
  - automation
  - productivity
  - n8n
  - low-code
  - no-code
---

<a href="https://brainmade.org/">
<img src="/assets/img/brainmade-button.png">
</a>

At 10:00 AM, a friend calls, "Want to get some coffee together at 11:30 this morning?"

I look at my calendar. My schedule is free. "Sounds perfect!".

TODO INSERT IMAGE

Later on, at 11:00 AM, not long before I need to set off, I check my emails.

I can partially see the subject "Your Huel order will be delivered today between...".

TODO INSERT IMAGE

I begin to feel a small amount of anxiety. "Please be late afternoon".

Taking the plunge, I tap to open the email.

Sod's law. In plain text, it states "between 11:10 - 12:10".

TODO INSERT IMAGE

Not a big deal, except now I'm facing decision fatigue. What do I do?

Should I reschedule with my friend so I'm in to take delivery, but what if they have already left to meet me?

There are other options. Perhaps I could opt to leave the package in a "safe place"? Only, they're not that safe. I don't want to be worrying that my package is at risk of being nicked by a passer-by whilst I'm out.

Why didn't I know about this sooner? I look at the email receipt time. "8:39 AM".

TODO INSERT IMAGE

Ah, that's on me. I could have checked my emails earlier.

Or, is it? I've been trying to build a habit of not looking at my emails first thing on weekends.

## It doesn't have to be like this

Such situations can be avoided.

What if the delivery slot was in my calendar before I checked my schedule?

Then we could have arranged a mutually suitable time and I could have avoided the cognitive load that came with the internal debate that followed.

How could it be in my calendar without me having to have had opened my emails first and added it myself?

That's where automation comes in.

## My user story

GIVEN I receive a delivery notification email from DPD

WHEN I view my Google calendar

THEN I see the delivery slot details as a calendar event

## Small investment

What did I need to implement these requirements? Something that can:

- monitor my delivery notification emails from DPD
- parse and extract the key delivery details from relevant emails
- create and add an event in my Google calendar for the delivery slot

I chose to do this with [n8n](n8n.io); a low-code automation platform that provides high level abstractions to build workflows quickly.

And I did it with just 3 nodes.

TODO INSERT IMAGE

How long did it take? Less than 10 minutes, and most of that was configuring my Google Cloud console to enable the relevant APIs.

## Big returns

You still might be asking yourself "Is it worth it?".

After all, checking an email and making a calendar event only takes a minute.

In terms of time, it only takes 10 deliveries for me to break even.

<img src="https://imgs.xkcd.com/comics/is_it_worth_the_time_2x.png" width=400>

But, **its not just about the time** saved.

From the moment I ordered my Huel, I created an open loop: I needed to keep track of when that delivery was going to arrive; prompting me to check my emails more often than I would like to.

My mind is now **free to contemplate the things that matter** to me.

And when those double-booked mishaps happen. However minor it may be, the debacle to resolve it does cause unnecessary stress.

Now **mistakes are far less likely** to happen.

Imagine if that situation had been about a client on a new lead?

The need to reschedule could appear unprofessional and might be the difference between retaining or getting a new customer.

**Sweat the small stuff**.

## The big stuff

So, should you automate the big stuff too?

Short answer:

Of course.

Long answer:

The workflows for big stuff will take longer to plan, assess, develop and validate.

You're unlikely to get it right first time. So, it may take a number of iterations before you begin to see the value.

Comparatively, the small stuff could be automated today and the impact can be seen immediately. 

## TL;DR

Automate the small stuff.
Reduce your cognitive load.
It's often simple to do.
The ROI is surprisingly large.

