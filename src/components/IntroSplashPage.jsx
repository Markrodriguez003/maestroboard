
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
import { HouseGearFill, MusicNoteBeamed, MusicNote } from "react-bootstrap-icons";


function IntroSplashPage() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="corkboard-card-container">
        <br />
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
              <h1 className="display-4 p-2" >Welcome to Maestroboard!</h1>
              <p className="lead">Check our posts! </p>
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

              <h1 className="display-4">Live post uploads to our community board</h1>
              <h3 className="lead">Total posts: 241,923 </h3>
              <h3 className="lead">Total buying gear posts: 41,145 </h3>
              <h3 className="lead">Total selling gear posts: 100,224 </h3>

              <Button variant="info" href="/board" className="mt-2">Browse our Community Board!</Button>
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
        <br />

        {/* ****************************************************************************************** */}
        {/* ADVERTS */}
        {/* ****************************************************************************************** */}
        {/* <IntroInfoBlock /> */}
      </div >

      <br />
      <InfoPanel bgColor={SITE_COLORS.secondary} width="50" rounded="rounded-5">
        <HouseGearFill style={{ fontSize: "120px" }} />
        <h1 className="display-5" >This site is getting better!</h1>
        <hr />
        <p className="w-75 text-start mx-auto lead" >This Site is undergoing updates! Since this site is growing to accomodate all of our users, we will be changing our layours and functionality as it continues. Currently, at the moment the only access is given to the site admin, but stick around as we will be pushing out updates for users to have their own accounts! That's right! Posting community posts, forum posts, gear review scoring and community driven articles! </p>
      </InfoPanel >
    </>

  );
}

export default IntroSplashPage;



