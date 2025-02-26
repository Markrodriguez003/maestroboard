
// COMPONENTS
import { Button, Container, Stack, Row, Col, Image } from "react-bootstrap";
import InfoPanel from "../ui/InfoPanel";

// DESIGN & THEMES
import { SITE_COLORS } from "../css/site";
import "../css/About.css";

// ASSETS
import { HouseGearFill, MusicNoteBeamed, Newspaper, MusicNote, Tools, PostcardHeartFill, Postcard } from "react-bootstrap-icons";
import about_corkboard from "../../assets/imgs/about/community-board.png"
import about_articles from "../../assets/imgs/about/articles.png"
import about_technology from "../../assets/imgs/about/technology-1283624_640.jpg"
import about_wavey from "../../assets/imgs/about/bass-guitar-1841186_640.jpg"


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
            {/* **************************************************************************** */}
            {/* ABOUT US */}
            {/* **************************************************************************** */}
            <Container fluid className="about-background-canvas  about-canvas-image m-0 p-0" style={{ backgroundImage: `${about_wavey}` }}>
                <div className="about-container ">
                    <div className="inner-about-container ">

                        <h1 className="display-2 text-center" >About Us  </h1>
                        <hr />
                        <p className="about-mini-header text-center">What is maestroboard all about?</p>
                        <p className="w-75 mx-auto lead">
                            Imagine you are walking towards the back of a music shop & you see a community corkboard. You see adverts of bands looking for band members, flyers for concert shows, lost and found, ads for various music related services and posts for used gear. This is what we wanted to re-create! The purpose of this website is to give users the ability to see music related community posts, news articles & be a part of our music forum! We like to say..
                        </p >
                        <p className="w-75 mx-auto lead">Always Remember..</p>
                        <h3 className="text-center">.. to always chase <span style={{ fontStyle: "italic" }}>your</span> <span style={{ color: "darkcyan", textDecoration: "underline" }}>muse!</span></h3>
                        <hr />
                    </div>
                </div>
            </Container >


            <Row className="p-0 m-0">
                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="p-0 m-0">
                    {/* **************************************************************************** */}
                    {/* COMMUNITY BOARD */}
                    {/* **************************************************************************** */}
                    <Container fluid className="about-background-canvas community-posts-image m-0 p-0" style={{ backgroundImage: `${about_wavey}` }}>
                        <div className="about-container">
                            <div className="inner-about-container panel-border">
                                <div className="text-start p-2">
                                    <Stack direction="vertical">
                                        <h1 className="display-4 pt-2">Community Posts  </h1>
                                        <p className="about-mini-header">What's up with the corkboard?</p>
                                        <hr />

                                        <p className="lead w-75">
                                            Our community corkboard will display our posts! Currently, site admin can only post on our community boards, but that will change as we roll out future changes.
                                        </p>
                                        <p>
                                            The posts can be of various types such as:
                                        </p>
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
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    </Container >
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="p-0 m-0">
                    {/* **************************************************************************** */}
                    {/* NEWS ARTICLES  */}
                    {/* **************************************************************************** */}
                    <Container fluid className="about-background-canvas articles-posts-image m-0 p-0" style={{ backgroundImage: `${about_wavey}` }}>
                        <div className="about-container">
                            <div className="inner-about-container panel-border ">
                                <div className="text-start p-2">
                                    <Stack direction="vertical">
                                        <h1 className="display-4 pt-2">News Articles  </h1>
                                        <p className="about-mini-header">Whoa! News articles?</p>
                                        <hr />
                                        <p className="lead w-75">
                                            We have the latest & greatest music related articles! Written by our in-house music staff! We are proud that all articles are vetted by source and provides our users with the latest news!
                                        </p>
                                        <p className="lead">
                                            Types of articles we provide:
                                        </p>
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
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    </Container >


                </Col>
            </Row>



            <Row className="m-0 p-0 gap-0">
                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="p-0 m-0">

                    {/* **************************************************************************** */}
                    {/* SITE TECHNOLOGIES TEXT */}
                    {/* **************************************************************************** */}

                    <Container fluid className="about-background-canvas technology-used-image m-0 p-0" style={{ backgroundImage: `${about_wavey}` }}>
                        <div className="about-container">
                            <div className="inner-about-container panel-border">
                                <div className="text-start p-2">
                                    <Stack direction="vertical">
                                        <h1 className="display-5 pt-2" > {" "} Technologies Used</h1>
                                        <p className="about-mini-header">How did you build this site?</p>
                                        <hr />
                                        <p className="w-75 text-start lead" >
                                            Without the support of other developers and their hard work this site would have been much harder to develop! Here are the list of NPM libraries and tools used to develope this website! Please give them some love! </p>
                                        <ul className="lead">
                                            <Row>
                                                <Col>
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
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    </Container >
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="p-0 m-0">

                    {/* **************************************************************************** */}
                    {/* FUTURE UPDATES TEXT */}
                    {/* **************************************************************************** */}
                    <Container fluid className="about-background-canvas site-image m-0 p-0 text-center" style={{ backgroundImage: `${about_wavey}` }}>
                        <div className="about-container">
                            <div className="inner-about-container panel-border ">

                                <h1 className="display-5" >This site is getting better!</h1>
                                <p className="about-mini-header">What is next for the site?</p>
                                <hr />
                                <p className="w-75 text-start lead mx-auto" >
                                    This site is undergoing updates! Since this site is growing to accomodate all of our users, we will be changing our layouts and functionality. Currently, at the moment the only access to post, delete and edit articles/posts is given to the site admin, but stick around as we will be pushing out updates for users to have their own accounts! That's right! Posting community posts, forum posts, gear review scoring and community driven articles! Keep your ear on the ground for further updates! </p>

                            </div>
                        </div>
                    </Container >

                </Col>


            </Row>













        </>
    )
}


export default About;