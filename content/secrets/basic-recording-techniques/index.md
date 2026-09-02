---
title: 'Basic Recording Techniques'
date: 2026-09-02T09:08:17+01:00
author: Nexami Engeo
description: Learn mono, X-Y, and Mid-side mic techniques for home recording. Choose the right stereo setup to get pro-sounding tracks on a budget.
summary: The last theory before you press record.
readingEase: 10th to 12th Graders
gradeLevel: 12
images:
- images/post-cover.png
- images/xy-placement-diagram.png
- images/midside-placement-diagram.png
- images/midside-daw-diagram.png
categories:
- tutorials
tags:
- tutorials
- audio-production
- recording
- microphones
- stereo
- phase
- mid-side
- x-y
- home-studio
- beginner
- røde-nt1-a
- røde-nt2-a
- zoom-h6
draft: false
---

{{< banner src="images/post-cover.png" alt="A cardioid mid microphone on its 0° axis capturing a source inside its polar pattern, and a figure-8 side microphone turned 90° so the source falls in its null. Credit: John Urquhart Ferguson" >}}

{{< md-comment >}}
# Instructions

- [ ] Encourage engagement and interaction
- [x] Keep all blog entries as leaf bundles (for example, `hugo new content tech/blog-entry-name` with no .md creates a leaf bundle in the tech section)
- [x] Create a banner image (post-cover.png) in your leaf bundle that has a ratio of 1.85:1, and is no smaller than: 962x520 pixels (Ideally 1536x830 or greater)
- [x] Still manually add banner image into page content, first thing before anything else using the banner shortcode
- [x] Add any other images you use to the images front matter array (this is purely to help with OpenGraph generation)
- [ ] You can use up to two more images in the blog entry, but try not to use any more (unless this is a listicle). Only the banner is essential
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

The goal of this website is to help you record professional-sounding music at home as quickly and cheaply as possible. However, if you've been following the [tutorials in order](/categories/tutorials/asc.html) you may feel that you've already spent too much money, and read too much theory. I can appreciate the feeling. Even though what I'm presenting is only a minuscule fraction of what actual sound engineers are required to know and spend money on, it's still a big investment when it's not your job.

The good news is that what follows is the last theory lesson before recording, and you should already have bought everything you need. At the end of this article, we're recording for real.

