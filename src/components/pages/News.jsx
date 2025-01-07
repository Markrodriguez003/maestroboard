import { useState, useEffect } from "react";
// import "./css/News.css";
import axios from "axios";
import { Row, Col, Carousel, Image, Container } from "react-bootstrap";


// COMPONENTS
import NewsArticle from "../NewsArticle";
import HeaderPanel from "../ui/HeaderPanel";


// TEST IMAGES
import art0 from "../../assets/imgs/article-imgs/Article-6.png";
import art1 from "../../assets/imgs/article-imgs/Article-7.jpg";
import art2 from "../../assets/imgs/article-imgs/cherry_audio_filtomika-uuzeCu5kdMie8Q2mvxdJyEhnqkQsd5uI.jpg";
import art3 from "../../assets/imgs/article-imgs/sonicware_cydrums-zarNCId1V3mndGsHKl2qxggf2yTkPlHz.jpg";
import art4 from "../../assets/imgs/article-imgs/ReasonStudiosReason13_01-PCQEOqvQcRmoHW4.vaAbh2bBWaPic.G..jpg";
import art5 from "../../assets/imgs/article-imgs/gforce_icondrum-VbBqP7q2fhho0u4Owuy8ogyQcWb0dJbu.jpg";
import art6 from "../../assets/imgs/article-imgs/dw_soundworks_pure_cherry-h9x72Z7Ge1ztQJch1lAtKS_NHwcFNxnT.jpg";
import art7 from "../../assets/imgs/article-imgs/acustica_thing_th2-XoCqxvfulcyTbOSNFTxmm5ho4Uh4WaV..jpg";
import art8 from "../../assets/imgs/article-imgs/ferrofish-pulse-8-ae-lifestyle_shot01-K4f..DPWtq2sGQZvoCd72StfAdOb3AX9.jpeg";
import art9 from "../../assets/imgs/article-imgs/shure_mv7i-QBocPxIf61AupuKTF1yVbCJsl691_CtL.jpg";
import art10 from "../../assets/imgs/article-imgs/vsl_duality_strings_fx-.cy.Viyobd9Q8RpRi.rBwglDVpgQs2qq.jpg";
import art11 from "../../assets/imgs/article-imgs/heritage_audio_britstrip-S0QZft37xbhlqBFNJGgNn0DlQ9LmeCYi.jpg";
import art12 from "../../assets/imgs/article-imgs/ehx_pico_360_looper-rFLWiQqGq7BTFISnWlnRqJm4_br75Srs.jpg";
import art13 from "../../assets/imgs/article-imgs/noise_makers_studio_verb-_f0mRUoqFz2ji2ierL8k7t6j_XFJl8BM.jpg";
import art14 from "../../assets/imgs/article-imgs/arturia_minifreak_update-SUJg_hvE3.61xEorshylhFt7pBmbuN0w.jpg";
import art15 from "../../assets/imgs/article-imgs/tracktion_biotek_3-rck6L30aXYxytjFU216BJV8Bx8VkSlq7.jpg";
import art16 from "../../assets/imgs/article-imgs/softube_console_1_mkiii_update-lAbiWXNWCaZT.1BkrSgJ8dOOTsjQYBih.jpg";
import art17 from "../../assets/imgs/article-imgs/hamstead_soundworks_redwing-1Z6d9c0kRf1n7lq.jlRWhmZyH579VAG6.jpg";


// TEST IMAGES
const exampleImages = [
  art0,
  art1,
  art2,
  art3,
  art4,
  art5,
  art6,
  art7,
  art8,
  art9,
  art10,
  art11,
  art12,
  art13,
  art14,
  art15,
  art16,
  art17,
]

function News(props) {

  const [articles, setArticles] = useState([]);

  {/* ********************************************************************** */ }
  {/* GRABS ARTICLES FROM BACK-END*/ }
  {/* ********************************************************************** */ }
  useEffect(() => {

    // GRABS ALL ARTICLES FROM DB
    async function grabArticles() {
      await axios
        .get("http://localhost:3005/api/loadArticles")
        .then((response) => {
          setArticles(response.data);
        })
        .catch((err) => console.log(err));
    }
    grabArticles();

  }, []);

  return (
    <>
      <HeaderPanel>
        <h1 style={{ color: "white", textAlign: "center", fontSize: "35px" }}>NEWS</h1>
      </HeaderPanel>

      <Container>


        <Row lg={2} xs={1} sm={1}>
          <Col lg={9}>
            <Carousel className="mt-5" style={{ width: "100%" }}>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image src={exampleImages[15]} width={"70%"} height={"500px"} className="mx-auto" style={{ objectFit: "contain" }} />
                <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                  <h3>{articles[15].title}</h3>
                  <p>{articles[15].subTitle}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image src={exampleImages[16]} width={"70%"} height={"500px"} className="mx-auto" style={{ objectFit: "contain" }} />
                <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                  <h3>{articles[16].title}</h3>
                  <p>{articles[16].subTitle}</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item style={{ textAlign: "center" }}>
                <Image src={exampleImages[17]} width={"70%"} height={"500px"} className="mx-auto" style={{ objectFit: "contain" }} />
                <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                  <h3>{articles[17].title}</h3>
                  <p>{articles[17].subTitle}</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel >
          </Col>

          <Col lg={3} className="" style={{ marginTop: "50px" }}>
            <div style={{ width: "100%", backgroundColor: "rgba(0,0,0,0.5)", padding: "10px 10px 10px 10px" }}>
              <h2 style={{ color: "white", textAlign: "center" }}>Quick Articles</h2>
              {/* <ul style={{ textDecoration: "none", listStyle: "none" }}> */}
              <ul>
                <li style={{ color: "white", marginBottom: "12px" }}><a style={{ color: "white", fontSize: "20px" }} href="#">Audio Interfaces, Why are they needed?</a></li>
                <li style={{ color: "white", marginBottom: "12px" }}><a style={{ color: "white", fontSize: "20px" }} href="#">Learn the guitar neck! Learn the "cage" system</a></li>
                <li style={{ color: "white", marginBottom: "12px" }}><a style={{ color: "white", fontSize: "20px" }} href="#">When to use a compressor - learn how!</a></li>
                <li style={{ color: "white", marginBottom: "12px" }}><a style={{ color: "white", fontSize: "20px" }} href="#">Analog vs. Hybrid vs. Software: Which is better?</a></li>
                <li style={{ color: "white", marginBottom: "12px" }}><a style={{ color: "white", fontSize: "20px" }} href="#">Tube warmth for microphones. See what mic pres we tested!</a></li>
                <li style={{ color: "white", marginBottom: "12px" }}><a style={{ color: "white", fontSize: "20px" }} href="#">The difference between single coil and double coil guitar pickups.</a></li>
                <li style={{ color: "white", marginBottom: "12px" }}><a style={{ color: "white", fontSize: "20px" }} href="#">Studio Headphones tested. Check out what our editors think!</a></li>
                <li style={{ color: "white", marginBottom: "12px" }}><a style={{ color: "white", fontSize: "20px" }} href="#">How ear plugs help preserve your hearing.</a></li>
              </ul>
            </div>
          </Col>
        </Row >
      </Container>

      <hr style={{ color: "white" }} />

      {
        articles.map(function (a, i) {
          return (
            < NewsArticle key={`${articles.title} - ${i}`} article={articles[i]} rowInverse={i % 2 === 1 ? "flex-row-reverse" : "flex-row"} artImage={exampleImages[i]} />
          )
        })
      }

    </>
  );
}

export default News;
