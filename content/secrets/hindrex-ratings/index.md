---
title: 'Hindrex Ratings'
date: 2026-06-23T22:30:26+01:00
author: Nexami Engeo
description: "Introducing the hindrex rating system: a score that measures how hindered software is by privacy invasions, internet requirements, and licensing servers."
summary: A scoring system for software freedom and privacy.
readingEase: College Students
gradeLevel: 19
images:
- images/post-cover.png
categories:
- tutorials
tags:
- tutorials
- hindrex
- open-source
- software-review
- privacy
- tools
draft: false
---

{{< banner src="images/post-cover.png" alt="Banner Image" >}}

{{< md-comment >}}
# Instructions

- [ ] Encourage engagement and interaction
- [x] Keep all blog entries as leaf bundles (for example, `hugo new content tech/blog-entry-name` with no .md creates a leaf bundle in the tech section)
- [x] Create a banner image (post-cover.png) in your leaf bundle that has a ratio of 1.85:1, and is no smaller than: 962x520 pixels (Ideally 1536x830 or greater)
- [x] Still manually add banner image into page content, first thing before anything else using the banner shortcode
- [x] Add any other images you use to the images front matter array (this is purely to help with OpenGraph generation)
- [x] You can use up to two more images in the blog entry, but try not to use any more (unless this is a listicle). Only the banner is essential
- [x] Try to write 1000 words. The closer to this number, the better, but don't go over (75% of the public prefers reading articles under 1,000 words)
- [x] Reading time should not exceed seven minutes
- [x] Make sure to include a description and summary for the blog entry as these are used on the site and in SEO. Ideally the summary should be short and engaging to entice readers. The description is for webcrawlers and should be around 150 words (no more than 160)
- [x] Make an appropriate choice of tags in the front matter. These will help in recommending pages to the reader
- [x] Make an appropriate choice of categories in the front matter. The first category will be used in the breadcrumb for the page, others will generate the side menu
- [x] Use Emacs to generate the reading ease and grade level (this should happen automatically when saving the file in my Emacs configuration). These are just for fun, incidentally, and appear to have no impact on audience engagement
- [x] Set the draft to false when you want to publish, then push to GitHub
- [ ] Drop a video announcing this post on Instagram etc, and post anywhere else you can as well. Reels and videos work better for engagement
- [ ] Consider what tomorrow's article will be, and try to post a new one once a day (more is fine)
{{</ md-comment >}}

As I mentioned in my [roadmap for Nex.RIP](/secrets/whats-in-the-box/), I will be favouring open source software in my music production tutorials. I have a general preference for open source software because I believe it is less likely to disappear in the future, and less likely to encroach on my privacy. My biggest worry with most software is that I am either being spied on while using it, or will have my access cut off at the discretion of some third party.

These fears have led to the development of the *Hindrance Index Rating System* (hindrex)[^hindrex-collaborators], as shown in the table below. This system rates how hindered a piece of software seems to be. The scores and the criteria associated with them are summed to create a rating for a piece of software; the higher the score, the less hindered the software.

| Hindrex Score | Criteria                                       |
| :---          |                                           ---: |
| **2048**      | **FOSS** : Free and Open Source Software (> A) |
| **1024**      | **ZI** : Zero Internet                         |
| **512**       | **FP** : Full Privacy (> ZLS, ZR)              |
| **256**       | **ZLS** : Zero Licensing Servers               |
| **128**       | **ZR** : Zero Registration                     |
| **64**        | **FF** : Full-Featured                         |
| **32**        | **A** : Archivable                             |
| **16**        | **ZC** : Zero Cost (> LFC)                     |
| **8**         | **NN** : No Nagging                            |
| **4**         | **RTR** : Ready To Run                         |
| **2**         | **LRC** : Low Run Cost                         |
| **1**         | **LFC** : Low Financial Cost                   |

These are the definitions for the criteria above:
- **FOSS**: Free and Open Source Software, abiding by the four essential freedoms of free software[^free-software-def], and the Open Source definition[^open-source-def]
- **ZI**: Zero Internet required to install and run the software (excluding a potential one-off download step)
- **FP**: Full Privacy, such that the entity you got the software from never gets any personal information about you and does not spy on you
- **ZLS**: Zero Licensing Servers required to download, install, or run the software
- **ZR**: Zero Registration required to download, install, or run the software
- **FF**: Full-Featured, without limitations (this means that it is fully usable for its intended purpose and free of timed or sporadic crippling. It does not mean that it includes all the features of a paid counterpart)
- **A**: Archivable such that it can be backed up and reinstalled later without requiring new licenses/registrations, or a connection to the Internet
- **ZC**: Zero Cost, meaning that no outlay of money is required to attain or run the software
- **NN**: No Nag screens/boxes asking you to buy an upgrade or another product such that it interferes with regular operation of the software
- **RTR**: Ready To Run, or extremely easy and low cost to compile from source code
- **LRC**: Low Run Cost, meaning that it doesn't have prohibitively expensive hardware requirements
- **LFC**: Low Financial Cost, meaning that it isn't prohibitively expensive to purchase

This rating system should always produce a uniquely reversible number, such that a single score can always be split back down into the criteria with only one possible outcome. In general, though, I'll still give ratings as both a single number and a series of criteria abbreviations.

For example: software that was full-featured, had no nag screens, was ready to run, and had a low run cost (but had no other criteria on the list) would be given the rating "**78** => *FF-NN-RTR-LRC*."

Because some of the higher scores imply the criteria for the lower scores, the maximum achievable rating would be "**3678** => *FOSS-ZI-FP-FF-ZC-NN-RTR-LRC*."

At times throughout the site, I'll give my preferred software choice for a given task. In most cases, I'll also say whether my choice is based on a high hindrex rating or the software's output quality (hopefully both).

Even though I will always try to give both the score and code for a hindrex rating, you may wish to use the decoder below on the off chance that I forget. Or, if you want to use hindrex scores as part of your own evaluations of software, the encoder for codes-to-scores might be helpful to you as well. You can thank John for coding those up for me.

{{< hindrex-decoder >}}

[^hindrex-collaborators]: My thanks to John Urquhart Ferguson and the great Ladon for helping me develop the hindrex system.
[^free-software-def]: https://en.wikipedia.org/wiki/The_Free_Software_Definition
[^open-source-def]: https://en.wikipedia.org/wiki/Open-source_software