The wealth of information about recording different instruments, styles, and environments is huge. But don't worry, I'm not going to force you to learn all of it. Instead, I'm going to give you a hint of what's possible, with enough information to be productive right away. Some of the techniques covered here might not be directly relevant to you (depending on what equipment you've purchased), but I hope they'll still show you what you could capture with different gear.

The first thing to reiterate is our general approach to audio recording: we're trying to capture neutral sounds, with only minimal environmental influence (this is the [dead room](/secrets/setting-up-your-recording-space) concept). This gives us more options in post-production, and saves money on renting out different spaces in which to record. As such, you should generally avoid trying to capture things that you could, instead, add and control in post-production. For example: reverb, echo, room resonance, distance...

That said, you *should* still aim to capture great sounds with correct microphone placement and multi-mic setups (if your budget can afford them).

I've already covered [microphone distance and the proximity effect](/secrets/an-overview-of-microphones/) and the [3:1 multi-mic placement rule](/secrets/it-s-just-a-phase/), so I won't repeat them. Those let you capture a sound alone, or layered from several distances, but not where that sound is positioned in the stereo field.

Broadly speaking, there are three categories of stereo microphone placements: *coincident pairs*, where two microphones are almost touching; *near-coincident pairs*, which are still very close but spaced just enough apart to roughly mimic the distance between human ears; and *spaced pairs*, which use larger separations to deliberately introduce time differences. The closer the microphones are, the lower the likelihood of [phase issues](/secrets/it-s-just-a-phase/) and the better the chances that an automatic mono-mixdown will hold up. However, this also results in less spatial depth. Of the coincident mic techniques, the two classics are **X-Y** and **Mid-side**. They look similar when set up, but they have very different purposes. The reason any of this works at all is that we have two ears separated by a head: a lot of what we perceive as the size, depth, and position of sounds comes from the difference in how the sound reaches each ear, interpreted in our brains. A single microphone can't capture that, which is why we use two.

X-Y is the simpler choice. Stack two identical cardioid microphones so that the diaphragm centres are aligned directly on top of each other. The mics should be almost touching. Point both at the source, but tilted 45° off the centre axis so that the pair spans 90° between them. Keep the [gain staging](/secrets/gain-staging/) identical on both. The sound reaches both diaphragms at the same instant, but because each mic is pointed slightly to the left or right of the source, it hits each at a slightly different level. As such, the combined signal will read a little wider than a mono capture. Place the two channels in your DAW[^daw] and pan one hard left and the other hard right to hear a tight sound with a strong centre. A source that's dead-centre between the pair reads dead-centre, while something off to one side reads off to that side. Because both channels capture the sound at the same point in space, there's essentially no timing difference between them, so phase problems are unlikely and an automatic mono-mixdown still sounds great. That mixdown is also essentially the same signal you would have had from a single mic, so you're not committed to stereo. You can keep the width if you want it, or discard it and pan the mono result in post like any other track. What X-Y can't give you is depth, since there are no timing differences to create it.

{{< diagram src="images/xy-placement-diagram.png" alt="Diagram of an X-Y coincident pair, viewed from directly above. Credit: John Urquhart Ferguson" >}}

Mid-side is the other classic coincident technique. It uses one cardioid and one figure-8 microphone (ideally with matching frequency responses), stacked and aligned exactly as with X-Y. The cardioid is the mid microphone and is pointed directly at the source, just as if you were using a single mic. The figure-8 is the side microphone and is turned 90° so that it captures left and right instead of front and back (by convention, the front of the figure-8 points left). It doesn't capture the source itself, but rather the ambience around it. In essence, the figure-8 mic captures the width as a mono signal. Since it isn't pointed at the source, you'll often need to raise its gain a little.

{{< diagram src="images/midside-placement-diagram.png" alt="Diagram of a mid-side microphone setup, viewed from directly above. Credit: John Urquhart Ferguson" >}}

The clever part happens in the DAW. The mid channel sits in the centre of the stereo field. The side channel is panned hard left, then copied (with its polarity inverted) and panned hard right. The two side channels must always stay at identical levels in your DAW, so you should link them to a single fader, or send them to a bus and use its level control. This fader now controls width for the signal. If you bring it down, the width disappears, leaving only the mid. If you bring it up, the image widens proportionally. And because the two side channels are polarity-inverted copies of each other, they cancel perfectly during an automatic mono-mixdown, leaving exactly the mid signal. This is the main draw of a Mid-side setup---the width is decided in the mix, not at the time of recording. It keeps most of X-Y's benefits (no phase issues, and an automatic mono-mixdown just as clean as X-Y's) but the image still won't have much depth.

There are several other common microphone placements. I've made a table to demonstrate the pros and cons of the most common ones, but before comparing them it's important to understand that how much 'room' and 'side spill' lands in a recording is less about how much space the mics cover, and more about spill level relative to the source. The combined signal of X-Y's two cardioids hear a wide stretch of the front (wider than a single mic), but a sound that's dead-centre will be picked up by both mics to sum a few decibels louder than a sound arriving at only one of the mics. So the side sound *is* captured, but it sits quietly relative to the centre. That gives it a clean mono-mixdown that sounds equivalent to a single cardioid mic recording. That's what makes X-Y "Low" in the Room Capture column. Mid-side is different because a figure-8 has no rear null, so its side channel picks up the sides and rear at close to full level. That channel is, in effect, a room microphone (the mid channel and the mono-mixdown stay clean, but any width you add in the mix is room-heavy). The same logic applies to the rest of the table such that more open polar patterns, and placements that occupy more space will result in more of the room being heard in the final mix.

