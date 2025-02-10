// REACT
import { useState, useEffect } from "react";

// DESIGN
import "./css/NewsArticle.css";
import "yet-another-react-lightbox/styles.css";

// COMPONENTS
import { Row, Col, Container, Button, Image, Spinner } from "react-bootstrap";
import LoadPageElement from "./ui/LoadingPageElement";
import ReportPostModal from "./ReportPostModal";

// LIBRARIES
import Lightbox from "yet-another-react-lightbox";
import axios from "axios";
import { useParams, useLocation } from 'react-router-dom';

// ASSETS
import { FileEarmarkExcelFill, Search } from "react-bootstrap-icons";
import defaultImage from "../assets/imgs/misc/missing-img.png";

// THEME DESIGN
import { SITE_COLORS } from "./css/site";

function PostPage(props) {

    // MAKES SURE PAGE GOES TO TOP
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth" // Optional for smooth scrolling
        });
    }, [location]);

    // Image Lightbox
    const [lightBoxOpen, setLightBoxOpen] = useState(false);

    // POST STATE
    const [post, setPost] = useState({});

    // POST IMAGE GALLERY
    const [postImageGallery, setPostImageGallery] = useState([]);

    // POST LOADING STATE
    const [postLoadingState, setPostLoadingState] = useState("loading");

    // GRABS ID FROM URL
    let params = useParams();
    console.log(`Post ID: ${JSON.stringify(params)}`)

    {/* ********************************************************************** */ }
    {/* GRABS POST FROM BACK-END via ID*/ }
    {/* ********************************************************************** */ }
    useEffect(() => {

        // GRABS ALL POST FROM DB
        async function grabPost() {
            await axios
                .get(`http://localhost:3005/api/posts/id/${params.id}`)
                .then(async (response) => {
                    setPostLoadingState("loading");
                    console.log(`POST DATA: ${JSON.stringify(response.data)}`)
                    setPost(await response.data.post[0]);

                    // GATHERS IMAGES INTO AN ARRAY FOR LIGHTBOX (USESTATE)
                    const tempGalleryArry = response.data.post[0].image_urls.map((image, i) => {
                        return {
                            src: `${image} `,
                            alt: `Post-image-${i}`,
                            width: "100%",
                            height: "100%",
                        }
                    })

                    setPostImageGallery(tempGalleryArry);

                    setPostLoadingState(("successful"));

                })
                .catch((err) => {
                    console.log(`error Post DATA: ${JSON.stringify(err.status)}`)
                    setPostLoadingState("error")
                }
                );
        }

        grabPost();
    }, [])

    return (
        <Container as={"post"} className={"p-5 mt-5 shadow-lg rounded"}>
            {postLoadingState === "successful" ?
                <>
                    <Lightbox
                        open={lightBoxOpen}
                        close={() => setLightBoxOpen(false)}
                        slides={postImageGallery ? postImageGallery :
                            [
                                {
                                    src: `${defaultImage} `,
                                    alt: `post-image-upload-error`,
                                    width: "350px",
                                    height: "350px",
                                }
                            ]}
                        plugins={[]}
                    />
                    {/* ******************************** */}
                    {/* POST IMAGE */}
                    {/* ******************************** */}
                    <Row className="justify-content-center m-0 p-0"  >
                        <Col
                            xl={6}
                            lg={6}
                            md={12}
                            sm={12}
                            xs={12}
                            className="p-0 m-0 w-auto"
                            style={{ backgroundColor: SITE_COLORS.main }}
                        >
                            <Image
                                src={post.image_urls[0]}
                                className="p-0 m-0 object-fit-cover"
                                alt="post image"
                                style={{ cursor: "pointer", width: "auto", height: "auto", }}
                                onClick={() => setLightBoxOpen(true)}
                            />
                        </Col>

                        {/* ******************************** */}
                        {/* POST DATA */}
                        {/* ******************************** */}
                        <Col xl={6}
                            lg={6}
                            md={12}
                            sm={12}
                            xs={12}
                            style={{ backgroundColor: SITE_COLORS.main }}
                        >
                            <br />
                            <Row style={{ backgroundColor: SITE_COLORS.main }}>
                                <h2 style={{ color: "white" }}>{post.title} </h2>
                            </Row>
                            <Row className="w-100 justify-content-end align-content-end mb-2" sm={1} >
                                <div style={{ color: "darkcyan" }}><strong>{post.type} </strong> : {post.subType}</div>
                            </Row>
                            <Row>
                                <Col className="justify-content-end align-content-end text-light w-auto" sm={12} md={12} lg={12} xs={12} style={{ backgroundColor: SITE_COLORS.secondary, display: "inline", marginLeft: "2px" }}>
                                    <div ><strong>${post.price} </strong></div>
                                </Col>
                                <Col className="justify-content-end align-content-end text-light w-auto" sm={12} md={12} lg={12} xs={12} style={{ backgroundColor: SITE_COLORS.alternateSecondaryLight, display: "inline", width: "auto", marginLeft: "2px" }}>
                                    <div  ><strong>{post.firm_price ? "Negotiable" : "Not Negotiable"} </strong></div>
                                </Col>
                                <Col className="justify-content-end align-content-end text-light w-auto" sm={12} md={12} lg={12} xs={12} style={{ backgroundColor: SITE_COLORS.lightMain, display: "inline", width: "auto", marginLeft: "2px" }}>
                                    <div ><strong>{post.trade ? "Trades accepted" : "No trades"} </strong></div>
                                </Col>
                            </Row>

                            <Row>
                                <hr style={{ color: "white" }} className="mt-2 mb-2" />
                            </Row>
                            <Row>
                                <p style={{
                                    whiteSpace: "pre-wrap",
                                    color: "white",
                                    width: "85%",
                                    textAlign: "start",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}>

                                    {post.body}
                                </p>
                            </Row>
                            <Row>
                                <hr style={{ color: "white" }} className="mt-2 mt-2" />
                            </Row>
                            <Row className="w-100 justify-content-start align-content-start mb-2" sm={2} >
                                <div className="" style={{ color: "grey", fontSize: "14px" }}><strong>Posted by:</strong> {post.username}  </div>
                            </Row>
                            <Row className="w-100 mb-2 justify-content-start align-content-start" sm={2} >
                                <div className="" style={{ color: "grey", fontSize: "14px" }}><strong>Email:</strong> {post.email}  </div>
                            </Row>
                            <Row className="w-100 mb-2 justify-content-start align-content-start" sm={2} >
                                <div className="" style={{ color: "grey", fontSize: "14px" }}><strong>Phone Number:</strong> {
                                    '(' + post.phone.slice(0, 3) + ') ' + post.phone.slice(3, 6) + '-' + post.phone.slice(6, 11)}  </div>
                            </Row>
                            <Row className="w-100 mb-2 justify-content-start align-content-start" sm={2} >
                                <div className="" style={{ color: "grey", fontSize: "14px" }}><strong>Zipcode:</strong> {post.zip}  </div>
                            </Row>
                            <Row className="justify-content-start align-content-start mb-2" sm={2} style={{ width: "100%" }}>
                                <div style={{ color: "grey", fontSize: "14px" }}><strong>Published on: </strong>{post.date.slice(0, 4) + post.date.slice(4, 8) + post.date.slice(8, 10)}</div>
                            </Row>
                            <Row className="justify-content-start align-content-start mb-2" sm={2} style={{ width: "100%" }}>
                                <div style={{ color: "grey", fontSize: "14px" }}><strong>Post ID:</strong> {post._id}</div>
                            </Row>
                            <Row className="float-start mb-5" >
                                <ReportPostModal />
                            </Row>
                        </Col>
                    </Row >
                </>
                :
                postLoadingState === "loading" ?
                    <LoadPageElement
                        bgColor={SITE_COLORS.secondary}
                        header="Loading post!"
                        icon={<Search style={{ fontSize: "120px", marginLeft: "auto", marginRight: "auto" }} />}
                        spinner={true}
                    >
                        <hr />
                    </LoadPageElement>
                    :
                    postLoadingState === "error" ?
                        <LoadPageElement
                            bgColor={SITE_COLORS.secondary}
                            header="Error trying to find Post!"
                            icon={<FileEarmarkExcelFill style={{ fontSize: "120px", marginLeft: "auto", marginRight: "auto" }} />}
                            spinner={false}
                        >
                            <hr />
                            <p>Sorry about that! We could not find this post!</p>
                            <Button onClick={() => { console.log('testing b utton') }}>Home</Button>
                        </LoadPageElement>
                        :
                        <LoadPageElement
                            bgColor={SITE_COLORS.secondary}
                            header="Error trying to find post!"
                            icon={<FileEarmarkExcelFill style={{ fontSize: "120px", marginLeft: "auto", marginRight: "auto" }} />}
                            spinner={false}
                        >
                            <hr />
                            <p>Sorry about that! We could not find this post!</p>
                            <Button onClick={() => { console.log('testing b utton') }}>Home</Button>
                        </LoadPageElement>
            }
        </Container >
    );
}

export default PostPage;


