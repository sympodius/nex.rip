---
title: 'Overview of the Production Pipeline'
date: 2026-07-06T13:25:53+01:00
author: Nexami Engeo
description: This is what you write for SEO.
summary: This is what you write for list page summaries on the site.
readingEase: 10th to 12th Graders
gradeLevel: 12
images:
- images/post-cover.png
categories:
- musings
tags:
- musings
- coding
- backstage
- tutorial
- bookbinding
- crafts
- etc, delete as appropriate or add new ones
draft: true
---

{{< banner src="images/post-cover.png" alt="Banner Image" >}}

{{< md-comment >}}
# Instructions

- [ ] Encourage engagement and interaction
- [ ] Keep all blog entries as leaf bundles (for example, `hugo new content tech/blog-entry-name` with no .md creates a leaf bundle in the tech section)
- [ ] Create a banner image (post-cover.png) in your leaf bundle that has a ratio of 1.85:1, and is no smaller than: 962x520 pixels (Ideally 1536x830 or greater)
- [ ] Still manually add banner image into page content, first thing before anything else using the banner shortcode
- [ ] Add any other images you use to the images front matter array (this is purely to help with OpenGraph generation)
- [ ] You can use up to two more images in the blog entry, but try not to use any more (unless this is a listicle). Only the banner is essential
- [ ] Try to write 1000 words. The closer to this number, the better, but don't go over (75% of the public prefers reading articles under 1,000 words)
- [ ] Reading time should not exceed seven minutes
- [ ] Make sure to include a description and summary for the blog entry as these are used on the site and in SEO. Ideally the summary should be short and engaging to entice readers. The description is for webcrawlers and should be around 150 characters (no more than 160)
- [ ] Make an appropriate choice of tags in the front matter. These will help in recommending pages to the reader
- [ ] Make an appropriate choice of categories in the front matter. The first category will be used in the breadcrumb for the page, others will generate the side menu
- [ ] Use Emacs to generate the reading ease and grade level (this should happen automatically when saving the file in my Emacs configuration). These are just for fun, incidentally, and appear to have no impact on audience engagement
- [ ] Set the draft to false when you want to publish, then push to GitHub
- [ ] Drop a video announcing this post on Instagram etc, and post anywhere else you can as well. Reels and videos work better for engagement
- [ ] Consider what tomorrow's article will be, and try to post a new one once a day (more is fine)
{{</ md-comment >}}

give a brief overview of the approach I take to recording. Don't worry if you don't understand it all at this stage: it'll be explained more fully as the tutorials progress. The point here is to give you a flavour of what we're aiming to achieve. It will also be something to refer back to later when you want a high-level picture of the process.

So, my primary question for today is this:

> ***How do you put together a digital pipeline that sounds like analogue?***



And now we finally return to my original question: how do you put together a digital pipeline that sounds like analogue?

My approach is to replicate the added goodness of each piece of analogue equipment that was used in the chain before digital recording was a thing. While there are lots of things to consider there, the most important thing to add back in is the saturation of analogue devices. Saturation is really just a name for the harmonic distortion added to an audio signal by analogue equipment. What is harmonic distortion? It's just multiples of the real frequency being captured. For example, if you were trying to capture a frequency of 100 Hz, an analogue system might create frequencies at 200 Hz, 300 Hz, 400 Hz, and so on (each time with a reduced volume). This makes the sound feel bigger, richer, warmer, and more present. Harmonic distortion is also a natural effect heard in the human voice and many musical instruments. Saturation is often what people are talking about when they refer to *the colour of analogue recordings*.

Some producers will add saturation in directly with dedicated saturation software, but the approach I take is more subtle. Although saturation software has its place, it's hard to capture the cumulative effect of saturation from multiple pieces of analogue equipment in a signal chain. Each one adds a little more saturation at just the level we need in order to match our perception of a 'professional' recording. This is hard to do any other way.

So, the pipeline approach I take is this:

/Tracking/ is the first stage in our pipeline where we will have to start thinking about these things, but the analogue chain generally consists of the following stages (after sounds are captured by a mic or other method):

- Analogue Pre-amp (turns up the gain to the required signal level when first capturing the audio signal)
- Analogue Tracking Board (the initial console that gets the audio in check before it is recorded to tape)
- Tracking Tape Machine (the literal writing of the captured audio to tape so that it can then be processed and mixed together with other audio tracks)
- Analogue Mixing Board (the processing of the audio captured on tape, using effects and balances in order to get it to sound the way you want, and have it work well with the other tracks)
- Analogue Mixing Board Summing Channel (hardware designed to take all the channels from the mixing board and convert them into a single stereo output)
- Master Tape (the literal writing of the finished audio to tape so that it can be published to other formats for the consumer)


