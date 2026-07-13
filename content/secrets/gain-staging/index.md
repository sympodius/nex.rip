---
title: 'Gain Staging'
date: 2026-07-13T15:32:17+01:00
author: Nexami Engeo
description: Learn gain staging for digital recording. Find optimal dBFS levels for 8 to 32-bit float, understand how bit depth affects dynamic range, and avoid clipping.
summary: The sweet spot between noise and clipping.
readingEase: 10th to 12th Graders
gradeLevel: 12
images:
- images/post-cover.png
categories:
- tutorials
tags:
- tutorials
- audio-production
- recording
- digital-audio
- home-studio
- beginner
- gain-staging
- bit-depth
draft: false
---

{{< banner src="images/post-cover.png" alt="An analog VU meter on the left and a digital level meter on the right. Credit: John Urquhart Ferguson" >}}

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

Gain staging is an important thing to get right when recording. If you get it wrong, it will have a major negative impact on sound quality.

*Gain* is just the difference in amplitude between an input signal and an output signal. *Gain staging*, however, is about adjusting the sensitivity of your recording device to match your audio source. The goal is to keep the signal low enough that there is room to make it louder[^headroom] in post-production, but make it high enough that it is far away from the noise floor[^noise-floor]. If you make the signal too loud, then there is a high risk of clipping[^clipping] during recording. If you make the signal too quiet, then the reduced signal-to-noise ratio will pick up more ambient noises that you don't want. In summary, you want the signal as loud as it can be without noise, but not so loud that it clips or can't be adjusted later.

In digital recording (where the mic essentially goes directly to a digital file with minimal analogue boxes in the chain), your biggest sources of noise are:

- Other things in the recording area
- The mic itself
- The cables and cable length
- Quantisation noise

To reduce ambient noise in the area... go somewhere where there aren't other noises. For reflections, my guide on recording in a [dead room](/secrets/setting-up-your-recording-space/#the-dead-room) should help, but if you aren't using that then you might need padding to reduce reflective surfaces that could introduce unwanted reverb or harmonics. If your mic supports it and you aren't recording something with bass, you might also turn on the mic's high-pass filter, which will remove much of the lower frequency noise. Lastly, make sure that you are appropriately spaced from the mic and in a good position for it to pick you up (and not other things).

You can't do much about mic and cable noise other than get better quality microphones and cables, or make sure the circuitry in your chain is all balanced and earthed correctly (with impedance matching applied). Keeping cables as short as possible is also a good idea as it keeps the signal strong and reduces the attack surface for electromagnetic interference.

Quantisation noise is a side effect of digitising an analogue signal and cannot be removed entirely, but it can be reduced by using a higher bit depth and sample rate on your digital recording setup.

Assuming you have done good mic placement, are using a high quality mic, and have found a quiet and appropriately padded (acoustically treated) space to record in, the main source of noise you are likely to hear in your digital recording is quantisation noise. Gain staging itself will not affect the levels of this in your recording. However, the bit depth will determine how much gain staging you are able to do for maintaining a good signal-to-quantisation-noise ratio. In reality (with digital recording), mic placement and distance will still have a bigger effect on this ratio than your gain adjustments.

So what levels should you be aiming for? In digital recording, this will be dependent on the bit depth you use for your digital recording setup. The higher the bit depth, the more headroom you can afford in your gain staging to maintain that healthy signal-to-noise ratio.

