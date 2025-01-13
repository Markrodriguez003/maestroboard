
// COMPONENTS
import { useState, useEffect } from "react";
import { Row, Col, Card, Button, Image, Carousel, Container, Spinner, Toast } from "react-bootstrap";
import HeaderPanel from "../ui/HeaderPanel";
import PostBoardCard from "../PostBoardCard";
import BoardPostModal from "../BoardPostModal";
import ArticlePostModal from "../ArticlePostModal";

// LIBRARIES
import axios from "axios";

// ASSETS
import { FileEarmarkPerson, FileEarmarkPlusFill, Tools, PinFill, PostcardFill, CardList, FilePerson } from "react-bootstrap-icons";
import { SITE_COLORS } from "../css/site";

// TEST IMAGES
import art15 from "../../assets/imgs/article-imgs/tracktion_biotek_3-rck6L30aXYxytjFU216BJV8Bx8VkSlq7.jpg";
import art16 from "../../assets/imgs/article-imgs/softube_console_1_mkiii_update-lAbiWXNWCaZT.1BkrSgJ8dOOTsjQYBih.jpg";
import art17 from "../../assets/imgs/article-imgs/hamstead_soundworks_redwing-1Z6d9c0kRf1n7lq.jlRWhmZyH579VAG6.jpg";
const postImages = [art15, art16, art17];
// 

// CSS
// import "../css/Login.css";

function Dashboard(props) {

    const [data, setData] = useState({
        articles: [],
        users: [],
        forum: [{ data: 0 }],
        posts: []
    })

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

        grabArticles();
        grabPosts();
        grabUserLength();

        // console.log(`ARTICLES::: ${JSON.stringify(data.articles)}`)

    }, []);

    return (
        <>
            <Container className="w-100 p-4 mt-5 mb-5" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
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
                                Profile Dashboard
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
                        <Row className="w-100 m-0 p-0 mb-3">
                            <BoardPostModal />

                        </Row>
                        <Row className="w-100 m-0 p-0 mb-2 btn-info">
                            <ArticlePostModal />
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
                            // display: "inline-block",
                            padding: "15px",

                        }}
                        >
                            <CardList style={{ paddingBottom: "5px" }} />
                            Latest Corkboard Posts:
                        </h1>
                        <Col className="mx-auto w-100 " >
                            <Carousel className="p-0" >
                                {
                                    data.posts.map((p, i) => (
                                        <Carousel.Item key={`dashboard-carousel-article-${i}`}>
                                            <PostBoardCard
                                                key={`dashboard-post-${p.title} - ${i}-${p._id}`}
                                                title={p.title}
                                                email={p.email}
                                                username={p.username}
                                                price={p.price}
                                                zip={p.zip}
                                                trade={p.trade}
                                                type={p.type}
                                                equipment={p.equipment}
                                                date={p.date}
                                                phone={p.phone}
                                                body={p.body}
                                                images={p.images}
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
                        <Col lg={7} className="mx-auto w-100" >
                            <Carousel className="p-0" >
                                {
                                    data.articles.map((p, i) => (
                                        <Carousel.Item key={`dashboard-carousel-article-${i}`}>
                                            <Card style={{ backgroundColor: "rgba(0,0,0,0.7)", color: "white", height: "500px" }} className="w-100">
                                                <Card.Img variant="top" src={art15} />
                                                <Card.Body>
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
                {/* <Row className="gap-4">
                <Col style={{ color: "white", fontSize: "40px", backgroundColor: "red" }}>1 of 4</Col>

            </Row> */}
                <br />
            </Container >

            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default Dashboard;
