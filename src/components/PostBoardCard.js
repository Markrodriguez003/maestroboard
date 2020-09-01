//  WORKING FLIP CARD VERSION USING REACT FLIP CARD ANIMATION ]

import React, { useState } from "react"; // React module for JSX functionaity
import "./css/PostBoardCard.css"; // CSS file for PostBoardCard
import Carousel from "react-multi-carousel"; // Module that adds Carousel functionality
import "react-multi-carousel/lib/styles.css"; // Module that adds Carousel CSS functionality
import { SRLWrapper } from "simple-react-lightbox"; //  Lightbox modulehttps://reactjsexample.com/a-simple-but-functional-light-box-for-react/
import {
  ArrowRight,
  ArrowLeft,
  Building,
  ChatDots,
  People,
  CalendarEvent,
  AlertCircle
} from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
import ReactCardFlip from "react-card-flip";
import CardReplyModal from "./CardReplyModal";
import ReportPostModal from "./ReportPostModal";

import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Container,
  Button,
} from "react-bootstrap"; // Importing Bootstrap Components
// ***********************************************************************************************************************

// USER INFO
// Example User Pictures
import cardImgA from "./imgs/postImg2.jpg";
import cardImgB from "./imgs/postImg3.jpg";
import cardImgC from "./imgs/postImg4.jpg";
import cardImgD from "./imgs/postImg5.jpg";
import cardImgE from "./imgs/postImg6.jpg";
import cardImgF from "./imgs/postImg6.jpg";
import cardImgG from "./imgs/postImg7.jpg";

import noteBG from "./post-imgs/notecard5.png";
// import userCardPostReply from "./userPostReply";

let userPost = {
  userName: "Asmongo1S4",
  userEmail: "amsongo22@gmail.com",
  userPhone: "08645897755",
  postDate: "1/24/22",
  userZip: "0G4WE21",
  gearPrice: 200.0,
  gearListingType: "Selling-Gear",
  title: "AKAI MIDI 23X PAD CONSOLE FOR SALE!",
  quickBody:
    "Barely used and kept in a smoke free studio. Tested and it's 100% working. Comes with USB cable. Asking for $200.00 CASH or trade for bass.",
  slowBody:
    "This was used maybe 3 or 4 times max. It connects with my macbook and windows no problem. I didn't even need drivers. I don't have the original box but it has no scratches or dents.",
};

let mailTo = "mailto:" + userPost.userEmail;

// ***********************************************************************************************************************

function PostBoardCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [revealUnderCard, setRevealUnderCard] = useState({});
  const [revealUnderCardBack, setRevealUnderCardBack] = useState({});

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
          <div className="col-md-4 card-container">
            <div className="card-flip">
              {/* ***************************** */}
              {/* CARD FRONT */}
              {/* ***************************** */}

              <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className="card front">
                  <Card style={{ width: "340px", height: "485px" }}>
                    <div className="card-top-header">
                      <Row className="card-header-labels">
                        <Col>
                          <People /> Posted By:
                        </Col>
                        <Col>
                          {" "}
                          <CalendarEvent /> Date Posted:
                        </Col>
                        <Col><Building /> Zipcode:
                        </Col>
                      </Row>
                      {/* User Post input */}
                      <Row className="card-header-user-input">
                        <Col>Asmongo5124</Col>
                        <Col>10/12/20</Col>
                        <Col>E29B2R</Col>
                      </Row>
                    </div>
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
                            height: "275px",
                            margin: "-15px",
                            width: "100%",
                          }}
                        />
                        <img
                          src={cardImgB}
                          style={{
                            display: "block",
                            height: "275px",
                            margin: "-15px",
                            width: "100%",
                          }}
                        />
                        <img
                          src={cardImgC}
                          style={{
                            display: "block",
                            height: "275px",
                            margin: "-15px",
                            width: "100%",
                          }}
                        />
                        <img
                          src={cardImgD}
                          style={{
                            display: "block",
                            height: "275px",
                            margin: "-15px",
                            width: "100%",
                          }}
                        />
                        <img
                          src={cardImgE}
                          style={{
                            display: "block",
                            height: "275px",
                            margin: "-15px",
                            width: "100%",
                          }}
                        />
                      </Carousel>
                    </SRLWrapper>
                    <Card.Body>
                      <Card.Title className="post-title-text">
                        {userPost.title}
                      </Card.Title>
                      <Card.Text className="post-quickBody-text">
                        {userPost.quickBody}
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                      <Row className="text-center mx-auto">
                        <Col>
                          <Button
                            className="ard-info-btn btn btn-info mt-2 mb-2"
                            onClick={handleClick}
                          >
                            More Info!
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            className="card-contact-btn btn-info mt-2 mb-2"
                            onClick={flipUnderCard}
                          >
                            Contact
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                    <ReportPostModal />   
                  </Card>
                </div>
                {/* ***************************** */}
                {/* CARD BACK */}
                {/* ***************************** */}

                <div className=" card back">
                  <Card style={{ width: "340px", height: "485px" }}>
                    <div className="card-top-header">
                      <Row className="card-header-labels">
                        <Col>
                          <People /> Posted By:
                        </Col>
                        <Col>
                          {" "}
                          <CalendarEvent /> Date Posted:
                        </Col>
                        <Col><Building /> Zipcode:
                        </Col>
                      </Row>
                      {/* User Post input */}
                      <Row className="card-header-user-input">
                        <Col>Asmongo5124</Col>
                        <Col>10/12/20</Col>
                        <Col>E29B2R</Col>
                      </Row>
                    </div>

                    <Card.Body>
                      <Card.Title>{userPost.title} </Card.Title>
                      <p>{userPost.slowBody}</p>
                      <ListGroup>
                        <ListGroup.Item variant="secondary">
                          <span className="font-weight-bold"> Listing Type: </span>
                          {userPost.gearListingType}
                        </ListGroup.Item>
                        <ListGroup.Item  >
                          <span className="font-weight-bold"> Zipcode: </span>
                          {userPost.userZip}
                        </ListGroup.Item>
                        <ListGroup.Item variant="secondary">
                          <span className="font-weight-bold"> Gear Price: $ </span>
                          {userPost.gearPrice}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>

                    <Card.Body>
                      <Row className="text-center mx-auto">
                        <Col>
                          <Button
                            className="ard-info-btn btn btn-lg btn-info"
                            onClick={handleClick}
                          >
                            Go Back
                          </Button>
                        </Col>
                        {/* <Col>
                        <Button className="card-contact-btn btn btn-lg btn-info" >
                          Contact
                        </Button>
                      </Col> */}
                      </Row>
                    </Card.Body>
                  </Card>

                </div>
              </ReactCardFlip>

              {/* CARD SIDE */}
              {/* ***************************** */}
              <div className="under-card" style={revealUnderCard}>
                <Card style={{ width: "21.5rem", height: "30.3rem" }}>
                  <div className="card-top-header">
                    <Row className="card-header-labels">
                      <Col>
                        <People /> Posted By:
                      </Col>
                      <Col>
                        {" "}
                        <CalendarEvent /> Date Posted:
                      </Col>
                      <Col><Building /> Zipcode:
                      </Col>
                    </Row>
                    {/* User Post input */}
                    <Row className="card-header-user-input">
                      <Col>Asmongo5124</Col>
                      <Col>10/12/20</Col>
                      <Col>E29B2R</Col>
                    </Row>
                  </div>
                  <Card.Body>
                    <Card.Title>Contact: </Card.Title>
                    <ListGroup>
                      <ListGroup.Item>
                        <span className="font-weight-bold">
                          <svg
                            width="1.3em"
                            height="1.3em"
                            viewBox="0 0 20 20"
                            class="bi bi-person-lines-fill"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
                              
                            />
                          </svg>{" "}  Email:
                        </span>

                        <span>
                          {" "}
                          <a href={mailTo}>{userPost.userEmail}</a>
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span className="font-weight-bold">
                          <svg
                            width="1.3em"
                            height="1.3em"
                            viewBox="0 0 20 20"
                            class="bi bi-telephone-fill"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
                            />
                          </svg>{" "}
                          Number:
                        </span>
                        <span> {userPost.userPhone}</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <CardReplyModal />
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>

                  <Card.Body>
                    <Row className="text-center mx-auto">
                      <Col>
                        <Button
                          className="ard-info-btn btn btn-lg btn-info"
                          onClick={flipUnderCardBack}
                        >
                          Go Back
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body> 
                  <ReportPostModal />
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

// CARD UNDERNEATH
// ******************************************************************************************* //
{
  /* ***************************** */
}
{
  /* CARD SIDE */
}
{
  /* ***************************** */
}
{
  /* <div className="under-card" style={}>

                <Card style={{ width: "21.5rem", height: "30rem" }}>
                  <div className="card-top-header">
                    <Row className="card-header-labels">
                      <Col>Posted By:</Col>
                      <Col>Date Posted:</Col>
                      <Col>Zipcode:</Col>
                    </Row>
                    <Row className="card-header-user-input">
                      <Col>Asmongo5124</Col>
                      <Col>10/12/20</Col>
                      <Col>E29B2R</Col>
                    </Row>
                  </div>
                  <Card.Body>
                    <Card.Title>Contact: </Card.Title>
                    <ListGroup>
                      <ListGroup.Item>
                        <span><svg width="1.3em" height="1.3em" viewBox="0 0 20 20" class="bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                        </svg> Email:</span>
                        <span> {userPost.userEmail}</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span><svg width="1.3em" height="1.3em" viewBox="0 0 20 20" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                        </svg> Number:</span>
                        <span>  {userPost.userPhone}</span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>

                  <Card.Body>
                    <Row className="text-center mx-auto">
                      <Col>
                        <Button className="ard-info-btn btn btn-lg btn-info" onClick={}>
                          Go Back
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div> */
}
