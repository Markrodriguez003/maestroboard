
// COMPONENTS
import { useState, useEffect, useRef } from "react";
import { Row, Col, Card, Button, Image, Carousel, Tab, Stack, ListGroup, Container, Spinner } from "react-bootstrap";
import HeaderPanel from "../ui/HeaderPanel";
import PostBoardCard from "../PostBoardCard";
import BoardPostModal from "../BoardPostModal";
import ArticlePostModal from "../ArticlePostModal";
import { Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import LoadingPageElement from "../ui/LoadingPageElement";
import LatestItemDisplay from "../LatestItemDisplay";

// DATA
import article_typesJSON from "../../data/articleTypes.json";

// LIBRARIES
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// UTIL
import { dateTransform } from "../../utils/dateTransform";

// REGISTERING THE TYPE OF CHARTS & CHART ELEMENTS NEEDED
ChartJS.register(ArcElement, Tooltip, Legend);

// ASSETS
import { FileEarmarkPerson, SpeakerFill, FileEarmarkMusicFill, DatabaseGear, Tools, PinFill, PencilSquare, PostcardFill, CardList, Scissors, Newspaper, Filter } from "react-bootstrap-icons";
import { SITE_COLORS } from "../css/site";

// CSS
import "../css/Dashboard.css";

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
    const postTopRef = useRef(null);

    // FILTER BUTTON STATE
    const [filterLatestArticle, setFilterLatestArticle] = useState(true);
    const [filterLatestPost, setFilterLatestPost] = useState(true);

    // SCROLLS TO TOP OF ARTICLE ONCE ARTICLE CHANGES
    function scrollArticleToTop() {
        if (articleTopRef.current) {
            articleTopRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // SCROLLS TO TOP OF POST ONCE POST CHANGES
    function scrollPostToTop() {
        if (postTopRef.current) {
            postTopRef.current.scrollIntoView({ behavior: 'smooth' });
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

            if (!token || token === null) {
                return;
            }

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Data": "Custom-Data"
                }
            }

            await axios
                .get("http://localhost:3005/api/auth", config)
                .then((response) => {
                    setIsAuthenticatedUser(() => true);
                })
                .catch((err) => {
                    setIsAuthenticatedUser(() => false);
                    console.log(`Error verfiying user! --> ${err}`)

                });
        }

        authenticateUser();
    }, [])

    // STATE THAT WILL HOLD ARTICLE & POST DATA
    const [data, setData] = useState({
        articles: [],
        users: [],
        selectedArticle: {},
        selectedPosts: {},
        forum: [{ data: 0 }],
        posts: [],
        latestPosts: [],
        latestArticles: [],
        sellingPosts: 0,
        buyingPosts: 0
    })

    // GRABS ARTICLE TYPES TO POPULATE SELECT OPTION IN ARTICLE CREATION SELECTION 
    const article_types = article_typesJSON[0].article_types;

    // DATA FOR DOUGHNUTS
    // CORKBOARD POSTS
    const postsDataChart = {
        labels: ['Selling Gear', 'Buying Gear', 'Advertisements', 'Community'],
        datasets: [
            {
                label: "# Posts Types",
                data: [data.sellingPosts, data.buyingPosts, data.advertisementPosts, data.communityPosts],
                backgroundColor: [
                    SITE_COLORS.lightMain,
                    SITE_COLORS.lightSecondary,
                    SITE_COLORS.alternateMain,
                    SITE_COLORS.alternateSecondary
                ],
                borderColor: [
                    SITE_COLORS.main,
                    SITE_COLORS.secondary,
                    SITE_COLORS.alternateMain,
                    SITE_COLORS.alternateSecondary
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


    // AMOUNT OF LATEST ARTICLES / POSTS REQUESTED
    const REQUESTED_ELEMENTS = 5;

    useEffect(() => {

        // GRABS ALL ARTICLES BASE INFO (_id, title, subTitle,) FROM DB
        async function fetchArticles() {
            await axios
                .get("http://localhost:3005/api/articles/fetch-all/base-info")
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

        // GRABS LATEST ARTICLES (5) ARTICLES FROM DB
        async function fetchLatestArticles() {
            await axios
                .get(`http://localhost:3005/api/articles/fetch-all/limit/${REQUESTED_ELEMENTS}`)
                .then((response) => {
                    setData((prev) => (
                        {
                            ...prev,
                            latestArticles: response.data
                        }
                    ))
                })
                .catch((err) => console.log(err));
        }

        // GRABS ALL COMMUNITY POSTS BASE INFO FROM DB
        async function fetchPosts() {
            await axios
                .get("http://localhost:3005/api/posts/fetch-all/base-info")
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

        // GRABS LATEST ARTICLES (5) ARTICLES FROM DB
        async function fetchLatestPosts() {
            await axios
                .get(`http://localhost:3005/api/posts/fetch-all/limit/${REQUESTED_ELEMENTS}`)
                .then((response) => {
                    setData((prev) => (
                        {
                            ...prev,
                            latestPosts: response.data
                        }
                    ))
                })
                .catch((err) => console.log(err));
        }

        // GRABS ALL COMMUNITY POSTS WITH THE STYLE TAG "SELLING" FROM DB
        async function fetchPostsType(type) {
            let searchType = type.toString().toLowerCase()
            await axios
                .get(`http://localhost:3005/api/posts/fetch-all/type/${searchType}`)
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
        async function fetchArticleType(type) {
            let searchType = type.toString().toLowerCase();

            await axios
                .get(`http://localhost:3005/api/articles/fetch-all/category/${searchType}`)
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
        async function fetchUserLength() {
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
        fetchPosts();
        fetchArticles();
        fetchUserLength();
        fetchPostsType("selling");
        fetchPostsType("buying");
        fetchPostsType("advertisement");
        fetchPostsType("community");
        fetchLatestPosts();
        fetchLatestArticles();

        // Loops through each article type to call function to grab lengths 
        for (let i = 0; i < article_types.length; i++) {
            fetchArticleType(article_types[i]);
        }
    }, []);


    // WHEN USER CLICKS ON INDIVIDUAL ARTICLE THIS FUNCTION WILL CALL UP THAT ARTICLE TO PRESENT 
    async function fetchIndividualArticle(id) {
        setData((prev) => (
            {
                ...prev,
                selectedArticle: {}
            }
        ))

        await axios
            .get(`http://localhost:3005/api/articles/id/${id}`)
            .then((response) => {
                setData((prev) => (
                    {
                        ...prev,
                        selectedArticle: response.data.article[0]
                    }
                ))

            })
            .catch((err) => console.log(err));
    }


    // WHEN USER CLICKS ON INDIVIDUAL POST THIS FUNCTION WILL CALL UP THAT POST TO PRESENT 
    async function fetchIndividualPost(id) {
        setData((prev) => (
            {
                ...prev,
                selectedPosts: {}
            }
        ))

        await axios
            .get(`http://localhost:3005/api/posts/id/${id}`)
            .then((response) => {
                setData((prev) => (
                    {
                        ...prev,
                        selectedPosts: response.data.post[0]
                    }
                ))

            })
            .catch((err) => console.log(err));

    }

    return (
        <>
            {isAuthenticatedUser ? <Container className="w-100 p-4 mt-5 mb-5" style={{ backgroundColor: "black" }}>
                {/* MAIN PROFILE HEADER */}
                <Row className="w-100">
                    <HeaderPanel bgColor={SITE_COLORS.main} width="w-100">
                        <h1 style={{
                            color: "white",
                            fontSize: "50px",
                        }}
                        >
                            <Tools color="white" className="dashboard-header-panel-icon" />
                            Admin Dashboard
                        </h1>
                    </HeaderPanel>
                </Row>
                <br />
                {/* MAIN PROFILE DATA TABS */}
                <Row className="gap-2">
                    <Col style={{ color: "white", fontSize: "40px", }} className="m-0 p-0 gap-5" lg={2} >
                        <Row className="w-100 m-0 p-0 mb-2 ">
                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.lightMain,
                            }}
                            >
                                <PinFill style={{ paddingBottom: "5px" }} />
                                Corkboard Posts: {data.posts.length}
                            </h1>

                        </Row>

                        <Row className="w-100 m-0 p-0 mb-2">
                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.secondary,
                            }}
                            >
                                <FileEarmarkPerson style={{ paddingBottom: "5px" }} />Users : {data.users}
                            </h1>

                        </Row>
                        <Row className="w-100 m-0 p-0 mb-2">
                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.alternateMain,
                            }}
                            >
                                <PostcardFill style={{ paddingBottom: "5px" }} />
                                Articles : {data.articles.length}
                            </h1>

                        </Row>
                        <Row className="w-100 m-0 p-0 mb-2">
                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.alternateSecondary,
                            }}
                            >
                                <CardList style={{ paddingBottom: "5px" }} />
                                Forum Posts: 12,024
                            </h1>

                        </Row>
                        <hr />
                        <Row className="w-100 m-0 p-0 mb-3 ">
                            <BoardPostModal />
                        </Row>
                        <Row className="w-100 m-0 p-0 mb-2 btn-info">
                            <ArticlePostModal>
                                <Button size="sm" className="text-light w-100 m-0"  >
                                    Create an Article! </Button>
                            </ArticlePostModal >
                        </Row>
                    </Col>

                    {/* ************************************************************************************************ */}
                    {/* LATEST ELEMENTS CAROUSEL */}
                    {/* ************************************************************************************************ */}

                    {/* ************************************************************************************************ */}
                    {/* LATEST POST PANEL */}
                    {/* ************************************************************************************************ */}

                    <Col xl={4} lg={4} md={12} sm={12} xs={12}>
                        <LatestItemDisplay
                            fetchType="posts"
                            fetchCount="5"
                            bgColor={SITE_COLORS.lightMain}
                            color="white"
                            header="Latest Posts:"
                            headerIcon={<PostcardFill style={{ paddingBottom: "5px" }} />}
                            body={["title", "type", "username", "date", "price"]}

                        />

                    </Col>


                    {/* ************************************************************************************************ */}
                    {/* LATEST ARTICLES PANEL */}
                    {/* ************************************************************************************************ */}
                    <Col xl={5} lg={5} md={12} sm={12} xs={12}>
                        <LatestItemDisplay
                            fetchType="articles"
                            fetchCount="5"
                            bgColor={SITE_COLORS.alternateSecondary}
                            color="white"
                            header="Latest Aricles:"
                            headerIcon={<PostcardFill style={{ paddingBottom: "5px" }} />}
                            body={["subTitle", "author", "date", "category", "subCategory"]}
                        />
                    </Col>
                </Row>


                {/* ******************************************************************* */}
                {/* BOTTOM HALF */}
                {/* ******************************************************************* */}
                <br />
                <Col style={{ color: "white", fontSize: "40px", }} className="p-0 m-0">
                    <HeaderPanel bgColor={SITE_COLORS.secondary} width="w-100">
                        <h1 className="dashboard-header-panel"
                        >
                            <Tools color="white" className="dashboard-header-panel-icon" />
                            Post & Article Metrics
                        </h1>
                    </HeaderPanel>
                </Col>

                {/* POST INFORMATION LEGEND PANELS */}
                <Row className="p-3 gap-2 justify-content-center">
                    <Col className="p-0 m-0" lg={3} >
                        <h5 style={{ color: "white" }}>Post Data Infomation:</h5>
                        <h1 className="legend-panel" style={{
                            backgroundColor: SITE_COLORS.lightMain,
                        }}
                        >
                            <PinFill style={{ paddingBottom: "5px" }} />
                            Selling posts: {data.sellingPosts}
                        </h1>
                        <div>
                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.secondary,
                            }}
                            >
                                <FileEarmarkPerson style={{ paddingBottom: "5px" }} />Buying Posts: {data.buyingPosts}
                            </h1>

                        </div>
                        <h1 className="legend-panel" style={{
                            backgroundColor: SITE_COLORS.alternateMain,
                        }}
                        >
                            <PinFill style={{ paddingBottom: "5px" }} />
                            Advertisement posts: {data.advertisementPosts}
                        </h1>
                        <div>
                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.alternateSecondary,
                            }}
                            >
                                <FileEarmarkPerson style={{ paddingBottom: "5px" }} />Community Posts: {data.communityPosts}
                            </h1>
                        </div>
                    </Col>

                    {/* POST DOUGHNUT */}
                    <Col className="m-0 p-0" lg={6}>
                        <h5 style={{ color: "white" }} className="text-center">Community Board types:</h5>
                        <Doughnut
                            data={postsDataChart}
                            width={"150px"}
                            height={"150px"}
                            options={options}
                            style={{ transform: "scale(1)" }} className="w-100 m-0 p-0 mx-auto" />
                    </Col>

                </Row>
                <Row className="justify-content-center">

                    <Col className="" lg={3} >
                        <h5 style={{ color: "white" }}>Article Infomation:</h5>
                        <h1 style={{
                            backgroundColor: SITE_COLORS.lightMain,

                        }}
                            className="legend-panel"
                        >
                            <PinFill style={{ paddingBottom: "5px" }} />
                            General: {data["general-articles"]}
                        </h1>


                        <div>
                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.main,
                            }}
                            >
                                <FileEarmarkPerson style={{ paddingBottom: "5px" }} />News: {data["news-articles"]}
                            </h1>
                        </div>
                        <div>
                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.secondary,
                            }}
                            >
                                <FileEarmarkPerson style={{ paddingBottom: "5px" }} />Events: {data["events-articles"]}
                            </h1>

                        </div>
                        <div>
                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.alternateMain,
                            }}
                            >
                                <PostcardFill style={{ paddingBottom: "5px" }} />
                                Announcements: {data["announcements-articles"]}
                            </h1>
                        </div>
                        <div>
                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.alternateSecondary,

                            }}
                            >
                                <CardList style={{ paddingBottom: "5px" }} />
                                Gear Review: {data["gear-review-articles"]}
                            </h1>
                        </div>
                        <div>
                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.alternateSecondary,

                            }}
                            >
                                <CardList style={{ paddingBottom: "5px" }} />
                                Electronic Music: {data["electronic-music-articles"]}
                            </h1>
                        </div>
                        <div>
                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.secondary,

                            }}
                            >
                                <CardList style={{ paddingBottom: "5px" }} />
                                Instruments: {data["instruments-articles"]}
                            </h1>
                        </div>
                        <div>

                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.lightMain,

                            }}
                            >
                                <SpeakerFill style={{ paddingBottom: "5px" }} />
                                Recording & Studio: {data["recording-&-studio-articles"]}
                            </h1>
                        </div>
                        <div>
                            <h1 className="legend-panel" style={{
                                backgroundColor: SITE_COLORS.lightSecondary,

                            }}
                            >
                                <FileEarmarkMusicFill style={{ paddingBottom: "5px" }} />
                                Composition: {data["composition-articles"]}
                            </h1>
                        </div>
                    </Col>
                    <Col style={{ marginLeft: "auto", marginRight: "auto" }} className="m-0 p-0" lg={6}>
                        <h5 style={{ color: "white" }} className="text-start">Article types:</h5>

                        <Doughnut
                            data={articlesDataChart}
                            width={"250px"}
                            height={"250px"}
                            options={options}
                            style={{ transform: "scale(1)" }} className="w-100 m-0 p-0 mx-auto" />
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
                                <Col sm={12} xs={12} md={4} lg={4}>
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
                                                                fetchIndividualArticle(p._id)
                                                            }}>
                                                                <Col lg={10} md={10} sm={10}>
                                                                    <h6>
                                                                        {p.title} {" "}
                                                                    </h6>
                                                                    <small>{dateTransform(p.date, false)}</small>
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
                                                                <br />
                                                                <br />
                                                                <Row>
                                                                    <Link to={`/article/${p._id}`} style={{ textDecoration: "none" }}>
                                                                        <Col
                                                                            style={{
                                                                                backgroundColor: SITE_COLORS.lightMain,
                                                                                color: "white",
                                                                                zIndex: 99999,
                                                                                textAlign: "center",
                                                                            }}
                                                                            className="mt-2 w-100"
                                                                            as={"div"}
                                                                        >
                                                                            <Newspaper style={{ fontSize: "20px", marginTop: "4px", marginBottom: "6px" }} alignmentBaseline="bottom" />
                                                                            {" "}- Go to Article
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
                                <Col sm={12} md={8} lg={8}>
                                    <Tab.Content>
                                        <div className="show-side-panel" >
                                            {
                                                Object.keys(data.selectedArticle).length === 0 ?
                                                    <div className="text-center mt-5 pt-5">
                                                        <Spinner animation="border" role="status" color="white" variant="primary" style={{ width: "100px", height: "100px", fontSize: "50px" }} className="">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                    </div>
                                                    :
                                                    <div style={{ width: "100%", height: "auto" }} ref={articleTopRef}>
                                                        <Card style={{ backgroundColor: "transparent", color: "white", height: "220px" }} className="w-auto">
                                                            <Image src={data.selectedArticle.image_urls}
                                                                className="w-50 h-100 object-fit-fill mx-auto" />
                                                            <Card.Body className="m-0">
                                                                <Card.Text style={{ color: SITE_COLORS.lightMain, }}>
                                                                    {[data.selectedArticle.category]} - {[data.selectedArticle.subCategory]}
                                                                </Card.Text>
                                                                <Card.Title>{data.selectedArticle.title}</Card.Title>
                                                                <Card.Text style={{ color: "darkgrey" }}>
                                                                    {data.selectedArticle.subTitle}
                                                                </Card.Text>
                                                                <hr />
                                                                <Card.Text className="h-auto" >
                                                                    {data.selectedArticle.body}

                                                                </Card.Text>
                                                                <hr />
                                                                <Card.Text style={{ color: "grey" }}>
                                                                    Written by: {data.selectedArticle.author}
                                                                </Card.Text>
                                                                <Card.Text style={{ color: "grey" }}>
                                                                    Published on: {dateTransform(data.selectedArticle.date, false)}
                                                                </Card.Text>
                                                                <Card.Text style={{ color: "grey" }}>
                                                                    Article _id: {data.selectedArticle._id}
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
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

                {/* POST EDITNG */}
                <hr style={{ color: "white" }} />
                <Col style={{ color: "white", fontSize: "40px", }} className="p-0 m-0">
                    <HeaderPanel bgColor={SITE_COLORS.alternateSecondary} width="w-100">
                        <h1 style={{
                            color: "white",
                            fontSize: "40px",
                            borderRadius: "5px",
                        }}
                        >
                            <PinFill color="white" style={{ fontSize: "45px", paddingBottom: "12px" }} />
                            Corkboard Post Editing
                        </h1>
                    </HeaderPanel>
                </Col>
                <br />
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} xl={12} xxl={12} style={{ backgroundColor: SITE_COLORS.lightMain, color: "black", overFlow: "scroll" }} variant="light" className="px-2 py-4 ">
                        <Tab.Container id="list-group-tabs-articles" className="overflow-scroll"
                            style={{
                                height: "300px",
                                overflow: "hidden",
                                overflowY: "auto"
                            }} >
                            <Row>
                                <Col sm={12} md={8} lg={8}>
                                    <Tab.Content>
                                        <div className="show-side-panel" >
                                            {
                                                Object.keys(data.selectedPosts).length === 0 ?
                                                    <div className="text-center mt-5 pt-5">
                                                        <Spinner animation="border" role="status" color="white" variant="primary" style={{ width: "100px", height: "100px", fontSize: "50px" }} className="">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                    </div>
                                                    :
                                                    <div style={{ width: "100%", height: "auto" }} ref={postTopRef}>
                                                        <Card style={{ backgroundColor: "transparent", color: "white", height: "220px" }} className="w-auto">
                                                            <Image src={data.selectedPosts.image_urls[0]}
                                                                className="w-50 h-100 object-fit-cover mx-auto" />
                                                            <Card.Body className="m-0">
                                                                <Card.Text style={{ color: SITE_COLORS.lightMain, }}>
                                                                    {[data.selectedPosts.type]} - {[data.selectedPosts.subType]}
                                                                </Card.Text>
                                                                <Card.Title>{data.selectedPosts.title}</Card.Title>

                                                                <hr />
                                                                <Card.Text className="h-auto" >
                                                                    {data.selectedPosts.body}
                                                                </Card.Text>
                                                                <hr />
                                                                <Card.Text style={{ color: "darkgrey" }}>
                                                                    <strong>Username:</strong> {data.selectedPosts.username}
                                                                </Card.Text>
                                                                <Card.Text style={{ color: "darkgrey" }}>
                                                                    <strong>Email:</strong> {data.selectedPosts.email}
                                                                </Card.Text>
                                                                <Card.Text style={{ color: "grey" }}>
                                                                    <strong>Posted by:</strong> {data.selectedPosts.username}
                                                                </Card.Text>
                                                                <Card.Text style={{ color: "grey" }}>
                                                                    <strong>Published on: </strong>{
                                                                        data.selectedPosts.date.slice(0, 4) + data.selectedPosts.date.slice(4, 8) + data.selectedPosts.date.slice(8, 10)
                                                                    }
                                                                </Card.Text>
                                                                <Card.Text style={{ color: "grey" }}>
                                                                    <strong>Post _id: </strong>{data.selectedPosts._id}
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                            }
                                        </div>
                                    </Tab.Content>
                                </Col>
                                <Col sm={12} xs={12} md={4} lg={4}>
                                    <Button
                                        className="mb-2"
                                        onClick={() => setFilterLatestPost((prev) => !prev)}
                                    >
                                        <Filter style={{ transform: filterLatestPost ? "rotate(0deg) " : "rotate(180deg)", marginBottom: "4px", fontSize: "20px" }} />
                                        Filter: Date - {filterLatestPost ? "Latest to Oldest" : "Oldest to Latest"}
                                    </Button>
                                    <div style={{
                                        display: "inline-block", width: "100%", height: "500px",
                                        overflow: "hidden",
                                        overflowY: "auto",
                                    }} >
                                        {/* HERE IS THE SECTION IN WHICH THE FILTER SORTS OBJECTS BY LATEST AND BY OLDEST ARTICLES */}
                                        <ListGroup>
                                            {

                                                // Sort by date (ascending)
                                                data.posts.sort(
                                                    (a, b) =>
                                                        filterLatestPost ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
                                                )
                                                    .map((p, i) => (
                                                        <ListGroup.Item key={`post-tab-${i}`} eventKey={`#tab-link-${p._id}`} action href={`#link-${p._id}`} variant="dark" as={"div"} >
                                                            <Row className="justify-content-between" as={"div"} style={{ cursor: "pointer" }} onClick={() => {
                                                                scrollPostToTop();
                                                                fetchIndividualPost(p._id)
                                                            }}>
                                                                <Col lg={10} md={10} sm={10}>
                                                                    <h6>
                                                                        {p.title} {" "}
                                                                    </h6>
                                                                    <h6>
                                                                        {p.username} {" "}
                                                                    </h6>
                                                                    <h6>
                                                                        {p.email} {" "}
                                                                    </h6>
                                                                    <small>{
                                                                        p.date.slice(0, 4) +
                                                                        p.date.slice(4, 8) +
                                                                        p.date.slice(8, 10)

                                                                    }</small>
                                                                </Col>
                                                                <br />
                                                                <Row>
                                                                    <Link to={`/edit/post/${p._id}`} style={{ textDecoration: "none" }}>

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
                                                                            {" "}- Edit Post
                                                                        </Col>
                                                                    </Link>
                                                                </Row>
                                                                <Row>
                                                                    <Link to={`/post/${p._id}`} style={{ textDecoration: "none" }}>
                                                                        <Col
                                                                            style={{
                                                                                backgroundColor: SITE_COLORS.lightSecondary,
                                                                                color: "white",
                                                                                zIndex: 99999,
                                                                                textAlign: "center",
                                                                            }}
                                                                            className="mt-2 w-100"
                                                                            as={"div"}
                                                                        >
                                                                            <PostcardFill style={{ fontSize: "20px", marginTop: "4px", marginBottom: "6px" }} alignmentBaseline="bottom" />
                                                                            {" "}- Go to Post
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


