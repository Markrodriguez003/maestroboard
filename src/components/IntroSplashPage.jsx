

//  NOTES
// ? https://codepen.io/binarykiwi/pen/BbOoPy

import "./css/IntroSplashPage.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Row, Col, Figure, Stack, Image, Button } from "react-bootstrap";
import IntroInfoBlock from "./IntroInfoBlock";
import PostCounter from "./PostCounter";
import ForumPostCounter from "./ForumPostCounter";
import HeaderPanel from "./ui/HeaderPanel";
import InfoPanel from "./ui/InfoPanel"

// DESIGN & THEMES
import { SITE_COLORS } from "./css/site";

// ASSETS
import corkboardPaper_1 from "../assets/imgs/post-imgs/scratchpad5.png";
import corkboardPaper_2 from "../assets/imgs/post-imgs/notecard3.png";
import corkboardPaper_3 from "../assets/imgs/post-imgs/notecard5.png";
import pushPin_1 from "../assets/imgs/post-imgs/notecard1.png";
import pushPin_2 from "../assets/imgs/post-imgs/push-pin2.png";
import pushPin_3 from "../assets/imgs/post-imgs/push-pin3.png";
import artPost from "../assets/imgs/post-imgs/post-it-dude.png";
import artPost2 from "../assets/imgs/post-imgs/post-it-notes.png";
import { HouseGearFill, MusicNoteBeamed, MusicNote } from "react-bootstrap-icons";


