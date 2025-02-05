
import { useState, useEffect } from "react";
// ? DESIGN EXAMPLES
// ? https://freefrontend.com/css-paper-effects/

// LIBRARIES
import ReactCardFlip from "react-card-flip";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

// CSS
import "./css/PostBoardCard.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// COMPONENTS
import { Card, Badge, ListGroup, Row, Col, Button, Carousel, Image } from "react-bootstrap";
import CardReplyModal from "./CardReplyModal";
import ReportPostModal from "./ReportPostModal";
import LoadingPostCard from "./ui/LoadingPostCard";

// ASSETS
import pushPinA from "../assets/imgs/post-imgs/push-pin1.png";
import pushPinB from "../assets/imgs/post-imgs/push-pin2.png";
import pushPinC from "../assets/imgs/post-imgs/push-pin3.png";
import pushPinD from "../assets/imgs/post-imgs/push-pin4.png";
import pushPinE from "../assets/imgs/post-imgs/push-pin5.png";
import pushPinF from "../assets/imgs/post-imgs/push-pin6.png";

import defaultImage from "../assets/imgs/misc/missing-img.png";

import {
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
  EnvelopeAtFill
} from "react-bootstrap-icons";
import { SITE_COLORS } from "./css/site";

function PostBoardCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [revealUnderCard, setRevealUnderCard] = useState({});
  const [isPostCardLoaded, setIsPostCardLoaded] = useState(false);

  // chooses randomized push pin
  const pushPinRand = [
    pushPinA,
    pushPinB,
    pushPinC,
    pushPinD,
    pushPinE,
    pushPinF,
  ];


  // LOGIC
  function flipUnderCard() {
    setRevealUnderCard({ top: "0" });
  }
  function flipUnderCardBack() {
    setRevealUnderCard({ top: "500px" });
  }

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [postImages, setPostImages] = useState(false);

  // LOADS POST IMAGES
  const tempGalleryArry = props.image_urls.map((image, i) => {
    return {
      src: `${image} `,
      alt: `Article-image-${i}`,
      width: "100%",
      height: "100%",
    }
  })


  // CHECKS TO SEE IF POSTBOARD CARD IS LOADED. PLACE LOADING CARD IN LIEU
  useEffect(() => {
    setIsPostCardLoaded(true);
  }, []);

  return (
    <div>
      {isPostCardLoaded ?
        <div>


          <Lightbox
            open={lightBoxOpen}
            close={() => setLightBoxOpen(false)}
            slides={tempGalleryArry ? tempGalleryArry :
              [
                {
                  src: `${defaultImage} `,
                  alt: `post-image-upload-error`,
                  width: "350px",
                  height: "350px",
                }
              ]}
            plugins={[Fullscreen, Thumbnails]}
          />


          <div className="container">
            <div className="row" >
              <div className="card-container" >
                <div className="card-flip card-bottom-curl" style={{ width: "auto", backgroundColor: "rgba(0,0,0,0.4)" }}>
                  {/* ***************************** */}
                  {/* CARD FRONT */}
                  {/* ***************************** */}
                  <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div className="card front">
                      <Card style={{ width: "400px", height: "500px" }}>


                        {tempGalleryArry?.length !== 0 || tempGalleryArry !== undefined
                          ?
                          <Carousel interval={null}>
                            ({
                              tempGalleryArry?.map(function (img, i) {
                                return (
                                  <Carousel.Item key={`${Math.floor(Math.random() * 100)}-cork-post-key-${img}-${Math.floor(Math.random() * 100)}`} onClick={() => setLightBoxOpen(true)} style={{ cursor: "pointer" }}>
                                    <div>
                                      < Image
                                        key={`image-${img.src} - ${i}`}
                                        className="d-block"
                                        style={{
                                          height: "300px",
                                          width: "100%",
                                          objectFit: "contain",
                                          backgroundColor: "rgba(0,0,0,0.2)"
                                        }}
                                        rounded
                                        src={img.src ? img.src : defaultImage}
                                        alt={`alt- post-slide - ${img}`}
                                        onError={event => {
                                          event.target.onerror = null
                                          event.target.src = defaultImage
                                          // console.log(`Image not loaded::: ${event.onerror} `)

                                        }}
                                      />
                                    </div>
                                  </ Carousel.Item>
                                )
                              })
                            })
                          </Carousel>


                          :
                          < Image
                            key={`image-==`}
                            className="d-block"
                            style={{
                              height: "300px",
                              width: "100%",
                              objectFit: "contain",
                              backgroundColor: "rgba(0,0,0,0.2)"
                            }}
                            rounded
                            src={defaultImage}
                            alt={`alt- post-slide`}

                          />

                        }
                        <div className="card-top-header">
                          <img
                            src={pushPinRand[Math.floor(Math.random() * 5)]}
                            alt="pushpin"
                            className="pushPin"
                          // style={{ transform: "scaleX(-1)" }}
                          ></img>
                        </div>
                        <Row
                          className="mx-auto"
                          style={{ fontSize: "16px", color: "white", height: "450px" }}
                        >
                          <Col>
                            <Badge bg="success" style={{ fontSize: "16px" }}>
                              {" "}
                              <CashStack style={{ marginBottom: "3.25px" }} /> $
                              {props.price} {props.trade}
                            </Badge>
                          </Col>
                          <Col className="vr">
                          </Col>
                          <Col className="vr">
                          </Col>
                          <Col className="vr">
                          </Col>
                          <Col className="vr">
                          </Col>
                          <Col className="vr">
                          </Col>
                          <Col>
                            <Badge bg="info" style={{ fontSize: "16px" }}>
                              {" "}
                              <Gem style={{ marginBottom: "3.25px" }} /> {props.type}
                            </Badge>
                          </Col>
                        </Row>
                        <br />
                        <Card.Body>
                          <Card.Title className="post-title-text text-center mx-auto">
                            {props.title}
                          </Card.Title>
                        </Card.Body>
                        <Card.Footer className="text-muted" >
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
                            <Col>{props.username}</Col>
                            <Col>{props.date.slice(0, 4) + props.date.slice(4, 8) + props.date.slice(8, 10)}</Col>
                            <Col>{props.zip}</Col>
                          </Row>
                        </div>
                        <Card.Body className="table-text">
                          <Card.Title className="info-card-title">
                            {props.title}{" "}
                          </Card.Title>
                          <p className="info-card-body">{props.body}</p>
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
                        <br />
                        <br />
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
                          <Col>{props.username}</Col>
                          <Col>{props.date.slice(0, 4) + props.date.slice(4, 8) + props.date.slice(8, 10)}</Col>
                          <Col>{props.zip}</Col>
                        </Row>
                      </div>
                      <Card.Body>
                        <Card.Title className="text-center">
                          {" "}
                          <h3>
                            {" "}
                            <Mailbox2
                              style={{ marginBottom: "6px", marginRight: "5px" }}
                            /> Contact {" "}
                          </h3>
                        </Card.Title>
                        <ListGroup className="p-0">
                          <ListGroup.Item style={{ color: "black" }}>
                            <span className="font-weight-bold contact-text" style={{ color: SITE_COLORS.main }}>
                              <EnvelopeAtFill />
                              Email:
                            </span>

                            <span className="contact-text">
                              {" "}
                              <a href={"mailTo" + props.email}>{props.email}</a>
                            </span>
                          </ListGroup.Item>
                          <ListGroup.Item style={{ color: "black" }}>
                            <span className="font-weight-bold contact-text">
                              <TelephoneFill /> Number:
                            </span>
                            <span className="contact-text">
                              {
                                '(' + props.phone.slice(0, 3) + ') ' + props.phone.slice(3, 6) + '-' + props.phone.slice(6, 11)}


                            </span>
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
        : <LoadingPostCard />
      }
    </div >

  );
}

export default PostBoardCard;