Before I go into actual numbers, it's worth having a quick word about decibels (dB). Decibels can be said to measure amplitude, but they exist on a rather mercurial scale. Rather than representing an absolute value, they instead represent the difference between two signals. They are also logarithmic (rather than linear). Additionally, they are not calculated the same way depending on whether you are measuring power, or voltage/sound pressure. Their origins lie in the bel (named after Alexander Graham Bell) which was used to measure the amount of signal loss on telephone lines. Decibels are a more fine-grained measure (1 bel equals 10 decibels). The math behind them also differs depending on what you're measuring: you multiply the logarithm by 10 for power, and by 20 for voltage or sound pressure. The reason we might assume decibels are absolute rather than relative is that most contexts where they are used today have already agreed on the reference signal to which they are comparing the sound intensity. Bell Labs set their 0 dB reference as the minimum point of volume perception for human hearing (0.00002 Pa---roughly -80 dBFS). Analogue audio recording equipment had their 0 dB reference point (0 VU) set higher (roughly -18 dBFS). However, in digital setups, a reference point of 0 dB is usually defined as the maximum point where a file can store a signal without clipping[^clipping]. This is why analogue equipment often has its decibel levels shown as positive values, and digital equipment often has its decibel levels shown as negative values.

The reason a logarithmic scale is easier to use for sound intensity is due to the way humans perceive sound. In a linear scale, we could reasonably assume that doubling the power to a guitar amp would make it twice as loud, but this is not how we perceive the results. In fact, we need to keep adding exponentially more power each time we want to perceive that the volume has doubled.

All of this essentially means that saying something is -20 dB is meaningless without a reference point. In most digital systems, dBFS (decibels Full Scale) is used, which means the reference point of 0 dB is set to the maximum level of audio that can be captured before clipping. Full Scale is what will be meant most of the time when you see 'dB' in your computer software or digital recording equipment. As I understand it, changing the bit depth does not affect this, it just changes how much detail (and therefore dynamic range) can be captured below this 0 dBFS point. Therefore, a signal of -18 dBFS on an 8-bit recording and on a 24-bit recording will be at the same perceived volume, but will not be at the same perceived quality. It is this higher bit depth that increases the dynamic range and lowers the quantisation noise. The lower the quantisation noise, the larger our headroom can be.

Additionally, many of the digital volume meters you will see in your DAW will not show an instantaneous and accurate volume. Rather, they will use root mean square (RMS) levels. This is the average volume over a short window (usually around 300 ms) so that the meter is easier to read. You may also come across 'peak levels' which show the maximum volume over a set period of time. Some digital meters incorporate both with the apparent instantaneous level showing RMS, and a slightly delayed line indicating the recent peak level from the past few seconds. Another level you could see is a 'true peak,' which attempts to compensate for some sample rate issues with standard peak levels in order to be more accurate.

But now, back to actual numbers for gain staging:

