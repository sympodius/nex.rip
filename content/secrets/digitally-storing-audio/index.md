---
title: 'Digitally Storing Audio'
date: 2026-07-10T11:36:37+01:00
author: John Urquhart Ferguson
description: Learn how sample rate, bit depth, and file format affect digital audio quality---plus practical recording settings to avoid aliasing, clipping, and quantisation noise.
summary: The settings that make or break your recording.
readingEase: 10th to 12th Graders
gradeLevel: 12
images:
- images/post-cover.png
- images/sample-rate-quality-diagram.png
- images/bit-depth-quality-diagram.png
categories:
- tutorials
tags:
- tutorials
- audio-production
- digital-audio
- recording
- sample-rate
- bit-depth
- file-formats
draft: false
---

{{< banner src="images/post-cover.png" alt="A teal audio wave diagram comparing low and high sample rates and bit depth, transitioning from a low sample rate/bit depth on the left to high sample rate/bit depth on the right. Credit: John Urquhart Ferguson" >}}

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

Nex has asked me to help out with some of the more technical posts here on Nex.RIP. I'm not sure if it's because he doesn't really know this stuff, or because he wants me to be associated with the more tedious topics. Either way, I'm glad to be part of the team.

Today's topic is the deeply important (but somewhat dry) issue of capturing and storing audio digitally. While it might seem like a trivial technicality, it's important to have a basic understanding of how audio gets stored on computers.

The quality of an audio recording---digital or analogue---is largely dependent on the following:

- Recording Medium
- Microphones
- Performance
- Physical Recording Environment and Microphone Placement

However, even if you perfect all the above, recording or storing digital audio incorrectly can easily ruin the quality. This post will help you make sensible choices to avoid that. The three main things to consider are sample rate, bit depth, and file format.

