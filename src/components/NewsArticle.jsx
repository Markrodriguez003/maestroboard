import { useState } from "react";
import "./css/NewsArticle.css";
import { Row, Col, Figure, Stack, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";


import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

// ART 
import art1 from "../assets/imgs/article-imgs/Article-6.png";
import art2 from "../assets/imgs/article-imgs/Article-7.jpg";

function NewsArticle(props) {

    // Image Lightbox
    const [lightBoxOpen, setLightBoxOpen] = useState(false);

    // Article Props
    const { title, subject, author, date, body, link, image, caption } = props.article;

    return (
        <Container as={"article"} className={"p-4 mt-5"} style={{ backgroundColor: "rgba(16, 41, 51, 1)" }}>
            <Lightbox
                open={lightBoxOpen}
                close={() => setLightBoxOpen(false)}
                slides={[
                    {
                        src: props.artImage,
                        alt: "Article-image",
                        width: "100%",
                        height: "100%",
                    }
                ]}
                plugins={[]}
            />
            <Row xl={2} xxl={2} lg={2} md={2} sm={1} xs={1} className={props.rowInverse}>
                <Col>
                    <Row>
                        {/* <img src={props} className="article-img-1" alt="article image" style={{ width: "100%" }}></img> */}
                        <img
                            src={props.artImage}
                            className="article-img-1"
                            alt="article image"
                            style={{ width: "100%", height: "375px", objectFit: "cover", cursor: "pointer" }}
                            onClick={() => setLightBoxOpen(true)}
                        />
                    </Row>
                    <Row>
                        <caption style={{ color: "grey", textDecoration: "italic", display: "inline-block" }}>{caption}</caption>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h6 className="article-type-header">{subject}</h6>
                    </Row>
                    <Row>
                        <h3 style={{ color: "white" }}>{title} </h3>
                    </Row>
                    <Row>
                        <small className="article-small" style={{ color: "white" }}>Written by: {author} - {date}</small>
                        <hr style={{ color: "white" }} className="mt-2 mb-0" />
                    </Row>
                    <Row>
                        <p style={{
                            whiteSpace: "pre-wrap",
                            width: "100%",
                            color: "white",
                            textAlign: "start",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}>

                            {body.length <= 750 ? body : body.substring(0, 750)}
                            {/* <span style={{ position: "relative", display: "inline", color: "darkcyan", fontSize: "44px" }}>{" "}...</span> */}
                        </p>
                    </Row>
                    <Row className="float-right">
                        <a href="#" className="continue-reading float-end">
                            {" "}
                            <ArrowRightCircle
                                style={{ fontSize: "20px", color: "rgba(250,250,250,0.9)" }}

                            />{" "}
                            <small>Continue Reading {" "} </small>
                        </a>
                    </Row>
                </Col>
            </Row >

        </Container >
    );
}

export default NewsArticle;