If you're using 24-bit depth, you should be aiming to keep your audio no louder than -12 dBFS on the recording (and ideally not quieter than -24 dBFS), with an average around -18 dBFS. While the goal is always to get as close to the final sound as possible when recording audio, in reality you will definitely be doing a lot of post-production to get a cleaner sound. As already stated, one thing you absolutely cannot fix in post-production is clipped audio (a problem with digital recording where anything above the maximum amplitude of the digital file format results in a hard wall on the signal peaks). As such, it's best to keep your audio amplitude within a range that can be adjusted later, but without losing clarity. For 24-bit, this seems to be in the -24 dBFS to -12 dBFS range. This is all a guide (and you can push things when needed as long as you don't clip the audio), but keeping things around an average of -18 dBFS will give you the most processing options in 24-bit recordings, whilst still maintaining good clarity. This may involve coming closer or moving further away from the microphone when you are using dynamics in your voice or instruments. You should also make sure that you don't get too close to unidirectional microphones or you might trigger the proximity effect (where getting closer boosts bass sounds). This will better capture the dynamic range with minimal noise floor and clipping. The placement of microphones (assuming they are good ones) will actually have more effect on the quality than gain staging will (assuming the signal doesn't clip), but gain staging is still important for the rest of the signal path because most of the other processors are tuned to operate best around this -18 dBFS RMS level.

If you use a lower bit depth than 24, you could reduce the headroom on your gain staging to maintain the signal-to-noise ratio. But, for most digital recording, sticking to the average of -18 dBFS is always fine. The table below shows some suggested approximate average values to help avoid noise floor if it's becoming an issue (if not, stick with -18 dBFS):

| Bit Depth      | Minimum Vol | Average Vol | Maximum Vol | Dynamic Range |
|:---------------|-------------|-------------|-------------|--------------:|
| 8-bit          | -12 dBFS    | -6  dBFS    | -3  dBFS    |        ~48 dB |
| 16-bit         | -18 dBFS    | -12 dBFS    | -6  dBFS    |        ~96 dB |
| 24-bit         | -24 dBFS    | -18 dBFS    | -12 dBFS    |       ~144 dB |
| 32-bit         | -30 dBFS    | -24 dBFS    | -18 dBFS    |       ~192 dB |
| 32-bit (float) | -30 dBFS    | -24 dBFS    | -18 dBFS    |      ~1529 dB |

You might have noticed that I included a second 32-bit value marked 'float.' The other bit depths are fixed point precision, but the last one is floating point precision. This means the data is stored as a mantissa and an exponent (with a sign indicator bit). Such numbers are normally written in the form: 1.28e+3.

I included it here because this representation has become quite popular on modern recording devices as it effectively rids us of clipping. The mantissa stores essentially the same value as would be stored for a 24-bit depth, but then the exponent allows it to be shifted up or down the dynamic range. This gives us the, frankly staggering, dynamic range listed in the table. However, the actual precision is still reliant on the mantissa, which only has an effective dynamic range of 144 dB. In this sense, 32-bit (float) is really no better precision than 24-bit, but it does allow us to largely ignore clipping. As such, 32-bit (float) depths don't really require gain staging in normal usage, but it's still good practice to learn this technique and apply it anyway.

Although you might think that using 32-bit or 32-bit (float) makes the most sense, you should know that the theoretical maximum sound pressure on Earth (at sea level) is only around 194 dB SPL[^max-spl], so 24-bit audio is already getting pretty close to the physical limits. Human hearing, on the other hand, only has a usable dynamic range of around 120 dB[^human-dr] (that accounts for the quietest sounds we can hear up to the loudest sounds before it hurts and damages our ears). As such, 32-bit (fixed) is really overkill. 32-bit (float) is technically an improvement over 24-bit, but I've never really found the 'zero-clipping' to be anything more than a gimmick. Gain staging really isn't that hard to do, nor is preventing your audio from clipping along the chain. It's up to you, but if you can get a cheaper 24-bit device then I don't think a 32-bit (float) device is worth the extra money.

As a matter of interest, many modern DAWs actually process everything internally as 32-bit (float) so that you can reverse clipping that you applied within the program. As such, the only time it will really matter for us in an irreversible way is at the point of recording.

So, hopefully you now know why you should be gain staging when recording, and roughly the values to aim for. It's an easy thing to apply, but ignoring it has a huge negative effect.

If you want to know more about bit depth, check out my post on [Digitally Storing Audio](/secrets/digitally-storing-audio/#bit-depth).

[^headroom]: This is sometimes called *headroom*.
[^noise-floor]: *Noise floor* is the unwanted noise that is unintentionally recorded. This can include ambient and background noise from the recording space, as well as noise within the audio signal chain itself (like limitations of the mics and cables, or quantisation noise from storing analogue information digitally).
[^clipping]: *Clipping* is a distortion that can occur any time the audio signal is amplified beyond the dynamic range[^dynamic-range] limits of the recording equipment/medium. To ensure this type of distortion isn't introduced, your audio should never clip at any point in the entire production pipeline (from recording through to final release).
[^dynamic-range]: *Dynamic range* is the difference between the loudest and quietest sounds in a recording.
[^max-spl]: [BBC Science Focus – What's the loudest a sound can be?](https://www.sciencefocus.com/science/whats-the-loudest-a-sound-can-be)
[^human-dr]: [D. R. Campbell, "Aspects of Human Hearing"](https://web.archive.org/web/20110821051130/http://media.paisley.ac.uk/~campbell/AASP/Aspects%20of%20Human%20Hearing.PDF) — "The dynamic range of human hearing is approximately 120 dB."
