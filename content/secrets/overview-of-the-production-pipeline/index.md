---
title: 'Overview of the Production Pipeline'
date: 2026-07-07T06:25:53+01:00
author: Nexami Engeo
description: Learn the stages of analogue sound production and how each piece of equipment adds character to create that professional sound.
summary: Great sound is the sum of many small imperfections.
readingEase: 10th to 12th Graders
gradeLevel: 11
images:
- images/post-cover.png
categories:
- tutorials
tags:
- tutorials
- audio-production
- in-the-box
- analogue
- tracking
- mixing
- mastering
- beginner
- home-studio
draft: false
---

{{< banner src="images/post-cover.png" alt="Analogue audio production pipeline: microphone through two-track master tape. Credit: John Urquhart Ferguson" >}}

{{< md-comment >}}
# Instructions

- [ ] Encourage engagement and interaction
- [x] Keep all blog entries as leaf bundles (for example, `hugo new content tech/blog-entry-name` with no .md creates a leaf bundle in the tech section)
- [x] Create a banner image (post-cover.png) in your leaf bundle that has a ratio of 1.85:1, and is no smaller than: 962x520 pixels (Ideally 1536x830 or greater)
- [x] Still manually add banner image into page content, first thing before anything else using the banner shortcode
- [x] Add any other images you use to the images front matter array (this is purely to help with OpenGraph generation)
- [x] You can use up to two more images in the blog entry, but try not to use any more (unless this is a listicle). Only the banner is essential
- [ ] Try to write 1000 words. The closer to this number, the better, but don't go over (75% of the public prefers reading articles under 1,000 words)
- [x] Reading time should not exceed seven minutes
- [x] Make sure to include a description and summary for the blog entry as these are used on the site and in SEO. Ideally the summary should be short and engaging to entice readers. The description is for webcrawlers and should be around 150 characters (no more than 160)
- [x] Make an appropriate choice of tags in the front matter. These will help in recommending pages to the reader
- [x] Make an appropriate choice of categories in the front matter. The first category will be used in the breadcrumb for the page, others will generate the side menu
- [x] Use Emacs to generate the reading ease and grade level (this should happen automatically when saving the file in my Emacs configuration). These are just for fun, incidentally, and appear to have no impact on audience engagement
- [x] Set the draft to false when you want to publish, then push to GitHub
- [ ] Drop a video announcing this post on Instagram etc, and post anywhere else you can as well. Reels and videos work better for engagement
- [ ] Consider what tomorrow's article will be, and try to post a new one once a day (more is fine)
{{</ md-comment >}}

As I mentioned in my post about [the colour of analogue recordings](/secrets/the-colour-of-analogue), my approach to *in the box* sound production replicates analogue methods via digital means. This gives me the best of both worlds at a fraction of the cost. Please check out that post if you want more detail.

With that said, I'd like to give a brief overview of the pipeline. Don't worry if you don't understand it all at this stage: it'll be explained more fully as the tutorials progress. The point here is to give you a flavour of what we're aiming to achieve. It will also be something to refer back to later when you want a high-level picture of the process.

The first thing we should note is that we ideally want to take only the good things from analogue equipment, and none of the bad.

For me, the bad things would be excess noise and less control. Using a digital pipeline means we already have way more control, and the excess noise is usually not a problem because we'll only be emulating high quality equipment.

The good things I especially want to keep are the devices' frequency responses and saturation. The various software emulations we'll be using will take care of this for us.

Frequency response is the way that analogue equipment will emphasise some frequencies over others, especially when adjusting controls. In digital systems, we set a parameter and it doesn't affect any other ones. Everything is evenly distributed until we explicitly say otherwise. The limitations of analogue equipment meant there were subtle side-effects and distortions at all times. However, some of the most popular analogue equipment got that way because people liked how it affected things. As such, it would be good to capture that and mimic these popular analogue devices and how they worked.

Saturation is the harmonic distortion added to an audio signal by analogue equipment. For example, if you were trying to capture a frequency of 100 Hz, an analogue system might create frequencies at 200 Hz (2 x 100), 300 Hz (3 x 100), 400 Hz (4 x 100), and so on (each time with a reduced volume). This makes the sound feel bigger, richer, warmer, and more present.

Some producers will add saturation directly with dedicated saturation software, but the approach I take is more subtle. Although saturation software has its place, it doesn't allow us to capture the cumulative effect of saturation from multiple pieces of analogue equipment in a signal chain. Each one adds a little more saturation at just the level we need in order to match our perception of a 'professional' recording. This is hard to do any other way.

