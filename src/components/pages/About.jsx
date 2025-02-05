
// COMPONENTS
import { Button, Container, Stack, Row, Col, Image } from "react-bootstrap";
import InfoPanel from "../ui/InfoPanel";

// DESIGN & THEMES
import { SITE_COLORS } from "../css/site";

// ASSETS
import { HouseGearFill, MusicNoteBeamed, Newspaper, MusicNote, Tools, PostcardHeartFill, Postcard } from "react-bootstrap-icons";
import about_corkboard from "../../assets/imgs/about/community-board.png"
import about_articles from "../../assets/imgs/about/articles.png"
import about_technology from "../../assets/imgs/about/technology-1283624_640.jpg"

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
            {/* ABOUT US HEADER */}
            {/* **************************************************************************** */}
            <Container className="mt-5" fluid>
                <br />
                {/* **************************************************************************** */}
                {/* ABOUT US TEXT */}
                {/* **************************************************************************** */}
                <InfoPanel bgColor={SITE_COLORS.alternateMain} color="white" width="75" rounded="rounded-5">
                    <div className="p-0 mx-auto text-start">
                        <Stack>
                            <h1 className="display-2 text-center" >About Us <MusicNoteBeamed style={{ fontSize: "75px" }} className="" /> </h1>
                            <hr />
                            <p className="w-75 mx-auto lead">
                                Imagine you are walking towards the back of a music shop & you see a community corkboard. You see adverts of bands looking for band members, flyers for concert shows and posts for used gear. The purpose of this website is to give users the ability to see music related community posts, news articles &
                                post of our forum! Remember to always chase your muse!
                            </p>
                        </Stack>
                    </div>
                </InfoPanel>
                <br />
                {/* **************************************************************************** */}
                {/* ABOUT CORKBOARD ROW */}
                {/* **************************************************************************** */}
                <InfoPanel rounded="rounded-5">
                    <Row>
                        <Col>
                            <Image src={about_corkboard} width={"100%"} />
                        </Col>
                        {/* //! MOVE TO JSON AND USE IT AS DROPDOWN OPTION AND UL LIST ITEMS BELOW */}
                        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                            <div className="text-start p-2">
                                <Stack direction="vertical">
                                    <h1 className="display-4">Community Posts  <Postcard style={{ fontSize: "90px" }} className="mx-auto mb-2" /></h1>
                                    <hr />
                                    <p className="lead">
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
                        </Col>
                    </Row>
                </InfoPanel>
                <br />
                {/* **************************************************************************** */}
                {/* NEWS ARTICLES ROW */}
                {/* **************************************************************************** */}
                <InfoPanel rounded="rounded-5">
                    <Row>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                            <div className="text-start p-2">
                                <Stack direction="vertical">
                                    <h1 className="display-4">News Articles  <Newspaper style={{ fontSize: "90px" }} className="mx-auto mb-2" /></h1>
                                    <hr />
                                    <p className="lead">
                                        We have the latest & greatest music related articles! Written by our in-house music staff! We are proud that all articles are vetted by source and provides our users with the latest news!
                                    </p>
                                    <p className="lead">
                                        Types of articles we provide:
                                    </p>
                                    {/* //! USE JSON DATA TO POPULATE THIS! */}
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
                        </Col>
                        <Col>
                            <Image src={about_articles} width={"100%"} height={"500px"} style={{ objectFit: "cover" }} />
                        </Col>
                    </Row>
                </InfoPanel>

                {/* **************************************************************************** */}
                {/* SITE TECHNOLOGIES TEXT */}
                {/* **************************************************************************** */}
                <br />
                <InfoPanel rounded="rounded-5">
                    <Row>
                        <Col>
                            <Image src={about_technology} width={"100%"} height={"500px"} style={{ objectFit: "cover" }} />
                        </Col>
                        {/* //! MOVE TO JSON AND USE IT AS DROPDOWN OPTION AND UL LIST ITEMS BELOW */}
                        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                            <div className="text-start p-2">
                                <Stack direction="vertical">
                                    <h1 className="display-5 mr-2" > {" "} Technologies Used      <Tools style={{ fontSize: "90px" }} /></h1>
                                    <hr />
                                    <p className="w-100 text-start lead" >
                                        Without the support of other developers and their hard work this site would have been much harder to develop! Here are the list of NPM libraries and tools used to develope this website! Please give them some love! </p>
                                    <ul className="mx-auto lead">
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
                                                    Yet-Another-React-Lightbox
                                                </li>
                                            </Col>
                                        </Row>
                                    </ul>
                                </Stack>
                            </div>
                        </Col>
                    </Row>
                </InfoPanel>
                <br />










                {/* **************************************************************************** */}
                {/* FUTURE UPDATES TEXT */}
                {/* **************************************************************************** */}
                <br />
                <Row>
                    <InfoPanel bgColor={SITE_COLORS.secondary} width="75" rounded="rounded-5">
                        <HouseGearFill style={{ fontSize: "120px" }} />
                        <h1 className="display-5" >This site is getting better!</h1>
                        <hr />
                        <p className="w-75 text-start mx-auto lead" >This Site is undergoing updates! Since this site is growing to accomodate all of our users, we will be changing our layours and functionality as it continues. Currently, at the moment the only access is given to the site admin, but stick around as we will be pushing out updates for users to have their own accounts! That's right! Posting community posts, forum posts, gear review scoring and community driven articles! </p>
                    </InfoPanel >
                </Row>
            </Container >

        </>
    )
}


export default About;