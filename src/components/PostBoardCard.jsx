
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
import { Card, Badge, ListGroup, Row, Col, Button, Stack, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router";
import ReportPostModal from "./ReportPostModal";
import LoadingPostCard from "./ui/LoadingPostCard";

// LIBRARY
import { dateTransform } from "../utils/dateTransform";

// ASSETS
import pushPinA from "../assets/imgs/post-imgs/push-pin1.png";
import pushPinB from "../assets/imgs/post-imgs/push-pin2.png";
import pushPinC from "../assets/imgs/post-imgs/push-pin3.png";
import pushPinD from "../assets/imgs/post-imgs/push-pin4.png";
import pushPinE from "../assets/imgs/post-imgs/push-pin5.png";
import pushPinF from "../assets/imgs/post-imgs/push-pin6.png";
import defaultImage from "../assets/imgs/misc/missing-img.png";
// import cardTexture from "../assets/imgs/card-textures/background-1921589_640.jpg";

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


/*----------------------------------------------------------------------------
|   ⚙️ Use: A advert post for community postcard 
|                     
|   🔧 Todo: Add customization to card (tape, pushpin different colors, ect)               
| 
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function PostBoardCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [revealUnderCard, setRevealUnderCard] = useState(false);
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

  // GRABBING PROP VALUES
  const { title, body, price, email, zip, username, phone, type, subType, firm_price, _id, trade, public_images_id } = props;

  // TRANSFORMS DATE STRING TO BECOME MORE READBABLE.
  const date = dateTransform(props.date, true);

  // LOGIC
  function handleUnderCardClick() {
    setRevealUnderCard(!revealUnderCard);
  }


  function handleFlipClick() {
    setIsFlipped((prev) => !prev);
  };


  const [lightBox, setLightBox] = useState(false);

  function handleLightbox() {
    console.log(`LIGHTBOX!`);
    setLightBox((prev) => !prev)
  }

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
    <>
      <Lightbox
        open={lightBox}
        close={() => setLightBox(false)}
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

      {isPostCardLoaded ?
        <div className="card-container">

          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card className="postCard shadow-lg">



              {/* **************************************************************************************** */}
              {/* FRONT CARD */}
              {/* **************************************************************************************** */}

              {tempGalleryArry?.length !== 0 || tempGalleryArry !== undefined
                ?
                <Carousel interval={null}>
                  ({
                    tempGalleryArry?.map(function (img, i) {
                      return (
                        <Carousel.Item key={`${Math.floor(Math.random() * 100)}-cork-post-key-${img}-${Math.floor(Math.random() * 100)}`} style={{ cursor: "pointer" }} onClick={handleLightbox}>
                          <>
                            < Image
                              key={`image-${img.src} - ${i}`}
                              className="d-block"
                              style={{
                                height: "350px",
                                width: "100%",
                                objectFit: "cover",
                                backgroundColor: "rgba(0, 115, 123, 0.521)"
                              }}
                              rounded
                              src={img.src ? img.src : defaultImage}
                              alt={`alt- post-slide - ${img}`}
                              onError={event => {
                                event.target.onerror = null
                                event.target.src = defaultImage
                              }}
                            />
                          </>
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
              <Card.Body>
                <img
                  src={pushPinRand[Math.floor(Math.random() * 5)]}
                  alt="pushpin"
                  className="pushPin"

                ></img>
                <Badge bg="success" style={{ position: "absolute", top: "0", right: "0", fontSize: "20px" }} className="p-2 mx-0">
                  ${price} {trade}
                </Badge>
                <Stack direction="horizontal" className="mb-2 justify-content-center">
                  <Badge bg="primary" style={{ fontSize: "12px" }} className="p-2 mx-1">
                    {type}
                  </Badge>
                  <Badge bg="primary" style={{ fontSize: "12px" }} className="p-2 mx-1">
                    {firm_price ? "Firm Price" : "Price Negotiable"}
                  </Badge>
                  <Badge bg="primary" style={{ fontSize: "12px" }} className="p-2 mx-1">
                    {trade ? "Open to trades" : "No Trades"}
                  </Badge>
                </Stack>
                <hr />
                <Card.Title className="text-center mt-3" style={{ fontSize: "24px" }}>{title}</Card.Title>
              </Card.Body>
              <Card.Footer className="text-center" style={{ backgroundColor: SITE_COLORS.lightMain }}>
                <Button size="sm" onClick={handleFlipClick} variant="primary" className="mx-2" >More Info</Button>
                <Link to={`/post/${_id}`}>
                  <Button size="sm" variant="secondary" className="mx-2">Go to post</Button>
                </Link>
                <Button onClick={handleUnderCardClick} size="sm" variant="success" className="mx-2">Contact</Button>
              </Card.Footer>

            </Card >

            {/************************************************************************************************** */}
            {/* BACK CARD */}
            {/************************************************************************************************** */}

            <Card className="postCard shadow-lg">
              <Card.Header style={{ color: "white", backgroundColor: SITE_COLORS.lightMain }}>
                <Card.Title className="mt-3" style={{ fontWeight: "bold", fontSize: "18px" }}>{title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Stack direction="vertical" style={{ fontSize: "14px" }}>
                  <span><strong>Posted by:</strong> {username}</span>
                  <span><strong>Date posted:</strong> {dateTransform(date)}</span>
                  <span><strong>Zipcode:</strong> {zip}</span>
                </Stack>

                <br />
                <Stack direction="horizontal">
                  <Badge bg="success" style={{ fontSize: "12px" }} className="p-2 mx-1">
                    {price == "0" ? "" : `$${price}`}
                  </Badge>
                  <Badge bg="primary" style={{ fontSize: "12px" }} className="p-2 mx-1">
                    {type}
                  </Badge>
                  <Badge bg="primary" style={{ fontSize: "12px" }} className="p-2 mx-1">
                    {firm_price ? "Firm Price" : "Price Negotiable"}
                  </Badge>
                  <Badge bg="primary" style={{ fontSize: "12px" }} className="p-2 mx-1">
                    {trade ? "Open to trades" : "No Trades"}
                  </Badge>
                </Stack>
                <br />
                <Card.Text style={{ border: "2px dotted black", fontSize: "16.5px" }} className="p-3">
                  {body}
                </Card.Text>


              </Card.Body>
              <Card.Footer style={{ backgroundColor: SITE_COLORS.lightMain }} className="text-center">
                <Button size="sm" onClick={handleFlipClick} variant="primary" className="mx-2">Go Back</Button>
                <Button size="sm" onClick={handleUnderCardClick} variant="success" className="mx-2">Contact</Button>
                <Button size="sm" variant="danger" className="mx-2">Report</Button>
              </Card.Footer>
            </Card>

          </ReactCardFlip >
          {/************************************************************************************************** */}
          {/* UNDER CARD */}
          {/************************************************************************************************** */}

          <div className="under-card" style={{ top: revealUnderCard ? "0px" : "600px" }}>
            <Card className="postCard shadow-lg" >
              <Card.Header style={{ color: "white", backgroundColor: SITE_COLORS.secondary }} >
                <Card.Title className="mt-3" style={{ fontWeight: "bold", fontSize: "18px" }}>{title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-center">
                  {" "}
                  <h1>
                    {" "}
                    <Mailbox2
                      style={{ marginBottom: "11.5px", marginRight: "7px", fontSize: "48px" }}
                    /> Contact {" "}
                  </h1>
                </Card.Title>
                <hr />
                <ListGroup className="p-0">
                  <Stack direction="horizontal" className="justify-content-center mb-4">
                    <Badge bg="primary" style={{ fontSize: "12px" }} className="p-2 mx-1">
                      {price == "0" ? "" : `$${price}`}
                    </Badge>
                    <Badge bg="primary" style={{ fontSize: "12px" }} className="p-2 mx-1">
                      {type}
                    </Badge>
                    <Badge bg="primary" style={{ fontSize: "12px" }} className="p-2 mx-1">
                      {firm_price ? "Firm Price" : "Price Negotiable"}
                    </Badge>
                    <Badge bg="primary" style={{ fontSize: "12px" }} className="p-2 mx-1">
                      {trade ? "Open to trades" : "No Trades"}
                    </Badge>
                  </Stack>
                  <ListGroup.Item style={{ color: "black" }}>
                    <span className="font-weight-bold contact-text" style={{ color: SITE_COLORS.main }}>
                      <strong>Username:</strong> {username}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ color: "black" }}>
                    <span className="font-weight-bold contact-text" style={{ color: SITE_COLORS.main }}>
                      <strong>Email:</strong> {email}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ color: "black" }}>
                    <span className="font-weight-bold contact-text" style={{ color: SITE_COLORS.main }}>
                      <strong>Number:</strong>         {
                        '(' + phone.slice(0, 3) + ') ' + phone.slice(3, 6) + '-' + phone.slice(6, 11)}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ color: "black" }}>
                    <span className="font-weight-bold contact-text" style={{ color: SITE_COLORS.main }}>
                      <strong>Post Id:</strong>{" "} {_id}
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: SITE_COLORS.secondary }} className="text-center">
                <Button size="sm" onClick={handleUnderCardClick} variant="primary" className="mx-2">Go Back</Button>
                <Button size="sm" variant="danger" className="mx-2">Report</Button>
              </Card.Footer>
            </Card >
          </div>
        </div>


        : <LoadingPostCard />
      }


    </ >

  );
}

export default PostBoardCard;









