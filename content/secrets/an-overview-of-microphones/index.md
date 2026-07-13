---
title: 'An Overview of Microphones'
date: 2026-07-13T09:14:39+01:00
author: Nexami Engeo
description: A beginner's guide to microphones covering dynamic, condenser, and ribbon types, polar patterns, buying tips, and accessories for budget recording setups.
summary: "Don't overthink it... but think a little."
readingEase: 10th to 12th Graders
gradeLevel: 12
images:
- images/post-cover.png
categories:
- tutorials
tags:
- tutorials
- audio-production
- microphones
- recording
- shure-sm57
- shure-sm58
- røde-nt1-a
- røde-nt2-a
draft: false
---

{{< banner src="images/post-cover.png" alt="A RØDE NT1-A next to a RØDE NT2-A in front of two pop filters and some black moving blankets. Credit: John Urquhart Ferguson" >}}

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

Once you've [set up your recording space](/secrets/setting-up-your-recording-space) and sorted out a [recording device](/secrets/recording-devices-on-a-budget), you'll need a microphone to actually capture audio.

If you just want my recommendations, you can [skip below](#microphone-buying-suggestions), but I'd like to give a quick primer on the most common types of microphones and their various pros and cons.

The three most common types of microphones you are likely to come across are:

- Dynamic
- Condenser
- Ribbon

Ribbon microphones have a warm, smooth tone with a natural roll-off in the high frequencies, which tames harshness and sibilance. They are generally more fragile than condenser and dynamic microphones, and can be damaged by phantom power[^phantom-power] or strong blasts of air. However, the good ones are excellent for particular use cases---especially string instruments, guitar amplifiers, and brass---and their figure-8 polar pattern can be useful for capturing room ambience. That said, in my experience you usually have to shell out quite a lot of money to get a good one, and their cost-to-performance ratio means we won't be exploring them further.
 
Dynamic microphones can handle very loud sound pressure levels without distorting, and their passive design means they have no inherent self-noise. This makes them very versatile and forgiving for beginners. They're especially well suited to live situations, recording guitar amplifiers, and capturing loud or unpredictable sources where their robustness and low sensitivity make level management easy. The downside is that they generally lack the detail and extended frequency response of high-quality condenser microphones.

Condenser microphones tend to offer very high clarity and detail for a reasonable price point, but they work best in controlled environments with low background noise due to their high sensitivity. They also generally require phantom power, which needs a recording device capable of supplying it. Condenser microphones also capture transients[^transients] and dynamics[^dynamics] more accurately, meaning it's important to set recording levels carefully to avoid clipping[^clipping].

Beyond the sensor type of a microphone, we must also take the polar pattern into account. The three most common types are:

- Cardioid
- Figure-8
- Omnidirectional

Cardioid mics accept sound from the front, and reject it from the rear (with diminishing acceptance along the sides). Figure-8 mics accept sound from the front and rear, but reject it from the sides. Omnidirectional mics accept sound from every direction. Due to these variations, it's important to know what polar pattern your mic is using, as well as knowing where the 'front' is. This is sometimes non-obvious. End-address microphones are most sensitive at the tip of the grille, while side-address microphones are most sensitive along the side of the body. Make sure to read the manual to know which way your microphone should be pointing.

For our needs, cardioid microphones are likely to be the most useful because we will be able to direct the microphone to a sound source and not have to worry so much about the ambient noises from other directions.

When performing with a cardioid or other directional microphone, the distance from the audio source is important: it's not just about volume. The closer the audio source is to the directional sensor of such microphones, the more bass will be added to the signal. This is known as the proximity effect. As such, it's important to place the microphone at the correct distance to get a good balance between bass frequencies and other frequencies coming from the audio source. A good general rule is to keep the audio source between 6 and 12 inches from the microphone sensor, but you'll need to experiment and use your ears to find what works best in your own setup.

You should also be aware that microphones and their cables can contribute a fair amount to the noise floor[^noise-floor]. The only solution to this is to use higher quality microphones and cables, and to keep cable runs as short as possible---longer cables act as antennas for interference and add capacitance that can degrade the signal, and no, winding a long cable into a coil won't help, because it's the electrical length of the cable that matters, not the physical distance between its ends.

## Microphone Buying Suggestions
If you're on a very tight budget, and what you spent on the dead room and portable recorder is freaking you out, I'd suggest just getting yourself a [Shure SM58](/secrets/sm57-or-sm58) (which will set you back about £100). They are probably the best bang-for-your-buck microphones available. Although used most commonly for live performances (due to being dynamic cardioid mics), SM58 mics can be used for studio recording as well. In fact, the extremely similar SM57 was used to record the entirety of the 1982 Bruce Springsteen album, *[Nebraska](https://en.wikipedia.org/wiki/Nebraska_(album)#Recording)*, and almost the entirety of the 2003 Sufjan Stevens album, *[Michigan](https://en.wikipedia.org/wiki/Michigan_(album)#Recording_and_production)*.

Although a dynamic microphone will never quite reach the fidelity of a condenser microphone, you will not get a higher mic quality at this price point (and going lower will be a poor investment). Also, dynamic microphones are generally much easier to use than other kinds, don't require shock mounts, and are well suited to beginners. They can also double up as live mics, should you require some for gigging.

Some people may tell you that you'd be better off getting the SM57 instead of the SM58, but [I think they're wrong](/secrets/sm57-or-sm58).

If you're looking for greater clarity, though, I'd recommend getting a decent quality large condenser microphone. These work well in more scenarios than other microphone types, so you'll have to buy fewer mics overall. You can get really great large condenser microphones for between £150--£350. Going above this sort of price range, however, will likely see diminishing returns. It's not to say spending more money wouldn't make things better... it's just that you'll be spending increasingly more money for decreasingly noticeable improvements (especially given that our recording environment is far from perfect).

I ended up going for the [RØDE NT1-A](https://rode.com/en-us/products/nt1a) for £158. In my opinion, this is the highest quality and most versatile large cardioid condenser microphone you're going to get before the ever-increasing costs start to have noticeably diminishing returns. The quality really is pushing the limits of what my recording setup can capture, and it's solidly built. It might not be the absolute best choice for every situation (it's not a perfectly flat frequency response---it slightly emphasises highs and subtly attenuates lows to make vocals sound brighter), but it's still a solid choice for more situations than any other mic at this price point. It does require phantom power (which my [Zoom H6](/secrets/recording-devices-on-a-budget) can accommodate), and you'll need the included shock mount (see below) to make the most of it. I also ended up getting the slightly more advanced version (the [RØDE NT2-A](https://rode.com/en-us/products/nt2-a)) because it can switch between three different polar patterns (cardioid, omni, and figure-8). In terms of sound quality, though, these two mics are near-identical. The NT2-A was almost double the price of the NT1-A, but having these two mics allows me to perform more recording techniques, which I'll cover in another post.

Before we move on, a quick note about mic choices: people have *very* strong feelings about microphones. The SM57/SM58 'differences' come up a lot, even though [they're basically identical](/secrets/sm57-or-sm58); and a lot of professional producers seem to have a rather unwarranted *hate* for the NT1-A. I daresay if you're used to infinite budgets, then any mic under £1000 is probably going to seem like too much effort to EQ back to flat, but you should ignore these types of discussions online. We're trying to get the best bang for our buck, and we're not recording in a professional recording studio. The mics I've suggested here are excellent quality, especially weighed against their cost.

In addition to the actual microphones, we will need good quality microphone stands to get the mics to an appropriate height for what is being recorded. I went for a series of Konig & Meyer 21090 compact microphone stands, at a cost of £50 each. K&M are widely regarded as making the best stands. They stay in place, and are difficult to break. It's worth spending a little extra money on them to ensure a good take isn't ruined by the mic suddenly moving around.

Another consideration is a shock mount. This is a means of attaching a microphone to a stand such that knocking the stand won't be heard by the microphone. This is less important on dynamic microphones, but is essential for condensers.

Finally, you'll want a pop-shield. This is a thin porous material placed in front of the microphone (often made of a thin, stretched nylon) that can help reduce the unpleasant popping noise that comes from pronouncing certain letters like p, t, d, k, g, and b---with p and b being the main culprits. These are called plosives and this cheap solution helps a lot with reducing them. My condenser mic came with a pop shield and a shock mount, which is not uncommon. Although metal pop filters are more durable than the nylon ones, they can introduce subtle resonance and may not dampen high frequencies as effectively. A common misconception is that pop filters help with sibilance ('s' sounds and hissing), but those are best addressed in post-production with de-essing tools. Pop filters are also useful for protecting the microphone sensors against saliva.

On a related note, if you are recording outside then you might consider a windscreen (a foam cover) to lower the effects of low hum and rumble from wind. This will reduce the audio quality from your intended subject, but will still be better than allowing the wind in. It might also protect a little from rain (though you really should avoid getting your microphones wet at all costs).

And that's about as much as you'll need to know about microphones to get you started. Learning about microphones is a very deep rabbit hole to fall down, but I've tried to keep things to the essentials for our desired goal of creating a 'professional' sounding recording as quickly and cheaply as possible. We still have a few more things to cover in recording audio before we move back *in the box*, but a microphone is the last required purchase for a while. Still, it's a pretty dang important one!

[^phantom-power]: *Phantom power* is a means of powering the microphone's internal electronics through its XLR cable.
[^transients]: *Transients* are the brief, sharp bursts of energy that occur at the start of a sound (for example, the initial attack of a drum hit, the pluck of a guitar string, or the consonants in speech). Accurate transient capture means the microphone can reproduce these fast-moving details faithfully, rather than smoothing or rounding them off.
[^dynamics]: *Dynamics* refer to the variations in volume and intensity throughout a performance. A microphone that captures dynamics accurately will faithfully reproduce these fluctuations rather than compressing or flattening them, preserving the natural ebb and flow of the sound.
[^clipping]: *Clipping* is a distortion that can occur any time the audio signal is amplified beyond the dynamic range[^dynamic-range] limits of the recording equipment/medium. To ensure this type of distortion isn't introduced, your audio should never clip at any point in the entire production pipeline (from recording through to final release).
[^noise-floor]: *Noise floor* is the unwanted noise that is unintentionally recorded. This can include ambient and background noise from the recording space, as well as noise within the audio signal chain itself (like limitations of the mics and cables, or quantization noise from storing analogue information digitally).
[^dynamic-range]: *Dynamic range* is the difference between the loudest and quietest sounds in a recording.

