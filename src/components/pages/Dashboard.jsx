
// COMPONENTS
import { useState, useEffect, useRef } from "react";
import { Row, Col, Card, Button, Image, Carousel, Tab, ListGroup, Container, } from "react-bootstrap";
import HeaderPanel from "../ui/HeaderPanel";
import PostBoardCard from "../PostBoardCard";
import BoardPostModal from "../BoardPostModal";
import ArticlePostModal from "../ArticlePostModal";
import { Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import LoadingPageElement from "../ui/LoadingPageElement";

// DATA
import article_typesJSON from "../../data/articleTypes.json";

// LIBRARIES
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// ASSETS
import { FileEarmarkPerson, SpeakerFill, FileEarmarkMusicFill, DatabaseGear, Tools, PinFill, PencilSquare, PostcardFill, CardList, Scissors, Filter } from "react-bootstrap-icons";
import { SITE_COLORS } from "../css/site";

// CSS
// import "../css/Login.css";


/*----------------------------------------------------------------------------
|   ⚙️ Use: Admin dashboard page to edit/delete/insert/show articles & posts  
|       as well as show article/post stats 
|       
|   🔧 Todo: Add dashboard for general users
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function Dashboard(props) {

    // GRABS REFERENCE OF ELEMENT ON TOP OF CORKBOARD
    const articleTopRef = useRef(null);

    // FILTER BUTTON STATE
    const [filterLatestArticle, setFilterLatestArticle] = useState(true);

    // SCROLLS TO TOP OF ARTICLE ONCE ARTICLE CHANGES
    function scrollArticleToTop() {
        if (articleTopRef.current) {
            articleTopRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    // HOLDS TRIGGER FOR AUTHENTICATED USER
    const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(null);

    // GRABBING SESSION MEMORY TO CHECK TO SEE IF USER IS SIGNED IN
    // VIA TOKEN DATA
    useEffect(() => {
        function getSessionToken() {
            const tokenString = sessionStorage.getItem('token');
            const userToken = JSON.parse(tokenString);
            return userToken;
        };

        async function authenticateUser() {
            const token = getSessionToken();

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Data": "Custom-Data"
                }
            }

            await axios
                .get("http://localhost:3005/api/auth", config)
                .then((response) => {
                    console.log(`Response! --> ${JSON.stringify(response.data.adminLogin)}`);
                    setIsAuthenticatedUser(true);
                })
                .catch((err) => {
                    setIsAuthenticatedUser(false);
                    console.log(`Error verfiying user! --> ${err}`)

                });
        }

        authenticateUser();
    }, [])


    // STATE THAT WILL HOLD ARTICLE & POST DATA
    const [data, setData] = useState({
        articles: [],
        users: [],
        forum: [{ data: 0 }],
        posts: [],
        sellingPosts: 0,
        buyingPosts: 0
    })

    // GRABS ARTICLE TYPES TO POPULATE SELECT OPTION IN ARTICLE CREATION SELECTION 
    const article_types = article_typesJSON[0].article_types;

    // DATA FOR DOUGHNUTS
    // CORKBOARD POSTS
    const postsDataChart = {
        labels: ['Selling Gear', 'Buying Gear'],
        datasets: [
            {
                label: "# Posts Types",
                data: [data.sellingPosts, data.buyingPosts],
                backgroundColor: [
                    SITE_COLORS.lightMain,
                    SITE_COLORS.lightSecondary,
                ],
                borderColor: [
                    SITE_COLORS.main,
                    SITE_COLORS.secondary,
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {

            legend: {
                labels: {
                    // boxWidth: 35,
                    // boxHeight: 35,
                    color: "#fff",

                }
            }
        }
    }
    // ARTICLE POST DATA
    const articlesDataChart = {
        labels: ['General', 'News', 'Events', 'Announcements', 'Gear Reviews', 'Electronic Music', 'Instruments', 'Recording and Studio', "Composition"],
        datasets: [
            {
                label: "# Article Types",
                data: [data["general-articles"], data["news-articles"], data["events-articles"], data["announcements-articles"], data["gear-review-articles"], data["electronic-music-articles"], data["instruments-articles"], data["recording-&-studio-articles"], data["composition-articles"]
                ],
                backgroundColor: [
                    SITE_COLORS.main,
                    SITE_COLORS.lightSecondary,
                    "darkorange",
                    SITE_COLORS.lightMain,
                    "fireBrick",
                    SITE_COLORS.alternateMain,
                    SITE_COLORS.alternateSecondary,
                    "Olive",
                    "MediumSeaGreen",
                    "Violet"

                ],
                borderColor: [
                    SITE_COLORS.main,
                    SITE_COLORS.lightSecondary,
                    "darkorange",
                    SITE_COLORS.lightMain,
                    "fireBrick",
                    SITE_COLORS.alternateMain,
                    SITE_COLORS.alternateSecondary,
                    "Olive",
                    "MediumSeaGreen",
                    "Violet"

                ],
                borderWidth: 1,
            },
        ],
    };




    useEffect(() => {
        // GRABS ALL ARTICLES FROM DB
        async function grabArticles() {
            await axios
                .get("http://localhost:3005/api/loadArticles")
                .then((response) => {
                    setData((prev) => (
                        {
                            ...prev,
                            articles: response.data
                        }
                    ))
                })
                .catch((err) => console.log(err));
        }

        // GRABS ALL COMMUNITY POSTS FROM DB
        async function grabPosts() {
            await axios
                .get("http://localhost:3005/api/loadPosts")
                .then((response) => {
                    setData((prev) => (
                        {
                            ...prev,
                            posts: response.data
                        }
                    ))
                })
                .catch((err) => console.log(err));
        }

        // GRABS ALL COMMUNITY POSTS WITH THE STYLE TAG "SELLING" FROM DB
        async function grabPostsType(type) {
            let searchType = type.toString().toLowerCase()
            await axios
                .get(`http://localhost:3005/api/loadPosts/type/${searchType}`)
                .then((response) => {
                    setData((prev) => (
                        {
                            ...prev,
                            [`${type}Posts`]: response.data
                        }
                    ))
                })
                .catch((err) => console.log(err));
        }

        // GRABS ALL COMMUNITY POSTS WITH THE STYLE TAG "SELLING" FROM DB
        async function grabArticleType(type) {
            let searchType = type.toString().toLowerCase();

            await axios
                .get(`http://localhost:3005/api/loadarticles/category/${searchType}`)
                .then((response) => {

                    let objectName = searchType.split(' ').join('-')
                    // console.log(`OBJECT TYPE:: ${objectName}`);
                    setData((prev) => (
                        {
                            ...prev,
                            [`${objectName}-articles`]: response.data
                        }
                    ))
                })
                .catch((err) => console.log(err));
        }


        // GRABS ALL ARTICLES FROM DB
        async function grabUserLength() {
            await axios
                .get("http://localhost:3005/api/load-user-count")
                .then((response) => {
                    setData((prev) => (
                        {
                            ...prev,
                            users: response.data
                        }
                    ))
                })
                .catch((err) => console.log(err));
        }

        // RUNNING FUNCTIONS THAT GRABS ALL ARTICLE & POST DATA FROM BACKEND
        // ! change this to promiseAll()
        grabPosts();
        grabArticles();
        grabUserLength();
        grabPostsType("selling");
        grabPostsType("buying");

        // Loops through each article type to call function to grab lengths 
        for (let i = 0; i < article_types.length; i++) {
            grabArticleType(article_types[i]);
        }
    }, []);

    return (
        <>

            {isAuthenticatedUser ? <Container className="w-100 p-4 mt-5 mb-5" style={{ backgroundColor: "black" }}>
                {/* MAIN PROFILE HEADER */}
                <Row className="w-100">
                    <Col style={{ color: "white", fontSize: "40px", }} className="p-0 m-0">
                        <HeaderPanel bgColor={SITE_COLORS.main} width="w-100">
                            <h1 style={{
                                color: "white",
                                fontSize: "40px",
                                borderRadius: "5px",
                            }}
                            >
                                <Tools color="white" style={{ fontSize: "45px", paddingBottom: "12px" }} />
                                Admin Dashboard
                            </h1>
                        </HeaderPanel>
                    </Col>
                </Row>
                <br />
                {/* MAIN PROFILE DATA TABS */}
                <Row className="gap-2">
                    <Col style={{ color: "white", fontSize: "40px", }} className="m-0 p-0 gap-5" lg={2} >
                        <Row className="w-100 m-0 p-0 mb-2 ">
                            <h1 style={{
                                backgroundColor: SITE_COLORS.lightMain,
                                color: "white",
                                textAlign: "start",
                                fontSize: "18px",
                                borderRadius: "5px",
                                fontWeight: "100",
                                display: "inline",
                                padding: "12px"
                            }}
                            >
                                <PinFill style={{ paddingBottom: "5px" }} />
                                Corkboard Posts: {data.posts.length}
                            </h1>

                        </Row>

                        <Row className="w-100 m-0 p-0 mb-2">
                            <h1 style={{
                                color: "white",
                                textAlign: "start",
                                fontSize: "18px",
                                borderRadius: "5px",
                                fontWeight: "100",
                                backgroundColor: SITE_COLORS.secondary,
                                display: "inline",
                                padding: "12px"

                            }}
                            >
                                <FileEarmarkPerson style={{ paddingBottom: "5px" }} />Users : {data.users}
                            </h1>

                        </Row>
                        <Row className="w-100 m-0 p-0 mb-2">
                            <h1 style={{
                                backgroundColor: SITE_COLORS.alternateMain,
                                color: "white",
                                textAlign: "start",
                                fontSize: "18px",
                                borderRadius: "5px",
                                fontWeight: "100",
                                display: "inline",
                                padding: "12px"

                            }}
                            >
                                <PostcardFill style={{ paddingBottom: "5px" }} />
                                Articles : {data.articles.length}
                            </h1>

                        </Row>
                        <Row className="w-100 m-0 p-0 mb-2">
                            <h1 style={{
                                backgroundColor: SITE_COLORS.alternateSecondary,
                                color: "white",
                                textAlign: "start",
                                fontSize: "18px",
                                borderRadius: "5px",
                                fontWeight: "100",
                                display: "inline",
                                padding: "12px"

                            }}
                            >
                                <CardList style={{ paddingBottom: "5px" }} />
                                Forum Posts: 12,024
                            </h1>

                        </Row>
                        <hr />
                        <Row className="w-100 m-0 p-0 mb-3">
                            <BoardPostModal />

                        </Row>
                        <Row className="w-100 m-0 p-0 mb-2 btn-info">
                            <ArticlePostModal>
                                <Button size="md" className="text-light w-100 m-0"  >
                                    Create an Article! </Button>
                            </ArticlePostModal >
                        </Row>
                    </Col>

                    {/* CAROUSEL */}
                    <Col lg={4} >
                        <h1 style={{
                            color: "white",
                            textAlign: "start",
                            fontSize: "24px",
                            borderRadius: "5px",
                            fontWeight: "100",
                            backgroundColor: SITE_COLORS.alternateSecondaryLight,
                            padding: "15px",

                        }}
                        >
                            <CardList style={{ paddingBottom: "5px" }} />
                            Latest Corkboard Posts:
                        </h1>
                        <Col className="mx-auto w-100 justify-content-center" >
                            <Carousel className="p-0 " >
                                {
                                    data.posts.map((p, i) => (
                                        <Carousel.Item key={`dashboard-carousel-article-${i}`}>
                                            <PostBoardCard {...p}
                                                key={`dashboard-post-${p.title} - ${i}-${p._id}`}

                                            />
                                        </Carousel.Item>
                                    ))
                                }
                            </Carousel>
                        </Col>
                    </Col>


                    {/* ARTICLES PANEL */}
                    <Col>
                        <h1 style={{
                            color: "white",
                            textAlign: "start",
                            fontSize: "24px",
                            borderRadius: "5px",
                            fontWeight: "100",
                            backgroundColor: SITE_COLORS.alternateSecondary,
                            // display: "inline-block",
                            padding: "15px",
                        }}
                        >
                            <PostcardFill style={{ paddingBottom: "5px" }} />
                            Latest Articles:
                        </h1>
                        <Col lg={7} md={4} className="mx-auto w-100" style={{ backgroundColor: "red" }} >
                            <Carousel className="p-0" style={{ width: "600px" }} >
                                {
                                    data.articles.map((p, i) => (
                                        <Carousel.Item key={`dashboard-carousel-article-${i}`}>
                                            <Card style={{ backgroundColor: "rgba(150, 16, 16, 0.7)", color: "white", height: "500px" }} className="w-100">
                                                <Card.Img variant="top" src={p.image_urls[0]}
                                                    style={{ objectFit: "contain", width: "500px", height: "300px", marginLeft: "auto", marginRight: "auto" }} />
                                                <Card.Body>
                                                    {/* <Card.Title>{p.title}</Card.Title> */}
                                                    <Card.Title>{p.title}</Card.Title>
                                                    <Card.Text style={{ color: "darkgrey" }}>
                                                        {p.subTitle}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {p.body}
                                                    </Card.Text>
                                                    <Button variant="primary">Go to article</Button>
                                                </Card.Body>
                                            </Card>
                                        </Carousel.Item>
                                    ))
                                }
                            </Carousel>
                        </Col>
                    </Col>
                </Row>
                <br />
                <Row>

                </Row>
                <br />
                <hr style={{ color: "white" }} />
                <br />
                <Col style={{ color: "white", fontSize: "40px", }} className="p-0 m-0">
                    <HeaderPanel bgColor={SITE_COLORS.secondary} width="w-100">
                        <h1 style={{
                            color: "white",
                            fontSize: "40px",
                            borderRadius: "5px",
                        }}
                        >
                            <Tools color="white" style={{ fontSize: "45px", paddingBottom: "12px" }} />
                            Site Post & Article Metrics
                        </h1>
                    </HeaderPanel>
                </Col>
                {/* ******************************************************************* */}
                {/* BOTTOM HALF */}
                {/* ******************************************************************* */}
                <Row className="p-3 gap-2" style={{ backgroundColor: `black` }}>
                    <Col className="p-0 m-0" lg={2} >
                        <h5 style={{ color: "white" }}>Post. Data Infomation:</h5>
                        <h1 style={{
                            backgroundColor: SITE_COLORS.lightMain,
                            color: "white",
                            textAlign: "start",
                            fontSize: "18px",
                            borderRadius: "5px",
                            fontWeight: "100",
                            padding: "12px",
                            marginBottom: "20px"
                        }}
                        >
                            <PinFill style={{ paddingBottom: "5px" }} />
                            Selling posts: {data.sellingPosts}
                        </h1>


                        <div>
                            <h1 style={{
                                color: "white",
                                textAlign: "start",
                                fontSize: "18px",
                                borderRadius: "5px",
                                fontWeight: "100",
                                backgroundColor: SITE_COLORS.secondary,
                                padding: "12px",
                                marginBottom: "20px"
                            }}
                            >
                                <FileEarmarkPerson style={{ paddingBottom: "5px" }} />Buying Posts: {data.buyingPosts}
                            </h1>

                        </div>

                    </Col>
                    <Col>
                        <h5 style={{ color: "white" }} className="text-start">Community Board types:</h5>
                        <Col style={{ marginLeft: "auto", marginRight: "auto" }} className="m-0 p-0" lg={3}>
                            <Doughnut
                                data={postsDataChart}
                                width={"350px"}
                                height={"350px"}
                                options={options}
                                style={{ transform: "scale(1)" }} className="m-0 p-0 mx-auto" />
                        </Col>
                    </Col>
                    <Col>
                        <h5 style={{ color: "white" }} className="text-start">Article types:</h5>
                        <Col style={{ marginLeft: "auto", marginRight: "auto" }} className="m-0 p-0" lg={3}>
                            <Doughnut
                                data={articlesDataChart}
                                width={"350px"}
                                height={"350px"}
                                options={options}
                                style={{ transform: "scale(1)" }} className="m-0 p-0 mx-auto" />
                        </Col>
                    </Col>
                    <Col className="p-0 m-0" lg={2} >
                        <h5 style={{ color: "white" }}>Article Infomation:</h5>
                        <h1 style={{
                            backgroundColor: SITE_COLORS.lightMain,
                            color: "white",
                            textAlign: "start",
                            fontSize: "18px",
                            borderRadius: "5px",
                            fontWeight: "100",
                            padding: "12px",
                            marginBottom: "20px"
                        }}
                        >
                            <PinFill style={{ paddingBottom: "5px" }} />
                            General: {data["general-articles"]}
                        </h1>


                        <div>

                            <h1 style={{
                                color: "white",
                                textAlign: "start",
                                fontSize: "18px",
                                borderRadius: "5px",
                                fontWeight: "100",
                                backgroundColor: SITE_COLORS.main,
                                padding: "12px",
                                marginBottom: "20px"
                            }}
                            >
                                <FileEarmarkPerson style={{ paddingBottom: "5px" }} />News: {data["news-articles"]}
                            </h1>

                        </div>
                        <div>

                            <h1 style={{
                                color: "white",
                                textAlign: "start",
                                fontSize: "18px",
                                borderRadius: "5px",
                                fontWeight: "100",
                                backgroundColor: SITE_COLORS.secondary,
                                padding: "12px",
                                marginBottom: "20px"
                            }}
                            >
                                <FileEarmarkPerson style={{ paddingBottom: "5px" }} />Events: {data["events-articles"]}
                            </h1>

                        </div>
                        <div>

                            <h1 style={{
                                backgroundColor: SITE_COLORS.alternateMain,
                                color: "white",
                                textAlign: "start",
                                fontSize: "18px",
                                borderRadius: "5px",
                                fontWeight: "100",
                                padding: "12px",
                                marginBottom: "20px"

                            }}
                            >
                                <PostcardFill style={{ paddingBottom: "5px" }} />
                                Announcements: {data["announcements-articles"]}
                            </h1>
                        </div>
                        <div>
                            <h1 style={{
                                backgroundColor: SITE_COLORS.alternateSecondary,
                                color: "white",
                                textAlign: "start",
                                fontSize: "18px",
                                borderRadius: "5px",
                                fontWeight: "100",
                                padding: "12px",
                                marginBottom: "20px"
                            }}
                            >
                                <CardList style={{ paddingBottom: "5px" }} />
                                Gear Review: {data["gear-review-articles"]}
                            </h1>
                        </div>
                        <div>
                            <h1 style={{
                                backgroundColor: SITE_COLORS.alternateSecondary,
                                color: "white",
                                textAlign: "start",
                                fontSize: "18px",
                                borderRadius: "5px",
                                fontWeight: "100",
                                padding: "12px",
                                marginBottom: "20px"
                            }}
                            >
                                <CardList style={{ paddingBottom: "5px" }} />
                                Electronic Music: {data["electronic-music-articles"]}
                            </h1>
                        </div>
                        <div>
                            <h1 style={{
                                backgroundColor: SITE_COLORS.secondary,
                                color: "white",
                                textAlign: "start",
                                fontSize: "18px",
                                borderRadius: "5px",
                                fontWeight: "100",
                                padding: "12px",
                                marginBottom: "20px"
                            }}
                            >
                                <CardList style={{ paddingBottom: "5px" }} />
                                Instruments: {data["instruments-articles"]}
                            </h1>
                        </div>
                        <div>

                            <h1 style={{
                                backgroundColor: SITE_COLORS.lightMain,
                                color: "white",
                                textAlign: "start",
                                fontSize: "16px",
                                borderRadius: "5px",
                                fontWeight: "100",
                                padding: "12px",
                                marginBottom: "20px"
                            }}
                            >
                                <SpeakerFill style={{ paddingBottom: "5px" }} />
                                Recording & Studio: {data["recording-&-studio-articles"]}
                            </h1>
                        </div>
                        <div>
                            <h1 style={{
                                backgroundColor: SITE_COLORS.lightSecondary,
                                color: "white",
                                textAlign: "start",
                                fontSize: "18px",
                                borderRadius: "5px",
                                fontWeight: "100",
                                padding: "12px",
                                marginBottom: "20px"
                            }}
                            >
                                <FileEarmarkMusicFill style={{ paddingBottom: "5px" }} />
                                Composition: {data["composition-articles"]}
                            </h1>
                        </div>
                    </Col>
                </Row>
                <br />

                {/* EDITING PANELS */}
                <hr style={{ color: "white" }} />
                <Col style={{ color: "white", fontSize: "40px", }} className="p-0 m-0">
                    <HeaderPanel bgColor={SITE_COLORS.lightMain} width="w-100">
                        <h1 style={{
                            color: "white",
                            fontSize: "40px",
                            borderRadius: "5px",
                        }}
                        >
                            <Scissors color="white" style={{ fontSize: "45px", paddingBottom: "12px" }} />
                            Article Editing
                        </h1>
                    </HeaderPanel>
                </Col>
                <br />

                {/* ARTICLE EDITS */}
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} xl={12} xxl={12} style={{ backgroundColor: SITE_COLORS.alternateSecondary, color: "black", overFlow: "scroll" }} variant="light" className="px-2 py-4 ">
                        <Button
                            className="mb-2"
                            onClick={() => setFilterLatestArticle((prev) => !prev)}
                        >
                            <Filter style={{ transform: filterLatestArticle ? "rotate(0deg) " : "rotate(180deg)", marginBottom: "4px", fontSize: "20px" }} />
                            Filter: Date - {filterLatestArticle ? "Latest to Oldest" : "Oldest to Latest"}
                        </Button>

                        <Tab.Container id="list-group-tabs-articles" className="overflow-scroll" defaultActiveKey="#link1" style={{
                            height: "300px",
                            overflow: "hidden",
                            overflowY: "auto"
                        }} >
                            <Row>
                                <Col sm={4}>
                                    <div style={{
                                        display: "inline-block", width: "100%", height: "500px",
                                        overflow: "hidden",
                                        overflowY: "auto",
                                    }} >
                                        {/* HERE IS THE SECTION IN WHICH THE FILTER SORTS OBJECTS BY LATEST AND BY OLDEST ARTICLES */}
                                        <ListGroup>
                                            {

                                                // Sort by date (ascending)
                                                data.articles.sort(
                                                    (a, b) =>
                                                        filterLatestArticle ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
                                                )
                                                    .map((p, i) => (
                                                        <ListGroup.Item key={`article-tab-${i}`} eventKey={`#tab-link-${p._id}`} action href={`#link-${p._id}`} variant="dark" as={"div"} >
                                                            <Row className="justify-content-between" as={"div"} style={{ cursor: "pointer" }} onClick={() => {
                                                                scrollArticleToTop();
                                                            }}>
                                                                <Col lg={10} md={10} sm={10}>
                                                                    <h6>
                                                                        {p.title} {" "}
                                                                    </h6>
                                                                    <small>{p.date}</small>
                                                                </Col>
                                                                <br />
                                                                <Row>
                                                                    <Link to={`/edit/article/${p._id}`} style={{ textDecoration: "none" }}>
                                                                        <Col
                                                                            style={{
                                                                                backgroundColor: "rgb(129, 129, 129)",
                                                                                color: "white",
                                                                                zIndex: 99999,
                                                                                textAlign: "center",
                                                                            }}
                                                                            className="mt-2 w-100"
                                                                            as={"div"}
                                                                        >
                                                                            <PencilSquare style={{ fontSize: "20px", marginTop: "4px", marginBottom: "6px" }} alignmentBaseline="bottom" />
                                                                            {" "}- Edit Article
                                                                        </Col>
                                                                    </Link>
                                                                </Row>
                                                            </Row>
                                                        </ListGroup.Item>
                                                    ))
                                            }
                                        </ListGroup>
                                    </div>
                                </Col>
                                <Col sm={8}>
                                    <Tab.Content>
                                        <div style={{
                                            display: "inline-block",
                                            width: "100%",
                                            height: "500px",
                                            overflow: "hidden",
                                            overflowY: "auto",

                                            backgroundColor: "rgba(0,0,0,0.7)"
                                        }} >
                                            {
                                                data.articles.map((p, i) => (
                                                    <Tab.Pane key={`article-tab-data-${i}`} eventKey={`#tab-link-${p._id}`} style={{ color: "white", position: "relative" }} >
                                                        <div style={{ position: "absolute", width: "100%", height: "auto" }} ref={articleTopRef}>
                                                            <Card style={{ backgroundColor: "transparent", color: "white", height: "220px" }} className="w-auto">
                                                                <Image src={p.image_urls[0]} style={{ objectFit: "fill", width: "65%", height: "auto", marginLeft: "auto", marginRight: "auto", }} />
                                                                <Card.Body className="m-0">
                                                                    <Card.Text style={{ color: SITE_COLORS.lightMain, }}>
                                                                        {[p.category]} - {[p.subCategory]}
                                                                    </Card.Text>
                                                                    <Card.Title>{p.title}</Card.Title>
                                                                    <Card.Text style={{ color: "darkgrey" }}>
                                                                        {p.subTitle}
                                                                    </Card.Text>
                                                                    <hr />
                                                                    <Card.Text className="h-auto" >
                                                                        {p.body}
                                                                    </Card.Text>
                                                                    <hr />
                                                                    <Card.Text style={{ color: "grey" }}>
                                                                        Written by: {[p.author]}
                                                                    </Card.Text>
                                                                    <Card.Text style={{ color: "grey" }}>
                                                                        Published on: {[p.date]}
                                                                    </Card.Text>
                                                                    <Card.Text style={{ color: "grey" }}>
                                                                        Article _id: {[p._id]}
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </Card>
                                                        </div>
                                                    </Tab.Pane>
                                                ))
                                            }
                                        </div>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container >
                : isAuthenticatedUser === null
                    ? <LoadingPageElement
                        header={"Loading Dashboard"}
                        icon={<DatabaseGear fontSize={"120px"} />}
                        spinner
                    >
                        <hr />
                        <br />
                        <p>Loading in metric data! Please give us a moment!</p>
                    </LoadingPageElement >
                    : <PageNotFound />
            }

            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default Dashboard;