|Multi-mic    |Type           |Auto Mono-mixdown|Width              |Centre image|Depth    |Editable |Room Capture|
|-------------|---------------|-----------------|-------------------|------------|---------|---------|------------|
|Mono         |--             |Intrinsic        |None               |Centre only |None     |No       |Low         |
|X-Y          |Coincident     |Great            |Narrow             |Strong      |Shallow  |No       |Low         |
|Mid-side     |Coincident     |Great            |Narrow to Very Wide|Strong      |Shallow  |Yes      |Medium      |
|ORTF         |Near-coincident|Good             |Good               |Strong      |Good     |No       |Medium      |
|DIN          |Near-coincident|Good             |Good               |Strong      |Good     |No       |Medium      |
|NOS          |Near-coincident|Good             |Good               |Strong      |Good     |No       |Medium      |
|Blumlein Pair|Near-coincident|Good             |Very Wide          |Moderate    |Very Deep|No       |High        |
|A-B          |Spaced         |Bad              |Very Wide          |Weak        |Very Deep|No       |Medium      |
|Decca Tree   |Spaced (3-mic) |Bad              |Very Wide          |Weak        |Very Deep|Partially|High        |

- **[ORTF](https://en.wikipedia.org/wiki/ORTF_stereo_technique)** stands for *[Office de Radiodiffusion Télévision Française](https://en.wikipedia.org/wiki/Office_de_Radiodiffusion_T%C3%A9l%C3%A9vision_Fran%C3%A7aise)*, the old French national broadcasting corporation (dissolved in 1974), which used this 17 cm, 110° pair as its standard stereo technique
- **[DIN](https://www.sweetwater.com/insync/din-stereo/)** stands for *[Deutsches Institut für Normung](https://en.wikipedia.org/wiki/Deutsches_Institut_f%C3%BCr_Normung)*, the German standards institute, whose 20 cm, 90° pair was a proposed standard
- **[NOS](https://en.wikipedia.org/wiki/NOS_stereo_technique)** stands for *[Nederlandse Omroep Stichting](https://en.wikipedia.org/wiki/Nederlandse_Omroep_Stichting)*, the Dutch public broadcasting foundation (still in existence as of 2026), which developed its 30 cm, 90° pair empirically in the 1960s
- **[Blumlein](https://en.wikipedia.org/wiki/Blumlein_pair)** is named after *[Alan Blumlein](https://en.wikipedia.org/wiki/Alan_Blumlein)* (1913--1942), a British engineer at [EMI](https://en.wikipedia.org/wiki/EMI), whose early 1930s patent described a pair of figure-8 microphones at 90° (one of the earliest stereo arrangements). Alan Blumlein also patented the Mid-side arrangement and its matrix (which is still used in your DAW to decode these signals). The Blumlein Pair itself is the most realistic of the stereo methods mentioned here: wherever the mics are placed is where the final listener feels they are sitting when they hear the recording back. The trade-off is less flexibility in post-production, and more Room Capture
- **[A-B](https://en.wikipedia.org/wiki/Stereophonic_sound#A-B_technique:_time-of-arrival_stereophony)** simply names the two microphones after the first two letters of the alphabet, and covers any two mics placed at different positions, both aimed at the source
- **[Decca Tree](https://en.wikipedia.org/wiki/Decca_tree)** takes its name from *[Decca Records](https://en.wikipedia.org/wiki/Decca_Records)*, whose engineers developed the three-mic triangular arrangement (mics roughly a metre apart) for studio orchestral recording in the 1950s; "tree" refers to the triangular shape of the placement

Mono is the baseline. X-Y and Mid-side are really just mono with width added, and neither loses its mono-mixdown quality. Only Mid-side lets you adjust that width after the fact, though (the Decca Tree can be re-balanced track-by-track, but its spacing and angles are fixed at capture). Room Capture is important to take note of because it is difficult to remove from the mix (if you're not recording in a dead room, a Blumlein Pair or Decca Tree will bake that room into the source in an immutable way).

Because we're using a dead room and want to maximise control inside the computer after recording, we can use the table to pick a suitable microphone placement. It's relatively easy to add depth and room dynamics artificially in the computer, so keeping Room Capture and Depth on the lower end would suit us better. Additionally, I like all my recordings to mix down well to mono, so Auto Mono-mixdown should be on the higher end. The main thing we'll struggle to add artificially is stereo width (which is a great way of making audio feel bigger and more present, without having to be much louder). This leaves us with three top choices, depending on what equipment we have available.

If you were only able to afford a single cardioid microphone, then mono recording is your only option, but it's also a pretty good one for our needs. The only thing we'd like that we won't have is stereo width, but there are ways we can try to get around that in post-production. They won't be as good as a stereo microphone placement, but they'll be good enough. It's also easy enough to add depth and stereo placement to a mono signal in the computer.

If you were able to buy two cardioid microphones, then you'll have the option to use X-Y. This basically has all the benefits of mono, but also gives us the option to capture spatial positioning and some width. However, we don't have to commit to either of those because we can produce a mono-mixdown in the computer that would match the equivalent single cardioid mic recording.

If your budget stretched to a cardioid and figure-8 microphone with the same frequency response, then Mid-side is the choice I'd recommend. It's the only one that lets you edit the amount of stereo width after recording (rather than X-Y, which only lets you turn it on or off), but still maintains mono-compatibility and has the other benefits of mono. Unlike X-Y, we won't get much stereo placement beyond width, though. However, as with X-Y, we are not committing to that and can get back to the equivalent single cardioid mic recording by just dumping the side channels. You could also keep them and just pan the mid channel around to create a sense of stereo field placement.

You should note, however, that a panned mono element lacks the width and placement that a true multi-mic capture has. It sits in the stereo field, but it doesn't occupy it. It's also worth noting that this only really matters for main parts. It's the things that will sit centrally in your mix that will benefit most from multi-mic setups because these are the sounds where presence really matters. The other stuff might not be worth the effort to go beyond a simple mono recording setup. Certain instruments almost always need a multi-mic setup to be captured well, though (such as acoustic string instruments and drums).

The other options in the table will be counterproductive for our dead-room/in-the-box based production. It's for this reason that I've not explained them in detail, but I felt it was still useful for you to see why I think the above three choices will be best for our setup.

## Practical Advice
If you've been following my advice on the rest of the site, you should have [the means to create a dead room](/secrets/setting-up-your-recording-space), own a [portable recorder](/secrets/recording-devices-on-a-budget), and have access to at least one [good quality microphone](/secrets/an-overview-of-microphones/).

Which of the three microphone setups you use depends on your equipment, as discussed above. Whichever it is, the basic procedure is the same: set up your dead room, plug your mic(s) into your portable recorder with an XLR cable, and make sure the project is at [an appropriate sample rate and bit depth](/secrets/digitally-storing-audio/).

- **One cardioid:** record mono. The articles on [microphones](/secrets/an-overview-of-microphones/) and [phase](/secrets/it-s-just-a-phase/) cover placement.
- **Two identical cardioids:** use X-Y, as described above. You can also layer two mics at different distances per the 3:1 rule, in which case the [phase article](/secrets/it-s-just-a-phase/) is your guide.
- **A cardioid and a figure-8:** use Mid-side. It's a little tricky to get right with the equipment I've proposed on this blog so far, so I'll take you through my method of achieving it on my own equipment.

For my Mid-side setup, I'm using a cardioid [RØDE NT1-A](https://rode.com/en-us/products/nt1a) as my mid mic, and a [RØDE NT2-A](https://rode.com/en-us/products/nt2-a) set to the figure-8 polar pattern as my side mic. These have a pretty similar frequency response, which is important for this setup to work well, but the most important thing is that one has a cardioid polar pattern and the other has a figure-8.

I place the cardioid microphone just as if I was recording in mono. Because the NT1-A is a condenser microphone, it's important to keep it on a secure stand with a shock mount. If I'm going to be recording vocals, I'll also place a pop filter in front of it.

Once the cardioid mic is in place, I take the figure-8 mic and place it upside down and directly above the cardioid mic. This is the best way to get the NT1-A and NT2-A diaphragms as close to each other as possible. The figure-8 mic must also be rotated so that the front is facing to the left and the back is facing to the right. It's important to get these angles accurate. The diaphragm centres of the two mics must be in direct vertical alignment to minimise phase issues, and the figure-8 must be turned exactly 90° from the front so that it captures both the left and right sides with even levels. Because the NT2-A is also a condenser microphone, it's important to keep it on a secure stand with a shock mount.

My portable recorder is the [Zoom H6](https://zoomcorp.com/en/us/handheld-recorders/handheld-recorders/h6-audio-recorder/), and it has some built-in options for Mid-side recording, but I'll be ignoring these[^zoom-ssh-6]. The built-in options lock down the Mid-side levels at the time of recording (meaning the stereo width cannot be changed later), but I want the flexibility of changing things on the computer. Each mic must be plugged into a separate input on the Zoom H6 with its own XLR cable, and the associated tracks must be set to record with appropriate [gain staging](/secrets/gain-staging/). I usually have to add a little more gain to the figure-8 mic on the portable recorder to get the levels right because it isn't pointing at the sound source. It's also important that the project you've set up on the recorder is at [an appropriate sample rate and bit depth](/secrets/digitally-storing-audio/).

With that all set up, I just need to hit record and capture the audio. The goal is to capture the main audio in the cardioid mic, and the ambience around it in the figure-8 mic.

Following these steps, I end up with two audio recordings of the same source that both sound pretty different (you can check the Zoom H6 manual and your DAW's manual for instructions on getting the files available for editing). To achieve the post-recording width control, we still need to do something clever in the DAW. Some variant of the following steps should be available in whichever DAW you choose, but here is the general idea[^zoom-ms-decoder]:

1. Import the cardioid audio to its own mono audio track in the DAW and set it up to sound however you like, but keep the stereo panning perfectly centered.
2. Import the figure-8 audio to its own mono audio track in the DAW and set it up to sound however you like. When you are done, pan it all the way to the left.
3. Make a copy of your figure-8 track, invert the polarity, then pan it all the way to the right.
4. If your DAW supports it, group the two figure-8 tracks together such that there is only one gain control fader (or each fader controls both tracks). You could also send both figure-8 tracks to the same stereo bus, and use the bus's fader for level control instead. The effect won't work unless both left and right tracks are always kept at exactly the same volume level as each other.

{{< diagram src="images/midside-daw-diagram.png" alt="Diagram of the Mid-side decode in a DAW. Credit: John Urquhart Ferguson" >}}

Now when you bring the fader up on your side tracks, it will seem as if the sound from the cardioid track is getting wider. You can set it to whatever level makes sense for the rest of the music.

One of the really great aspects of this setup is that the figure-8 tracks will completely cancel each other out when played on a mono-device, leaving your mix sounding exactly as you would want with just the cardioid track and no frequency cancellation. It is important that both figure-8 tracks are identical apart from their opposite hard panning and polarity if you want this to work, though.

And that's everything you need to get started! Whether you're recording mono with a single cardioid, or running X-Y or Mid-side from two mics, the method is the same every time: capture a neutral sound in the dead room, keep the options open, and make your choices in the DAW where you can change your mind. The table above is your decision-making tool when you're facing a new instrument or a new part, and the one principle behind every row is the one we started from: capture only what the room and the computer can't add for you.



[^daw]: A [Digital Audio Workstation (DAW)](https://en.wikipedia.org/wiki/Digital_audio_workstation) is the computer software used to record, edit, mix, and master audio. It is the environment where post-production happens.
[^zoom-ssh-6]: If you're using one of the Mid-side modules attached to the Zoom H6 (such as the [Zoom SSH-6 Stereo Shotgun Mic Module](https://zoomcorp.com/en/us/accessories/mic-capsules-foot-switches-and-pedals/SSH-6/) or the [Zoom MSH-6 Stereo Mid-side Mic Module](https://zoomcorp.com/en/us/accessories/mic-capsules-foot-switches-and-pedals/MSH-6/)), then you should also turn off the recorder's built-in Mid-side options by setting the "Side Mic Level" to "RAW." If you've done this successfully, then you should see "Side Mic Level : RAW" on the display while recording.
[^zoom-ms-decoder]: If these steps seem too complicated, you might have more luck using [Zoom's free MS Decoder VST plugin](https://zoomcorp.com/en/us/handheld-recorders/handheld-recorders/h6-audio-recorder/h6-support/) {{< hindrex-rating score=638 code="FP-FF-A-ZC-NN-RTR-LRC" bookend=true >}}.

{{< md-comment >}}
I considered putting information here about recording specific instruments (violin, acoustic guitar, etc), but the article was already getting pretty long. They might end up being diversion articles.
{{</ md-comment >}}
