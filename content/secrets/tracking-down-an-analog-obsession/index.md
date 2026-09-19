---
title: 'Tracking Down an Analog Obsession'
date: 2026-09-16T13:14:26+01:00
author: Nexami Engeo
description: "Analogue sound without the cost: mapping every free Analog Obsession plugin to the classic hardware it's believed to emulate (noting original designs)."
summary: The fidelity of a fortune for the cost of a coffee.
readingEase: Professionals
gradeLevel: 29
images:
- images/post-cover.png
categories:
- digressions
tags:
- digressions
- audio-production
- in-the-box
- analogue
- analog-obsession
- plugins
- daw
- compressors
- equalisers
- pre-amps
- saturators
- channel-strips
- home-studio
draft: false
---

***Last updated: 19th September 2026***

{{< banner src="images/post-cover.png" alt="A cyan digital sine wave becoming a warm, distorted orange wave as it passes through seven Analog Obsession plugin modules. Credit: John Urquhart Ferguson" >}}

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

I've already written about [recording digitally and faking analogue](/secrets/the-colour-of-analogue), but none of that would be possible without great software that can emulate classic hardware. The industry leaders have made these programs prohibitively expensive, but one developer provides a different path. If you're a newbie sound engineer looking for that analogue sound without breaking the bank, you need to check out [Analog Obsession](https://analogobsession.com).

Rıdvan Küçük (who sometimes goes by *Tunca*[^patreon-about]) is the Turkish musician and hardware designer behind Analog Obsession[^kvr-about]. With a background in creating custom equipment for professional studios, he learned Digital Signal Processing (DSP) and how to model hardware circuits in software. This has allowed him to make faithful recreations of well-known analogue studio hardware in software form. But the really great thing is that he lets you use his creations ***completely free of charge, with no limitations***, and they run on every major [DAW](/secrets/choosing-a-daw) (on Windows and macOS).

Analog Obsession operates on a donation model, so you are free to download and use the plugins without any limitations, but if you find yourself using the software a lot and can afford it, you should donate some money to the project.

It would be impossible to overstate how much money this is potentially saving you (even if you make a reasonable donation). Compared to the commercial software offerings, it's saving you thousands of pounds. Compared to the actual analogue hardware, it's saving you tens of thousands of pounds. I think it's fair to say that the big commercial software is even more faithful to the original hardware, but you're certainly paying a huge amount for that extra accuracy.

The one downside of Analog Obsession's plugins is that most don't explicitly name the hardware they're emulating. I can only speculate on the reasons for this, but my guess would be that they're trying to avoid any legal entanglements. I also haven't been able to find a single complete, authoritative chart online---the community lists that exist are incomplete or disagree with each other on some of the hardware. As such, I've decided to produce my own. Below is a list of the hardware that I ***think*** each Analog Obsession plugin is trying to replicate. You should note that this is very much just my personal opinion, and I can't claim to be 100% correct in my guesses (and many community sources disagree with them)... but I suspect I'm pretty close.

Most of the plugins have a 4x oversampling option to reduce [aliasing](/secrets/digitally-storing-audio), but it's often off by default. Therefore, if comparing to other (licensed) software recreations, you may not get a fair comparison unless you turn on oversampling ([Universal Audio](https://www.uaudio.com/) plugins, for example, handle oversampling internally with nothing for you to enable). Oversampling for Analog Obsession plugins is usually turned on by clicking the Analog Obsession logo so that it turns red.

Also, Analog Obsession plugins usually compensate for gain automatically. This means you can just concentrate on the saturation (and other tonal changes) that the plugin adds to your signal, without needing to worry about getting the volume back to the right level. This is a quality-of-life divergence from recreating the true hardware experience that you might find in the more faithful licensed alternatives.

I've tried to keep similar plugins grouped together so that they're easier to browse, but it's still a massive list:

|Analog Obsession Standalone Compressors                                    |Hardware/Description                                                                                |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|[BUSTERse](https://www.patreon.com/analogobsession/posts/busterse-42658623)|Solid State Logic Bus Compressor [VCA]                                                              |
|[COMPER](https://www.patreon.com/analogobsession/posts/comper-74729047)    |Analog Obsession Original VCA, FET and OPTO Blended Compressor [VCA/FET/OPTO]                       |
|[dBComp](https://www.patreon.com/analogobsession/posts/dbcomp-56933944)    |dbx 160 Compressor [VCA]                                                                            |
|[EDComp](https://www.patreon.com/analogobsession/posts/edcomp-129902016)   |Analog Obsession Original Pre-Emphasis/De-Emphasis Compressor [Digital]                             |
|[FetCB](https://www.patreon.com/analogobsession/posts/fetcb-92444426)      |Trident Audio CB9146 Compressor [FET]                                                               |
|[KolinMB](https://www.patreon.com/analogobsession/posts/kolinmb-85062886)  |Collins 26U Compressor (multi-band version) [Tube]                                                  |
|[LAEA](https://www.patreon.com/analogobsession/posts/laea-153437904)       |Teletronix LA-3A Compressor [Solid-State OPTO]                                                      |
|[LALA](https://www.patreon.com/analogobsession/posts/lala-36128829)        |Teletronix LA-2A Compressor [Tube OPTO]                                                             |
|[MuChild](https://www.patreon.com/analogobsession/posts/muchild-157419821) |Fairchild 660 Vari-mu Compressor [Tube]                                                             |
|[OSS](https://www.patreon.com/analogobsession/posts/oss-34292591)          |Universal Audio UA 176 Compressor [Tube]                                                            |
|[SPECOMP](https://www.patreon.com/analogobsession/posts/specomp-51285294)  |'Solid State Logic Style' Spectral Compressor [VCA]                                                 |
|[TheBus](https://www.patreon.com/analogobsession/posts/thebus-163129163)   |Analog Obsession Original Compressor (soft knee with linear frequency response) [Digital]           |
|[TRAX](https://www.patreon.com/analogobsession/posts/trax-70970958)        |SPL Transient Designer [Transient Shaper]                                                           |
|[VariMoon](https://www.patreon.com/analogobsession/posts/varimoon-34323360)|Esoteric Audio Research (EAR) 660 (a Fairchild 660 Clone) Vari-mu Compressor [Tube]                 |
|[YALA](https://www.patreon.com/analogobsession/posts/yala-34323384)        |Hybrid Vari-mu Compressor Combining EMI/Abbey Road RS124 (modified ALTEC 436B) and ALTEC 436C [Tube]|

|Analog Obsession Standalone Channel Strips, Equalisers, and Pre-amps       |Hardware/Description                                                                                                                                                   |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[ATONE](https://www.patreon.com/analogobsession/posts/atone-102446579)     |'ALTEC Style' Channel Strip with EQ, Filters, and '436C style' Compressor                                                                                              |
|[BXQ](https://www.patreon.com/analogobsession/posts/bxq-35000375)          |Dangerous Music BAX EQ (with added L/R & M/S options)                                                                                                                  |
|[BLENDEQ](https://www.patreon.com/analogobsession/posts/blendeq-67460087)  |'Neve Style' & 'API Style' Blended Equaliser                                                                                                                           |
|[Fiver](https://www.patreon.com/analogobsession/posts/fiver-48483719)      |Neve Portico 5033                                                                                                                                                      |
|[G395a](https://www.patreon.com/analogobsession/posts/g395a-50059272)      |Telefunken W395 EQ                                                                                                                                                     |
|[GrapHack](https://www.patreon.com/analogobsession/posts/graphack-80663451)|API 560 Graphic EQ                                                                                                                                                     |
|[HARQULES](https://www.patreon.com/analogobsession/posts/harqules-34306427)|Harrison 32C Console EQ                                                                                                                                                |
|[HLQSE](https://www.patreon.com/analogobsession/posts/hlqse-34292290)      |Helios Type 69 EQ                                                                                                                                                      |
|[INDEQ](https://www.patreon.com/analogobsession/posts/indeq-135944425)     |Analog Obsession Original Pure Inductor-based EQ (like a clean Neve EQ)                                                                                                |
|[MAXBAX](https://www.patreon.com/analogobsession/posts/maxbax-64791433)    |REGULAR JOHN RECORDING RJR BAX 'Baxandall Style' EQ (with extra mid band, and L/R & M/S options) [formerly the '[MASBAX](https://plugins4free.com/plugin/3222)' plugin]|
|[MPReq](https://www.patreon.com/analogobsession/posts/mpreq-34293647)      |1960s Style Tube Mic Pre-amp with Pultec Style 2-Band (100Hz/12kHz) Program EQ                                                                                         |
|[MythPre](https://www.patreon.com/analogobsession/posts/mythpre-126118073) |Analog Obsession Original Tube Mic Pre-amp                                                                                                                             |
|[N492ME](https://www.patreon.com/analogobsession/posts/n492me-34323127)    |Neumann W492 EQ                                                                                                                                                        |
|[OAQ](https://www.patreon.com/analogobsession/posts/oaq-69993062)          |CharterOak PEQ-1 Program Mastering EQ                                                                                                                                  |
|[PREDD](https://www.patreon.com/analogobsession/posts/predd-57672680)      |EMI REDD.51 Tube Console Pre-amp                                                                                                                                       |
|[SSQ](https://www.patreon.com/analogobsession/posts/ssq-54598496)          |Solid State Logic 4000 E-series EQ                                                                                                                                     |
|[STEQ](https://www.patreon.com/analogobsession/posts/steq-35318911)        |Studer 169 EQ                                                                                                                                                          |
|[TILTA](https://www.patreon.com/analogobsession/posts/tilta-63538579)      |Analog Obsession Original Tilt Shaped EQ (boost or cut high-end, while doing the opposite to the low end)                                                              |
|[TREQ](https://www.patreon.com/analogobsession/posts/treq-34323331)        |Trident 80B 500 Series EQ                                                                                                                                              |
|[UREQ](https://www.patreon.com/analogobsession/posts/ureq-88488633)        |UREI 545/546 Parametric EQ                                                                                                                                             |

|Analog Obsession Standalone Reverberators                                |Hardware/Description                                                                |
|-------------------------------------------------------------------------|------------------------------------------------------------------------------------|
|[Room041](https://www.patreon.com/analogobsession/posts/room041-55993203)|Plate-reverb-style features (in the spirit of an EMT 140) within a room reverberator|

|Analog Obsession Guitar Stuff                                                                  |Hardware/Description                                                                                                                     |
|-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
|[AHEAD](https://www.patreon.com/analogobsession/posts/ahead-107404959) with M-JTAMP selected   |Marshall JTM45 Amp [formerly the separate '[JAMP](https://plugins4free.com/plugin/3099)' plugin]                                         |
|[AHEAD](https://www.patreon.com/analogobsession/posts/ahead-107404959) with F-VIBE selected    |Fender Vibroverb (Blackface) Amp [formerly the separate '[BlackVibe](https://plugins4free.com/plugin/3364)' plugin]                      |
|[AHEAD](https://www.patreon.com/analogobsession/posts/ahead-107404959) with F-BLACK selected   |Fender Showman (Blackface) Amp [formerly the separate '[BlackShow](https://plugins4free.com/plugin/3516)' plugin]                        |
|[AHEAD](https://www.patreon.com/analogobsession/posts/ahead-107404959) with CUSTOM selected    |'Soldano Style' Custom Amp (similar to the SLO-100 Custom) [formerly the separate '[Amper](https://plugins4free.com/plugin/3107)' plugin]|
|[KABIN](https://www.patreon.com/analogobsession/posts/kabin-43454405)                          |Universal Guitar Cabinet Modeller                                                                                                        |
|[PEDALz](https://www.patreon.com/analogobsession/posts/pedalz-54136573) with DODOD selected    |DOD 250 Pre-amp Overdrive Pedal [formerly the separate ['DoDoD'](https://plugins4free.com/plugin/3104) plugin]                           |
|[PEDALz](https://www.patreon.com/analogobsession/posts/pedalz-54136573) with GUNNER selected   |Marshall The Guv'nor Overdrive Pedal [formerly the separate ['Gunner'](https://plugins4free.com/plugin/3102) plugin]                     |
|[PEDALz](https://www.patreon.com/analogobsession/posts/pedalz-54136573) with OVERDIVER selected|BOSS SD-1 Super Overdrive Pedal [formerly the separate ['OverDiver'](https://plugins4free.com/plugin/3096) plugin]                       |
|[PEDALz](https://www.patreon.com/analogobsession/posts/pedalz-54136573) with PIGPIE selected   |Electro-Harmonix Russian Big Muff Pi Fuzz Pedal [formerly the separate ['Pig-Pie'](https://plugins4free.com/plugin/3095) plugin]         |
|[PEDALz](https://www.patreon.com/analogobsession/posts/pedalz-54136573) with ZUPAA selected    |Marshall 'Supa Fuzz' Fuzz Pedal [formerly the separate ['Zupaa'](https://plugins4free.com/plugin/3087) plugin]                           |
|[THEDI](https://www.patreon.com/analogobsession/posts/thedi-165629782)                         |A-Designs REDDI Tube DI Box                                                                                                              |

|Analog Obsession Composites                                              |Hardware/Description                                                                                                         |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
|[CHANNEV](https://www.patreon.com/analogobsession/posts/channev-52960238)|Neve 1272 Mic Pre-amp/Neve 1081 Equaliser/Neve 2264 Compressor & Limiter                                                     |
|[KONSOL](https://www.patreon.com/analogobsession/posts/konsol-34420510)  |Gray: Universal Audio 610 Console (Tube)/Blue: Neve 1073 Console (Transistor)/Black: Solid State Logic 4000 E Console (OpAmp)|

|Analog Obsession Miscellaneous Plugins                                          |Hardware/Description                                                                             |
|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
|[ATTRACTOR](https://www.patreon.com/analogobsession/posts/attractor-122556016)  |Analog Obsession Original---dynamic processor (with transient manipulation)                      |
|[Chopa](https://www.patreon.com/analogobsession/posts/chopa-67845888)           |Analog Obsession Original---movement for synths, guitars, and vocals                             |
|[CITE](https://www.patreon.com/analogobsession/posts/cite-105307600)            |Analog Obsession Original---high frequency processor                                             |
|[DrGate](https://www.patreon.com/analogobsession/posts/drgate-116225259)        |Analog Obsession Original---drum-specific gate                                                   |
|[LOADES](https://www.patreon.com/analogobsession/posts/loades-62370686)         |Analog Obsession Original---de-esser                                                             |
|[LOVEND](https://www.patreon.com/analogobsession/posts/lovend-34669483)         |Analog Obsession Original---harmonic bass enhancer                                               |
|[MidBoss](https://www.patreon.com/analogobsession/posts/midboss-141665938)      |Analog Obsession Original---mid-frequency targeted saturator and sweetener with 6 different types|
|[MoMa](https://www.patreon.com/analogobsession/posts/moma-100041804)            |Ethan Winer's 'Mojo Maestro' Passive Saturation Box                                              |
|[POORTEC](https://www.patreon.com/analogobsession/posts/poortec-119632465)      |'Pultec Style' Program Equaliser (without SRPP gain stage and inductors)                         |
|[RazorClip](https://www.patreon.com/analogobsession/posts/razorclip-151529497)  |Analog Obsession Original---clipper with 5 options                                               |
|[Realizer](https://www.patreon.com/analogobsession/posts/realizer-77091774)     |Analog Obsession Original---transient-based random value generator                               |
|[ReLife](https://www.patreon.com/analogobsession/posts/relife-58488732)         |Analog Obsession Original---magic knob general plugin (make things sound good with little effort)|
|[SweetDrums](https://www.patreon.com/analogobsession/posts/sweetdrums-34294118) |Analog Obsession Original---magic knob drum shaper                                               |
|[SweetVox](https://www.patreon.com/analogobsession/posts/sweetvox-34294211)     |Analog Obsession Original---magic knob voice shaper and de-esser                                 |
|[ToneShaper](https://www.patreon.com/analogobsession/posts/toneshaper-169700744)|Analog Obsession Original---magic knob passive tone and body control                             |

|Analog Obsession American Bundle                                                |Hardware/Description |
|--------------------------------------------------------------------------------|---------------------|
|[Combox](https://www.patreon.com/analogobsession/posts/american-bundle-55358141)|'API Style' Equaliser|
|[Merica](https://www.patreon.com/analogobsession/posts/american-bundle-55358141)|API 550 Equaliser    |

|Analog Obsession BritBundle                                                     |Hardware/Description                       |
|--------------------------------------------------------------------------------|-------------------------------------------|
|[BritChannel](https://www.patreon.com/analogobsession/posts/britbundle-79798060)|Neve 1073 Pre-amp & EQ                     |
|[Britpressor](https://www.patreon.com/analogobsession/posts/britbundle-79798060)|Neve 2264 Limiter/Compressor [Diode Bridge]|
|[BritPre](https://www.patreon.com/analogobsession/posts/britbundle-79798060)    |Neve 1272 Pre-amp                          |

|Analog Obsession Color Bundle                                                                         |Hardware/Description                                |
|------------------------------------------------------------------------------------------------------|----------------------------------------------------|
|[Distox](https://www.patreon.com/analogobsession/posts/color-bundle-97654574)                         |Analog Obsession Original Tube and OpAmp distortions|
|[PreBOX](https://www.patreon.com/analogobsession/posts/color-bundle-97654574) (1. Humptone selected)  |Hamptone Tube Mic Pre-amp                           |
|[PreBOX](https://www.patreon.com/analogobsession/posts/color-bundle-97654574) (2. SS-Nine selected)   |Solid State Logic 9000 Series Line Pre-amp          |
|[PreBOX](https://www.patreon.com/analogobsession/posts/color-bundle-97654574) (3. Tape Color selected)|Tape Colour Pre-amp                                 |
|[PreBOX](https://www.patreon.com/analogobsession/posts/color-bundle-97654574) (4. Rosenrot selected)  |EMI REDD.47 Mic Pre-amp                             |
|[PreBOX](https://www.patreon.com/analogobsession/posts/color-bundle-97654574) (5. New-81 selected)    |Neve 1081 Mic Pre-amp                               |
|[PreBOX](https://www.patreon.com/analogobsession/posts/color-bundle-97654574) (6. F2Bam selected)     |Alembic F-2B Tube Pre-amp                           |
|[PreBOX](https://www.patreon.com/analogobsession/posts/color-bundle-97654574) (7. Quad-Core selected) |'Quad Eight Style' Mic Pre-amp                      |
|[PreBOX](https://www.patreon.com/analogobsession/posts/color-bundle-97654574) (8. A10M selected)      |Ampex AM-10 Pre-amp                                 |
|[PreBOX](https://www.patreon.com/analogobsession/posts/color-bundle-97654574) (9. 15A66 selected)     |ALTEC 1566A Pre-amp                                 |
|[PreBOX](https://www.patreon.com/analogobsession/posts/color-bundle-97654574) (10. Fairy selected)    |Fairchild 692 Pre-amp                               |
|[PreBOX](https://www.patreon.com/analogobsession/posts/color-bundle-97654574) (11. Vacuum-76 selected)|V76 TAB/Telefunken Pre-amp                          |

|Analog Obsession F-Bundle                                                 |Hardware/Description                                                                                               |
|--------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
|[Frank](https://www.patreon.com/analogobsession/posts/f-bundle-83415951)  |Helios (filter)/Pultec (low boost EQ)/API 550 (mid range EQ)/Neve 1073 (high boost EQ)/Pultec (high attenuation EQ)|
|[FrankCS](https://www.patreon.com/analogobsession/posts/f-bundle-83415951)|Same as Frank, plus solid state/tube pre-amps and compressor                                                       |

|Analog Obsession FET Bundle                                                  |Hardware/Description                         |
|-----------------------------------------------------------------------------|---------------------------------------------|
|[FetDrive](https://www.patreon.com/analogobsession/posts/fet-bundle-51962024)|UREI 1176 Saturation/Drive (Isolated) [FET]  |
|[FETish](https://www.patreon.com/analogobsession/posts/fet-bundle-51962024)  |UREI 1176 Compressor [FET]                   |
|[FetSnap](https://www.patreon.com/analogobsession/posts/fet-bundle-51962024) |UREI 1176 Transient Enhancer (Isolated) [FET]|

|Analog Obsession NOS Bundle                                               |Hardware/Description                                              |
|--------------------------------------------------------------------------|------------------------------------------------------------------|
|[Tuba](https://www.patreon.com/analogobsession/posts/nos-bundle-49184069) |Universal Audio UA 610 Tube Channel Strip                         |
|[TuPRE](https://www.patreon.com/analogobsession/posts/nos-bundle-49184069)|Analog Obsession Original Tube Line Pre-amp with Program Equaliser|
|[Kolin](https://www.patreon.com/analogobsession/posts/nos-bundle-49184069)|Collins 26U Compressor [Tube]                                     |

|Analog Obsession Rare Bundle                                                |Hardware/Description                               |
|----------------------------------------------------------------------------|---------------------------------------------------|
|[Rare](https://www.patreon.com/analogobsession/posts/rare-bundle-90832098)  |Pultec EQP-1A Program Equaliser                    |
|[RareSE](https://www.patreon.com/analogobsession/posts/rare-bundle-90832098)|Pultec EQP-1A Program Equaliser (L/R & M/S version)|

|Analog Obsession JSFX Plugins                                                                 |Hardware/Description                                                               |
|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
|[SATURATION PROFILER](https://www.patreon.com/analogobsession/posts/saturation-jsfx-169968571)|Profile the saturation/transfer function and harmonic distortion of an audio signal|

|Analog Obsession Legacy Plugins                   |Hardware/Description                                                                                                                                                                          |
|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Amper](https://plugins4free.com/plugin/3107)     |'Soldano Style' Custom Amp (similar to the SLO-100 Custom) [***integrated*** into [AHEAD](https://www.patreon.com/analogobsession/posts/ahead-107404959)]                                     |
|[BESURE-N87](https://plugins4free.com/plugin/2883)|SHURE SM57/SM58 to Neumann U 87 Mic Character Converter [***discontinued***]                                                                                                                  |
|[BlackShow](https://plugins4free.com/plugin/3516) |Fender Showman (Blackface) Amp [***integrated*** into [AHEAD](https://www.patreon.com/analogobsession/posts/ahead-107404959)]                                                                 |
|[BlackVibe](https://plugins4free.com/plugin/3364) |Fender Vibroverb (Blackface) Amp [***integrated*** into [AHEAD](https://www.patreon.com/analogobsession/posts/ahead-107404959)]                                                               |
|[DoDoD](https://plugins4free.com/plugin/3104)     |DOD 250 Pre-amp Overdrive Pedal [***integrated*** into [PEDALz](https://www.patreon.com/analogobsession/posts/pedalz-54136573)]                                                               |
|[Dynasaur](https://plugins4free.com/plugin/3086)  |Analog Obsession Original Dynamic EQ (with RMS & PEAK mode) [***discontinued***]                                                                                                              |
|[FILTEQ](https://plugins4free.com/plugin/2750)    |Filtek MK3 3-Band Analogue Equaliser [***discontinued***]                                                                                                                                     |
|[Gunner](https://plugins4free.com/plugin/3102)    |Marshall The Guv'nor Overdrive Pedal [***integrated*** into [PEDALz](https://www.patreon.com/analogobsession/posts/pedalz-54136573)]                                                          |
|[JAMP](https://plugins4free.com/plugin/3099)      |Marshall JTM45 Amp [***integrated*** into [AHEAD](https://www.patreon.com/analogobsession/posts/ahead-107404959)]                                                                             |
|[LCF](https://plugins4free.com/plugin/2772)       |Analog Obsession Original Vintage Solid State Hi/Lo-pass Filter [***discontinued***]                                                                                                          |
|[LOADED](https://plugins4free.com/plugin/3218)    |'API 500 Series Style' Custom Channel Strip [***discontinued***]                                                                                                                              |
|[MASBAX](https://plugins4free.com/plugin/3222)    |REGULAR JOHN RECORDING RJR BAX 'Baxandall Style' EQ (with extra mid band, and L/R & M/S options) [***superseded*** by [MAXBAX](https://www.patreon.com/analogobsession/posts/maxbax-64791433)]|
|[NCAR](https://plugins4free.com/plugin/3115)      |'Neve Style' 8 Stereo I/O Summing Mixer [***discontinued***]                                                                                                                                  |
|[OverDiver](https://plugins4free.com/plugin/3096) |BOSS SD-1 Super Overdrive Pedal [***integrated*** into [PEDALz](https://www.patreon.com/analogobsession/posts/pedalz-54136573)]                                                               |
|[Pig-Pie](https://plugins4free.com/plugin/3095)   |Electro-Harmonix Russian Big Muff Pi Fuzz Pedal [***integrated*** into [PEDALz](https://www.patreon.com/analogobsession/posts/pedalz-54136573)]                                               |
|[Rollamp](https://plugins4free.com/plugin/2805)   |Fender Bassman/Fender 1960s Blackface (Tremolux/Vibrolux) Amps with a Marshall 1x12 Cab [***discontinued***]                                                                                  |
|[SPre](https://plugins4free.com/plugin/3094)      |E-mu SP-1200 Vintage Sampler Tonal Simulator [***discontinued***]                                                                                                                             |
|[Transature](https://plugins4free.com/plugin/3100)|Analog Obsession Original Transformer Saturation Box [***discontinued***]                                                                                                                     |
|[Zupaa](https://plugins4free.com/plugin/3087)     |Marshall 'Supa Fuzz' Fuzz Pedal [***integrated*** into [PEDALz](https://www.patreon.com/analogobsession/posts/pedalz-54136573)]                                                               |

With that, you now have a complete map of the hardware hidden behind each Analog Obsession plugin. The software is free, runs in the DAW you've already [chosen](/secrets/choosing-a-daw), and is faithful enough to give you that much-coveted analogue sound without emptying your pockets. I'll do my best to keep this list up to date with any future Analog Obsession releases, but if you think I've misidentified anything (or haven't included something), do [let me know](/legal/about/#contact). And if you do find yourself using these plugins a lot, remember that the whole thing is kept alive by one developer on a donation model. Now go and make your records sound like they cost a fortune.

[^patreon-about]: [About Page](https://www.patreon.com/analogobsession/about) for Analog Obsession's Patreon.
[^kvr-about]: [Developer Page](https://www.kvraudio.com/developer/analog-obsession) for Analog Obsession's KVR Audio account.
