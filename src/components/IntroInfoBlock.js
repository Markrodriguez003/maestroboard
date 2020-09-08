import React from "react"; // React module for JSX functionaity
import "./css/IntroInfoBlock.css"; // CSS file for IntroInfoBlock
import Carousel from "react-multi-carousel"; // Module that adds Carousel functionality
import "react-multi-carousel/lib/styles.css"; // Module that adds Carousel CSS functionality
// import { SRLWrapper } from "simple-react-lightbox"; //  Lightbox modulehttps://reactjsexample.com/a-simple-but-functional-light-box-for-react/
// import { ArrowRight, ArrowLeft } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
// import { Row, Col, Container } from "react-bootstrap"; // Importing Bootstrap Components
// ***********************************************************************************************************************

import img1 from "./article-imgs/1.jpg";
import img2 from "./article-imgs/2.jpg";
import img3 from "./article-imgs/3.jpg";
// import img4 from "./article-imgs/4.jpg";
// import img5 from "./article-imgs/5.jpg";

// const arrowStyle = {
//   background: "transparent",
//   border: 0,
//   color: "#fff",
//   fontSize: "35px",
// };
// const CustomRightArrow = ({ onClick }) => (
//   <button className="arrow right" onClick={onClick} style={arrowStyle}>
//     <ArrowRight style={{ fontSize: "50px" }} />
//   </button>
// );
// const CustomLeftArrow = ({ onClick }) => (
//   <button className="arrow left" onClick={onClick} style={arrowStyle}>
//     <ArrowLeft style={{ fontSize: "50px" }} />
//   </button>
// );

function IntroInfoBlock() {
  return (
    <div className ="carousel-container">
      <Carousel className ="carousel-container"
        additionalTransfrom={0}
        arrows
        // customLeftArrow={<CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />}
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
          src={img1}
          style={{
            display: "block",
            height: "auto",
            margin: "auto",
            width: "50%",
          }}
        />
        <img
          src={img2}
          style={{
            display: "block",
            height: "auto",
            margin: "auto",
            width: "50%",
          }}
        />
        <img
          src={img3}
          style={{
            display: "block",
            height: "   ",
            margin: "auto",
            width: "50%",
          }}
        />

      </Carousel>
    </div>
  );
}

export default IntroInfoBlock;
