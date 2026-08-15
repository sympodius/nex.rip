---
title: "It's Just a Phase"
date: 2026-08-15T07:29:47+01:00
author: Nexami Engeo
description: Phase cancellation can make your recordings sound thin and hollow. Learn what causes it, how to spot comb filtering, and practical fixes for cleaner mixes.
summary: The silent saboteur stealing your sound.
readingEase: 10th to 12th Graders
gradeLevel: 12
images:
- images/post-cover.png
- images/phase-alignment-diagram.png
- images/comb-filtering-diagram.png
- images/mic-placement-3-to-1-diagram.png
- images/stereo-to-mono-diagram.png
categories:
- tutorials
tags:
- tutorials
- audio-production
- recording
- phase
- mixing
- microphones
- beginner
draft: false
---

{{< banner src="images/post-cover.png" alt="Three sine waves showing how two in-phase signals reinforce each other on the left, then cancel out on the right as one shifts out of phase. Credit: John Urquhart Ferguson" >}}

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

Even with [the right microphones](/secrets/an-overview-of-microphones), [a good recorder](/secrets/recording-devices-on-a-budget), [appropriate gain staging](/secrets/gain-staging), [a suitable recording space](/secrets/setting-up-your-recording-space), and [the correct digital storage](/secrets/digitally-storing-audio), you may still find that your captured audio sounds thin and hollow. It might not be something you can quite put your finger on, but something is just a little... off?

There's a good chance that *phase* is the culprit, and that's what we're discussing today.

Phase is a concept that I misunderstood when I first got into audio production, and I suspect I'm far from alone. It's hard to identify, and can seem to appear out of nowhere in audio that sounded great just moments ago. Since learning about it in more detail, I've found that it's the source of far more problems than I ever expected, and I'm glad that I now know how to spot it, avoid it, and correct it. Let's make sure that you can too.

Have you ever watched someone bounce on a trampoline and looked at the bed as it rises and falls? It flexes up when someone is going into the air, and flexes down when someone lands. This cycle continues as it is used. But what if there are two people on the trampoline at once? When they jump in unison, the bed of the trampoline flexes down and comes up higher than when just one person was using it. Conversely, if one person jumps as the other is landing, and each continues this pattern, the trampoline bed will barely rise or dip at all.

Sound works in a similar way. It exists as a wave that cycles above and below a flat level. When you combine two sound waves together, the points where they are in unison will cause the peaks and troughs of the wave to get larger. But if their peaks and troughs are in opposite alignment, they will tend to cancel each other out.

{{< diagram src="images/phase-alignment-diagram.png" alt="Phase alignment showing in-phase reinforcement, out-of-phase cancellation, and how different waves combine. Credit: John Urquhart Ferguson" >}}

The most likely cause of this is when similar sound waves arrive at your recording system at slightly different times. If the offset is just right such that the peaks and troughs start cancelling each other out, then we say that they are *out of phase*, leading to *phase cancellation*. Complete cancellation is possible if the two signals are identical (leaving only silence), but this will likely never happen in real-world recording. Because the effect usually just makes the sound thin, it can make it difficult for newcomers to identify what is happening.

The more similar the two audio waves are, the more likely they will line up and misalign repeatedly across different frequencies, leading to *comb filtering*. This is when the interaction between the two waves causes a series of evenly spaced boosts and cuts across the frequencies, forming a pattern that looks like a comb on a spectrum analyser (a tool that visualises which frequencies are loud or quiet in your audio). This is the most noticeable type of phase cancellation to listeners, and creates a somewhat 'underwater' quality within the audio.

{{< diagram src="images/comb-filtering-diagram.png" alt="Comb filtering diagram showing Wave A, Wave B (time-delayed), and their combined result with the characteristic evenly spaced peaks and notches in the frequency spectrum. Credit: John Urquhart Ferguson" >}}

The most annoying thing about phase cancellation is that it can't really be *fully* fixed with equaliser (EQ) adjustments. The interplay of the sound waves is creating a timing issue, not purely a tonal one. Applying an EQ adjustment won't resolve the root cause, but EQ can sometimes help soften the audible symptoms of comb filtering by cutting the most affected frequencies. If the two waves still exist separately, then you could try realigning them such that the phase cancellation effects are removed or minimised. Ideally, you would just ensure that the mics are placed correctly at the start so that phase cancellation is unlikely to occur.

In truth, it's nearly impossible to use multiple microphones without some level of phase cancellation occurring, but if we obey standard placement rules then it shouldn't be noticeable in the final mix. As such, the general rule when placing microphones is to employ 3:1 positioning ratios.

