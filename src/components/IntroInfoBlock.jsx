
import "./css/IntroInfoBlock.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// ***********************************************************************************************************************

import img1 from "../assets/imgs/article-imgs/1.jpg";
import img2 from "../assets/imgs/article-imgs/2.jpg";
import img3 from "../assets/imgs/article-imgs/3.jpg";


function IntroInfoBlock() {
  return (
    <div className="carousel-container">
      <Carousel className="carousel-container"
        additionalTransfrom={0}
        arrows

        autoPlaySpeed={3000}
        centerMode={false}

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
