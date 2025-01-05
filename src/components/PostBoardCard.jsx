
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
} from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
import ReactCardFlip from "react-card-flip";
import CardReplyModal from "./CardReplyModal";
import ReportPostModal from "./ReportPostModal";

import { Card, Badge, ListGroup, Row, Col, Button, Carousel, Image } from "react-bootstrap"; // Importing Bootstrap Components
// ***********************************************************************************************************************

import pushPinA from "../assets/imgs/post-imgs/push-pin1.png";
import pushPinB from "../assets/imgs/post-imgs/push-pin2.png";
import pushPinC from "../assets/imgs/post-imgs/push-pin3.png";
import pushPinD from "../assets/imgs/post-imgs/push-pin4.png";
import pushPinE from "../assets/imgs/post-imgs/push-pin5.png";
import pushPinF from "../assets/imgs/post-imgs/push-pin6.png";
import { propTypes } from "react-bootstrap/esm/Image";

// USER INFO

// Example User Pictures
// import cardImgA from "../assets/test_post_images/akai APC 40/postImg1.jpg";
// import cardImgB from "../assets/test_post_images/akai APC 40//postImg2.jpg";
// import cardImgC from "../assets/test_post_images/akai APC 40//postImg3.jpg";
// import cardImgD from "../assets/test_post_images/akai APC 40//postImg4.jpg";
// import cardImgE from "../assets/test_post_images/akai APC 40//postImg5.jpg";


// const A = "https://m.media-amazon.com/images/I/819Coz2HcAL._AC_SY879_.jpg";
// const B = "https://m.media-amazon.com/images/I/71gOqpBIHBL._AC_SX679_.jpg";
// const C = "https://m.media-amazon.com/images/I/71FcK0+PVCL._AC_SX679_.jpg";
// const D = "https://m.media-amazon.com/images/I/61azDPXkg1L._AC_SX679_.jpg";
// const E = "https://m.media-amazon.com/images/I/51tDzkCce0L._AC_.jpg";

// const img_arry_a = [A, B, C, D, E];


// ***********************************************************************************************************************



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




  // ***********************************************************************************************************************
  // ***********************************************************************************************************************

  return (
    <div>
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
                            <Carousel.Item key={`post-key-${img}}`}>
                              <div key={`container-${img} + ${i}`}>
                                < Image
                                  key={`image-${img} - ${i}`}
                                  className="d-block w-100"
                                  style={{
                                    display: "block",
                                    height: "300px",
                                    width: "100%",
                                    objectFit: "cover"
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
                  <Card style={{ width: "350px", height: "450px" }}>
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
                    width: "350px",
                    height: "450px",
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
