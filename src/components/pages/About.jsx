
// COMPONENTS
import { Button, Container, Stack, Row, Carousel, CarouselItem, CarouselCaption, Col, Image } from "react-bootstrap";
import InfoPanel from "../ui/InfoPanel";
import LayeredPanels from "../LayeredPanels";

// DESIGN & THEMES
import { SITE_COLORS } from "../css/site";
import "../css/About.css";

// LIBRARIES
import { Link } from "react-router-dom";

// ASSETS
import { HouseGearFill, MusicNoteBeamed, Newspaper, MusicNote, Tools, PostcardHeartFill, Postcard } from "react-bootstrap-icons";
import about_corkboard from "../../assets/imgs/about/community-board.png"
import about_articles from "../../assets/imgs/about/articles.png"
import about_technology from "../../assets/imgs/about/technology-1283624_640.jpg"


// import corkboard_svg from "../../assets/imgs/about/white-bordered-corkboard-lg.png";
// import corkboard_svg from "../../assets/imgs/about/corkboard-image.png";
import corkboard from "../../assets/imgs/about/specialty-enclosed-corkboards.png";

import about_splash_img_1 from "../../assets/imgs/about/corkboard-image-1.png"
import about_splash_img_2 from "../../assets/imgs/about/corkboard-image-2.png"
import about_splash_img_3 from "../../assets/imgs/about/corkboard-image-3.png"


