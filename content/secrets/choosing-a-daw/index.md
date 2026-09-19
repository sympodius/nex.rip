---
title: 'Choosing a DAW'
date: 2026-09-12T13:23:01+01:00
author: Nexami Engeo
description: Compare Pro Tools, Logic Pro, Ableton Live, REAPER and Ardour. See what a DAW really needs, and how to pick the right one for budget home recording.
summary: The core of everything *in the box*.
readingEase: College Students
gradeLevel: 14
images:
- images/post-cover.png
categories:
- tutorials
tags:
- tutorials
- audio-production
- in-the-box
- daw
- home-studio
- open-source
- hindrex
- ardour
- reaper
- logic-pro
- ableton-live
- pro-tools
draft: false
---

{{< banner src="images/post-cover.png" alt="Stylised cards comparing Pro Tools, Logic Pro, Ableton Live, REAPER and Ardour, with DAW control illustrations and hindrex rating codes. Credit: John Urquhart Ferguson" >}}

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

If you're following [my method for quality home recording](/categories/tutorials/asc.html) then you should have now [recorded the first audio](/secrets/basic-recording-techniques) parts for your song inside a [dead room](/secrets/setting-up-your-recording-space), on a [portable recorder](/secrets/recording-devices-on-a-budget), using [a decent microphone](/secrets/an-overview-of-microphones). Now, as a separate process, we need to get those recordings *[in the box](/secrets/whats-in-the-box)* so that we can start working with them. This is perhaps the biggest difference in my method compared to others. The far more common approach is using an audio interface[^audio-interface] and recording directly *in the box*. Perhaps I'm just unlucky and it's actually really common to have silent computers in quiet rooms with great acoustics, but I've found my solution gives me much better results (at the cost of some inconvenience).

Whether you are recording directly into your computer via an audio interface or first going through a portable recorder, the audio still needs to end up in a DAW.

In modern parlance, DAWs are computer programs that are capable of recording, editing, processing, mixing, and mastering audio. Earlier definitions were somewhat different, but this seems to be the most accepted one now. The Digital Audio Workstation is where we'll be dealing with all the post-production aspects of our musical recordings.

Because it's such an important part of our music production journey, choosing your DAW is quite a big decision. However, most DAWs have very similar capabilities. So how do we choose between them? Well, first off, they have to at least meet your minimum requirements. For me, this would be:

- Ability to record audio and MIDI[^midi]
- Ability to edit audio and MIDI non-destructively
- Ability to process audio and MIDI non-destructively
- Support for plugins and virtual instruments (especially in the VST, CLAP, or LV2 formats, as these are the most common for free plugins)
- Support for a high number of audio tracks (preferably unlimited)
- Ability to route signal pathways between any track or bus
- Support for busses, groups, and sends
- Support for automations
- Ability to pan and fade tracks, groups, and busses

Most of these capabilities are found in all the popular DAWs, so we'll need some additional criteria to make a decision.

In all likelihood, your choice will mainly depend on what sort of computer you have, what sort of workflow you prefer, and how much you want to spend. For myself, [hindrex ratings](/secrets/hindrex-ratings) will also be important. I do not consider instruments and sample libraries to be DAW features, so I will not be factoring them into my comparisons. They are content, not capability, and I prefer to keep my virtual instruments and samples independent of the DAW so that I can take them with me should I change. Let's list a few DAWs to show what I mean:


## [Pro Tools Studio](https://www.avid.com/pro-tools)

***hindrex rating:*** {{< hindrex-rating code="FF-NN-RTR-LRC" bookend=false >}}

Made by Avid Technology Inc, this is one of the first professional DAWs, and is still considered something of an industry standard. It integrates well with some professional mixing desks, and tries to mimic a traditional hardware workflow as much as possible (which can be needlessly limiting at times).

- Traditional hardware workflow (perhaps overly so)
- Runs on Windows and macOS
- Pretty expensive
- Poor hindrex rating
- Only supports Avid's proprietary plugin format: [AAX](https://en.wikipedia.org/wiki/Pro_Tools#Pro_Tools_|_HDX_(2011%E2%80%93present)#:~:text=AAX)