With our goals defined, my approach is to mimic a fairly standard analogue recording pipeline as much as possible inside the digital medium. But what does that look like?

## The Recording Space
Although not specific to analogue recording, we need a good strategy for how to set up our recording space. I favour a low cost/high flexibility solution that relies on virtualisation of the environment and equipment later on. The solution I use is often referred to as a 'dead room.' Although there are many physical considerations and realities to take into account, this will allow us to fake the actual space later, making it appear that we recorded in a much better environment than we had access to.

## Tracking
In an analogue studio, tracking is the first point of capture. Once the audio enters the microphone, it travels through a pre-amp (to increase the volume to the desired level) and then onto the tracking board. The tracking board is the initial desk console that gets audio in check before it is recorded to tape for mixing. This often includes adding filters and compressing the dynamic range[^dynamic-range] slightly. This may also involve 'comping,' which is when you select the best takes and composite them together to form an 'ideal' take that didn't really exist. The tracks are also lined up correctly to form an arrangement, such that all the audio plays at the correct point in time.

Both the pre-amp and tracking board processing will add saturation and frequency response effects to all the raw audio tracks. This will make them sound richer, but also unify them because the effect is applied evenly across all tracks.

The final stage in tracking is recording onto tape. This tape is then used to mix the music together. Analogue tracking tape machines added a fair bit of saturation to everything as well. And this is on top of the saturation already applied by the pre-amp and tracking board. It is this subtle accumulation of saturation and frequency response effects that builds up the feel of a 'professional' sound.

## Mixing
The tracking tapes are then used in a mixing board. This is another hardware desk console that makes the tracks fit well together on the song. This could involve adding effects, compressing the dynamic range, adding frequency equalisation (EQ), and changing volumes.

This is also the stage where stereo sound would be considered, as well as positioning the sounds into the imaginary space of the recording. This is done with panning, reverb, delay, and other techniques.

When all the tracks are working well together, they are passed through the mixing board's summing channel. This converts all the tracks into a single stereo output. Summing channels are advanced circuits and often add a lot of their own colour and character.

Again, the mixing board and any outboard gear (like compressors, reverb units, etc) will also add more saturation and frequency response effects.

## Mastering
Mastering is the final processing step where the tonal balance (EQ) and dynamic range are adjusted so that the music sounds its best across as many devices as possible. It's important to get the expressiveness of the piece correct and make sure everything flows well (while still sounding clear and loud). This was also the stage where the levels across songs on an album would be adjusted to make sure they sat well together.

Mastering was done using similar consoles to mixing, but the outboard gear was often chosen differently. Some compressors, for example, were known to work better on mastering than on mixing and help bring cohesion to a piece.

When the music was sounding its best, it was then written to a master tape. These are similar to the tape machines used at the end of tracking, but they have a couple of important differences. The most noticeable is the tape width. Tracking tapes are wider because they store multiple tracks on the tape (which means there is a higher chance of crosstalk between the tracks). Master tapes usually only had two tracks (left and right) and so they needed a smaller tape width. Tracking tapes were also engineered to be read and written to many times, so durability was prioritised over fidelity. Master tape, on the other hand, was designed to be written to once, with the highest fidelity possible.

And, once again, all these devices added saturation and frequency response effects to the signal.

What I'd like you to take away from this is just how much different equipment was involved in analogue sound production, and how every piece of equipment added just a little bit of saturation and character to the signals that passed through it.

It also shows just how much each stage relied on the previous stage being done well: you won't get a good master without a good mix; you won't get a good mix without good tracking; and you won't get good tracking without a good recording setup.

And those are just the stages in audio production. Before that there is pre-production. That's when you write songs, arrange them, and practice them. If your pre-production isn't good, the production stages likely won't save it. In fact, it's highly unlikely that any single stage in the production pipeline will save the entire production. Each stage needs to be done well in order for the other stages to have maximal benefit and create the best overall result.

Hopefully that gives you a general idea of how things were done in the analogue days so that you know what we're trying to match. The digital pipeline is pretty different in its execution, but the stages themselves still exist there too. When we start going through each one, I'll point out the differences and how we can try to capture the best of analogue in our digital systems.


[^dynamic-range]: Dynamic range is the difference between the loudest and quietest sounds in a recording.
