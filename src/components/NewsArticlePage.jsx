import { useState } from "react";
import "./css/NewsArticle.css";
import { Row, Col, Container, Image } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


// TEST IMAGE
import art0 from "../assets/imgs/article-imgs/Article-6.png";
import { BodyText } from "react-bootstrap-icons";

// TEST ARTICLE
let testArticle =
{
    title: " Arturia announces 3 Modulation plug-ins You’ll Actually Use",
    subTitle: "Modeled after classic effects! These plugins are great!",
    subject: "Electronic Music: VSTs",
    author: "Jeremy Frazen",
    date: "12/24/19",
    body: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet lacus luctus. Aenean et tortor at risus viverra. Lectus proin nibh nisl condimentum id venenatis. Senectus et netus et malesuada fames. Convallis cras semper auctor neque vitae tempus. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Orci dapibus ultrices in iaculis nunc sed augueLobortis feugiat vivamus at augue eget arcu. Arcu ac tortor dignissim convallis aenean et tortor at

Nulla facilisi cras fermentum odio eu feugiat. Nulla at volutpat diam ut. Fermentum dui faucibus in ornare quam viverra orci sagittis. Tincidunt semper quis lectus nulla at volutpat diam ut. . ra. Lectus proin nibh nisl condimentum id venenatis. Senectus et netus et malesuada fames. Convallis cras semper auctor neque vitae tempus. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Orci dapibus ultrices in iaculis nunc sed augueLobortis feugiat vivamus at augue eget arcu. Arcu ac tortor dignissim convallis aen

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet lacus luctus. Aenean et tortor at risus viverra. Lectus proin nibh nisl condimentum id venenatis. Senectus et netus et malesuada fames. Convallis cras semper auctor neque vitae tempus. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Orci dapibus ultrices in iaculis nunc sed augueLobortis feugiat vivamus at augue eget arcu. Arcu ac tortor dignissim convallis aenean et tortor at

Nulla facilisi cras fermentum odio eu feugiat. Nulla at volutpat diam ut. Fermentumdio eu feugiat. Nulla at volutpaemper quis lectus nulla at volutpat diam ut. .dio eu feugiat. Nulla at volutpa dio eu feugiat. Nulla at volutpa
      `,
    link: "Selling Gear",
    image: "Guitar",
    caption: "Arturia VST taken from SoundOnSound",
};


function NewsArticlePage(props) {

    // Image Lightbox
    const [lightBoxOpen, setLightBoxOpen] = useState(false);

    // Article Props
    const { title, subject, author, date, body, link, image, caption, subTitle } = testArticle;

    return (
        <Container as={"article"} className={"p-5 mt-5 w-100 shadow-lg rounded"} style={{ backgroundColor: "rgba(16, 41, 51, 1)" }}>
            <Lightbox
                open={lightBoxOpen}
                close={() => setLightBoxOpen(false)}
                slides={[
                    {
                        src: { art0 },
                        alt: "Article-image",
                        width: "100%",
                        height: "100%",
                    }
                ]}
                plugins={[]}
            />
            <Row className="justify-content-center">
                <Col>
                    <Row>
                        <h2 style={{ color: "white", borderTop: "3px solid white", paddingTop: "6px" }}>{title} </h2>
                    </Row>
                    <Row>
                        <h6 style={{ color: "grey", borderBottom: "1px solid white", paddingBottom: "12px" }}>{subTitle} </h6>
                    </Row>
                    <Row>
                        <br />
                    </Row>
                    <Row>
                        <Image
                            src={art0}
                            className="article-img-1"
                            alt="article image"
                            style={{ width: "100%", height: "500px", objectFit: "cover", cursor: "pointer" }}
                            onClick={() => setLightBoxOpen(true)}
                        />
                    </Row>
                    <Row className="justify-content-end align-content-end" sm={1} style={{ width: "100%" }}>
                        <div style={{ color: "darkcyan" }}>{subject}</div>
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

                            {body}
                        </p>
                    </Row>
                    <Row className="justify-content-start align-content-start" sm={2} style={{ width: "100%" }}>
                        <div className="" style={{ color: "grey", fontSize: "14px" }}>Written by: {author} -Published on: {date}</div>
                    </Row>

                </Col>

            </Row >

        </Container >
    );
}

export default NewsArticlePage;