## [Logic Pro](https://www.apple.com/logic-pro)

***hindrex rating:*** {{< hindrex-rating code="FF-NN-RTR-LRC" bookend=false >}}

One of the most popular DAWs, despite only running on Apple Inc devices. Logic Pro is considered more 'intuitive' than many other DAWs, and comes with a lot of pre-packaged unique plugins (which it sort of has to because it only supports Apple's own proprietary plugin format). Still generally mimics a traditional hardware workflow, but not at the expense of capability or usability.

After its parent company Emagic was acquired by Apple Inc in 2002, Logic Pro was discontinued on Windows with no support given to the tens of thousands of users who had invested their time and money into Logic Pro on that platform. This sort of behaviour by software companies is one of the reasons that I consider hindrex ratings important.

- Traditional hardware workflow (but with higher-than-average usability)
- Only runs on macOS
- Pretty expensive
- Poor hindrex rating
- Only supports Apple's proprietary plugin format: [AU](https://en.wikipedia.org/wiki/Audio_Units)


## [Ableton Live](https://www.ableton.com/en/live)

***hindrex rating:*** {{< hindrex-rating code="FF-NN-RTR-LRC" bookend=false >}}

Perhaps the most popular DAW in terms of users, Ableton Live has a slight bent toward live performance, with great support for loops and samples. However, it is also fully capable of the other DAW functions.

- Hybrid workflow (*Session* view unique, *Arrangement* view traditional)
- Runs on Windows and macOS
- Pretty expensive (though does offer a rent-to-own option)
- Poor hindrex rating
- Has support for [VST](https://en.wikipedia.org/wiki/Virtual_Studio_Technology) (when running on Windows and macOS) and [AU](https://en.wikipedia.org/wiki/Audio_Units) (when running on macOS)


## [REAPER](https://www.reaper.fm)

***hindrex rating:*** {{< hindrex-rating code="ZI-FP-FF-A-NN-RTR-LRC-LFC" bookend=false >}}

REAPER (the Rapid Environment for Audio Production, Engineering, and Recording) currently has a much smaller user base than the above DAWs. However, its users are very enthusiastic and there is a strong community around it. This is partly because the developers respond quickly to user feedback and update the software regularly, and partly because the user community is very good about helping each other and answering questions.

Though it's often considered harder to learn than Logic Pro or Ableton Live, REAPER is nonetheless capable of all the DAW functions you would expect, and is in some ways more powerful than the above DAWs. REAPER still somewhat mimics a traditional hardware workflow, but it's much looser with the connection.

REAPER comes with fewer plugins out-of-the-box than the previously mentioned systems, but the ones it supplies are very useful and capable. Additionally, REAPER ships with over 200 [JSFX scripts](https://github.com/ReaTeam/Doc/wiki/JSFX-from-REAPER-Native). Users can also make their own JSFX scripts, allowing technically minded people to easily create audio manipulators. You can download [older versions of their bundled plugins](https://www.reaper.fm/reaplugs) to use in any DAW that supports [VST](https://en.wikipedia.org/wiki/Virtual_Studio_Technology). This includes ReaJS which can load JSFX scripts into other DAWs (but there are better ways to do that[^jsfx-loaders]).

REAPER is often incorrectly called a free DAW. While it is very reasonably priced, the confusion comes from the extremely generous trial period: REAPER gives every user a fully functional 60-day evaluation of the software, but after that period has elapsed it... continues working. You just get gentle reminders that you're supposed to buy it if you're still using it. It somewhat astounds me that people consider this the same as it being 'free' (presumably because they're immorally ignoring the terms of the generous trial), but there we are.

Fun fact: REAPER was created by the same guy[^justin-frankel] who made [Winamp](https://en.wikipedia.org/wiki/Winamp) and [Gnutella](https://en.wikipedia.org/wiki/Gnutella).

- Adapted traditional hardware workflow
- Runs on Windows, macOS, and Linux
- Very reasonably priced
- High hindrex rating (probably the highest you're likely to get for a proprietary DAW)
- Supports most plugin types: [VST](https://en.wikipedia.org/wiki/Virtual_Studio_Technology), [CLAP](https://en.wikipedia.org/wiki/CLever_Audio_Plug-in), [LV2](https://en.wikipedia.org/wiki/LV2), [AU](https://en.wikipedia.org/wiki/Audio_Units) (when running on macOS), and [DX](https://en.wikipedia.org/wiki/DirectX) (when running on Windows)

  
## [Ardour](https://ardour.org)

***hindrex rating:*** {{< hindrex-rating code="FOSS-ZI-FP-FF-ZC-NN-RTR-LRC" bookend=false >}}

Ardour is probably the most niche DAW on this list, and has a relatively small user base. However, it's highly capable and can perform all of the DAW functions you could ever need. It comes with about the same number of plugins as REAPER, but not the 200-plus [JSFX scripts](https://github.com/ReaTeam/Doc/wiki/JSFX-from-REAPER-Native). However, you can use [ysfx](https://github.com/JoepVanlier/ysfx) to run all those same scripts with Ardour (much as you can with Ableton Live and Logic Pro). Ardour has an equally powerful and easier-to-learn (though slightly slower) scripting system that uses the popular Lua scripting language. REAPER can use Lua as well, but only to automate the user interface (not to process audio signals). Ardour can do everything in Lua, from customising and automating the user interface, to processing any audio you want.

The reason I'm making such a big deal about the scripting in Ardour is that REAPER's high level of customisation is often cited as the main reason to use it over other DAWs. However, in this respect, Ardour and REAPER are on equal footing. In fact, in one respect, Ardour is actually even more customisable than REAPER: Ardour is free[^free-software-def] and open source[^open-source-def]. This means that someone with enough technical expertise can change the internal source code of the Ardour software and make their own customised version. This is not possible with any of the other DAWs on this list.

Ardour is often said to be more difficult to learn than other DAWs (even more so than the bewildering REAPER), but I don't think that's true. Actually, I think Pro Tools is the most difficult to learn, closely followed by REAPER. I think the reason people think Ardour is more difficult to learn than REAPER is because REAPER has a much larger community, which is very active in answering questions and making video tutorials. I personally found Ardour easier to learn than REAPER, but I learned both of them from reading their manuals. In my personal opinion, Ardour is just the Pro Tools interface without the arbitrary limitations and skeumorphic design choices that were intended to appeal to old school studio techs. For me, Ardour has a much clearer and more consistent mental model than the other DAWs (once you learn it), which makes complex tasks easier to understand and carry out. However, that's all very subjective and the only DAWs I've properly learned and used from this list are Pro Tools, REAPER, and Ardour.

With all that said, I've yet to see anything in another DAW that couldn't be achieved in Ardour.

Although it's open source, if you want to get ready-to-run versions directly from Ardour then you'll need to pay for them. It's a pay-what-you-want model, with the minimum set to $1---though Ardour suggests paying about the same as one meal in an average restaurant of the country you live in. It's perfectly legal to have someone else make you binaries for free though, and many Linux systems have Ardour built in for this very reason. This slight dichotomy about what is possible and what is easy makes the hindrex rating for Ardour a little difficult. However, for all the software on this list I have based the rating on the best possible deal available.

Fun fact: Ardour was created by [Amazon's](https://amazon.com) second ever employee, and he's also the creator of the Linux JACK audio system[^paul-davis].

- Adapted traditional hardware workflow
- Runs on Windows, macOS, and Linux
- Free (with a minimum charge of $1 for pre-compiled binaries)
- Highest possible hindrex rating
- Supports the most common plugin types: [VST](https://en.wikipedia.org/wiki/Virtual_Studio_Technology), [LV2](https://en.wikipedia.org/wiki/LV2), and [AU](https://en.wikipedia.org/wiki/Audio_Units) (when running on macOS)


## Conclusions

As you can see, the differences in the above DAWs (which are only a small sample of those available) are less to do with their capabilities, and more to do with their workflows, ideologies, system requirements, cost, and communities. Having said that, using DAWs that support more plugin types will increase your chances of using free ones.

Since cheap and unhindered software is a big thing here on Nex.RIP, the only two choices I would really consider are REAPER and Ardour. REAPER wins on community, but Ardour wins on cost and being unhindered.

Although hindrex scores are important to me, and although we are trying to keep costs as low as possible, I have still chosen the DAW I prefer to use the most... it's just good luck that it also happens to be the cheapest and have the highest hindrex rating. As such, I have chosen Ardour for my DAW. While I first learned audio production in Pro Tools, and spent most of my home recording years in REAPER, I now prefer Ardour to all the others.

While the information I'll be sharing on this site is largely irrespective of the DAW involved, there will be some tips, tricks, and full articles that are Ardour specific. You may need to translate them for your own DAW. If you want to keep things simple, I would recommend just paying your $1 to Ardour and following along directly. Either way, DAWs are essential to modern digital audio production and you will need one to continue on your home recording journey.

And here's the first Ardour tip: include the Harrison audio plugins if your installer offers them. They are proprietary (non-free) software, and will periodically interrupt their control panel to nag you to purchase them, but they have no other limitations. More importantly, however, is that they provide better graphical front ends for most of the built-in Ardour plugins (making them far more intuitive to use).

You may also want to take a look at the [Getting Started with Ardour](https://prokoudine.github.io/ardour-tutorial/en/) guide, and the [Ardour Manual](https://manual.ardour.org). Whether you use Ardour or not, I won't be supplying a complete beginner's tutorial, so you'll need to read your DAW's own manual.

From this point on, I'll assume you can do the basics in whichever DAW you pick.

Don't spend a lot of time agonising over which DAW to use. I've made my arguments for why I've chosen Ardour, but any DAW on this list (and many that aren't) can capably make a great record. However, you're the one that will have to use it effectively. Most people tend to commit pretty hard to the DAW they choose, so don't take the decision too lightly either. Whichever one you go for, learn the basics from your DAW's manual and I'll see you for the next tutorial.

[^audio-interface]: An audio interface is a device that connects microphones and instruments directly to your computer, amplifying their weak analogue signals and converting them into the digital data your DAW records (and back again for playback). Most are external boxes that include a microphone preamp.
[^midi]: MIDI stands for [Musical Instrument Digital Interface](https://en.wikipedia.org/wiki/MIDI). It's a communication and performance capture standard for digital music equipment that was first established in 1983. It is widely supported and has only had one major---fully backward compatible---update (in 2020). It will likely outlive us all. I'll be talking more about it in another article, as it will form a big part of our post-production work.
[^jsfx-loaders]: You can get [VST3](https://en.wikipedia.org/wiki/Virtual_Studio_Technology), [AU](https://en.wikipedia.org/wiki/Audio_Units), and [CLAP](https://en.wikipedia.org/wiki/CLever_Audio_Plug-in) loaders for [JSFX](https://github.com/justinfrankel/jsfx) from [ysfx](https://github.com/JoepVanlier/ysfx).
[^justin-frankel]: [Justin Frankel](https://en.wikipedia.org/wiki/Justin_Frankel) is the creator of [Winamp](https://en.wikipedia.org/wiki/Winamp), [Gnutella](https://en.wikipedia.org/wiki/Gnutella), and [REAPER](https://www.reaper.fm).
[^free-software-def]: [The free software definition at Wikipedia](https://en.wikipedia.org/wiki/The_Free_Software_Definition).
[^open-source-def]: [Wikipedia page on open source software](https://en.wikipedia.org/wiki/Open-source_software).
[^paul-davis]: [Paul Davis](https://en.wikipedia.org/wiki/Paul_Davis_(programmer)) is the creator of the [Linux JACK audio connection kit](https://en.wikipedia.org/wiki/JACK_Audio_Connection_Kit) and [Ardour](https://ardour.org), and he was the second ever employee at [Amazon](https://amazon.com).
