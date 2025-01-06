
import { useState, useEffect } from "react"; // React module for JSX functionaity
import "./css/PostBoardCard.css"; // CSS file for PostBoardCard

// ? DESIGN EXAMPLES
// ? https://freefrontend.com/css-paper-effects/

// ? AWS CDN TUTS
// ? https://aws.amazon.com/getting-started/hands-on/deliver-content-faster/ 

import {
  ArrowRight,
  ArrowLeft,
  ArrowLeftCircleFill,
  ChatDotsFill,
  People,
  CalendarEvent,
  TrashFill,
  InfoSquareFill,
  CashStack,
  GeoAlt,
  Gem,
  At,
  TelephoneFill,
  Mailbox2,
} from "react-bootstrap-icons";
import ReactCardFlip from "react-card-flip";
import CardReplyModal from "./CardReplyModal";
import ReportPostModal from "./ReportPostModal";


import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


import { Card, Badge, ListGroup, Row, Col, Button, Carousel, Image } from "react-bootstrap";
import pushPinA from "../assets/imgs/post-imgs/push-pin1.png";
import pushPinB from "../assets/imgs/post-imgs/push-pin2.png";
import pushPinC from "../assets/imgs/post-imgs/push-pin3.png";
import pushPinD from "../assets/imgs/post-imgs/push-pin4.png";
import pushPinE from "../assets/imgs/post-imgs/push-pin5.png";
import pushPinF from "../assets/imgs/post-imgs/push-pin6.png";
import { propTypes } from "react-bootstrap/esm/Image";