/*----------------------------------------------------------------------------
|   ⚙️ Use: The main splash/hero component for the Home page
|        
|   🔧 Todo: 
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function IntroSplashPage() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="corkboard-card-container">
        <br />
        <div style={{ position: "relative" }}>
          <Image src={pushPin_2} style={{ display: "inline", position: "absolute", width: "40px", left: "-50px" }} />
          <Image src={pushPin_3} style={{ display: "inline", position: "absolute", width: "40px", left: "-90px", top: "20px" }} />
          <Image src={pushPin_1} style={{ display: "inline", position: "absolute", width: "40px", left: "-50px", top: "40px" }} />
        </div>
        <div>
          <Image src={artPost} style={{ width: "320px" }} />
        </div>
        <Row className="my-4">
          <Col>
            <InfoPanel bgColor={SITE_COLORS.secondary}>
              <Row>
                <Col>
                  <MusicNote style={{ fontSize: "60px" }} />
                  <MusicNoteBeamed style={{ fontSize: "60px" }} />
                  <MusicNote style={{ fontSize: "60px" }} />
                </Col>
              </Row>
              <h1 className="display-2 p-2" >Welcome to Maestroboard!</h1>
              <p className="lead w-75 mx-auto">This is the premier place for music gear heads and musicians!
                Check our community posts, articles and forum! </p>
              <Stack direction="horizontal" className="gap-2 justify-content-center">
                <Button>About</Button>
                <Button>Log-in</Button>
              </Stack>
            </InfoPanel>
          </Col>
        </Row>

        {/* ****************************************************************************************** */}
        {/* CORKBOARD POSTS */}
        {/* ****************************************************************************************** */}
        <Row className="gap-5 justify-content-center" style={{ padding: "0px" }} direction="horizontal">
          <Col xl={4} lg={4} md={4} sm={12} xs={12} style={{ rotate: "-10deg" }} className="mt-5">
            <div style={{ position: "relative", display: "inline", }}>
              <Image src={pushPin_1} style={{ position: "absolute", display: "inline", width: "35px", right: "10px", top: "-100px" }} />
              <Image src={corkboardPaper_2} style={{ width: "400px", height: "250px" }} />
              <div style={{ position: "absolute", display: "inline", width: "50px", left: "120px", bottom: "30px" }}>

                <h1 style={{ position: "absolute", display: "inline", width: "50px", left: "-45px", bottom: "10px" }}>CORKBOARD</h1>
                <p style={{ position: "absolute", display: "inline", width: "300px", left: "-80px", bottom: "-110px", backgroundColor: "rgba(0,0,0,0.8)", color: "white" }}>
                  Check out our community corkboard for used gear and adverts!
                  <br />
                  <Button className="mt-2">Read more news!</Button>
                </p>
              </div>
            </div>
          </Col>

          <Col xl={7} lg={7} md={12} sm={12} xs={12}>
            <InfoPanel bgColor={SITE_COLORS.main_2}>

              <h1 className="display-4">Live post uploads to our community board</h1>
              <h3 className="lead">Total posts: 241,923 </h3>
              <h3 className="lead">Total buying gear posts: 41,145 </h3>
              <h3 className="lead">Total selling gear posts: 100,224 </h3>

              <Button variant="info" href="/board" className="mt-2">Browse our Community Board!</Button>
            </InfoPanel >
          </Col>
        </Row>
        <br />

        {/* ****************************************************************************************** */}
        {/* ARTICLES POSTS */}
        {/* ****************************************************************************************** */}
        <Row className="gap-5 justify-content-center" style={{ padding: "0px" }} direction="horizontal">

          <Col xl={7} lg={7} md={12} sm={12} xs={12}>
            <InfoPanel bgColor={SITE_COLORS.alternateMain}>

              <h1 className="display-4">Latest music gear articles!</h1>
              <h3 className="lead">Total articles: 92 </h3>
              <h3 className="lead">Gear Reviews: 24 </h3>
              <h3 className="lead">Music & Composition: 12 </h3>
              <h3 className="lead">General News: 19 </h3>
              <h3 className="lead">Studio & Recording: 9 </h3>

              <Button variant="info" href="/board" className="mt-2">Check out the news`!</Button>
            </InfoPanel >
          </Col>
          <Col xl={4} lg={4} md={4} sm={12} xs={12} style={{ rotate: "10deg" }} className="mt-5">
            <div style={{ position: "relative", display: "inline", }}>
              <Image src={pushPin_1} style={{ position: "absolute", display: "inline", width: "35px", left: "30px", top: "-115px" }} />
              <Image src={corkboardPaper_1} style={{ width: "400px", height: "250px" }} />
              <div style={{ position: "absolute", display: "inline", width: "50px", left: "120px", bottom: "30px" }}>

                <h1 style={{ position: "absolute", display: "inline", width: "50px", left: "-45px", bottom: "10px" }}>NEWS</h1>
                <p style={{ position: "absolute", display: "inline", width: "300px", left: "-80px", bottom: "-110px", backgroundColor: "rgba(0,0,0,0.8)", color: "white" }}>
                  Find out the latest music gear related news!
                  <br />
                  <Button className="mt-2">Read more news!</Button>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <br />


        {/* ****************************************************************************************** */}
        {/* FORUM POSTS */}
        {/* ****************************************************************************************** */}
        <Row className="gap-5 justify-content-center" style={{ padding: "0px" }} direction="horizontal">
          <Col xl={4} lg={4} md={4} sm={12} xs={12} style={{ rotate: "-10deg" }} className="mt-5">
            <div style={{ position: "relative", display: "inline", }}>
              <Image src={pushPin_1} style={{ position: "absolute", display: "inline", width: "35px", right: "10px", top: "-100px" }} />
              <Image src={corkboardPaper_3} style={{ width: "400px", height: "250px" }} />
              <div style={{ position: "absolute", display: "inline", width: "50px", left: "120px", bottom: "30px" }}>

                <h1 style={{ position: "absolute", display: "inline", width: "50px", left: "-45px", bottom: "10px" }}>FORUM</h1>
                <p style={{ position: "absolute", display: "inline", width: "300px", left: "-80px", bottom: "-110px", backgroundColor: "rgba(0,0,0,0.8)", color: "white" }}>
                  Be part of our community! Meet musicians and gear heads like yourself!
                  <br />
                  <Button className="mt-2">Dive into the forum!</Button>
                </p>
              </div>
            </div>
          </Col>

          <Col xl={7} lg={7} md={12} sm={12} xs={12}>
            <InfoPanel bgColor={SITE_COLORS.main_2}>

              <h1 className="display-4">Forum Posts</h1>
              <h3 className="lead">Total Forum Categories: 55 </h3>
              <h3 className="lead">Total Forum posts: 11,823 </h3>
              {/* <h3 className="lead">Total buying gear posts: 41,145 </h3> */}
              {/* <h3 className="lead">Total selling gear posts: 100,224 </h3> */}

              <Button variant="info" href="/board" className="mt-2">Browse our Community Board!</Button>
            </InfoPanel >
          </Col>
        </Row>

        <div>
          <Image src={artPost2} style={{ width: "320px" }} />
        </div>
        <br />

        {/* ****************************************************************************************** */}
        {/* ADVERTS */}
        {/* ****************************************************************************************** */}
      </div >


    </>

  );
}

export default IntroSplashPage;



