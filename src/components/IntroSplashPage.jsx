
import "./css/IntroSplashPage.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Row, Col, Figure } from "react-bootstrap";
import IntroInfoBlock from "./IntroInfoBlock";
import PostCounter from "./PostCounter";
import ForumPostCounter from "./ForumPostCounter";


// TEST IMAGES
import art0 from "../assets/imgs/article-imgs/Article-6.png";
import art1 from "../assets/imgs/article-imgs/Article-7.jpg";
import art2 from "../assets/imgs/article-imgs/cherry_audio_filtomika-uuzeCu5kdMie8Q2mvxdJyEhnqkQsd5uI.jpg";
import art3 from "../assets/imgs/article-imgs/sonicware_cydrums-zarNCId1V3mndGsHKl2qxggf2yTkPlHz.jpg";
import art4 from "../assets/imgs/article-imgs/ReasonStudiosReason13_01-PCQEOqvQcRmoHW4.vaAbh2bBWaPic.G..jpg";
import art5 from "../assets/imgs/article-imgs/gforce_icondrum-VbBqP7q2fhho0u4Owuy8ogyQcWb0dJbu.jpg";
import art6 from "../assets/imgs/article-imgs/dw_soundworks_pure_cherry-h9x72Z7Ge1ztQJch1lAtKS_NHwcFNxnT.jpg";
import art7 from "../assets/imgs/article-imgs/acustica_thing_th2-XoCqxvfulcyTbOSNFTxmm5ho4Uh4WaV..jpg";
import art8 from "../assets/imgs/article-imgs/ferrofish-pulse-8-ae-lifestyle_shot01-K4f..DPWtq2sGQZvoCd72StfAdOb3AX9.jpeg";
import art9 from "../assets/imgs/article-imgs/shure_mv7i-QBocPxIf61AupuKTF1yVbCJsl691_CtL.jpg";
import art10 from "../assets/imgs/article-imgs/vsl_duality_strings_fx-.cy.Viyobd9Q8RpRi.rBwglDVpgQs2qq.jpg";
import art11 from "../assets/imgs/article-imgs/heritage_audio_britstrip-S0QZft37xbhlqBFNJGgNn0DlQ9LmeCYi.jpg";
import art12 from "../assets/imgs/article-imgs/ehx_pico_360_looper-rFLWiQqGq7BTFISnWlnRqJm4_br75Srs.jpg";
import art13 from "../assets/imgs/article-imgs/noise_makers_studio_verb-_f0mRUoqFz2ji2ierL8k7t6j_XFJl8BM.jpg";
import art14 from "../assets/imgs/article-imgs/arturia_minifreak_update-SUJg_hvE3.61xEorshylhFt7pBmbuN0w.jpg";
import art15 from "../assets/imgs/article-imgs/tracktion_biotek_3-rck6L30aXYxytjFU216BJV8Bx8VkSlq7.jpg";
import art16 from "../assets/imgs/article-imgs/softube_console_1_mkiii_update-lAbiWXNWCaZT.1BkrSgJ8dOOTsjQYBih.jpg";
import art17 from "../assets/imgs/article-imgs/hamstead_soundworks_redwing-1Z6d9c0kRf1n7lq.jlRWhmZyH579VAG6.jpg";



// TEST IMAGES
const exampleImages = [
  art0,
  art1,
  art2,
  art3,
  art4,
  art5,
  art6,
  art7,
  art8,
  art9,
  art10,
  art11,
  art12,
  art13,
  art14,
  art15,
  art16,
  art17,

]

