
// CSS
import "./css/NewsArticle.css";
import "yet-another-react-lightbox/styles.css";

// COMPONENTS
import { useState, useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

// LIBRARIES
import Lightbox from "yet-another-react-lightbox";
import { cld } from "../../server/scripts/imageRepository";
import { Link } from "react-router-dom";
import { dateTransform } from "../utils/dateTransform";

// CLOUDINARY
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

// ASSETS
import { ArrowRightCircle } from "react-bootstrap-icons";
import defaultImage from "../assets/imgs/misc/missing-img.png";

function NewsArticle(props) {
    const [lightBoxOpen, setLightBoxOpen] = useState(false);

    //  IMAGE LIGHTBOX GALLERY
    const [imageGallery, setImageGallery] = useState([]);

    // Article Props
    const { title, author, category, subCategory, body, caption, subTitle, image_urls, _id } = props.article;

    // FORMATES NEW ARTICLE DATE
    const date = dateTransform(props.article.date, false);


    // GATHERS IMAGES INTO AN ARRAY FOR LIGHTBOX (USESTATE)
    const tempGalleryArry = image_urls.map((image, i) => {
        return {
            src: `${image} `,
            alt: `Article-image-${i}`,
            width: "100%",
            height: "100%",
        }
    })

    return (
        <Container as={"article"} className={"p-4 mt-5 newsArticleStyling"} >
            <Lightbox
                open={lightBoxOpen}
                close={() => setLightBoxOpen(false)}
                slides={tempGalleryArry ? tempGalleryArry :
                    [
                        {
                            src: `${defaultImage} `,
                            alt: `Article-image-upload-error`,
                            width: "350px",
                            height: "350px",
                        }
                    ]}
                plugins={[]}
            />
            <Row className={props.rowInverse}>
                <Col xl={5} xxl={5} lg={5} md={12} sm={12} xs={12}>
                    <Row>
                        <Image
                            src={image_urls[0] || image_urls[0] === undefined ? image_urls[0] : defaultImage}
                            className="article-img-1"
                            alt="article image"
                            style={{
                                width: "100%",
                                height: "500px", objectFit: "cover", cursor: "pointer"
                            }}
                            onClick={() => setLightBoxOpen(true)}
                            onError={event => {
                                event.target.onerror = null
                                event.target.src = defaultImage
                            }}
                        />
                    </Row>
                    <Row>
                        <caption style={{ color: "grey", textDecoration: "italic", display: "inline-block" }}>Image taken from {caption}</caption>
                    </Row>
                </Col>
                <Col xl={7} xxl={7} lg={7} md={12} sm={12} xs={12}>

                    <Col className="justify-content-between align-content-end" sm={2} style={{ width: "100%" }}>
                        <div style={{ color: "darkcyan" }}>{category}: {subCategory}</div>
                        <div className="" style={{ color: "grey", fontSize: "14px" }}>Written by: {author} </div>
                        <div className="" style={{ color: "grey", fontSize: "14px" }}>Published on: {date}</div>
                    </Col>
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
                            {body.length <= 750 ? body : body.substring(0, 650)}
                        </p>
                    </Row>
                    <Row className="float-start">
                        <Link to={`/article/${_id}`}>
                            <a href="#" className="lead continue-reading float-start" style={{ textDecoration: "none" }}>
                                {" "}
                                <ArrowRightCircle
                                    style={{ fontSize: "20px", color: "rgba(250,250,250,0.9)" }}
                                />{" "}
                                <small className="mr-2">Continue Reading {" "} </small>
                            </a>
                        </Link>
                    </Row>
                </Col>
            </Row >
        </Container >
    );
}

export default NewsArticle;