If all of this sounds too boring or too complicated, you can just skip to the end to see [the settings that Nex uses](#what-nex-uses).

## Sample Rate
Analogue signals exist within a continuous spectrum, whereas digital signals exist as a series of discrete values. Audio waves are analogue by nature. In order to represent them digitally, we must take a series of discrete measurements. The more measurements (or samples) that we take in a given time, the closer a digital signal will be to its analogue counterpart. We refer to this as the sample rate, and we measure it in hertz. For example, 1 hertz (Hz) would be equal to one sample taken each second; 1000 Hz (1 kHz) would be equal to one thousand samples taken each second; and so on.

As such, the higher the sample rate, the more accurate your digital signal will be to the original audio. From the Nyquist–Shannon sampling theorem[^sampling-theorem], we know that not using enough samples will result in a type of digital distortion called aliasing. Aliasing is when a higher frequency is mistakenly recorded as a lower frequency. To avoid this, we must set our sampling rate in relation to the highest frequency we are trying to record. The sampling rate must be more than twice this maximum frequency if we hope to avoid aliasing. This minimum required sampling rate is known as the Nyquist rate. Half the sampling rate itself is called the Nyquist frequency (or folding frequency), and it represents the highest frequency that can be accurately captured at that rate.

The range for human hearing is usually stated as 20 Hz to 20,000 Hz. This means that the Nyquist rate for human hearing would be 40,000 Hz. Therefore, the minimum viable sampling rate to prevent audible aliasing in your recordings is 40 kHz. However, that doesn't mean that recording at this frequency will always prevent audible aliasing. Let's examine the diagram below:

{{< diagram src="images/sample-rate-quality-diagram.png" alt="Sample rate quality comparisons. Credit: John Urquhart Ferguson" >}}

The diagram above shows the worst-case scenario for "Below Nyquist" where the sample rate is exactly the same as the maximum frequency. In this scenario, you will only ever get a flat line. However, as long as the sample rate is below twice the maximum frequency, it will always have some level of aliasing.

The situation for "At Nyquist" shows the best-case scenario for the Nyquist rate. The sampling just happened to occur in perfect alignment with the peaks and troughs, meaning we got a pretty close approximation of the original wave. However, the Nyquist rate doesn't guarantee this result. If the sampling had occurred a quarter of a cycle later, then it would also have resulted in a flat line. This is a worst-case scenario. In reality, using the actual Nyquist rate is always likely to produce only a somewhat accurate wave, and will still have some level of aliasing. There are two ways we can mitigate this issue.

The first is to simply use a sample rate higher than the Nyquist rate. The higher it is, the more samples will be taken, and the more accurate the digital reconstruction of the analogue signal will be (limiting the amount of potential aliasing).

The second option is to oversample during recording. This is a technique whereby a significantly higher sampling rate is used during recording, and then the excess samples are averaged together to produce the originally desired sample rate above the Nyquist rate. Because each final sample represents an average of multiple measurements, it is far less likely to end up in the worst-case scenario territory mentioned above. A lot of modern audio recording hardware (and some software) does this automatically.

This method of averaging the sample measurements is also why we can distribute our digital audio at a lower sample rate than what we used to record and process it. [CDs](https://en.wikipedia.org/wiki/Compact_Disc_Digital_Audio#Audio_format) use a sample rate of 44,100 Hz, which is only a little above the Nyquist rate for the human hearing range. However, as long as the audio was produced by down-sampling from a higher rate, it will average out the samples. Because the target sample rate is still above the Nyquist rate for human hearing, the audio will be largely free from distortion and retain high quality.

Higher sampling rates also make pitch adjustments easier. If the sampling rate is higher than the Nyquist rate for human hearing, then we can bring back notes and harmonics that would have been outwith human hearing range before the pitch adjustment. If you try to pitch-shift down audio that was originally above the Nyquist limit, it simply won't have been captured cleanly. The resulting aliasing will then become audible in your recording.

The downside of higher sampling rates is that they require more computer processing power. As such, your computer may be the deciding factor in which sample rate you pick. Another, less common, downside is that higher sample rates can increase the likelihood of intermodulation distortion[^intermodulation-distortion]. However, this is unlikely to affect you while recording, so you should probably ignore it when making your choice.

Although 48 kHz is a common choice for studio-level recordings, you should use 96 kHz or 192 kHz if your recording setup and computer allow it (these are considered *archive-level* quality).

## Bit Depth
While the sample rate tells us how many measurements are being taken over time, the bit depth is the precision of each of those measurements. As with increasing the sample rate, a higher bit depth will make the digital recording more accurate.

In particular, increasing the bit depth will increase the dynamic range of each sample (the difference between the loudest and quietest signals that can be represented). This will make it more accurate to adjust the volume of your audio recording later on, as well as do a better job of capturing the full range of dynamics in the first place.

Another benefit of increasing the dynamic range is that it lowers the quantisation noise for the recording. Quantisation noise is specific to digital recordings and results from rounding errors during analogue-to-digital conversion. It becomes more noticeable when the signal level is low, so if you have to later amplify the signal, this quantisation noise will be boosted and become more audible. Amplifying the volume of quietly recorded audio will always result in the boosting of a 'white noise' referred to as the 'noise floor' of the recording[^noise-floor]. However, quantisation noise often accounts for the vast majority of the noise floor when recording digitally.

While the bit depth sets the amount of quantisation noise in your recording overall, it is spread evenly across the entire frequency range of your recording. This means that if you increase the sample rate, the same amount of quantisation noise is spread thinner across a broader frequency range. This is another reason to use the highest sample rate that your setup allows, because it will lower the amount of quantisation noise in the audible part of the frequency spectrum.

Another issue that you must be aware of in the digital storage of audio is digital clipping. The dynamic range sets a maximum and minimum volume that can be stored. If audio is recorded above the maximum volume, the signal will 'clip.' This means that the tops and bottoms of the waveforms will be flattened out, losing that part of the signal entirely. Even when reducing volume after recording, this lost information cannot be restored, leading to harsh-sounding distortion. As such, it is important that your recorded audio stays within the defined dynamic range. However, the greater the bit depth, the greater the dynamic range. And the greater the dynamic range, the more headroom we have to capture our audio without it clipping.

Clipping can occur any time the audio signal is amplified beyond the dynamic range limits defined by the bit depth (though some software accounts for this in certain situations). To ensure this type of distortion isn't introduced, your audio should never clip at any point in the entire production pipeline (from recording through to final release).

{{< diagram src="images/bit-depth-quality-diagram.png" alt="Bit depth quality comparisons. Credit: John Urquhart Ferguson" >}}

To give you a rough idea of the quality of various bit depths, here are some examples:

- 8-bit is quite low (think of the original [Nintendo Game Boy](https://en.wikipedia.org/wiki/Game_Boy#Hardware))
- 16-bit is generally fine ([CD](https://en.wikipedia.org/wiki/Compact_Disc_Digital_Audio#Audio_format) quality is 16-bit at 44.1 kHz)
- 24-bit is very high quality ([DVD](https://en.wikipedia.org/wiki/DVD-Video#Audio_data) quality is often 24-bit at 96 kHz, but sometimes 16-bit at 48 kHz)

16-bit is the lowest you can reasonably choose for a modern recording if you're hoping to make it sound like the original audio. However, consider using 24-bit if you're using a 48 kHz sample rate, and 24-bit or 32-bit if you're using 96 kHz or 192 kHz. This will make the most of the sample rate, reduce the likelihood of clipping by allowing you to use a larger dynamic range, and lower the quantisation noise.

## File Format
Lossless [Linear PCM](https://en.wikipedia.org/wiki/Pulse-code_modulation) [WAV](https://en.wikipedia.org/wiki/WAV) format is the most common audio file format used in digital recording, and you should stick to it as much as you can. It's often listed simply as *WAV* or *Lossless WAV*.

This format retains all the original information given to it, so nothing is lost. It is for this reason that it is called a *lossless* format. It does take up considerable storage space, though, especially when using higher sample rates and bit depths.

If you are done with a recording and have released it to the world, you could switch to storing things in [FLAC](https://en.wikipedia.org/wiki/FLAC) format for archiving. FLAC files are also lossless, but they compress their data to only use about half the disc space of Linear PCM WAV files.

You should steer clear of [MP3](https://en.wikipedia.org/wiki/MP3) and other *lossy* compressed formats when recording and editing. Lossy files *do* throw away data, and there is no way to get it back.

Even though FLAC files are lossless, being a compressed format means they're a bit slow for recording and editing. It is for this reason that they are mostly used for archiving.

Keep in mind that most distribution systems prefer to use a 48 kHz sample rate at 16-bit depth, so sticking with higher multiples of those numbers (e.g., a 96 kHz sample rate, or 32-bit depth) will make the step-down more accurate and require less smoothing from your encoding software.

## What Nex Uses
Hopefully you can see that recording your audio with as high a sample rate and bit depth as your setup allows is almost always the best choice. It's also best to store things in an uncompressed (lossless) format.

Nex's current setup is built around his [Zoom H6](https://zoomcorp.com/en/us/handheld-recorders/handheld-recorders/h6-audio-recorder/) handheld recorder. It can't go higher than 96 kHz at 24-bit (stored as Lossless Linear PCM WAV), so that's what he's using across his entire pipeline.

A lot of tutorials online will recommend using a 48 kHz sample rate at 16-bit depth. While this is indeed the way most music is still *distributed*, there is really no good reason to go lower than your hardware's capabilities. In Nex's case, his computer is capable of processing audio at a 96 kHz sampling rate, but that requires twice the computing power of using a 48 kHz sampling rate. If your computer isn't up to using higher sampling rates and bit depths, you shouldn't force it. I would suggest, however, that you don't go lower than 44.1 kHz and 16-bit. Most music outlets require your released tracks to be at least this quality, and you can never go any higher than the quality you used for recording and editing.

Hopefully you've found this all useful and now have a better understanding of how audio signals are stored on computers, and why the numbers matter. If not, Nex won't mind you using the same settings as him.

[^sampling-theorem]: [Primer on the Nyquist–Shannon sampling theorem from Wikipedia](https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem).
[^intermodulation-distortion]: [Primer on intermodulation distortion from Wikipedia](https://en.wikipedia.org/wiki/Intermodulation).
[^noise-floor]: *Noise floor* is the unwanted noise that is unintentionally recorded. This can include ambient and background noise from the recording space, as well as noise within the audio signal chain itself (like limitations of the mics and cables, or quantisation noise from storing analogue information digitally).