// TEST DATA
const exampleArticles = [
  {
    title: " Arturia announces 3 Modulation plug-ins You’ll Actually Use",
    subTitle: "Modeled after classic effects! These plugins are great!",
    subject: "Electronic Music: VSTs",
    author: "Jeremy Frazen",
    date: "12/24/19",
    body: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet porttitor lacus luctus. Aenean et tortor at risus viverra. Lectus proin nibh nisl condimentum id venenatis. Senectus et netus et malesuada fames. Convallis a cras semper auctor neque vitae tempus. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Orci dapibus ultrices in iaculis nunc sed augue. Lobortis feugiat vivamus at augue eget arcu. Arcu ac tortor dignissim convallis aenean et tortor at

Nulla facilisi cras fermentum odio eu feugiat. Nulla at volutpat diam ut. Fermentum dui faucibus in ornare quam viverra orci sagittis. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. .
    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Arturia VST taken from SoundOnSound",
  },
  {
    title:
      "Universal Audio Releases Apollo Solo Audio Interfaces for Mac and Windows",
    subTitle: "UAD continues with their new pristine lineup of audio interfaces!",
    subject: "Recording and Studio Gear: Interface",
    author: "Jeremy Frazen",
    date: "12/26/19",
    body: `
    Aenean et tortor at risus viverra. Lectus proin nibh nisl condimentum id Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet Orci phasellus egestas tellus rutru.porttitor lacus luctus. Aenean et tortor at risus viverra. Lectus
    proin nibh nisl condimentum id venenatis. Senectus et netus et
    malesuada fames. Convallis a cras semper auctor neque vitae
    tempus. Orci phasellus egestas tellus rutrum tellus pellentesque
    eu. Orci dapibus ultrices in iaculis nunc sed augue. Lobortis
    feugiat vivamus at augue eget arcu. Arcu ac tortor dignissim
    convallis aenean et tortor at
    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from Sweetwater.com",
  },
  {
    title:
      "Cherry Audio release Filtomika plug-in",
    subTitle: "Emulation of classic synthesizers can only get better!",
    subject: "Electronic Music: VSTs",
    author: "Harry Dresden",
    date: "12/12/24",
    body: `
   The latest addition to the Cherry Audio line-up is an effects plug-in rather than a software instrument, although it is still very much synth-related. Named Filtomika, the new release models the filter section of the Formanta Polivoks, a rare instrument that was originally released in the 1980s. 

Filtomika is based on the expanded multi-mode filter featured in Cherry Audio’s award-winning Atomika virtual instrument, and employs circuit-modelled DSP designs by acclaimed developer Mark Barton. The company say that it shares the same radial, and often mysterious sonic results produced by Atomika, but has the flexibility of being paired up with any inputs source, adding an interesting twist to drums, vocals and guitars or, of course, other synthesizers. 

The GUI leaves little to explain to those who’ve encountered a filter before, and offers a choice of peak and notch filters alongside low-, band- and high-pass varieties, all of which can be fine-tuned using Cutoff, Resonance and Filter Drive parameters. A more unusual addition, though, is Starve, a control that introduces some instabilities in the virtual filter circuitry, resulting in some interesting experimental sounds. You also get a tempo-sync’able LFO that offers a choice of six waveforms: ramp, sawtooth, triangle, square, noise, and random (sample & hold), as well as an envelope follower that makes it possible to use the level of the input signal to modulate the filter’s cutoff frequency. 
    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "New gear: CyDrums: Drum synth from Sonicware",
    subTitle: "Take control over your drums with this hardware synth!",
    subject: "Recording and Studio Gear: Synthesizers",
    author: "Barry D. Jupiter",
    date: "12/22/24",
    body: `
Sonicware have already announced their first release of 2025, and it’s one of their most ambitious projects to date. Named CyDrum, the latest addition to the company’s line-up is an all-digital drum synth that’s powered by a pair of wavetable oscillators and packs in an array of effects, sequencing and creative performance capabilities. 

All of the sounds are created using a mixture of wavetables, noise and pulse sources, with 22 sound structures dedicated to creating everything from classic drum machine tones to synth sounds. There are 64 wavetables included, and users are provided with full control over the likes of start and end playback positions, playback direction, speed and more. Up to two parameters for each sound can be controlled via velocity and pressure on the CyDrum’s drum pads, offering expressive real-time control during a live performance.. 
    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "Reason Studios Reason 13 - A interesting piece of DAW software! ",
    subTitle: "The DAW market has a new contender!",
    subject: "Recording and Studio Gear: DAWs",
    author: "Troy Yosi",
    date: "12/28/24",
    body: `
Reason has settled into an upgrade cadence where every other year sees some kind of infrastructure update, a new premium device or two and some utilities/updates. Reason 13 continues this pattern, with an overhaul of the device and patch browsing system, a new synth, a new effect, and a rejig of the sequencer/editor workflow. This last will be encouraging to those who use Reason standalone, rather than as a modular device rack in another DAW.
    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "IconDrum from GForce Software",
    subTitle: "The drum sounds from Icondrum's new drum software is amazing!",
    subject: "Electronic Music: VSTs",
    author: "Linda Linn",
    date: "12/18/24",
    body: `
GForce Software’s latest release sees the company take a break from all things Oberheim, focusing instead on a sought-after drum machine that was manufactured by Linn Electronics. The machine in question is of course the LinnDrum, and the company say that the resulting instrument, IconDrum, offers “a tribute to the machine that defined an era and a gateway to the rhythms of tomorrow.”

IconDrum features 12 channels (Bass, Snare, Sidestick, Hi-Hat, Toms, Ride, Crash, Cabasa, Tambourine, Conga, Cowbell, Claps) that are each capable of hosting up to three sounds, allowing for a total of 24 sounds per patch. The instrument includes faithful recreations of all of the original LinnDrum sounds, so users can easily craft the iconic sounds that graced so many hit records, but also offers a wide range of innovative alternatives that complement the classic sounds. Something that may come as a surprise, though, is that the company have remained faithful to the original design when it comes to the sequencer: there isn’t one! 
    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "Pure Cherry expansion for DW Soundworks",
    subTitle: "New drum expansion libraries from Pure Cherry!",
    subject: "Electronic Music: VSTs",
    author: "Linda Linn",
    date: "12/18/24",
    body: `
DW have announced the launch of the latest expansion to their recently introduce virtual drum software. The new Pure Cherry expansion equips DW Soundworks users with the sound of the company’s Collector’s Series kit, a model renowned for its bright attack, rich midrange and balanced sustain. 

As with the other releases in the DW Soundworks range, the latest expansion has been captured by the company themselves at the DW Factory using an array of high-end mics, preamps and outboard gear, and is presented as a collection of high-quality 24-bit/48kHz samples. The Collector’s Series Pure Cherry kit, as its name suggests, is constructed from cherry wood, a brighter alternative to maple that means the kit is well suited to up-tempo, dynamic styles such as fusion, funk, pop and gospel. 
    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "A free Thing from Acustica!",
    subTitle: "Free is always welcome! Acoustica with a free banger!",
    subject: "Electronic Music: VSTs",
    author: "Roger Dietz",
    date: "12/18/24",
    body: `
Acustica recently made the leap into the world of virtual instruments, using their renowned modelling technology to capture the sound of Roland’s legendary Jupiter-8 synthesizer. They’ve now announced that the TH8 and TH5 versions included in the original release will now be joined by TH2, a packed-down, entry-level version that’s being offered as a free download. 

Designed for professionals and casual enthusiasts alike, TH2 promises to deliver the same iconic sound as its siblings in a new, compact format. It can operate with either two or three voices, and features a scaled-down GUI that houses VCO, VCF, Envelope, LFO and Master sections derived from the fully featured TH5 and TH8 versions, as well as a simplified modulation system. It’s VCO section offers a choice of sine, triangle, sawtooth and pulse waves along with a sub-oscillator level control, while the VCF module pairs six  filter types with Cutoff, Resonance and Key Follow controls.
    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "Ferrofish launch Pulse 8 AE converter",
    subTitle: "A-D/D-A range gains eight-channel model",
    subject: "Recording and Studio Gear: Audio  ",
    author: "Roger Dietz",
    date: "12/18/24",
    body: `
Ferrofish have launched a new ADAT-equipped A-D and D-A converter designed for both studio and live recording environments. The Pulse 8 AE offers eight channels of conversion in each direction, and introduces a powerful new single-channel routing system.

The new unit is houses in a compact enclosure that looks very much like a scaled-down A32 Pro, with a central display providing an overview of all eight input and output levels, and local control handled by a pair of function switches and a large rotary encoder. Conversion is taken care of by ESS chips, which are capable of operating at sample rates up to 192kHz and provide +20dBu of headroom. As with the Pulse 16, the unit’s analogue I/O is provided on quarter-inch TRS sockets, while digital (ADAT) connections are taken care of by a quartet of Toslink connectors. Word Clock I/O is provided on a pair of BNC connectors, and remote control functionality is provided by USB and MIDI connectivity.


    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "Shure’s new MV7i Smart Microphone & Interface",
    subTitle: "USB mic/audio interface combo boasts second input channel, high gain and more!",
    subject: "Recording and Studio Gear: Microphones  ",
    author: "Lorenz Piper",
    date: "12/18/24",
    body: `
Shure have just launched a new microphone that not only includes a built-in audio interface, but also features an XLR/TRS combo socket that can be used to connect a second microphone or instrument. The MV7i boasts the same audio performance and onboard DSP as the recently released MV7+, but with extended connectivity that makes it possible for podcasters, musicians and streamers to set up a two-channel recording rig without the need for a separate interface.

As with the MV7+, the new mic has been inspired by Shure’s ever-popular SM7B, housing a dynamic cardioid capsule that offers a frequency response of 50Hz – 16kHz and will withstand SPLs up to 128dB. Onboard DSP provides a wealth of built-in processors including an Auto Level Mode with SmartGate, Digital Popper Stopper, Real-time Denoiser, Tone Slider, Reverb, Compressor, Limiter and High-Pass Filter.What sets it apart from the competition, though, is the inclusion of an additional input that allows an extra microphone or instrument source to be routed to the second channel of its built-in audio interface. A combo socket accepts either XLR or quarter-inch TRS (tip-ring-sleeve) / TS (tip-sleeve) connectors, and as well as offering up to +60dB of very useful gain, the input will also supply phantom power, meaning it’s possible to use the MV7i along with a capacitor microphone. The USB-C interface operates at 24-bit and at a sample rate of 48kHz (16-bit 44.1kHz iOS support is also provided), and there’s also a 3.5mm headphone output that offers direct, zero-latency monitoring of both inputs..


    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "VSL launch Duality Strings (FX)",
    subTitle: "Dual-ensemble string library collection expanded",
    subject: "Electronic Music: VSTs",
    author: "Jasper Cascadia",
    date: "12/18/24",
    body: `
VSL have announced that the latest addition to their innovative dual-ensemble string library series is now available. As with the previous offerings in the range, Duality Strings (FX) captures large and small ensembles performing simultaneously in the Stage A and Stage B rooms of the company’s Synchron Stage Vienna facility, and this time, the focus is on unconventional effects techniques. 

In addition to Duality Strings, which contains all of the core articulations you’d expect of a string library, the series also includes additional releases that extend the range of playing techniques provided. Sordino adds a selection of ‘con sordino’ articulations (played with mutes), while Colors contains flautando and sul ponticello patches alongside, and Virtuoso includes a collection of crescendos and diminuendos, martelé short notes, bouncing‑bow ricochets and a range of chromatic runs and chordal arpeggios. 


    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "Heritage Audio’s BritStrip now available virtually",
    subTitle: "Hardware EQ & compressor gains plug-in counterpart",
    subject: "Electronic Music: VSTs",
    author: "Jasper Cascadia",
    date: "12/18/24",
    body: `
Following on from their recent SymphEQ plug-in release, Heritage Audio have announced that another of their popular hardware designs is now available as a DAW plug-in. BritStrip recreates the hardware unit of the same name, providing DAW users with a combination of 1073-style EQ and the diode-bridge-based compression found in the company’s Successor stereo compressor.

As with SymphEQ, the new plug-in largely replicates the front panel of its hardware counterpart. The top section of the GUI houses the EQ, with high and low sheves joined by a midrange band and a dedicated high-pass filter. The company say that the processor avoids ‘phasey’ sounds even at more extreme settings, and that users should be comfortable making far less subtle adjustments than they would with many alternative EQ designs. 

In the lower section, you’ll find Threshold, Gain Makeup, Ratio, Release, Blend and SC Filter controls that govern the behaviour of the plug-in’s compressor. Ratios of 1.5:1, 2:1. 4:1, 6:1 and 10:1 are provided, while the side-chain filter offers a choice of six high-pass frequencies that range from 80Hz to 5kHz. The compressor’s release time can be set either to Auto or 50, 100, 200 or 400 ms, and there’s an Attack Fast button that reduces the attack time. The section can be placed either pre- or post-EQ thanks to a Pre Q switch. Finally, the right side of the plug-in features a VU-style meter that can display either the final output level, or amount of gain reduction being applied. 

The plug-in is available in two versions: a ‘full’ native version, and a ‘lighter’ variant designed to run on the DSP found in the Heritage Audio’s i73 PRO interfaces. 


    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "Electro-Harmonix introduce the 360+ Looper",
    subTitle: "Popular compact looper gets even smaller!",
    subject: "Recording and Studio Gear: FX  ",
    author: "Jasper Cascadia",
    date: "12/18/24",
    body: `
The Nano Looper 360 has been one of Electro-Harmonix’ best-selling pedals over the past decade, providing musicians with a simple and affordable way to experiment with loop pedals. There’s now another addition to their looping-line-up in the form of the 360+ Looper, which is even smaller than the Nano and adds some interesting new capabilities. 

The 360+ Looper occupies EHX’s Nano chassis, and is capable of recording and playing back up to six minutes of high-quality uncompressed audio at 24-bit/44.1kHz. The recording time can be divided freely between 11 onboard loop memory slots, and the pedal supports an unlimited amount of overdubs. Despite the decrease in size compared to the Nano version, the new Pico version actually extends the feature set and offers some new functions that weren’t present in the previous version. a dedicated Overdub knob allows users to lower the level of previous overdubs each time a new one is recorded to create an ever-evolving loop, and there’s an adjustable fade-out time that can be applied as a loop is stopped. 

Key features such as undo and redo functions remain, and there’s independent level control over the loop playback, dry level and overdub elements of the pedal’s output. The single footswitch takes on multiple roles, and can be used to trigger the pedal’s record, playback, overdub, undo, redo, stop and erase functions. The footswitch can also be programmed to determine which mode it enters after recording an initial loop.

    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "Noise Makers announce Studio Verb plug-in",
    subTitle: "Supports multi-channel formats up to 9.1.6",
    subject: "Electronic Music: VSTs",
    author: "Jhon Norman",
    date: "12/18/24",
    body: `
Immersive audio experts Noise Makers have announced the release of a new convolution reverb plug-in that’s been designed specifically for those mixing with multi-channel speaker setups. Studio Verb includes 53 SRIRs (Spatial Room Impulse Responses) that capture a wide range of acoustic spaces and promise to deliver accurate, enveloping spatial reverbs. 

The company say that the new reverb is the natural evolution of their Ambi Verb HD plug-in, and that their existing Ambisonic impulse responses have been adapted to handle immersive speaker setups. As a result, Studio Verb is capable of emulating a variety of concert halls, studios, living rooms, churches and outdoor spaces. A selection of new impulses are also included, and users are free to extend the built-in collection by importing their own custom multi-channel impulse response files. 

A total of 15 channel layout formats are supported, ranging from the likes of mono, stereo and quad up to 9.1.6, with the plug-in offering detailed control over the spatial properties of the generated reverberation. Users are able to fine-tune the sound of the spaces using Decay, Spread and Pre-Delay controls, and it’s possible to store, recall and automate up to 40 different snapshots.

    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "Arturia update MiniFreak firmware",
    subTitle: "Eight new sound engines, additional sound banks & more",
    subject: "Recording and Studio Gear: Synthesizers  ",
    author: "Tood Toddersson",
    date: "12/18/24",
    body: `
Just a day after announcing their new tape emulation plug-in, Arturia have revealed that their popular MiniFreak synthesizer has been treated to a significant firmware update. With the latest version installed, the instrument gains seven new granular synthesis engines as well as a new classic sample-based engine that allows users to play, loop and reverse meticulously crafted synth samples, field recordings and foley sessions.

Alongside the new synthesis capabilities, the firmware update also includes version 3 of the MiniFreak’s factory sound bank, which includes 64 presets that showcase the full potential of its new granular engines. Some improvements have been made to the instrument’s hardware/software communication, too, and a number of known bugs have been fixed. 

    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "Tracktion BioTek 3 now available",
    subTitle: "Powerful soft synth gets a significant upgrade",
    subject: "Electronic Music: VSTs",
    author: "Tood Toddersson",
    date: "12/18/24",
    body: `
Tracktion have announced that the latest version of their powerful software synthesizer is now available. BioTek 3 introduces a whole host of new features and functions, and benefits from extensive upgrades to both its user interface and underlying audio engine. 

BioTek 3 is kitted out with an array of oscillators that extend beyond the standard waveforms and noises offered by many alternative platforms. There’s a sampler, a granular engine and an innovative Spinal Saw oscillator that provides up to 44 oscillators per voice — combined with the 16-voice unison mode and a nearly unlimited number of layers, that makes the instrument theoretically capable of triggering 11,264 oscillators with a single note! 

The latest version of the instrument comes loaded with over 300 new premium presets created by renowned sound designers Miclop, Mode Audio, Databroth, Spektralisk, Hydratek and Alessandro Cardinale. Each preset has been meticulously crafted to harness the full potential of BioTek 3’s X-Y pad, providing users with a tactile way to create morphing, evolving sounds, while a new Easy page offers makes it possible to arrange all of the instruments essential controls into one place for convenient control. 

All of the features that have made BioTek such a popular choice remain, of course, from its comprehensive filtering and effects sections to the in-depth control and modulation capabilities. The update includes plenty of improvements to the much-loved features: the filter section, for example, has gained new Transistor Ladder and Sallen-Key options, and an entirely new collection of samples have been added courtesy of composer and engineer Mike Wall. 

Check out the video below to hear some of BioTek 3’s factory patches.
    `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "Softube update Console 1 Mixing System",
    subTitle: "Module updates, MIDI fader mode & more",
    subject: "Recording and Studio Gear: Controllers",
    author: "Tood Toddersson",
    date: "12/18/24",
    body: `
    The latest iteration of Softube’s Console 1 system brought some significant improvements to what was already a powerful system, with a new premium build and look complemented by more in-depth processing capabilities and enhanced hands-on control. The company have just announced the launch of the latest software update, which delivers a range of improvements and user-requested features. What’s more, Console 1 Fader MkIII is now back in stock and available for purchase.

    With the latest software installed, Console 1 MkIII users will be able to insert a new MIDI CC module into the unit’s Shape, EQ or Compressor sections. The tool makes it possible to take control of third-party plug-ins that don’t integrate directly with the system, greatly extending the range of tools that can be controlled using the system’s hardware encoders. Similar functionality has been added to the Console 1 Fader MkIII, which now boasts a Fader MIDI Controller Mode that makes it possible to take control of orchestral libraries, drawbar-based software instruments, or any other software with MIDI-mappable faders. 
    
Additionally, Console 1 now supports the UADx SSL G Bus Compressor plug-in, and provides Nuendo users with VST3 DAW control.

We put the system to the test in SOS April 2024, you can check out our in-depth review here.
`,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
  {
    title: "Hamstead Soundworks announce the Redwing pedal",
    subTitle: "All-analogue modulation effect joins Hamstead line-up",
    subject: "Recording and Studio Gear: FX",
    author: "John Johnson",
    date: "12/18/24",
    body: `
    Hamstead Soundworks have announced the launch of their latest guitar effects pedal, which has been developed in a collaboration with Daniel Steinhardt and Mick Taylor of That Pedal Show (TPS). The Redwing boasts an all-analogue design, and is said to deliver “the most dynamic and glorious array of stereo modulation effects”. 

The company say that the pedal has been designed and built with no compromises, resulting in a superior high-frequency response that allows for high-quality, classic tones; there are no companders or noise gates present, or anything else that might negatively impact the feel or touch-sensitivity of the effect! Mono, stereo and true stereo operation modes are provided, with the pedal maintaining a complete stereo signal path thanks to its use of dual bucket-brigade delay lines. 

A whole host of modulation effects are on offer, from flanging and chorusing to vibrato and ring modulation, while switchable output modes allow for mono, stereo or wet/dry outputs, as well as bi-flanger and bi-chorus effects when operating in mono. Modulation speed can be controlled externally thanks to an expression pedal input, while a second control input allows a footswitch to take control of a Momentary Regen function. The pedal also features The GigRig’s OptoKick footswitch, which offers silent switching along with excellent reliability. 
`,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Image taken from SoundOnSound",
  },
];



import NewsArticle from "./NewsArticle";

function IntroSplashPage() {
  return (
    <>




      {exampleArticles.map(function (a, i) {
        return (
          < NewsArticle key={`${exampleArticles.title} - ${i}`} article={exampleArticles[i]} rowInverse={i % 2 === 1 ? "flex-row-reverse" : "flex-row"} artImage={exampleImages[i]} />
        )
      })}



    </>

  );
}

export default IntroSplashPage;



