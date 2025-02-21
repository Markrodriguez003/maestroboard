

//  NOTES
// ? https://codepen.io/binarykiwi/pen/BbOoPy


// COMPONENTS
import { Row, Col, Stack, Image, Button } from "react-bootstrap";
import InfoPanel from "./ui/InfoPanel"
import Corkboard from "./CorkBoard";

// LIBRARIES
import { Link } from "react-router";

// DESIGN & THEMES
import "./css/IntroSplashPage.css";
import { SITE_COLORS } from "./css/site";

// ASSETS
import corkboardPaper_1 from "../assets/imgs/post-imgs/scratchpad5.png";
import corkboardPaper_2 from "../assets/imgs/post-imgs/notecard3.png";
import corkboardPaper_3 from "../assets/imgs/post-imgs/notecard5.png";
import pushPin_1 from "../assets/imgs/post-imgs/notecard1.png";
import pushPin_2 from "../assets/imgs/post-imgs/push-pin2.png";
import pushPin_3 from "../assets/imgs/post-imgs/push-pin3.png";
import pushPin_5 from "../assets/imgs/post-imgs/push-pin5.png";
import artPost from "../assets/imgs/post-imgs/post-it-dude.png";
import artPost2 from "../assets/imgs/post-imgs/post-it-notes.png";
import artPost3 from "../assets/imgs/post-imgs/guitar-post-it.png";
import { MusicNoteBeamed, MusicNote } from "react-bootstrap-icons";


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
      <div className="mt-1 mx-auto">
        <Corkboard>
          <br />
          {/* **************************************************************/}
          {/* PUSH PINS */}
          {/* **************************************************************/}
          <div style={{ position: "absolute", top: "10px", left: "10px", width: "auto" }} className="">
            <div className="push-pin-group" style={{ position: "relative", display: "block" }}>
              <Image src={pushPin_2} style={{ display: "inline", position: "absolute", width: "40px", left: "0px" }} />
              <Image src={pushPin_3} style={{ display: "inline", position: "absolute", width: "40px", left: "40px", top: "10px" }} />
              <Image src={pushPin_1} style={{ display: "inline", position: "absolute", width: "40px", left: "10px", top: "40px" }} />
            </div>
          </div>

          {/* **************************************************************/}
          {/* POST IT NOTE */}
          {/* **************************************************************/}
          <Row className="mt-5 justify-content-center" style={{ position: "relative" }} >
            <Col xs="12" sm="3" md="3" lg="3" xl="3" style={{ order: "1" }}>
              <Image src={artPost} style={{ width: "320px" }} />
            </Col>


            {/* **************************************************************/}
            {/* WELCOME PANEL */}
            {/* **************************************************************/}
            <Col xs="11" sm="11" md="7" lg="7" xl="7" className="mt-0">
              <InfoPanel bgColor={SITE_COLORS.secondary}>
                <Row>
                  <Col>
                    <MusicNote style={{ fontSize: "60px" }} />
                    <MusicNoteBeamed style={{ fontSize: "60px" }} />
                    <MusicNote style={{ fontSize: "60px" }} />
                  </Col>
                </Row>
                <h1 className="display-2 p-2 mt-1" style={{ fontWeight: "bold" }} >Welcome to Maestroboard!</h1>
                <hr />
                <p className="lead w-75 mx-auto">This is the premier place for music gear heads and musicians!
                  Check our community posts, articles and forum! </p>
                <Stack direction="horizontal" className="gap-2 justify-content-center">
                  <Link to="/about">
                    <Button>About</Button>
                  </Link>
                  <Link to="/login">
                    <Button>Log-in</Button>
                  </Link>
                </Stack>
              </InfoPanel>
            </Col>

          </Row>
          <br />
          {/* ****************************************************************************************** */}
          {/* CORKBOARD POSTS */}
          {/* ****************************************************************************************** */}
          <Row className="gap-5 justify-content-center" style={{ padding: "0px" }} direction="horizontal">
            <Col xl={4} lg={4} md={4} sm={12} xs={12} style={{ rotate: "-10deg" }} className="mt-5 ">
              <div style={{ position: "relative", display: "inline", }}>
                <Image src={pushPin_1} style={{ position: "absolute", display: "inline", width: "35px", right: "10px", top: "-100px" }} />
                <Image src={corkboardPaper_2} style={{ width: "400px", height: "250px" }} />
                <div style={{ position: "absolute", display: "inline", width: "50px", left: "120px", bottom: "30px" }}>

                  <h1 style={{ position: "absolute", display: "inline", width: "50px", left: "-45px", bottom: "10px" }}>CORKBOARD</h1>
                  <p
                    style={{ position: "absolute", display: "inline", width: "300px", left: "-80px", bottom: "-110px", backgroundColor: "rgba(0,0,0,0.8)", color: "white" }}>
                    Check out our community corkboard for used gear and adverts!
                    <br />
                    <Button variant="dark" className="mt-2 ">Look up posts!</Button>
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

                <Button variant="primary" href="/board" className="mt-2">Browse our Community Board!</Button>
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

                <Button variant="primary" href="/board" className="mt-2">Check out the news`!</Button>
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

                <Button variant="primary" href="/board" className="mt-2">Browse our Community Board!</Button>
              </InfoPanel >
            </Col>
            <Col >
              <div>
                <Image src={artPost2} style={{ width: "320px", float: "right" }} />
              </div>
              <div className="" style={{ position: "relative", display: "inline", width: "auto" }}  >
                <Image src={pushPin_1} style={{ position: "absolute", display: "inline", width: "35px", left: "-190px", top: "42px" }} />
                <Image src={artPost3} className="mb-5 mt-5 pl-5" style={{ width: "400px", float: "left" }} />
              </div>
            </Col>
          </Row>


          {/* POST IT NOTE ART */}

          <br />

        </Corkboard >
      </div>
    </>

  );
}

export default IntroSplashPage;



