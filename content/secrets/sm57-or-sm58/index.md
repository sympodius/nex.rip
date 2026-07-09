---
title: 'SM57 or SM58?'
date: 2026-07-09T06:54:01+01:00
author: Nexami Engeo
description: 'SM57 or SM58? Both share identical sensors but differ in grille design. I argue the SM58 is the better buy for most beginners.'
summary: 'Same mic, different grille. The internet has it backwards.'
readingEase: 8th/9th Graders
gradeLevel: 10
images:
- images/post-cover.png
categories:
- digressions
tags:
- digressions
- audio-production
- home-studio
- beginner
- microphones
- shure
- gear
- live-sound
- vocals
draft: true
---

{{< banner src="images/post-cover.png" alt="A fully assembled SHURE SM58 microphone lying next to one with its grille unscrewed. Credit: John Urquhart Ferguson" >}}

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

When people ask for beginner microphone recommendations these days, I see one answer more than any other: the [SHURE SM57](https://www.shure.com/en-US/products/microphones/sm57). What interests me is that twenty years ago when I was doing home recording for the first time, I was recommended a different microphone: the [SHURE SM58](https://www.shure.com/en-US/products/microphones/sm58?variant=SM58-LC). The names sure are similar and they're made by the same company, but what are the differences? And what sets these microphones apart from all the others? I aim to get to the bottom of that today, and tell you why I think the modern Internet is recommending the wrong mic.

When I see these two mics being compared online, the SM57 is usually recommended over the SM58 because it's the more 'versatile' option: the SM57 is apparently great for all instruments and vocals, whereas the SM58 is 'just a vocal mic.' Well, let's have a closer look at the two microphones and see what we can find.

Both the SM57 and SM58 are dynamic microphones. That means they temper the dynamic range[^dynamic-range] of their input signal so that quieter sounds are amplified away from the noise floor[^noise-floor], and excessively loud noises are pulled back from clipping[^clipping]. This makes dynamic microphones very versatile and easy for beginners to use. They're especially well suited to live situations, for recording guitar amplifiers and other very loud signals, and for recording singers or instruments with a high dynamic range. The downside is that they usually lack the fuller clarity of high-quality ribbon and condenser microphones.

The SM57 and SM58 both employ near-identical cardioid polar patterns[^sm57-spec][^sm58-spec]. Cardioid mics accept sound from the front, and reject it from the rear (with diminishing acceptance along the sides). This means that you can direct the microphone toward a sound source and not have to worry so much about the ambient noises from other directions.

What about sensitivity? Well, the official docs say they're equal on that as well[^sm57-spec][^sm58-spec]. 

Both mics also cost the same amount of money.

So if the microphones are both of the same type, both use the same polar pattern, are both made by the same company, both have the same sensitivity, and both cost the same amount of money, what else can we use to tell them apart? 

What about the connectors? Nope, both use XLR connectors[^sm57-spec][^sm58-spec].

How about impedance? Nope, same impedance levels too[^sm57-spec][^sm58-spec]. 

Hmm...

Maybe the SM57 has a better frequency range response? Well, that one is technically true. The SM57 has a frequency response from 40 Hz to 15,000 Hz. The SM58 can only go as low as 50 Hz, but still goes up to 15,000 Hz. In practice, it's unlikely that you'll hear that tiny difference in bass response. 

What about the frequency response curves? Again, almost identical. The SM57 slightly boosts sounds around 5 kHz[^shure-discussion-page], which the SM58 does not. The SM58 slightly dampens higher frequencies, which the SM57 does not[^sm57-spec][^sm58-spec]. But, again, it's practically imperceptible.

So far, the numbers all make these mics seem pretty much the same. However, if you actually look at them both, there is a clear physical difference.

The SM58 has a slightly thicker shell that should give it more protection from electromagnetic interference[^sm58-spec]. However, it wouldn't be fair to say that the SM58 has better build quality than the SM57. Both are built like tanks and will likely last longer than you will.

The SM58 also has a ball grille on top, with a thin layer of foam inside. This slightly dampens high and low frequencies, and protects it a little from wind and plosives[^plosives]. It also forces the audio source to be at least the same distance away from the microphone sensor as the size of the ball grille. The ball grille is also made of metal, affording additional protection against electromagnetic interference.

The SM57, on the other hand, has a flat resonator grille right next to the microphone sensor, which is responsible for the 5 kHz boost I mentioned earlier[^shure-discussion-page]. It also allows the audio source to be a lot closer to the sensor. Arguably, this makes it a little easier for a beginner to accidentally place the mic too close to a sound source, but it also means it's more flexible for people who know what they're doing. The grille itself is made of plastic, though, which offers no protection from electromagnetic interference[^shure-sm57-hum].

But wait a minute, it sounds like it's just the different grilles that account for almost all of the extremely minor differences we've found. Is it possible that without the grilles, they'd essentially be the same microphone?

In fact, that's exactly right: the SHURE SM57 and SM58 use identical sensor elements[^shure-youtube][^shure-faq]. The only difference in how they sound (and it's a fairly imperceptible difference at that) is due to the different grilles that each employs.