1. *Setting Up Your Recording Space* \\
   Some ideas for choosing a space to record in, and how to set it up for the smallest cost to create the biggest impact (creating a neutral space and using environment virtualization later).
2. *Microphones* \\
   Microphones and their placement will have a huge impact on the quality of your recordings, so it's important to understand this stage.
3. *Basic Recording Techniques* \\
   A discussion of options for how to actually capture the audio to a digital medium and the best ways to setup such devices.
4. *Digital Audio Workstations* \\
   A quick introduction to DAWs and what you will be using them for.
5. *Microphone Virtualization* (optional) \\
   Our first time exploiting the digital medium to save money by making our good mic sound like a great one.
6. *Tracking Part 1: Analogue Pre-amp* \\
   Simulating classic analogue hardware that gets the audio signal to the correct volume level, while adding a little saturation.
7. *Tracking Part 2: Analogue Tracking Board* \\
   Simulating classic analogue hardware that gets the audio in check (with simple dynamic range and tonal balance fixes) before it's recorded to tape. This often includes an `early high pass' filter and light dynamic range compression, while adding additional saturation. This stage is applied to all the parts of your song to create audio tracks that are musically in alignment with each other (known as an arrangement). Sometimes this stage also involves comping (compositing the best fragments from multiple takes, in order to get a `perfect' take)---most often applied to vocals.
8. *Tracking Part 3: Analogue Tracking Tape Machine* \\
   Simulate the literal writing of the captured audio to tape so that it can then be processed and mixed together with other audio tracks. This step adds further saturation.
9. *Baking Captured Audio* \\
   At this stage we have finished the initial capture and clean-up of our audio tracks (the `tracking' stage of our production), and we are preparing to start the mixing stage. `Baking' consolidates the processing up to this point so that it reduces computing power that will be needed later in our toolchain.
10. *Mixing Part 1: Analogue Mixing Board* \\
    Processing the captured audio tracks to make them all work well together, using effects and processing in order to get things sounding the way we want.
11. *Mixing Part 2: Spacial Positioning and Environment Virtualization* \\
    Making things sound like they were recorded in a professional studio environment, and positioning tracks into a virtual space (using reverb, delay, panning, and other techniques).
12. *Mixing Part 3: Analogue Mixing Board Summing Channel* \\
    The last step in the mixing stage is taking all the tracks from the mixing board and converting them into a single stereo output. This will be done by simulating classic analogue hardware that adds a little more saturation.
13. *Mastering Part 1: Tonal Balance and Dynamic Range Adjustments* \\
    Adjust the frequency curve to match the tonal balance people expect from the genre, then correct the dynamic range to make sure the expression of the piece makes sense and flows well---while sounding clear and loud. Sometimes additional clean-up may be required at this stage, or we will have to drop back to the mixing stage to correct issues that have become apparent. This is also when you would balance the levels between songs if you're working on a multi-song release (EPs, Albums, and some singles). For albums and EPs, this might also mean putting things into the correct order for the output medium's limitations (especially vinyl and cassette).
14. *Mastering Part 2: Master Tape* \\
    This is generally the final stage in the production, where we export the finished piece for distribution or publishing. This is often not just a single file, but different ones for different mediums and different services. This involves checking the levels of all the mastered audio files, as well as listening to them in different sound environments (different speakers/headphones/devices/rooms).

The two stages in the mastering chain above generally require rather specialist equipment to do properly, as well as highly attuned listening skills and lots of experience. However, we'll be doing our best to approximate the effect for the beginner, and use some helpful software and virtualization.

The most important thing to note at this point is how much the success of each stage is reliant on the previous stages. The post-production stage includes /mixing/ and /mastering/, but a good /master/ is very hard to achieve without a good /mix/. In turn, a good /mix/ is very hard to achieve without a good production stage. The production stage includes /recording/ and /tracking/, but good /tracking/ is very hard to achieve without good /recordings/. Even before we get to production, there is pre-production. That is the stage where songs are written, arranged, and practised. If your pre-production isn't good, the music production stages will likely not save it. In fact, it is highly unlikely that any single stage in the production pipeline will save the entire production. Each stage needs to be done well in order for the other stages to have maximal benefit and create the best overall result.
