import React from "react";
import "./IntroCard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import cardImgA from "./imgs/AKAI-Apc.jpg"; // relative path to image
import { CardDeck, Card, Row, Col, Container } from "react-bootstrap";
/*
    Card components for the intro page. There are 3 in the front page
*/
function IntroCard() {
  // let cardColor = "rgb(9, 173, 173)";
  let userName = "Paolo124";
  let postDate = "1/21/2020";
  return (
    // xs, sm, md, lg, and x style={{backgroundColor: "lightblue"}}
    <div>
      <Row>
        <Col>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">


                {/* IMAGE CAROUSEL HERE*/}
                {/* ****************************************** */}
                <div>
                  <span className="card-header-username float-left">
                    Posted by: {userName}
                  </span>{" "}
                  <span className="card-header-date float-right">
                    date posted: {postDate}{" "}
                  </span>{" "}
                  <span>***</span>
                </div>
                <Carousel
                  additionalTransfrom={0}
                  arrows
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
                    src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                      display: "block",
                      height: "235px",
                      margin: "-15px",
                      width: "100%",
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    style={{
                      display: "block",
                      height: "235px",
                      margin: "-15px",
                      width: "100%",
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                      display: "block",
                      height: "235px",
                      margin: "-15px",
                      width: "100%",
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                      display: "block",
                      height: "235px",
                      margin: "-15px",
                      width: "100%",
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                      display: "block",
                      height: "235px",
                      margin: "-15px",
                      width: "100%",
                    }}
                  />
                </Carousel>
                {/* ****************************************** */}




                {/* LIGHTBOX */}
                {/* ****************************************** */}

                      


                {/* ****************************************** */}






                {/* <img src={cardImgA} alt="card-post-img" className="card-post-img" /> */}
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
                      <p>
                        Type:Selling Gear Gear:Midi/studio Zipcode:4181e11
                        Price:$200.00
                      </p>
                    </Col>
                    <Col>
                      <button>More Info</button>
                      <button>Contact</button>
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

export default IntroCard;

/**************************************************************/
/* CAROUSEL
{/* <Carousel
              additionalTransfrom={0}
              arrows
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
                src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
              />
            </Carousel> */

/**************************************************************/
/**************************************************************/
/* OLD BOOTSTRAP CARD.. FUCKING SUCKS
  <Row >
          <Col style={{ backgroundColor: "transparent" }}>
            <Card>
              <Card.Img variant="top" src="#" className="intro-imgs" />
              <Card.Body style={{ backgroundColor: cardColor }}>
                <Card.Title className="intro-card-text">
                  Look for the best deals!
              </Card.Title>
                <Card.Text className="intro-card-text">
                  <hr></hr>
                Buy, sell, trade music gear by zip code using our community
                boards. And the best part? It's free to sign up!
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="#" className="intro-imgs" />
              <Card.Body style={{ backgroundColor: cardColor }}>
                <Card.Title className="intro-card-text">
                  Look for the best deals!
              </Card.Title>
                <Card.Text className="intro-card-text">
                  <hr></hr>
                Buy, sell, trade music gear by zip code using our community
                boards. And the best part? It's free to sign up!
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src="#" className="intro-imgs" />
              <Card.Body style={{ backgroundColor: cardColor }}>
                <Card.Title className="intro-card-text">
                  Look for the best deals!
              </Card.Title>
                <Card.Text className="intro-card-text">
                  <hr></hr>
                Buy, sell, trade music gear by zip code using our community
                boards. And the best part? It's free to sign up!
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="#" className="intro-imgs" />
              <Card.Body style={{ backgroundColor: cardColor }}>
                <Card.Title className="intro-card-text">
                  Look for the best deals!
              </Card.Title>
                <Card.Text className="intro-card-text">
                  <hr></hr>
                Buy, sell, trade music gear by zip code using our community
                boards. And the best part? It's free to sign up!
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
*/

/*
<CardDeck>
          <Card>
            <Card.Img variant="top" src="#" className="intro-imgs" />
            <Card.Body style={{ backgroundColor: cardColor }}>
              <Card.Title className="intro-card-text">
                Look for the best deals!
            </Card.Title>
              <Card.Text className="intro-card-text">
                <hr></hr>
              Buy, sell, trade music gear by zip code using our community
              boards. And the best part? It's free to sign up!
            </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body style={{ backgroundColor: cardColor }}>
              <Card.Title className="intro-card-text">
                Find your next bandmate!
            </Card.Title>
              <Card.Text className="intro-card-text">
                <hr></hr>
              Fill in that empty slot with a new bandmate! Use our forums or our
              community boards to find bandmembers. Search options include genre
              and band role.
            </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body style={{ backgroundColor: cardColor }}>
              <Card.Title className="intro-card-text">
                Book your next gig!
            </Card.Title>
              <Card.Text className="intro-card-text">
                <hr></hr>
              You want a place to book your next band gig? You want to search
              for next tour? Or perhaps you want to offer your skills as a music
              teacher? Well, this is the place to be!
            </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body style={{ backgroundColor: cardColor }}>
              <Card.Title className="intro-card-text">
                Share and meet new musicians and artists vai our forums!
            </Card.Title>
              <Card.Text className="intro-card-text">
                <hr></hr>
              Ask questions, talk about the latest greatest album or review that next progressive jazz rock album that just came out!
              Get to know your fellow artist!
            </Card.Text>
            </Card.Body>
          </Card>
      </Ca

*/
