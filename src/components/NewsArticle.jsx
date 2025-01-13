
// CSS
import "./css/NewsArticle.css";
import "yet-another-react-lightbox/styles.css";

// COMPONENTS
import { useState } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

// LIBRARIES
import Lightbox from "yet-another-react-lightbox";

// ASSETS
import { ArrowRightCircle } from "react-bootstrap-icons";
import defaultImage from "../assets/imgs/misc/missing-img.png";

function NewsArticle(props) {

    // Image Lightbox
    const [lightBoxOpen, setLightBoxOpen] = useState(false);

    // Article Props
    const { title, subject, author, date, body, link, image, caption, subTitle } = props.article;

    return (
        <Container as={"article"} className={"p-4 mt-5 newsArticleStyling"} >
            <Lightbox
                open={lightBoxOpen}
                close={() => setLightBoxOpen(false)}
                slides={[
                    {
                        // src: `${props.artImage ? props.artImage : defaultImage}`,
                        src: `${props.artImage !== undefined ? props.artImage : defaultImage}`,
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
                        <Image
                            src={props.artImage ? props.artImage : defaultImage}
                            className="article-img-1"
                            alt="article image"
                            style={{ width: "100%", height: "375px", objectFit: "cover", cursor: "pointer" }}
                            onClick={() => setLightBoxOpen(true)}
                            onError={event => {
                                console.log(`Image not loaded::: ${event.onerror}`)
                                event.target.src = { defaultImage }
                                event.onerror = null
                            }}
                        />
                    </Row>
                    <Row>
                        <caption style={{ color: "grey", textDecoration: "italic", display: "inline-block" }}>Image taken from {caption}</caption>
                    </Row>
                </Col>
                <Col>
                    <Row className="justify-content-between align-content-end" sm={2} style={{ width: "100%" }}>
                        <div style={{ color: "darkcyan" }}>{subject}</div>
                        <div className="" style={{ color: "grey", fontSize: "14px" }}>Written by: {author} - {date}</div>
                    </Row>
                    <Row><br /></Row>
                    <Row>
                        <h3 style={{ color: "white" }}>{title} </h3>
                    </Row>
                    <Row>
                        <h6 style={{ color: "grey" }}>{subTitle} </h6>
                    </Row>
                    <Row>
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
                            {body.length <= 750 ? body : body.substring(0, 550)}
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
