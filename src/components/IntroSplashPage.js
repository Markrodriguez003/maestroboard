import React from "react";
import "./css/IntroSplashPage.css";
import { ArrowRightCircle } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
import { Row, Col, Figure } from "react-bootstrap";
import IntroInfoBlock from "./IntroInfoBlock";
import NewUserInfoAccordion from "./NewUserInfoAccordion";
import PostCounter from "./PostCounter";
import ForumPostCounter from "./ForumPostCounter";
import Header from "./Header";
import Footer from "./Footer";



import art1 from "./article-imgs/Article-6.png";
import art2 from "./article-imgs/Article-7.jpg";
// import art3 from "./article-imgs/Article-8.jpg";
// import art4 from "./article-imgs/Article-10.jpg";
// import muse from "./imgs/muse.png";

function IntroSplashPage() {
  return (
    // xs, sm, md, lg , and x
    <div>
      <Header />
      {/* ******************************************************************************************************/}
      {/* FIRST ARTICLE */}
      {/* ******************************************************************************************************/}
      {/* <article className="article-container">
                <Row>
                    <Col>
                        <img src={art3}></img>

                    </Col>
                    <Col>
                        <img src={art4}></img>

                    </Col>
                </Row>
            </article> */}

      {/* ******************************************************************************************************/}
      {/* THIRD  ARTICLE */}
      {/* ******************************************************************************************************/}

      <NewUserInfoAccordion />

      <article className="article-container ">
        <Row>
          <Col xs sm md lg={6}>
            <img src={art1} className="article-img-1" alt="article image"></img>
            <caption>Image Taken from gearonline.com</caption>
          </Col>
          <Col xs sm md lg={6}>
            <h6 className="article-type-header">Electronic Music: VSTs</h6>
            <h3>
              {" "}
              Arturia announces 3 Modulation plug-ins You’ll Actually Use
            </h3>
            <small className="article-small">
              Written by: Jeremy Frazen - 12/24/19
            </small>
            <hr className="article-hr" />
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
              aliquet porttitor lacus luctus. Aenean et tortor at risus viverra.
              Lectus proin nibh nisl condimentum id venenatis. Senectus et netus
              et malesuada fames. Convallis a cras semper auctor neque vitae
              tempus. Orci phasellus egestas tellus rutrum tellus pellentesque
              eu. Orci dapibus ultrices in iaculis nunc sed augue. Lobortis
              feugiat vivamus at augue eget arcu. Arcu ac tortor dignissim
              convallis aenean et tortor at
            </p>
            <p>
              {" "}
              Nulla facilisi cras fermentum odio eu feugiat. Nulla at volutpat
              diam ut. Fermentum dui faucibus in ornare quam viverra orci
              sagittis. Tincidunt vitae semper quis lectus nulla at volutpat
              diam ut. .
            </p>
            <a href="#" className="continue-reading">
              {" "}
              <small>Continue Reading </small>{" "}
              <ArrowRightCircle
                style={{ fontSize: "35px", color: "rgba(250,250,250,0.9)" }}
                className="float-right"
              />{" "}
            </a>
          </Col>
        </Row>
      </article>

      {/* ******************************************************************************************************/}
      {/* FOURTH ARTICLE */}
      {/* ******************************************************************************************************/}
      <article className="article-container">
        <Row>
          <Col xs sm md lg={6}>
            <h6 className="article-type-header">
              Recording and Studio Gear: Interface
            </h6>
            <h3>
              {" "}
              Universal Audio Releases Apollo Solo Audio Interfaces for Mac and
              Windows
            </h3>
            <small className="article-small">
              Written by: Jeremy Frazen - 12/22/19
            </small>
            <hr className="article-hr" />
            <p>
              {" "}
              . Aenean et tortor at risus viverra. Lectus proin nibh nisl
              condimentum id Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Nulla aliquet Orci phasellus egestas tellus rutru.
              porttitor lacus luctus. Aenean et tortor at risus viverra. Lectus
              proin nibh nisl condimentum id venenatis. Senectus et netus et
              malesuada fames. Convallis a cras semper auctor neque vitae
              tempus. Orci phasellus egestas tellus rutrum tellus pellentesque
              eu. Orci dapibus ultrices in iaculis nunc sed augue. Lobortis
              feugiat vivamus at augue eget arcu. Arcu ac tortor dignissim
              convallis aenean et tortor at
            </p>
            <p>
              {" "}
              Nulla facilisi cras fermentum odio eu feugiat. Nulla at volutpat
              diam ut. Fermentum dui faucibus in ornare quam viverra orci
              sagittis. Tincidunt vitae semper quis lectus nulla at volutpat
              diam ut. Orci phasellus egestas tellus rutru augue eget arcu. Arcu
              ac tortor dignissim .
            </p>
            <a href="#" className="continue-reading">
              {" "}
              <small>Continue Reading </small>{" "}
              <ArrowRightCircle
                style={{ fontSize: "35px", color: "rgba(250,250,250,0.9)" }}
                className="float-right"
              />{" "}
            </a>
          </Col>
          <Col xs sm md lg={6}>
            <Figure>
              <Figure.Image
                // width={171}
                // height={180}
                className="article-img-1"
                alt="article image"
                src={art2}
              />
              <Figure.Caption>Image Taken from gearonline.com.</Figure.Caption>
            </Figure>
            {/* <img src={art2} className="article-img-1" alt="article image"></img> */}
            {/* <small>Image Taken from gearonline.com</small> */}
          </Col>
        </Row>
      </article>
      <ForumPostCounter />
      {/* ******************************************************************************************************/}
      <IntroInfoBlock />
      <PostCounter />
      <Footer />
    </div>
  );
}

export default IntroSplashPage;
