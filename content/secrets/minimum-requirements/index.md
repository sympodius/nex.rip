---
title: 'Minimum Requirements'
date: 2026-07-04T12:01:30+01:00
author: Nexami Engeo
description: Can old music gear still cut it for modern production? Assessing vintage equipment, identifying gaps, and building an in-the-box pipeline.
summary: Can old recording gear still work today?
readingEase: 10th to 12th Graders
gradeLevel: 14
images:
- images/post-cover.png
categories:
- arcanum
tags:
- arcanum
- music
- audio-production
- home-studio
- midi
- guitar
- backstage
- fabienne-black
- john
draft: false
---

{{< banner src="images/post-cover.png" alt="Music equipment setup featuring a Roland electronic drum kit, keyboard, and Orange Tiny Terror amplifier. Credit: John Urquhart Ferguson" >}}

{{< md-comment >}}
# Instructions

- [ ] Encourage engagement and interaction
- [x] Keep all blog entries as leaf bundles (for example, `hugo new content tech/blog-entry-name` with no .md creates a leaf bundle in the tech section)
- [x] Create a banner image (post-cover.png) in your leaf bundle that has a ratio of 1.85:1, and is no smaller than: 962x520 pixels (Ideally 1536x830 or greater)
- [x] Still manually add banner image into page content, first thing before anything else using the banner shortcode
- [x] Add any other images you use to the images front matter array (this is purely to help with OpenGraph generation)
- [x] You can use up to two more images in the blog entry, but try not to use any more (unless this is a listicle). Only the banner is essential
- [ ] Try to write 1000 words. The closer to this number, the better, but don't go over (75% of the public prefers reading articles under 1,000 words)
- [ ] Reading time should not exceed seven minutes
- [x] Make sure to include a description and summary for the blog entry as these are used on the site and in SEO. Ideally the summary should be short and engaging to entice readers. The description is for webcrawlers and should be around 150 characters (no more than 160)
- [x] Make an appropriate choice of tags in the front matter. These will help in recommending pages to the reader
- [x] Make an appropriate choice of categories in the front matter. The first category will be used in the breadcrumb for the page, others will generate the side menu
- [x] Use Emacs to generate the reading ease and grade level (this should happen automatically when saving the file in my Emacs configuration). These are just for fun, incidentally, and appear to have no impact on audience engagement
- [x] Set the draft to false when you want to publish, then push to GitHub
- [ ] Drop a video announcing this post on Instagram etc, and post anywhere else you can as well. Reels and videos work better for engagement
- [ ] Consider what tomorrow's article will be, and try to post a new one once a day (more is fine)
{{</ md-comment >}}

When I first got the idea to learn and share '*in the box*' music production techniques, I realised that I'd need to assess what equipment I still had from the old days. I was hoping that I'd still have enough usable equipment that I'd only need a couple more things to produce 'professional' sounding results.

I'm pleased to report that the decisions of young Nex and Jaime were pretty solid. Even though we really didn't know what we were doing back then, we'd actually managed to get about 80% toward a decent solution. We were definitely missing a few pretty important pieces of the pipeline, but the stuff we did buy was all good quality and still of use to me today.

This post might not be of interest to many of you, and anything important to setting up your own home studio will be covered in other posts. However, if you're interested in a little background to what we got wrong back in the day and what I did to fix it, read on.

