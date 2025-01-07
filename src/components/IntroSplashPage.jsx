
import "./css/IntroSplashPage.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Row, Col, Figure } from "react-bootstrap";
import IntroInfoBlock from "./IntroInfoBlock";
import PostCounter from "./PostCounter";
import ForumPostCounter from "./ForumPostCounter";
import art1 from "../assets/imgs/article-imgs/Article-6.png";
import art2 from "../assets/imgs/article-imgs/Article-7.jpg";
import art3 from "../assets/imgs/article-imgs/cherry_audio_filtomika-uuzeCu5kdMie8Q2mvxdJyEhnqkQsd5uI.jpg";
import art4 from "../assets/imgs/article-imgs/sonicware_cydrums-zarNCId1V3mndGsHKl2qxggf2yTkPlHz.jpg";
import art5 from "../assets/imgs/article-imgs/ReasonStudiosReason13_01-PCQEOqvQcRmoHW4.vaAbh2bBWaPic.G..jpg";
import art6 from "../assets/imgs/article-imgs/gforce_icondrum-VbBqP7q2fhho0u4Owuy8ogyQcWb0dJbu.jpg";

// TEST DATA
const exampleArticles = [
  {
    title: " Arturia announces 3 Modulation plug-ins You’ll Actually Use",
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

];



import NewsArticle from "./NewsArticle";

function IntroSplashPage() {
  return (
    <>
      < NewsArticle article={exampleArticles[0]} rowInverse={"flex-row"} artImage={art1} />
      < NewsArticle article={exampleArticles[1]} rowInverse={"flex-row-reverse"} artImage={art2} />
      < NewsArticle article={exampleArticles[2]} rowInverse={"flex-row-reverse"} artImage={art3} />
      < NewsArticle article={exampleArticles[3]} rowInverse={"flex-row-reverse"} artImage={art4} />
      < NewsArticle article={exampleArticles[4]} rowInverse={"flex-row-reverse"} artImage={art5} />

    </>

  );
}

export default IntroSplashPage;