function PostBoardCard(prop) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [revealUnderCard, setRevealUnderCard] = useState({});

  // chooses randomized push pin
  const pushPinRand = [
    pushPinA,
    pushPinB,
    pushPinC,
    pushPinD,
    pushPinE,
    pushPinF,
  ];

  function flipUnderCard() {
    console.log("Sliding under card");
    setRevealUnderCard({ top: "0" });
  }
  function flipUnderCardBack() {
    console.log("Sliding under card");
    setRevealUnderCard({ top: "500px" });
  }

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const [advancedExampleOpen, setAdvancedExampleOpen] = useState(false);
  const [postImages, setPostImages] = useState(false);





  useEffect(() => {
    // console.log(`prop images::: ${prop.images}`);

    let postImages = [];
    
    async function setPostLightboxImages() {
      for (let i = 0; i < prop.images.length; i++) {

        postImages.push({
          src: prop.images[i],
          alt: `post-image-[${i}]`,
          width: 384,
          height: 560,
        });
      }

      await setPostImages(postImages);

      // console.log(`POSTIMAGES::: ${JSON.stringify(postImages)}`);

    }

    setPostLightboxImages();
  }, []);




  const test = [
    {
      src: "https://images.craigslist.org/00t0t_afVCM7ePuXj_0jm0ew_600x450.jpg",
      alt: `post-image-https://images.craigslist.org/00t0t_afVCM7ePuXj_0jm0ew_600x450.jpg`,
      width: 384,
      height: 560,
    },
    {
      src: "https://images.craigslist.org/00808_leE6aXDLf9A_0fu0ak_600x450.jpg",
      alt: `post-image-https://images.craigslist.org/00808_leE6aXDLf9A_0fu0ak_600x450.jpg`,
      width: 384,
      height: 560,
    },
    {
      src: "https://images.craigslist.org/00404_leOYhpqPMf4_0jm0ew_600x450.jpg",
      alt: `post-image-https://images.craigslist.org/00404_leOYhpqPMf4_0jm0ew_600x450.jpg`,
      width: 384,
      height: 560,
    },
  ]

  return (
    <div>

      <Lightbox
        open={advancedExampleOpen}
        close={() => setAdvancedExampleOpen(false)}
        slides={postImages}
        // slides={test}
        // slides={[
        //   {
        //     src: postImages,
        //     alt: "image 1",
        //     width: 380,
        //     height: 560,
        //     srcSet: postImages,
        //   }]}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
      <div className="container">
        <div className="row">
          <div className="card-container">
            <div className="card-flip">
              {/* ***************************** */}
              {/* CARD FRONT */}
              {/* ***************************** */}

              <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className="card front">
                  <Card style={{ width: "400px", height: "500px" }}>
                    <Carousel data-bs-theme="light" interval={null}>

                      ({
                        prop.images.map(function (img, i) {

                          return (
                            <Carousel.Item key={`post-key-${img}}`} onClick={() => setAdvancedExampleOpen(true)} style={{ cursor: "pointer" }}>
                              <div key={`container-${img} + ${i}`}>
                                < Image
                                  key={`image-${img} - ${i}`}
                                  className="d-block w-100"
                                  style={{
                                    display: "block",
                                    height: "300px",
                                    width: "100%",
                                    objectFit: "contain",
                                    backgroundColor: "rgba(0,0,0,0.2)"
                                  }}
                                  rounded
                                  src={img}
                                  alt={`alt- post-slide - ${img}`

                                  }
                                />
                              </div>
                            </ Carousel.Item>
                          )
                        })
                      })

                    </Carousel>
                    <div className="card-top-header">
                      <img
                        src={pushPinRand[Math.floor(Math.random() * 5)]}
                        alt="pushpin"
                        className="pushPin"
                      // style={{ transform: "scaleX(-1)" }}
                      ></img>
                      <Row className="card-header-labels">
                        <Col>
                          <People /> Posted By:
                        </Col>
                        <Col>
                          {" "}
                          <CalendarEvent /> Date Posted:
                        </Col>
                        <Col>
                          <GeoAlt /> Zipcode:
                        </Col>
                      </Row>
                      {/* User Post input */}
                      <Row className="card-header-user-input">
                        <Col>{prop.username}</Col>
                        <Col>{Date}</Col>
                        <Col>{prop.zip}</Col>
                      </Row>
                    </div>
                    <Row
                      className="mx-auto"
                      style={{ fontSize: "16px", color: "white" }}
                    >
                      <Col>
                        <Badge variant="success">
                          {" "}
                          <CashStack style={{ marginBottom: "3.25px" }} /> $
                          {prop.price} {prop.trade}
                        </Badge>
                      </Col>
                      <Col>
                        <Badge variant="warning">
                          {" "}
                          <Gem style={{ marginBottom: "3.25px" }} /> {prop.type}
                        </Badge>
                      </Col>
                    </Row>

                    <Card.Body>
                      <Card.Title className="post-title-text text-center mx-auto">
                        {prop.title}
                      </Card.Title>
                      {/* <Card.Text className="post-quickBody-text">
                        {userPost.quickBody}
                      </Card.Text> */}
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      <Row className="text-center mb-5">
                        <Col className="">
                          <Button
                            className="btn btn-info btn-sm btn-block"
                            onClick={handleClick}
                          >
                            <InfoSquareFill /> Info
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            variant="success"
                            className="btn btn-sm btn-block"
                            onClick={flipUnderCard}
                          >
                            <ChatDotsFill style={{ marginBottom: "3.65px" }} />{" "}
                            Contact
                          </Button>
                        </Col>
                      </Row>
                    </Card.Footer>
                  </Card>
                </div>
                {/* ***************************** */}
                {/* CARD BACK */}
                {/* ***************************** */}

                <div className=" card back">
                  <Card style={{ width: "400px", height: "500px" }}>
                    <div className="card-top-header">
                      <TrashFill className="delete-icon" />
                      <Row className="card-header-labels">
                        <Col>
                          <People /> Posted By:
                        </Col>
                        <Col>
                          {" "}
                          <CalendarEvent /> Date Posted:
                        </Col>
                        <Col>
                          <GeoAlt /> Zipcode:
                        </Col>
                      </Row>
                      {/* User Post input */}
                      <Row className="card-header-user-input">
                        <Col>{prop.username}</Col>
                        <Col>{prop.date}</Col>
                        <Col>{prop.zip}</Col>
                      </Row>
                    </div>
                    <Card.Body className="table-text">
                      <Card.Title className="info-card-title">
                        {prop.title}{" "}
                      </Card.Title>
                      <p className="info-card-body">{prop.body}</p>
                    </Card.Body>
                    <Card.Body>
                      <Card.Body>
                        <Col className="text-center">
                          <Button
                            size="lg"
                            className="btn-info"
                            onClick={handleClick}
                          >
                            <ArrowLeftCircleFill
                              style={{ marginBottom: "3.65px" }}
                            />{" "}
                            Back
                          </Button>
                        </Col>
                        <ReportPostModal />
                      </Card.Body>
                    </Card.Body>
                  </Card>
                </div>
              </ReactCardFlip>

              {/* UNDER CARD */}
              {/* ***************************** */}

              <div className="under-card" style={revealUnderCard}>
                <Card
                  style={{
                    width: "400px",
                    height: "500px",
                    backgroundColor: "darkcyan",
                    color: "white",
                  }}
                >
                  <div className="card-top-header">
                    <Row className="card-header-labels">
                      <Col>
                        <People /> Posted By:
                      </Col>
                      <Col>
                        {" "}
                        <CalendarEvent /> Date Posted:
                      </Col>
                      <Col>
                        <GeoAlt /> Zipcode:
                      </Col>
                    </Row>
                    {/* User Post input */}
                    <Row className="card-header-user-input">
                      <Col>{prop.username}</Col>
                      <Col>{prop.date}</Col>
                      <Col>{prop.zip}</Col>
                    </Row>
                  </div>
                  <Card.Body>
                    <Card.Title className="text-center">
                      {" "}
                      <h3>
                        {" "}
                        <Mailbox2
                          style={{ marginBottom: "4.8px" }}
                        /> Contact{" "}
                      </h3>
                    </Card.Title>
                    <ListGroup className="p-0">
                      <ListGroup.Item style={{ color: "black" }}>
                        <span className="font-weight-bold contact-text">
                          <At />
                          Email:
                        </span>

                        <span className="contact-text">
                          {" "}
                          <a href={"mailTo" + prop.email}>{prop.email}</a>
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item style={{ color: "black" }}>
                        <span className="font-weight-bold contact-text">
                          <TelephoneFill /> Number:
                        </span>
                        <span className="contact-text"> {prop.phone}</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {/* <CardReplyModal /> */}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>

                  <Card.Body>
                    <Row className="text-center ">
                      <Col className="text-center">
                        <Button
                          size="lg"
                          className="btn-info"
                          onClick={flipUnderCardBack}
                        >
                          <ArrowLeftCircleFill
                            style={{ marginBottom: "3.65px" }}
                          />{" "}
                          Back
                        </Button>
                      </Col>
                    </Row>
                    <ReportPostModal />
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}

export default PostBoardCard;