If you have more than one microphone, but all microphones are targeting the same source, then the distance between the microphones must be at least three times the distance from the nearest microphone to the source, or all microphones must be the exact same distance away from the source. Things are a little more complex when there are multiple sources though. In this instance, each microphone should be at least three times farther from any other mic's source than it is from its own. Following these ratios should keep phase cancellation at a low enough level to stop it being noticeable.

As an example, let's imagine recording a drum kit with multiple microphones. The microphone for the snare, say, would also hear some of the kick drum. As such, you would need to make sure that the snare mic is three times farther from the kick drum than it is from the snare. Similarly, the kick mic should be three times farther from the snare than it is from the kick. Both mics will still pick up both sound sources, but in a way that is less likely to lead to phase cancellation issues.

{{< diagram src="images/mic-placement-3-to-1-diagram.png" alt="Diagram of the 3:1 microphone placement rule showing good placement (ratio 3.4:1, non-overlapping coverage zones) versus bad placement (ratio 2.4:1, overlapping bleed zones causing phase cancellation). Credit: John Urquhart Ferguson" >}}

Even if you negate phase issues by employing correct microphone placement, they can still creep in later. Effects like reverb and delay shift the timing of different frequencies, which might cause them to clash with other tracks. EQ can also shift the phase of some frequencies relative to others, and compression---especially parallel compression---can soften sharp transients, changing how a source blends with its uncompressed counterpart. Essentially, any time you use a tool that changes how sound waves align in time, you should keep an ear out for phase issues.

Perhaps the most noticeable phase issues come from stereo mixes that need to sound good in mono. A mix that sounded full and lush in stereo can become thin and hollow when played back in mono. This is a serious issue because a lot of music is still heard in mono (such as on mobile phone speakers, pub/club PA systems, smart speakers, etc). A lot of stereo depth comes from differences between the left and right channels, but when these are forced to interact in a mono playback, phase differences in particular can cause cancellation. As such, it's always important to check how your mixes sound in mono before you release them.

{{< diagram src="images/stereo-to-mono-diagram.png" alt="Diagram showing how stereo playback sounds full and lush with separated channels, but mono summing causes phase cancellation with irregular notches across the frequency spectrum. Credit: John Urquhart Ferguson" >}}

Although not the same as phase cancellation, it's also worth mentioning polarity. Polarity is when you manually flip an audio signal such that the peaks become troughs and the troughs become peaks. The entire waveform is inverted. There are various ways this can happen, but you'll usually see it as a switch on hardware, or an option in your software. While phase cancellation is caused by timing issues, polarity is simply the wave flipped upside down. This means that if you mix a wave and its polarity-flipped counterpart together with the same timing, you will get absolute silence. While there are various creative reasons that you might want to flip the polarity of a signal (which I'll cover in another post), it is sometimes done accidentally by wiring up some equipment the wrong way round, or accidentally flipping a polarity switch. This will then cause phase issues with your correctly wired equipment. If flipping the polarity of a device or track makes your audio sound bigger and clearer, it was likely a polarity issue. However, if it still sounds weird, then you're probably dealing with phase.

As I already stated, your best way to fix phase issues is to stop them from ever occurring. Place your microphones well and limit how many you use (the more you use, the higher the chance of phase cancellation). However, if you were unable to avoid the phase issues from being captured, you might still be able to try some fixes in your computer software. You could try shifting the timing of tracks so the waves reinforce each other, or you might try flipping the polarity on a track to see if it gets rid of the phase issues. Even though polarity flipping is not the same as phase cancellation, manually flipping the polarity can sometimes help---particularly when blending closely related sources like kick and bass---because it can turn cancelling peaks and troughs into reinforcing pairs at key frequencies. However, it changes the cancellation pattern rather than removing it entirely, so it can make some frequencies worse even as it improves others.

The most important thing is to listen critically to the tracks in your mix. If things sound thin or hollow or underwater, try to narrow it down to the two tracks causing the issue. Flip the polarity on one and see if it gets better or worse. If that doesn't help, try nudging the timing of the tracks slightly to make their peaks and troughs line up, instead of cancelling each other out. You should hopefully hear a point when the two tracks start to help each other rather than fight against each other, leading to a fuller sound with more clarity.

The bottom line is that phase is tricky to spot, and often something we wouldn't expect to worry about. However, it can appear at so many points in your recording and mixing process. If you want to make sure that your mixes sound full and clear, you should always be checking for phase issues and fix them each time you spot one. It's amazing the impact you can have when you take the time to check and just line up some waves.
