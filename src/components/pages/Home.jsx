
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
// import "./css/IntroSplashPage.css";
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
                    <Image src={ad_1} style={{ width: "95%" }} className="object-fit-contain" />
                </Link>

            </div>
            <Row className="justify-content-center">
                <Col className="w-25" lg={5} xl={5} xxl={5} md={5} sm={12} xs={12}>
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
                <br />
                <Col className="w-25" lg={5} xl={5} xxl={5} md={5} sm={12} xs={12}>
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