So what would happen if you swapped the grilles around? Annoyingly, this isn't possible. While the ball grille on the SM58 can be screwed off with ease, the resonator grille on the SM57 is securely attached. However, if you just remove the ball grille from the SM58 (and are very careful not to damage the now exposed sensor), it performs pretty much identically to an SM57 (especially if you're willing to slightly boost the EQ around 5 kHz). If you want to get the SM57 to sound nearly identical to an SM58, just add the [official windscreen cover](https://www.shure.com/en-US/products/accessories/a2ws) that SHURE sells. It really is that simple. However, there's no easy way to give the SM57 the improved shielding against electromagnetic fields that the SM58 has.

More important, really, is why you should buy either of them.

Well, I've already stated that they're built like tanks. They were the first dynamic microphones to use an internal pneumatic shock mount (which is the reason they can be handled during performances), and no other dynamic mics have improved on that design since. You'll also likely find SM58s and SM57s in pretty much every studio in the world (the SM stands for 'Studio Microphone,' after all). They're both highly reliable and built to exacting specifications. You always know what you're getting when you lift up an SM57/58. Although I couldn't find a definitive source for this, I'm pretty sure they're the best-selling microphones ever made. As I write this, the SM57/58 has been in production without major change for sixty years.

They've been used by every US President since 1965, and as a vocal studio mic by Madonna[^madonna], David Bowie[^bowie], John Lennon[^lennon], Jack White[^jackwhite], Björk[^bjork], Bono[^bono], and many others.

All the vocals on Rage Against The Machine's debut album used an SM58[^ratm]. Heck, the SM57 was used as the *only* mic on an entire Bruce Springsteen album[^nebraska], and most of a Sufjan Stevens album[^michigan].

Although a dynamic microphone will never quite reach the fidelity of a condenser or ribbon microphone, you will not get a higher-quality mic at this price point (and going lower will be a poor investment). Also, dynamic microphones are generally much easier to use than other kinds, don't require shock mounts, and are well suited to beginners. They can also double up as live mics, should you require some for gigging. I don't think you'll find many producers who would deny that buying an SM57/58 as a first microphone is kind of a no-brainer.

So, what we've learned is that internally these mics are near-identical and that an SM58 can easily be made to sound like an SM57 without spending any more money. The SM58 also has better electromagnetic shielding, and when the ball grille is attached, it is better suited to vocals than the SM57.

While the SM57 can be made to sound like an SM58 by using a windscreen, that costs additional money. Also, there is no easy way to make an SM57 match the SM58's electromagnetic shielding (which is probably going to be more important in home recording where you are likely to record much closer to EM fields than in a studio).

Additionally, I would argue that if you are just starting out with gigging and are performing at places where you need to bring your own speakers and such, the SM58 mics will probably be more useful to you because they operate better in more environments due to their built-in wind and plosive protection.

I think you can see what I'm getting at: if you only have the money to buy one of them, the recommendation should be for an SM58. This suggestion flies very much against the recommendations I see online these days, but the logic seems clear enough to me. However, both mics are absolutely great. Even before messing around with grilles and windscreens, you're unlikely to hear the difference for the majority of applications.

But if I were to give my most balanced recommendation, it would be this:

- If you're a careful person, are really penny-pinching, and primarily want the mic for vocals, then the SM58 is the more versatile choice.
- If you're not a careful person, have a little more money, and primarily want the mic for instruments, then the SM57 is the more versatile choice.
- If you only want the mic for vocals, then definitely the SM58.
- If you only want the mic for instruments, then definitely the SM57.

If you do end up going for an SM58, I would recommend getting the base model without the switch. The switch just complicates things and reduces the life expectancy of the microphone. It's actually been years since I've seen anything but the basic model in a studio or on stage.

I bought my first two SM58 microphones back in 2004. I've never had to replace them. We recorded all our early music using them and used them for live gigs too. They both sound just as good now as they did back then. After more than two decades, it's still a no-brainer. Honestly, it's probably one of the best recording investments you'll ever make.

[^dynamic-range]: *Dynamic range* is the difference between the loudest and quietest sounds in a recording.
[^noise-floor]: *Noise floor* is the unwanted noise that is unintentionally recorded. This can include ambient and background noise from the recording space, as well as noise within the audio signal chain itself (like limitations of the mics and cables, or quantization noise from storing analogue information digitally).
[^clipping]: *Clipping* is a distortion that can occur any time the audio signal is amplified beyond the dynamic range limits of the recording equipment/medium. To ensure this type of distortion isn't introduced, your audio should never clip at any point in the entire production pipeline (from recording through to final release).
[^sm57-spec]: Found in the [official specifications for the SHURE SM57](https://www.shure.com/en-US/docs/guide/SM57)
[^sm58-spec]: Found in the [official specifications for the SHURE SM58](https://www.shure.com/en-US/docs/guide/SM58)
[^shure-discussion-page]: [SHURE's own discussion on the differences between the SM57 and SM58](https://www.shure.com/en-US/insights/faq-whats-the-difference-between-the-sm58-and-the-sm57)
[^plosives]: *Plosives* are the unpleasant popping noises that come from pronouncing certain letters like p, t, d, k, g, and b.
[^shure-sm57-hum]: An official [SHURE response in their FAQ](https://service.shure.com/Service/s/article/sm57-hum?language=en_US&region=en-US) where they show that the SM58 has better electromagnetic shielding than the SM57.
[^shure-youtube]: [YouTube Clip on SHURE's Official Channel](https://www.youtube.com/clip/Ugkx85z3yGLjMvy0f_-bwuMDeiEBRBfyIMtf) where SHURE's official historian says the sensor element in the SM57 and SM58 is identical.
[^shure-faq]: [SHURE's official FAQ saying that the grille is the only major difference between the SM57 and SM58](https://service.shure.com/s/article/sm57-vs-sm58?language=en_US&region=en-US).
[^madonna]: https://web.archive.org/web/20110830193214/http://www.sheppettibone.com/sp_erotica_diaries.htm
[^bowie]: https://web.archive.org/web/20161105071200/http://timpalmer.com/wp-content/themes/timpalmer/pdfs/Melody_maker_1989.pdf
[^lennon]: https://web.archive.org/web/20160808104354/https://www.soundonsound.com/people/john-lennon-whatever-gets-you-thru-night
[^jackwhite]: https://www.soundonsound.com/techniques/inside-track-jack-white
[^bjork]: https://www.moredarkthanshark.org/eno_int_audproint-oct08.html
[^bono]: https://www.soundonsound.com/people/robbie-adams-recording-u2s-achtung-baby-zooropa
[^ratm]: https://soyuzmicrophones.com/articles/soyuz-spotlight-garth-richardson
[^nebraska]: [Bruce Springsteen's "Nebraska" was made entirely with an SM57](https://en.wikipedia.org/wiki/Nebraska_%28album%29#Recording).
[^michigan]: [Sufjan Stevens' "Michigan" was made almost entirely with an SM57](https://en.wikipedia.org/wiki/Michigan_%28album%29#Recording_and_production).
