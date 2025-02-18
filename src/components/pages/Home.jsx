
// COMPONENTS
import { Container, Row, Col, Image } from "react-bootstrap";
import IntroSplashPage from "../IntroSplashPage";
import LatestItemDisplay from "../LatestItemDisplay";

// LIBRARIES
import { Link } from "react-router";


// ASSETS
import { PinFill, PostcardFill } from "react-bootstrap-icons";
import ad_1 from "../../assets/imgs/ads/63169725.jpg"

// DESIGN & THEMES
import "../css/Home.css";
import { SITE_COLORS } from "../css/site";

// ASSETS


/*----------------------------------------------------------------------------
|   ⚙️ Use: The main splash/hero component for the Home page
|        
|   🔧 Todo: 
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function Home() {
    return (
        <>

            <IntroSplashPage />
            <br />
            <div className="w-100 mb-4 text-center">
                <Link to={"https://harleybenton.com/newcomer/"} target="_blank">
                    <Image src={ad_1} className="ad-1" />
                </Link>

            </div>

            {/* LARGER MONITOR SIZES */}
            <Row className="justify-content-center">
                <Col className="w-25 d-sm-none d-xs-none d-lg-block d-md-none d-xl-block d-xxl-block d-none" lg={5} xl={5} xxl={5} md={12} sm={12} xs={12}>
                    <LatestItemDisplay
                        header="Latest Posts"
                        fetchType="Posts"
                        fetchCount="5"
                        bgColor={SITE_COLORS.alternateSecondary}
                        color="white"
                        headerIcon={<PinFill style={{ paddingBottom: "5px" }} />}
                        body={["title", "type", "username", "date", "price",]}
                    />
                </Col>

                <Col className="w-25 d-sm-none d-xs-none d-lg-block d-md-none d-xl-block d-xxl-block d-none" lg={12} xl={12} xxl={12} md={12} sm={12} xs={12}>
                    <LatestItemDisplay
                        header="Latest Articles"
                        fetchType="Articles"
                        fetchCount="5"
                        bgColor={SITE_COLORS.lightSecondary}
                        color="white"
                        headerIcon={<PostcardFill style={{ paddingBottom: "5px" }} />}
                        body={["title", "subTitle", "category", "author", "date",]}
                    />
                </Col>
            </Row >

            {/* MOBILE */}
            <Row className="justify-content-center">
                <Col className="w-75 d-sm-block d-xs-block d-lg-none d-md-block d-xl-none d-xxl-none d-block" sm={12} xs={12}>
                    <LatestItemDisplay
                        header="Latest Posts"
                        fetchType="Posts"
                        fetchCount="5"
                        bgColor={SITE_COLORS.alternateSecondary}
                        color="white"
                        headerIcon={<PinFill style={{ paddingBottom: "5px" }} />}
                        body={["title", "type", "username", "date", "price",]}
                    />
                </Col>

                <Col className="w-75 d-sm-block d-xs-block d-lg-none d-md-block d-xl-none d-xxl-none d-block" md={12} sm={12} xs={12}>
                    <LatestItemDisplay
                        header="Latest Articles"
                        fetchType="Articles"
                        fetchCount="5"
                        bgColor={SITE_COLORS.lightSecondary}
                        color="white"
                        headerIcon={<PostcardFill style={{ paddingBottom: "5px" }} />}
                        body={["title", "subTitle", "category", "author", "date",]}
                    />
                </Col>
            </Row >
        </>

    );
}

export default Home;