We got into recording just when digital replicas of analogue equipment were becoming a reasonable choice. They were sounding convincing enough to be used instead of their analogue brethren, and their prices had dropped enough to make them the cheaper option as well. The first device I really remember in this category was the Line 6 POD. It was a virtual guitar amplifier and effects pedal system. We really wanted one, but it was a little out of our budget. The POD 2 followed, but was also too pricey for us. Eventually Behringer released a similar product called the V-Amp. When its follow-up, the [V-Amp 2](https://www.behringer.com/en/products/0709-AAD), came out in 2002, we finally got one (partly because it was a fair bit cheaper than the Line 6 products, but also because we thought it sounded a little better). I think we paid about £120 for it. A lot of money to us back then, but significantly cheaper than buying the 32 amps and 9 pedals that the little box claimed to model for us. It appeared a lot on our early recordings, even if we didn't fully understand how to use it.

The reason I bring up the V-Amp 2 is its significance to our outlook on recording. While I eventually replaced it with better digital simulacra, the V-Amp 2 is the device that showed us we could fake a 'professional' sound using digital technology---and that it would be significantly cheaper to do so.

Our first attempt to create a digital pipeline with the computer relied on another little box that came with our Behringer XENYX 1204FX Mixer. It took the analogue audio output of the mixer, did some magic, then had a USB cable on the other side. If we installed the driver software and plugged that USB cable into our computer, suddenly we had audio *in the box*.

Of course, the slight downside to this is that it wasn't very high-quality audio. At the time, Jaime and I had no idea why this was the case. We had decent-quality microphones, good-quality cables, and when we listened to the mixer on our headphones it all sounded great. Yet, somehow, going from the mixer into the computer through the magic box always added a lot of unwanted noise. We even tried to bypass the box and plug our microphones directly into the computer's sound card, but that was noisy too. The problem was that our cables couldn't produce a balanced signal. You see, when we plugged our microphones into the mixer, we used XLR cables. XLR cables are balanced and add little-to-no noise to the signal. However, the cables that fed out of the mixer to the magic box and then into the computer were unbalanced and added a lot of noise. When we tried to bypass this and put our microphones directly into the computer's sound card, we used an XLR-to-jack cable... because the sound card could only accept jack input. This meant that the benefits of a balanced XLR cable were entirely negated by the other end being a jack connector. Our inexperience at the time made this all impossible to understand, but it seems so obvious now.

We ended up using a *lot* of digital processing to get rid of the noise in our early recordings. Somehow, we seemed to get away with it, but it meant a lot of additional work and never quite capturing the quality our mics were capable of.

I got Fabienne and John over to help me assess the old equipment, and the three of us were very amused to see that I'd never figured out the problem back then. These are the sort of gotchas I hope to save you all from experiencing.

I won't go into detail about everything I still had from the old days, but for the hardcore fans: here is a table summary of equipment still relevant to my *in the box* audio production today:

| Original Equipment                                        |                                                                                            Purpose |
|:----------------------------------------------------------|---------------------------------------------------------------------------------------------------:|
| **2009 Gibson Les Paul Dark Fire (Robot II)[^dark-fire]** | Electric guitar with MIDI output capabilities, and the ability to replicate other electric guitars |
| **Roland GK-3[^gk-3]**                                    |                             MIDI pickup system to augment regular electric guitars for MIDI output |
| **2002 Gibson SG Special Voodoo**[^sg-voodoo]             |                                                      Electric guitar used to drive the Roland GK-3 |
| **Roland VG-99 V-Guitar System**[^vg-99]                  |                                 Digital Guitar/Amp/Cabinet/Pedal Modeler (driven by audio or MIDI) |
| **Orange Tiny Terror with PPC112 Cabinet**[^tiny-terror]  |                                               The original 'lunchbox' amp. Highly versatile sounds |
| **Watkins Westminster 14 Watt**[^watkins]                 |                                          My Dad's vintage tremolo valve guitar amp (circa 1961/62) |
| **Line 6 M13 Stompbox Modeler**[^m13]                     |                                                                       Digital guitar pedal modeler |
| **Roland FP-4**[^fp-4]                                    |                                                       Electric piano with MIDI output capabilities |
| **Roland HD-1 V-Drums**[^hd-1]                            |                                                     Digital drum-kit with MIDI output capabilities |
| **Shure SM58 (x2)**[^sm58]                                |                                                Best value-for-money all-rounder mics on the planet |
| **RØDE NT1-A**[^nt1-a]                                    |                                                   Best value-for-money condenser microphone around |

Another fun fact for you: apart from the SM58 mics, all of those products are discontinued. Many of them appear to be worth significantly more on the second-hand market than what we paid for them back then. I suspect the new generation picking up *in the box* production might be seeking out hardware solutions that will survive software end-of-life and OS upgrades. While today's software solutions are amazing and even cheaper than what we had available, I'm glad that Jaime and I got these great devices at a time when the digital replication of analogue hardware was at its absolute peak.

Oddly enough, quite a lot of that was bought *after* we released our first two EPs, and was us gearing up for the next thing. Of course, we quickly ended up in professional studios after that, so most of this equipment was largely unused.

There were lots of instruments from the old days too: a 1996 Fender Tex-Mex Strat electric guitar[^tex-mex]; a Yamaha FGX-412SC acoustic guitar; a Deering Goodtime Sweet 16 banjo; a Pono MTD-E tenor ukulele; an electric violin; two acoustic violins; a harmonium; a saxophone; harmonicas; a theremin; etc. But really, none of that is important in the discussion of what was missing for *in the box* audio production.

After looking through all the equipment and talking it over with Fabienne and John, the really important things I was missing were: a way to route all those great MIDI devices to the computer; an audio interface for the computer; additional polar pattern options for microphones; a stereo option for the condenser mic; and decent headphones.

You might notice that there is no real analogue portion to my planned pipeline. The analogue audio is converted to digital as quickly as possible. This is, again, the fundamental principle of my recording setup at home because it's cheaper and more versatile. The two guitar amps are an exception because they were needed for live performances. I'd still be inclined to record them with a microphone over using a digital replica though---but only because I already own them. Which is an important point: while we can save money by using digital replicas of analogue hardware, if we actually own the hardware already then it will probably always sound just a little bit better than its digital counterpart.

Also curious is our lack of MIDI capture. We had all these great MIDI devices back in the day, but no way to easily get them into the computer. I remember being pretty down on MIDI back then, though. Modern digital instruments driven by MIDI sound infinitely better now. The V-Drums actually came with a computer interface, as did the Dark Fire, but neither of them work anymore. However, because MIDI hasn't really changed much since it was invented decades ago, one modern box was able to solve both problems.

Although I plan to go over these purchases in more detail later, I filled in the missing pieces with these items:

| New Equipment                    |                                                                                                                       Holes Filled |
|:---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------:|
| **RØDE NT2-A**[^nt2-a]           | Similar to the RØDE NT1-A, but can operate with three different polar patterns and allow stereo options when paired with the NT1-A |
| **Radial Pro DI**[^radial-pro]   |                        Converts high-impedance, unbalanced, instrument-level signals to low-impedance, balanced, mic-level signals |
| **CME U6MIDI Pro**[^u6midi]      |                               MIDI router interface to get multiple MIDI devices inputting to the computer (or each other) at once |
| **Arturia MiniLab 3**[^minilab3] |                        Dedicated MIDI controller that has stuff which was missing from other devices I owned (sliders, knobs, etc) |
| **Zoom H6**[^zoom-h6]            | Portable recorder used as an audio interface and dedicated recording device (as well as supplying phantom power to condenser mics) |

A quick note about the Zoom H6 is that it supplies phantom power. The large condenser microphones (the two RØDE ones) require this power to work. This was also one of the main reasons we bought our Behringer XENYX 1204FX Mixer back in the day, but I don't think it'll be getting used much in this new pipeline (the Zoom H6 does everything I need).

My hope moving forward is to spend no more money on hardware. I really want this site to promote a cheap solution toward 'professional' sounding results. I think I'm already using way more expensive equipment than is necessary, but I already owned most of it. I won't be making assumptions about you owning any of this stuff, though, and I'll give explicit advice on what I think you should be spending money on at the appropriate times. And, if possible, I will always try to highlight a viable free option as well.

Hopefully you've not found this summary of hardware too boring, but I thought it would be good to let everyone know what baseline I was working with. I promise future articles will be more focused on what you need to do, instead of what I've already done.

[^dark-fire]: [Original Gibson article about the Dark Fire Electric Guitar](https://legacy.gibson.com/News-Lifestyle/Features/en-us/dark-fire-full.aspx)
[^gk-3]: [Original Roland article about the GK-3 MIDI Pickup](https://www.roland.com/global/products/gk-3/)
[^sg-voodoo]: [Fandom wiki article about the SG Special Voodoo](https://solidguitar.fandom.com/wiki/SG_Special_Voodoo)
[^vg-99]: [Original Roland article about the VG-99 V-Guitar System](https://www.roland.com/global/products/vg-99/). This was a massive upgrade over our original Behringer V-Amp 2. It could be driven by straight audio input, but worked best with the Dark Fire's MIDI output, or with a Roland GK-3 pickup.
[^tiny-terror]: [Original Orange article about the Tiny Terror](https://orangeamps.com/products/tiny-terror)
[^watkins]: [Retrospective article about the Watkins Westminster 14 Watt](https://www.vintagehofner.co.uk/britamps/watkins/westminster/west22.html)
[^m13]: [Premier Guitar review of the M13 Stompbox Modeler](https://www.premierguitar.com/line-6-m13-stompbox-modeler-review)
[^fp-4]: [Original Roland article about the FP-4 Electric Piano](https://www.roland.com/global/products/fp-4/)
[^hd-1]: [Original Roland article about the HD-1 V-Drums](https://www.roland.com/global/products/hd-1/)
[^sm58]: [Shure's product page for the SM58 microphone](https://www.shure.com/en-US/products/microphones/sm58?variant=SM58-LC)
[^nt1-a]: [RØDE's product page for the NT1-A microphone](https://rode.com/en-us/products/nt1a)
[^tex-mex]: [Blog post about the original Tex-Mex Strat](https://planetbotch.blogspot.com/2012/08/the-fender-tex-mex-strat-1996-to-1997.html)
[^nt2-a]: [RØDE's product page for the NT2-A microphone](https://rode.com/en-us/products/nt2-a)
[^radial-pro]: [Radial's product page for the Pro DI](https://www.radialeng.com/product/prodi)
[^u6midi]: [CME's product page for the U6MIDI Pro](https://www.cme-pro.com/u6-midi-pro-usb-midi-interface-routing-filter/)
[^minilab3]: [Arturia's product page for the MiniLab 3](https://www.arturia.com/products/hybrid-synths/minilab-3/overview)
[^zoom-h6]: [Zoom's product page for the Zoom H6](https://zoomcorp.com/en/us/handheld-recorders/handheld-recorders/h6-audio-recorder)
