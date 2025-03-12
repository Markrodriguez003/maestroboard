// COMPONENTS
import { Row, Col, Stack, Image, Button } from "react-bootstrap";
import InfoPanel from "./ui/InfoPanel"
import Corkboard from "./CorkBoard";

// LIBRARIES
import { Link } from "react-router";
import axios from "axios";

// DESIGN & THEMES
import "./css/IntroSplashPage.css";
import "./css/tape.css";
import { SITE_COLORS } from "./css/site";

// ASSETS
import pushPin_1 from "../assets/imgs/post-imgs/notecard1.png";
import pushPin_2 from "../assets/imgs/post-imgs/push-pin2.png";
import pushPin_3 from "../assets/imgs/post-imgs/push-pin3.png";
import artPost from "../assets/imgs/post-imgs/post-it-dude.png";
import artPost2 from "../assets/imgs/post-imgs/post-it-notes.png";
import artPost3 from "../assets/imgs/post-imgs/guitar-post-it.png";
import { MusicNoteBeamed, MusicNote } from "react-bootstrap-icons";
import { useEffect, useState } from "react";


/*----------------------------------------------------------------------------
|   ⚙️ Use: The main splash/hero component for the Home page
|        
|   🔧 Todo: Add more artsy posts / add card animations
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function IntroSplashPage() {

  // HOLDS ARTICLE & POST CATEGORY DATA
  const [data, setData] = useState({});

  // FETCHES ARTICLE & POST CATEGORY DATA
  useEffect(() => {
    fetchArticlesData();
    fetchPostsData();
  }, [])

  // GRABS ARTICLE DATA
  async function fetchArticlesData() {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API_URL}/api/articles/fetch-all/type/total`)
      .then((response) => {
        // CALCULATES TOTAL ARTICLES
        const totalArticlesArry = Object.values(response.data);
        const totalArticles = totalArticlesArry.reduce((total, currentvalue) => {
          return total + currentvalue
        })
        setData((prev) => (
          {
            ...prev,
            articlesData: response.data,
            totalArticles: totalArticles
          }
        ))
      })
      .catch((err) => console.log(err));
  }
  // GRABS POSTS DATA
  async function fetchPostsData() {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API_URL}/api/posts/fetch-all/type/total`)
      .then((response) => {
        // CALCULATES TOTAL POSTS
        const totalPostsArry = Object.values(response.data);
        const totalPosts = totalPostsArry.reduce((total, currentvalue) => {
          return total + currentvalue
        })
        setData((prev) => (
          {
            ...prev,
            postsData: response.data,
            totalPosts: totalPosts
          }
        ))
      })
      .catch((err) => console.log(err));
  }



  return (
    <>
      <div className="mt-1 mx-auto text-center">
        <Corkboard>
          {/* **************************************************************/}
          {/* PUSH PINS */}
          {/* **************************************************************/}
          <div className="push-pin-group-container">
            <div className="push-pin-group">
              <Image src={pushPin_2} />
              <Image src={pushPin_1} />
              <Image src={pushPin_3} />
            </div>
          </div>

          {/* **************************************************************/}
          {/* "WHOA DUDE" POST IT NOTE */}
          {/* **************************************************************/}
          <Row className="mt-5 justify-content-center"   >
            <Col xs="12" sm="3" md="3" lg="3" xl="3" style={{ order: "1" }}>
              <Image src={artPost} className="cool-guy" />
            </Col>
            {/* **************************************************************/}
            {/* WELCOME PANEL */}
            {/* **************************************************************/}
            <Col xs="11" sm="11" md="7" lg="7" xl="7" className="mt-5">
              <InfoPanel bgColor={SITE_COLORS.secondary} width="100%" >
                <Row>
                  <Col>
                    <MusicNote className="music-notes" />
                    <MusicNoteBeamed className="music-notes" />
                    <MusicNote className="music-notes" />
                  </Col>
                </Row>
                <h1 className="display-3 p-2 mt-1" style={{ fontWeight: "bold" }} >Welcome to Maestroboard!</h1>
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
                  <Link to="/sign-up">
                    <Button>Sign-up</Button>
                  </Link>
                </Stack>
              </InfoPanel>
            </Col>
          </Row>
          <br />
          {/* ************************************************************ */}
          {/* CORKBOARD POSTS */}
          {/* ************************************************************ */}
          <Row className="gap-5 justify-content-center p-0 m-0" direction="horizontal">
            <Col xl={4} lg={4} md={4} sm={12} xs={12} className="mt-0 m-0 p-0">
              <div className="postcard-slanted postcard-background-board" style={{ rotate: "-8deg" }}>
                <Image src={pushPin_1} style={{ position: "absolute", display: "inline", width: "35px", right: "10px", top: "12px" }} />
                <div className="postcard-inner">
                  <h1 >CORKBOARD</h1>
                  <p className="m-0 p-0">
                    Check out our community corkboard for used gear and adverts! From guitars, basses, brass, synthesizers to services, gigs and band member search!
                    <br />
                    <Link to="/board">
                      <Button variant="dark" className="mt-2 mb-2">Look up posts!</Button>
                    </Link>
                  </p>
                </div>
              </div>
            </Col>

            <Col xl={7} lg={7} md={12} sm={12} xs={12}>
              <InfoPanel bgColor={SITE_COLORS.main_2}>
                <h1 className="display-4">Latest posts on our community board</h1>
                <h3 className="lead">Total posts: {data.totalPosts ? data.totalPosts : 0} </h3>
                <h3 className="lead">Total buying gear posts: {data.postsData ? data.postsData["Buying"] : 0} </h3>
                <h3 className="lead">Total selling gear posts: {data.postsData ? data.postsData["Selling"] : 0} </h3>
                <h3 className="lead">Total advertisement posts: {data.postsData ? data.postsData["Advertisement"] : 0} </h3>
                <h3 className="lead">Total Community posts: {data.postsData ? data.postsData["Community"] : 0} </h3>
                <Link to="/board">
                  <Button variant="primary" className="mt-2">Browse our Community Board!</Button>
                </Link>
              </InfoPanel >
            </Col>
          </Row>
          <br />

          {/* ****************************************************************************************** */}
          {/* NEWS ARTICLES POSTS */}
          {/* ****************************************************************************************** */}
          <Row className="gap-5 justify-content-center" style={{ padding: "0px" }} direction="horizontal">
            <Col xl={7} lg={7} md={12} sm={12} xs={12}>
              <InfoPanel bgColor={SITE_COLORS.alternateMain}>
                <h1 className="display-4">Latest music gear articles!</h1>
                <h3 className="lead">Total articles: {data.totalArticles ? data.totalArticles : 0} </h3>
                <h3 className="lead">General News: {data.articlesData ? data.articlesData["General"] : 0} </h3>
                <h3 className="lead">Gear Reviews: {data.articlesData ? data.articlesData["Gear Review"] : 0} </h3>
                <h3 className="lead">Studio & Recording: {data.articlesData ? data.articlesData["Recording & Studio"] : 0} </h3>
                <h3 className="lead">Instrument News: {data.articlesData ? data.articlesData["Instruments"] : 0} </h3>
                <h3 className="lead">Music & Composition: {data.articlesData ? data.articlesData["Composition"] : 0} </h3>
                <Link to="/news">
                  <Button variant="primary" className="mt-2">Check out the news!</Button>
                </Link>
              </InfoPanel >
            </Col>


            <Col xl={4} lg={4} md={4} sm={12} xs={12} style={{ rotate: "10deg" }} className="mt-5">
              <div className="postcard-slanted postcard-background-news">
                <Image src={pushPin_1} style={{ position: "absolute", display: "inline", width: "35px", left: "30px", top: "5px" }} />
                <div className="postcard-inner">
                  <h1 >NEWS</h1>
                  <p >
                    Find out the latest music gear related news! We have articles that touch upon gear reviews, latest updates, educational material and announcements!
                    <br />
                    <Link to="/news">
                      <Button className="mt-2 mb-2">Read more news!</Button>
                    </Link>
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
              <div className="postcard-slanted postcard-background-forum">
                <Image src={pushPin_1} style={{ position: "absolute", display: "inline", width: "35px", right: "10px", top: "20px" }} />
                <div className="postcard-inner">

                  <h1>FORUM</h1>
                  <p>
                    Be part of our community! Meet musicians and gear heads like yourself!
                    <br />
                    <Link to={"/forum"}>
                      <Button className="mt-2">Dive into the forum!</Button>
                    </Link>
                  </p>
                </div>
              </div>
            </Col>

            <Col xl={7} lg={7} md={12} sm={12} xs={12}>
              <InfoPanel bgColor={SITE_COLORS.main_2}>

                <h1 className="display-4">Forum Posts</h1>
                <h3 className="lead">Total Forum Categories: 55 </h3>
                <h3 className="lead">Total Forum posts: 11,823 </h3>
                <Link to={"/forum"}>
                  <Button variant="primary" className="mt-2">Browse our Community Board!</Button>
                </Link>
              </InfoPanel >
            </Col>
          </Row>
          <br />

          {/* MISC. POSTCARD ART */}
          <Row className="gap-0">

            <Col >
              <div>
                <Image src={artPost2} style={{ width: "270px" }} />
              </div>
            </Col>
            <Col style={{ position: "relative", rotate: "-3deg" }} className="">
              <Image src={pushPin_1} style={{ position: "absolute", display: "inline", width: "35px", right: "150px", top: "52px" }} />
              <Image src={artPost3} className=" mt-5 mb-2 make-music-post" />
            </Col>
          </Row>
        </Corkboard >
      </div>
    </>

  );
}

export default IntroSplashPage;



