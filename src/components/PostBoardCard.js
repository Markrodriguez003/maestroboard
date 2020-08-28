import React from "react"; // React module for JSX functionaity
import "./css/PostBoardCard.css"; // CSS file for PostBoardCard
import Carousel from "react-multi-carousel"; // Module that adds Carousel functionality
import "react-multi-carousel/lib/styles.css"; // Module that adds Carousel CSS functionality
import { SRLWrapper } from "simple-react-lightbox"; //  Lightbox modulehttps://reactjsexample.com/a-simple-but-functional-light-box-for-react/
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
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

// Example User Post details
let userName = "Paolo124";
let postDate = "1/21/2020";

// ***********************************************************************************************************************

function PostBoardCard() {
  function cardInfoFlip() {
    console.log("hello");
  }

  // ***********************************************************************************************************************
  // Custom Arrow Icons for react-multi-carousel
  // https://www.npmjs.com/package/react-bootstrap-icons
  // https://icons.getbootstrap.com/
  // https://codesandbox.io/s/react-multi-carousel-customdot-3q0f4?file=/src/App.js:156-334
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

  return (
    // RESEARCH CARD OVERLAYS (W3CHOOLS) TO HAVE CUSTOM BACKGROUND
    <div className="card-container">
      <Row className="">
        <Col className="">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {/* IMAGE CAROUSEL HERE*/}
                {/* ****************************************** */}
                <div className="top-card-header">
                  <Row className="card-top-header">
                    <Col>
                      <span className="card-header-small-labels">
                        Posted by:
                      </span>
                    </Col>
                    <Col>
                      <span className="card-header-small-labels">
                        Date posted:
                      </span>
                    </Col>
                    <Col>
                      <span className="card-header-small-labels">Zipcode:</span>
                    </Col>
                  </Row>
                  {/* *************************** */}

                  <Row className="card-top-header-inputs">
                    <Col className="card-top-header-inputs">
                      <span className="card-top-header-user-input">
                        {userName}
                      </span>
                    </Col>
                    <Col className="card-top-header-inputs">
                      <span className="card-top-header-user-input">
                        {postDate}
                      </span>
                    </Col>
                    <Col className="card-top-header-inputs">
                      <span className="card-top-header-user-input">
                        {" "}
                        109428
                      </span>
                    </Col>
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
                        height: "235px",
                        margin: "-15px",
                        width: "100%",
                      }}
                    />
                    <img
                      src={cardImgB}
                      style={{
                        display: "block",
                        height: "235px",
                        margin: "-15px",
                        width: "100%",
                      }}
                    />
                    <img
                      src={cardImgC}
                      style={{
                        display: "block",
                        height: "235px",
                        margin: "-15px",
                        width: "100%",
                      }}
                    />
                    <img
                      src={cardImgD}
                      style={{
                        display: "block",
                        height: "235px",
                        margin: "-15px",
                        width: "100%",
                      }}
                    />
                    <img
                      src={cardImgE}
                      style={{
                        display: "block",
                        height: "235px",
                        margin: "-15px",
                        width: "100%",
                      }}
                    />
                  </Carousel>
                </SRLWrapper>
                <div className="card">
                  <h1 className="card-post-title">
                    Selling AKAI APC MIDI PAD!
                  </h1>
                  <p className="card-post-body">
                    Barely used Akai APC midi pad. Perfect working order.
                    Looking for a trade for a fender squire bass or $200.00
                    CASH.
                  </p>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <Row>
                    <Col className="card-footer-details">
                      {/* <small className="card-price-tag">$200.00</small> */}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <button className="card-btn" onClick={cardInfoFlip}>
                        More Info
                      </button>
                    </Col>
                    <Col>
                      <button className="card-btn">Contact</button>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PostBoardCard;

