


// COMPONENTS
import { Container } from "react-bootstrap";
import IntroSplashPage from "../IntroSplashPage";

// TEST
import LatestItemDisplay from "../LatestItemDisplay";
import { PinFill, PostcardFill } from "react-bootstrap-icons";


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
            <Container className="w-75">
                <LatestItemDisplay
                    header="Latest Posts"
                    fetchType="Posts"
                    fetchCount="5"
                    bgColor={SITE_COLORS.alternateSecondary}
                    color="white"
                    headerIcon={<PinFill style={{ paddingBottom: "5px" }} />}
                    body={["title", "type", "username", "date", "price",]}
                />
            </Container>
            <br />
            <Container className="w-75">
                <LatestItemDisplay
                    header="Latest Articles"
                    fetchType="Articles"
                    fetchCount="5"
                    bgColor={SITE_COLORS.lightSecondary}
                    color="white"
                    headerIcon={<PostcardFill style={{ paddingBottom: "5px" }} />}
                    body={["title", "type", "username", "date", "price",]}
                />
            </Container>
        </>

    );
}

export default Home;



