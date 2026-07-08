---
title: 'The Colour of Analogue'
date: 2026-07-06T09:44:36+01:00
author: Nexami Engeo
description: "Digital gives you clarity, but analogue gives you soul. Discover why we love the warmth of tape and how to bring that colour to your productions."
summary: Precision is the enemy of soul.
readingEase: 10th to 12th Graders
gradeLevel: 12
images:
- images/post-cover.png
categories:
- tutorials
tags:
- tutorials
- audio-production
- analogue
- saturation
- in-the-box
- home-studio
draft: false
---

{{< banner src="images/post-cover.png" alt="Technicolour frequency spectrum visualization. Credit: John Urquhart Ferguson" >}}

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
- [x] Make sure to include a description and summary for the blog entry as these are used on the site and in SEO. Ideally the summary should be short and engaging to entice readers. The description is for webcrawlers and should be around 150 characters (no more than 160)
- [x] Make an appropriate choice of tags in the front matter. These will help in recommending pages to the reader
- [x] Make an appropriate choice of categories in the front matter. The first category will be used in the breadcrumb for the page, others will generate the side menu
- [x] Use Emacs to generate the reading ease and grade level (this should happen automatically when saving the file in my Emacs configuration). These are just for fun, incidentally, and appear to have no impact on audience engagement
- [x] Set the draft to false when you want to publish, then push to GitHub
- [ ] Drop a video announcing this post on Instagram etc, and post anywhere else you can as well. Reels and videos work better for engagement
- [ ] Consider what tomorrow's article will be, and try to post a new one once a day (more is fine)
{{</ md-comment >}}

Before we get into proper tutorials, I want to discuss something that I think might throw a few people off. Although this site will be teaching a digital pipeline and *in the box* music production, I still plan to artificially replicate a lot of analogue equipment.

I suspect many of you will be asking why you should care about analogue equipment when we've already committed to digital solutions---and it's a fair question. I'm going to make my case here, and I hope you'll agree with my conclusions by the end. As such, the question for today is:

> ***Why would we want our recordings to sound more analogue?***

The first commercial methods for recording and distributing music to consumers came about in the late 1800s. These were, of course, analogue systems. Everything was done using mechanical and physical methods, without binary digits. Digital methods for recording and publishing music didn't even exist until 100 years later, and weren't adopted overnight. This means that most music created before the early 1990s was still recorded with analogue methods. By the time digital production came into existence, humans had already pretty much settled on what a 'good' recording sounded like, and it was analogue.

While early digital recordings were pioneering a new sound (with crystal clarity and more accurate reproduction), many people favoured the smoother, warmer sound of yesteryear. I rarely hear that signature harshness of digital recordings anymore, yet most music today is recorded digitally. As I see it, people have again decided that high-quality analogue productions sounded the best, and are now faking it in their digital systems. So why is this?

Perhaps we first need to understand why analogue recordings sound the way they do. When the concept was first introduced to me, I struggled to understand why digital recordings would be clearer than analogue. In general, digital systems only *approximate* inherently analogue mediums (like sound). They do this by taking measurements (samples) along the analogue medium at many different points. If enough samples are taken, then we cross a threshold where we stop perceiving the gaps[^sampling-theorem]. However, a pure analogue capture of a pure analogue medium will always be a continuous range, so why doesn't it sound clearer?

Analogue recordings rely on physical methods of capture, and no such methods are free from flaws. For example, a brand-new, unused analogue tape will still produce a sound when played (due to the grain and imperfections on the physical tape itself). Even the electrical equipment used to power the systems will create a low-level hum and electromagnetic fields that might be captured on the recording. These inherent flaws in a recording system are known as the 'noise floor.' This means that there is no true 'zero sound' with analogue, and all audio recorded this way will capture some of the flaws in the recording system.

There is also an issue with dynamic range in analogue systems. Dynamic range is the difference between the loudest and quietest sounds in a recording, and analogue systems have a narrower dynamic range than digital ones.

Lastly, analogue tape recordings don't capture the entire frequency range with the same response time or emphasis. This means that higher-pitched sounds like a whistle will be recorded with less delay than lower-frequency sounds like a bass drum. As such, bass frequencies are often slightly out of phase with the rest of the recording, creating a subtle delay effect. In fact, tape itself is also very hard to keep moving at a perfectly constant rate when recording, leading to distortions called 'wow' and 'flutter.' Despite our best efforts, most analogue equipment also has some level of uneven frequency response where certain frequencies are emphasised over others.

Digital systems, on the other hand, have none of these problems (though they do introduce one or two minor issues of their own). There is usually only one thing to worry about with digital, and that is the input. Microphones are still analogue, and many instruments still enter digital systems as an analogue signal through a cable. This will still introduce some of the analogue capture problems like noise floor, dynamic range, and frequency capture issues. While none of this is perfect, it is only at one point in the chain. Once the signal is inside the digital box, no additional analogue distortions will be added: in analogue, it is multiplied at *every* point in the chain.

So what does all this mean? Although analogue is theoretically capable of a higher quality signal, the practicalities of capturing it introduce many distortions and flaws. Conversely, digital is theoretically only an approximation, but the capture remains free of most of the distortions and flaws of the analogue medium. Therefore, if we turn an analogue signal into a digital one using enough sampling, it will introduce no further analogue distortions from that point. The overall signal will have less unwanted noise and more preservation of quiet details.

But here's the weird part: humans seem to prefer the distorted signal. Whether this is because we prefer our art to be an escape from the harshness of reality, or whether the analogue 'sound' is just what we associate with high-quality recording, the end result is the same. Perhaps the most attractive aberration that analogue systems introduce is harmonic distortion---often called *saturation*. What is harmonic distortion? It's just multiples of the fundamental frequency being captured. For example, if you were trying to capture a frequency of 100 Hz, an analogue system might create frequencies at 200 Hz (2 x 100), 300 Hz (3 x 100), 400 Hz (4 x 100), and so on (each time with a reduced volume). This makes the sound feel bigger, richer, warmer, and more present. Harmonic distortion is also a natural effect heard in the human voice and many musical instruments. As such, it's entirely possible that we've been conditioned to consider saturation as attractive and musical for far longer than recorded music has even existed. Saturation is often what people are talking about when they refer to *the colour of analogue recordings*. 

It's also possible that only the top analogue equipment continued to be used across the decades, so there is some survivorship bias: we only consider the highest quality gear when we think of analogue recordings. So, if we want our recordings to sound 'professional,' then making it sound like a high-quality analogue recording is a sensible path to follow.

Perhaps the obvious next question is why use digital at all if it doesn't sound as nice as analogue? The main reason for me is cost. High-quality analogue equipment is prohibitively expensive to buy, takes up a great deal of room, and generally shines best when used in perfectly engineered spaces. The home recording musician rarely has access to such spaces, and often struggles for room to store everything. Beyond that, most people don't have the tens of thousands of pounds that it would cost to buy all this stuff. With digital, we have the option to fake the sound of analogue *in the box*, bringing us the best of both worlds. We get cheaper solutions with higher clarity, and then we get to decide how much of the analogue sound to put back in.

The analogue vibe might not work for all musical styles (or your personal preference), but it's been the predominant sound for most of music production's history. It's also what most listeners expect a 'professional' recording to sound like. Analogue-emulated hardware will come up a lot in my tutorials, but you can still ignore that and follow along with the other aspects of sound production. Either way, I hope you can appreciate why I've chosen the analogue emulation route.

[^sampling-theorem]: This is known as the [Nyquist–Shannon sampling theorem](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem).