/*----------------------------------------------------------------------------
|   ⚙️ Use: About page that explains the purpose, history of the site & 
|            and the technologies used to build site        
|
|   🔧 Todo: 
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function About() {
    return (

        <>
            <div className="m-0 p-0  about-container">
                {/* ***************************************************************************************** */}
                {/* ABOUT INTRO SPLASH*/}
                {/* ***************************************************************************************** */}
                <Row style={{ width: "100%" }} className="pt-4 mx-auto">
                    <Col
                        style={{ backgroundColor: "transparent", position: "relative" }}
                        className="m-0 p-5 mx-auto"
                        xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}
                    >
                        <h1 className="display-2 text-start text-light" >ABOUT US </h1>
                        <p className="about-mini-header lead-3 text-start text-light">What is Maestroboard all about?</p>
                        <hr style={{ color: "white" }} />
                        <hr style={{ backgroundColor: "white" }} />
                        <p className="mx-auto lead text-start text-light ">
                            Imagine you are walking towards the back of a music shop & you see a community corkboard. You see adverts of bands looking for band members, flyers for concert shows, lost and found, ads for various music related services and posts for used gear. The excitement of meeting fellow musicians and entertaining possibilities for art! This is what we wanted to re-create!
                        </p >
                        <p className="mx-auto lead text-start text-light ">
                            The purpose of this website is to give users the ability to see music related community posts, news articles & be a part of our music forum! We like to say..
                        </p >
                        <p className=" mx-auto lead text-light">Always Remember.... always chase <span style={{ fontStyle: "italic" }}>your</span> <span style={{ color: "darkcyan", textDecoration: "underline", fontWeight: "bold" }}>muse!</span></p>

                        <Stack direction="horizontal" className="gap-1">

                            <Button>Home</Button>
                            <Button>Community Board</Button>
                            <Button>News</Button>
                            <Button>Login</Button>
                        </Stack>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12} className="mt-5 p-0 mx-auto text-center" style={{ position: "relative" }}>
                        <div className="m-auto p-0">
                            <Image src={about_splash_img_2} style={{ position: "absolute", width: "85%", top: "10px" }} className="mt- 3 mx-auto text-center" />
                            <Image src={corkboard} width={"85%"} className="mt-3 mx-auto text-center" />
                        </div>
                    </Col>
                    {/* <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="m-0 mt-5 p-0 w-75">
                        <Carousel
                            interval={1000}

                            controls={false}
                            indicators={false}
                            className="p-0 m-0 corkboard-carousel"

                        >
                            <Carousel.Item
                                className="p-0 m-0">
                                <Image src={about_splash_img_1} text="First slide" />

                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={about_splash_img_2} text="First slide" />

                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={about_splash_img_3} text="First slide" />

                            </Carousel.Item>
                        </Carousel>
                    </Col> */}
                </Row>

                {/* ***************************************************************************************** */}
                {/* COMMUNITY BOARD */}
                {/* ***************************************************************************************** */}
                <LayeredPanels header="COMMUNITY POSTS" headerBGColor={SITE_COLORS.secondary} contentBGColor={SITE_COLORS.main} containerBGColor={"transparent"}>
                    <div
                        className="m-0 p-0">
                        <div style={{ position: "relative", zIndex: 4 }} className="w-100 mx-auto text-light text-start p-1">
                            <h2 className=" text-start" style={{ color: "#a4f9ff", zIndex: 4 }}>WHAT'S UP WITH THE CORKBOARD?</h2>
                            <hr />
                            <p style={{ zIndex: 4 }}>
                                Our community corkboard will display our posts! The board will be the spot for musicians, business owners and anyone else to peruse through different adverts! There are plans to expand to different post types and other materials! Currently, site admin can only post on our community boards, but that will change as we roll out future changes.
                            </p>
                            <hr />

                            <h3 className=" text-start" style={{ color: "#b6e8f9" }}>TYPES OF POSTS:</h3>
                            <ul className="lead">
                                <li>
                                    Selling and Buying of used/new gear
                                </li>
                                <li>
                                    Adverts for shows, services & events
                                </li>
                                <li>
                                    Band member search
                                </li>
                                <li>
                                    Lost & Found
                                </li>
                                <li>
                                    Coupons and on-sale news
                                </li>

                            </ul>
                            <hr style={{ color: "white" }} />

                            <div>
                                <Link to={"/board"}>
                                    <Button>Community Board</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </LayeredPanels>

                {/* ***************************************************************************************** */}
                {/* NEWS & ARTICLES */}
                {/* ***************************************************************************************** */}
                <LayeredPanels header="NEWS" headerBGColor={SITE_COLORS.alternateSecondary} contentBGColor={SITE_COLORS.alternateMain} containerBGColor={"transparent"}>
                    <div style={{ position: "relative", zIndex: 4 }} className="w-100 mx-auto text-light text-start p-1">
                        <h2 className=" text-start" style={{ color: "#a4f9ff" }}>WHOA! NEWS ARTICLES?!</h2>
                        <hr />
                        <p>
                            We have the latest & greatest music related articles! Written by our in-house music staff! We are proud that all articles are vetted by source and provides our users with the latest news!
                        </p>
                        <hr />

                        <h3 className=" text-start" style={{ color: "#b6e8f9" }}>TYPES OF ARTICLES:</h3>
                        <ul className="lead">
                            <li>
                                Music Reviews
                            </li>
                            <li>
                                News
                            </li>
                            <li>
                                Recording & Studio
                            </li>
                            <li>
                                Instruments
                            </li>
                            <li>
                                Advertisements
                            </li>
                            <li>
                                Events
                            </li>
                        </ul>
                        <hr style={{ color: "white" }} />

                        <div>
                            <Link to={"/news"}>
                                <Button>News Articles</Button>
                            </Link>
                        </div>
                    </div>

                </LayeredPanels>

                {/* ***************************************************************************************** */}
                {/* FORUM */}
                {/* ***************************************************************************************** */}
                <LayeredPanels header="FORUM" headerBGColor={SITE_COLORS.main} contentBGColor={SITE_COLORS.alternateSecondary} containerBGColor={"transparent"}>
                    <div style={{ position: "relative", zIndex: 4 }} className="w-100 mx-auto text-light text-start p-1">
                        <h2 className=" text-start" style={{ color: "#a4f9ff" }}>BE A PART OF OUR COMMUNITY!</h2>
                        <hr />
                        <p>
                            Come join our forum to get into the latest music related community! Ask questions, learn more about gear, make friends and be on the cutting edge of music gear opinions! In addition to music related forum categories we also have off-hour categories that you can join to talk about whatever!
                        </p>
                        <hr />

                        <h3 className=" text-start" style={{ color: "#b6e8f9" }}>TYPES OF ARTICLES:</h3>
                        <ul className="lead">
                            <li>
                                Music Reviews
                            </li>
                            <li>
                                News
                            </li>
                            <li>
                                Recording & Studio
                            </li>
                            <li>
                                Instruments
                            </li>
                            <li>
                                Advertisements
                            </li>
                            <li>
                                Events
                            </li>
                        </ul>
                        <hr style={{ color: "white" }} />

                        <div>
                            <Link to={"/news"}>
                                <Button>News Articles</Button>
                            </Link>
                        </div>
                    </div>

                </LayeredPanels>

                {/* ***************************************************************************************** */}
                {/* SITE TECHNOLOGIES USED */}
                {/* ***************************************************************************************** */}
                <LayeredPanels header="TECHNOLOGIES USED" headerBGColor={SITE_COLORS.lightMain} contentBGColor={SITE_COLORS.secondary} containerBGColor={"transparent"}>
                    <div style={{ position: "relative", zIndex: 4 }} className="w-100 mx-auto text-light text-start p-1">
                        <h2 className=" text-start" style={{ color: "#a4f9ff" }}>HOW DID YOU BUILD THIS SITE?</h2>
                        <hr />
                        <p>
                            Without the support of other developers and their hard work this site would have been much harder to develop! Here are the list of NPM libraries and tools used to develope this website! Please give them some love!
                        </p>
                        <hr />
                        <h3 className=" text-start" style={{ color: "#b6e8f9" }}>LIBRARIES & FRAMEWORKS USED:</h3>
                        <ul className="lead">
                            <Row>
                                <Col className="gap-0 m-0 p-0">
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        React-Router
                                    </li>
                                    <li>
                                        Vite
                                    </li>
                                    <li>
                                        Express
                                    </li>
                                    <li>
                                        MongoDB
                                    </li>
                                    <li>
                                        Mongoose
                                    </li>
                                    <li>
                                        Cloundinary
                                    </li>
                                    <li>
                                        Bootstrap
                                    </li>
                                </Col>
                                <Col>
                                    <li>
                                        Concurrently
                                    </li>
                                    <li>
                                        Axios
                                    </li>
                                    <li>
                                        Helmet
                                    </li>
                                    <li>
                                        JSON-Web-Token
                                    </li>
                                    <li>
                                        Nodemon
                                    </li>
                                    <li>
                                        React-Multi-Carousel
                                    </li>
                                    <li>
                                        React-Hook-Form
                                    </li>
                                    <li>
                                        Google ReCaptcha
                                    </li>
                                    <li>
                                        Yet-Another-React-Lightbox
                                    </li>
                                </Col>
                            </Row>
                        </ul>
                        <hr style={{ color: "white" }} />
                        <div>
                            <small>Source code for website:</small>
                            <br />
                            <Link to={"https:github.com/markrodriguez003/maestroboard"}>
                                <Button>Github</Button>
                            </Link>
                        </div>
                    </div>


                </LayeredPanels>

                {/* ***************************************************************************************** */}
                {/* UPCOMING SITE IMPROVEMENTS */}
                {/* ***************************************************************************************** */}

                <Row className="m-0 p-0 gap-3 mx-auto justify-content-center" style={{ backgroundColor: "black" }}>

                    <Col className="m-0 p-0" xxl={5} xl={5} lg={5} md={5} sm={12} xs={12}>
                        <div style={{ position: "relative", height: "100vh", width: "100%", display: "inline-block", backgroundColor: "", overflow:"hidden" }}>

                            <Image src={about_corkboard} style={{ position: "absolute", width: "400px", height: "auto", left: "220px", bottom: "160px", zIndex: 3 }} />

                            <Image src={about_articles} style={{ position: "absolute", width: "420px", height: "auto", left: "0px", top: "100px", zIndex: 4 }} />

                            <Image src={about_technology} style={{ position: "absolute", width: "420px", height: "auto", left: "30px", bottom: "40px", zIndex: 2 }} />
                        </div>
                    </Col>
                    <Col className="p-5 mt-5" style={{ backgroundColor: "" }}
                        xxl={5} xl={5} lg={5} md={5} sm={12} xs={12}>
                        <h1 className="display-2 text-start text-light" >FUTURE UPDATES </h1>
                        <p className="about-mini-header lead-3 text-start text-light">What is next for Maestroboard?</p>
                        <hr style={{ backgroundColor: "white" }} />
                        <p className="mx-auto lead text-start text-light ">
                            This site is undergoing updates! Since this site is growing to accomodate all of our users, we will be changing our layouts and functionality. Currently, at the moment the only access to post, delete and edit articles/posts is given to the site admin, but stick around as we will be pushing out updates for users to have their own accounts! That's right! Posting community posts, forum posts, gear review scoring and community driven articles! Keep your ear on the ground for further updates!
                        </p >
                        <Stack direction="horizontal" className="gap-1" >

                            <Button>Home</Button>
                            <Button>Community Board</Button>
                            <Button>News</Button>
                            <Button>Login</Button>
                        </Stack>
                    </Col>
                </Row>
            </div >
        </>
    )
}


export default About;

