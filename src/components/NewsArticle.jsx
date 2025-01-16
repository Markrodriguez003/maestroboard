
// CSS
import "./css/NewsArticle.css";
import "yet-another-react-lightbox/styles.css";

// COMPONENTS
import { useState, useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

// LIBRARIES
import Lightbox from "yet-another-react-lightbox";
import { cld } from "../../server/scripts/imageRepository";
// CLOUDINARY
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

// ASSETS
import { ArrowRightCircle } from "react-bootstrap-icons";
import defaultImage from "../assets/imgs/misc/missing-img.png";

function NewsArticle(props) {


    // useEffect(() => {
    //     setImageGallery(tempGalleryArry);
    //     console.log(imageGallery[0])

    //     return () => {

    //     };
    // }, []);

    // Image Lightbox
    const [lightBoxOpen, setLightBoxOpen] = useState(false);

    //  IMAGE LIGHTBOX GALLERY
    const [imageGallery, setImageGallery] = useState([]);

    // Article Props
    const { title, author, category, subCategory, date, body, link, image, caption, subTitle, public_images_id, image_urls,
        secure_images_urls, } = props.article;

    // TEST
    // console.log(`Article props: ${JSON.stringify(props.article)}`);
    // console.log(`Prop keys: ${Object.keys(props.article)}`);

    // GATHERS IMAGES INTO AN ARRAY FOR LIGHTBOX (USESTATE)
    // const tempGalleryArry = undefined;
    const tempGalleryArry = image_urls.map((image, i) => {
        return {
            src: `${image} `,
            alt: `Article-image-${i}`,
            width: "100%",
            height: "100%",
        }
    })



    // setImageGallery(tempGalleryArry);
    console.log(`IMAGE GALLERY::: ${JSON.stringify(tempGalleryArry[0].src)}`)
    // console.log(`IMAGE US GALLERY::: ${JSON.stringify(imageGallery)}`)


    // THIS WORKS
    // const articleImage = cld.image(props.article.public_images_id[0]);
    /* <AdvancedImage cldImg={articleImage} /> */

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
                            width: "100%",
                            height: "100%",
                        }
                    ]}
                plugins={[]}
            />
            <Row xl={2} xxl={2} lg={2} md={12} sm={1} xs={12} className={props.rowInverse}>
                <Col>
                    <Row>
                        <Image
                            src={image_urls[0] ? image_urls[0] : defaultImage}
                            className="article-img-1"
                            alt="article image"
                            style={{ width: "100%", height: "375px", objectFit: "cover", cursor: "pointer" }}
                            onClick={() => setLightBoxOpen(true)}
                            onError={event => {
                                console.log(`Image not loaded::: ${event.onerror} `)
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
                        <div style={{ color: "darkcyan" }}>{category}: {subCategory}</div>
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
