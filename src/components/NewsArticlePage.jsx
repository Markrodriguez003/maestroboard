// REACT
import { useState, useEffect } from "react";

// DESIGN
import "./css/NewsArticle.css";
import "yet-another-react-lightbox/styles.css";

// COMPONENTS
import { Row, Col, Container, Button, Image, Spinner } from "react-bootstrap";

// LIBRARIES
import Lightbox from "yet-another-react-lightbox";
import axios from "axios";
import { useParams } from 'react-router-dom';

// ASSETS
import { FileEarmarkExcelFill, Search } from "react-bootstrap-icons";
import defaultImage from "../assets/imgs/misc/missing-img.png";

// TEST IMAGE
import art0 from "../assets/imgs/article-imgs/Article-6.png";

// LOADING PAGE TO SHOW WHEN FRONT END IS TRYING TO GRAB ARTICLE FROM DB
function LoadingArticle() {
    return (
        <Container as={"article"} className={"p-5  w-100 shadow-lg text-light rounded text-center"} style={{ backgroundColor: "rgba(16, 41, 51, 1)" }}>
            <Search style={{ fontSize: "150px" }} className="mb-4" />
            <h1>Article is loading...</h1>
            <br />
            <Spinner style={{ color: "teal", fontSize: "25px", width: "50px", height: "50px" }} />
        </Container >
    )
}

// PAGE TO SHOW ERROR TRYING TO FIND ARTICLE
function ErrorLoadingArticle() {
    return (
        <Container as={"article"} className={"p-5  w-100 shadow-lg text-light rounded text-center"} style={{ backgroundColor: "rgba(16, 41, 51, 1)" }}>
            <FileEarmarkExcelFill style={{ fontSize: "150px" }} className="mb-4" />
            <hr />
            <h1>Article Cannot be found!</h1>
            <br />
            <Button className="mt-3" href="/home" >Go Back Home</Button>
        </Container >
    )
}


function NewsArticlePage(props) {

    // Image Lightbox
    const [lightBoxOpen, setLightBoxOpen] = useState(false);

    // ARTICLE STATE
    const [article, setArticle] = useState({});

    // ARTICLE IMAGE GALLERY
    const [articleImageGallery, setArticleImageGallery] = useState([]);

    // ARTICLE LOADING STATE
    const [articleLoadingState, setArticleLoadingState] = useState("loading");

    // GRABS ID FROM URL
    let params = useParams();
    // console.log(`Article ID: ${_id}`)
    console.log(`Article ID: ${JSON.stringify(params)}`)

    {/* ********************************************************************** */ }
    {/* GRABS ARTICLE FROM BACK-END via ID*/ }
    {/* ********************************************************************** */ }
    useEffect(() => {

        // GRABS ALL ARTICLES FROM DB
        async function grabArticle() {
            await axios
                // .get("http://localhost:3005/api/article/id/678ebacff4dfae792a419ace")
                .get(`http://localhost:3005/api/article/id/${params.id}`)
                .then(async (response) => {
                    setArticleLoadingState("loading");
                    console.log(`ARTICLE DATA: ${JSON.stringify(response.data.article)}`)
                    setArticle(await response.data.article[0]);

                    // GATHERS IMAGES INTO AN ARRAY FOR LIGHTBOX (USESTATE)
                    const tempGalleryArry = response.data.article[0].image_urls.map((image, i) => {
                        return {
                            src: `${image} `,
                            alt: `Article-image-${i}`,
                            width: "100%",
                            height: "100%",
                        }
                    })

                    setArticleImageGallery(tempGalleryArry);

                    setArticleLoadingState(("successful"));

                })
                .catch((err) => {
                    console.log(`error ARTICLE DATA: ${JSON.stringify(err.status)}`)
                    setArticleLoadingState("error")
                }
                );
        }

        grabArticle();
    }, [])

    return (
        <Container as={"article"} className={"p-5 mt-5 w-100 shadow-lg rounded"} style={{ backgroundColor: "rgba(16, 41, 51, 1)" }}>
            {articleLoadingState === "successful" ?
                <>
                    <Lightbox
                        open={lightBoxOpen}
                        close={() => setLightBoxOpen(false)}
                        slides={articleImageGallery ? articleImageGallery :
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
                    <Row className="justify-content-center">
                        <Col>
                            <Row>
                                <h2 style={{ color: "white", borderTop: "3px solid white", paddingTop: "6px" }}>{article.title} </h2>
                            </Row>
                            <Row>
                                <h6 style={{ color: "grey", borderBottom: "1px solid white", paddingBottom: "12px" }}>{article.subTitle} </h6>
                            </Row>
                            <Row>
                                <br />
                            </Row>
                            <Row>
                                <Image
                                    src={article.image_urls[0]}
                                    className="article-img-1"
                                    alt="article image"
                                    style={{ width: "100%", height: "500px", objectFit: "cover", cursor: "pointer" }}
                                    onClick={() => setLightBoxOpen(true)}
                                />
                            </Row>
                            <Row className="justify-content-end align-content-end" sm={1} style={{ width: "100%" }}>
                                <div style={{ color: "darkcyan" }}>{article.category} : {article.subCategory}</div>
                            </Row>
                            <Row className="justify-content-start align-content-start" sm={2} style={{ width: "100%" }}>
                                <div className="" style={{ color: "grey", fontSize: "14px" }}>Written by: {article.author} -Published on: {article.date}</div>
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

                                    {article.body}
                                </p>
                            </Row>
                        </Col>
                    </Row >
                </>
                :
                articleLoadingState === "loading" ? <LoadingArticle />
                    :
                    articleLoadingState === "error" ? <ErrorLoadingArticle /> : <ErrorLoadingArticle />
            }
        </Container >
    );
}

export default NewsArticlePage;