// *************************************************************
{
  /* <div className="flip-card">
    //   <div className="flip-card-inner">
    //     <div className="flip-card-front"> </div>
    //     <Card style={{ width: "20rem" }}>
    //       <Card.Body>
    //         <Card.Header className="card-header-title">Header</Card.Header>
    //         <div className="card-post-img">
    //           <SRLWrapper>
    //             <Carousel */
}
//               additionalTransfrom={0}
//               arrows
//               customLeftArrow={<CustomLeftArrow />}
//               customRightArrow={<CustomRightArrow />}
//               autoPlaySpeed={3000}
//               centerMode={false}
//               className=""
//               containerClass="container"
//               dotListClass=""
//               draggable
//               focusOnSelect={false}
//               infinite
//               itemClass=""
//               keyBoardControl
//               minimumTouchDrag={80}
//               renderButtonGroupOutside={false}
//               renderDotsOutside={false}
//               responsive={{
//                 desktop: {
//                   breakpoint: {
//                     max: 3000,
//                     min: 1024,
//                   },
//                   items: 1,
//                 },
//                 mobile: {
//                   breakpoint: {
//                     max: 464,
//                     min: 0,
//                   },
//                   items: 1,
//                 },
//                 tablet: {
//                   breakpoint: {
//                     max: 1024,
//                     min: 464,
//                   },
//                   items: 1,
//                 },
//               }}
//               showDots
//               sliderClass=""
//               slidesToSlide={1}
//               swipeable
//             >
//               <img
//                 src={cardImgA}
//                 style={{
//                   display: "block",
//                   height: "235px",
//                   margin: "-15px",
//                   width: "100%",
//                 }}
//               />
//               <img
//                 src={cardImgB}
//                 style={{
//                   display: "block",
//                   height: "235px",
//                   margin: "-15px",
//                   width: "100%",
//                 }}
//               />
//               <img
//                 src={cardImgC}
//                 style={{
//                   display: "block",
//                   height: "235px",
//                   margin: "-15px",
//                   width: "100%",
//                 }}
//               />
//               <img
//                 src={cardImgD}
//                 style={{
//                   display: "block",
//                   height: "235px",
//                   margin: "-15px",
//                   width: "100%",
//                 }}
//               />
//               <img
//                 src={cardImgE}
//                 style={{
//                   display: "block",
//                   height: "235px",
//                   margin: "-15px",
//                   width: "100%",
//                 }}
//               />
//             </Carousel>
//           </SRLWrapper>
//         </div>
//         <Card.Title>Selling AKAI APC MIDI PAD!</Card.Title>
//         <Card.Text>
//           Barely used Akai APC midi pad. Perfect working order. Looking for
//           a trade for a fender squire bass or $200.00 CASH.
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//       <ListGroupItem>Cras justo odio</ListGroupItem>
//       <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//       <ListGroupItem>Vestibulum at eros</ListGroupItem>
//     </ListGroup>
//       <Card.Body>
//         <Card.Link href="#">
//           <Button>Card Link</Button>
//         </Card.Link>
//         <Card.Link href="#">
//           <Button>Another Link</Button>
//         </Card.Link>
//       </Card.Body>
//       <div className="flip-card-back">
//         <h1>John Doe</h1>
//         <p>Architect - Engineer</p>
//         <p>We love that guy</p>
//       </div>
//     </Card>
//   </div>
// </div>

//*******************************************************************
{
  /* <div>
<Row className="card-col-row-fix">
  <Col className="card-col-row-fix">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="top-card-header">
            <Row className="card-top-header">
              <Col>
                <span className="card-header-small-labels">Posted by:</span>
              </Col>
              <Col>
                <span className="card-header-small-labels">Date posted:</span>
              </Col>
              <Col>
                <span className="card-header-small-labels">Zipcode:</span>
              </Col>
            </Row>

            <Row className="card-top-header-inputs">
              <Col className="card-top-header-inputs">
                <span className="card-top-header-user-input">{userName}</span>
              </Col>
              <Col className="card-top-header-inputs">
                <span className="card-top-header-user-input">{postDate}</span>
              </Col>
              <Col className="card-top-header-inputs">
                <span className="card-top-header-user-input"> 109428</span>
              </Col>
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
                  height: "235px",
                  margin: "-15px",
                  width: "100%",
                }}
              />
              <img
                src={cardImgB}
                style={{
                  display: "block",
                  height: "235px",
                  margin: "-15px",
                  width: "100%",
                }}
              />
              <img
                src={cardImgC}
                style={{
                  display: "block",
                  height: "235px",
                  margin: "-15px",
                  width: "100%",
                }}
              />
              <img
                src={cardImgD}
                style={{
                  display: "block",
                  height: "235px",
                  margin: "-15px",
                  width: "100%",
                }}
              />
              <img
                src={cardImgE}
                style={{
                  display: "block",
                  height: "235px",
                  margin: "-15px",
                  width: "100%",
                }}
              />
            </Carousel>
          </SRLWrapper>
          <div className="card">
            <h1 className="card-post-title">
              Selling AKAI APC MIDI PAD!
            </h1>
            <p className="card-post-body">
              Barely used Akai APC midi pad. Perfect working order.
              Looking for a trade for a fender squire bass or $200.00
              CASH.
            </p>
            <a href="#">
              <i className="fa fa-dribbble"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <Row>
              <Col className="card-footer-details">
                <p>Type:Selling Gear Zipcode:4181e11</p>

                <small className="card-price-tag">$200.00</small>
              </Col>
              <Col>
                <button className="card-info-btn" onClick={cardInfoFlip}>
                  More Info
                </button>
                <button className="card-contact-btn">Contact</button>
              </Col>
            </Row>
          </div>
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  </Col>
</Row>
</div> */
}
