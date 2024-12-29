//  WORKING FLIP CARD VERSION USING REACT FLIP CARD ANIMATION ]

import React, { useState } from "react"; // React module for JSX functionaity
import "./css/PostBoardCard.css"; // CSS file for PostBoardCard
import Carousel from "react-multi-carousel"; // Module that adds Carousel functionality
import "react-multi-carousel/lib/styles.css"; // Module that adds Carousel CSS functionality
import { SRLWrapper } from "simple-react-lightbox"; //  Lightbox modulehttps://reactjsexample.com/a-simple-but-functional-light-box-for-react/
import {
  ArrowRight,
  ArrowLeft,
  ArrowLeftCircleFill,
  ChatDotsFill,
  People,
  CalendarEvent,
  StarFill,
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

import { Card, Badge, ListGroup, Row, Col, Button } from "react-bootstrap"; // Importing Bootstrap Components
// ***********************************************************************************************************************

import pushPinA from "./post-imgs/push-pin1.png";
import pushPinB from "./post-imgs/push-pin2.png";
import pushPinC from "./post-imgs/push-pin3.png";
import pushPinD from "./post-imgs/push-pin4.png";
import pushPinE from "./post-imgs/push-pin5.png";
import pushPinF from "./post-imgs/push-pin6.png";

// USER INFO

// Example User Pictures
import cardImgA from "./imgs/postImg2.jpg";
import cardImgB from "./imgs/postImg3.jpg";
import cardImgC from "./imgs/postImg4.jpg";
import cardImgD from "./imgs/postImg5.jpg";
import cardImgE from "./imgs/postImg6.jpg";

// ***********************************************************************************************************************

function PostBoardCard(prop) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [revealUnderCard, setRevealUnderCard] = useState({});

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

  const arrowStyle = {
    background: "transparent",
    border: 0,
    color: "#fff",
    fontSize: "35px",
  };
  const CustomRightArrow = ({ onClick }) => (
    <button className="arrow right" onClick={onClick} style={arrowStyle}>
      <ArrowRight style={{ fontSize: "50px" }} />
    </button>
  );
  const CustomLeftArrow = ({ onClick }) => (
    <button className="arrow left" onClick={onClick} style={arrowStyle}>
      <ArrowLeft style={{ fontSize: "50px" }} />
    </button>
  );

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
                  <Card style={{ width: "325px", height: "420px" }}>
                    <SRLWrapper>
                      <Carousel
                        additionalTransfrom={0}
                        arrows
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                          desktop: {
                            breakpoint: {
                              max: 3000,
                              min: 1024,
                            },
                            items: 1,
                          },
                          mobile: {
                            breakpoint: {
                              max: 464,
                              min: 0,
                            },
                            items: 1,
                          },
                          tablet: {
                            breakpoint: {
                              max: 1024,
                              min: 464,
                            },
                            items: 1,
                          },
                        }}
                        showDots
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                      >
                        <img
                          src={cardImgA}
                          style={{
                            display: "block",
                            height: "255px",
                            margin: "-15px",
                            width: "100%",
                          }}
                        />
                        <img
                          src={cardImgB}
                          style={{
                            display: "block",
                            height: "255px",
                            margin: "-15px",
                            width: "100%",
                          }}
                        />
                        <img
                          src={cardImgC}
                          style={{
                            display: "block",
                            height: "255px",
                            margin: "-15px",
                            width: "100%",
                          }}
                        />
                        <img
                          src={cardImgD}
                          style={{
                            display: "block",
                            height: "255px",
                            margin: "-15px",
                            width: "100%",
                          }}
                        />
                        <img
                          src={cardImgE}
                          style={{
                            display: "block",
                            height: "255px",
                            margin: "-15px",
                            width: "100%",
                          }}
                        />
                      </Carousel>
                    </SRLWrapper>
                    <div className="card-top-header">
                      <img
                        src={pushPinRand[1]}
                        alt="pushpin"
                        className="pushPin"
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
                    <Row>
                      <Col className="">
                        <Button
                          className="card-contact-btn btn btn-sm btn-info btn-block "
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
                  </Card>
                </div>
                {/* ***************************** */}
                {/* CARD BACK */}
                {/* ***************************** */}

                <div className=" card back">
                  <Card style={{ width: "325px", height: "420px" }}>
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
                    width: "325px",
                    height: "420px",
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
      </div>
    </div>
  );
}

export default PostBoardCard;
