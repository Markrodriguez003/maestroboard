// REACT
import { useState, useEffect } from "react";

// COMPONENTS
import { Row, Col, Card, Button, Image, Carousel, Tab, Stack, ListGroup, Container, Spinner } from "react-bootstrap";
import LoadingSpinner from "./ui/LoadingSpinner";

// UTILS
import axios from "axios";
import { Link } from "react-router";
import { dateTransform } from "../utils/dateTransform";
import { capitalizeFirstWord } from "../utils/capitalizeFirstWord";

// THEME & DESIGN
import { SITE_COLORS } from "./css/site";


/*----------------------------------------------------------------------------
|   ⚙️ Use: Display panel that retreives the latest element (articles/posts,  
|       ect) by count.
|       
|   🔧 Todo: Add more customization for design and details insertion
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/


function LatestItemDisplay(props) {

    const { fetchType, fetchCount, header, headerIcon, bgColor, color, body } = props;


    // GETTER/SETTER FOR LATEST TYPE OF ELEMENT 
    const [latestElements, setLatestElements] = useState({ data: null, result: null })

    useEffect(() => {

        // GRABS LATEST ELEMENT BY FETCH COUNTS FROM DB
        async function fetchLatestElements() {
            await axios
                .get(`http://localhost:3005/api/${fetchType.toLowerCase()}/fetch-all/limit/${fetchCount}`)
                .then((response) => {
                    setLatestElements({ data: response.data, result: true })
                })
                .catch((err) =>
                    setLatestElements({ data: null, result: false }),
                    console.log(err));
        }


        fetchLatestElements();


    }, [fetchCount, fetchType]);

    return (
        <>

            {
                latestElements.result
                    ?
                    <>
                        <Col direction="vertical" className="justify-content-center mx-auto w-100 shadow-lg">

                            <div className="mx-start">

                                <h1 style={{
                                    color: color,
                                    textAlign: "start",
                                    fontSize: "24px",
                                    borderRadius: "5px",
                                    fontWeight: "100",
                                    backgroundColor: bgColor,
                                    padding: "15px",
                                }}

                                    className="mr-auto"
                                >
                                    {headerIcon}
                                    {header}
                                </h1 >
                            </div>
                            <Col>
                                <Carousel className="p-0 w-100" indicators={false} >

                                    {
                                        latestElements.data.map((p, i) => (
                                            <Carousel.Item key={`dashboard-carousel-article-${i}`}>
                                                <Card style={{ backgroundColor: bgColor, color: color, height: "500px" }} className="w-100 text-center">
                                                    <Card.Img variant="top" src={p.image_urls[0]} className="w-100 h-50 mx-auto object-fit-cover" />
                                                    <Card.Body>
                                                        <Card.Title>{p.title}</Card.Title>
                                                        <hr />
                                                        <Card.Text style={{ color: color, fontSize: "12px" }}>

                                                            {body.map((field, index) =>

                                                            (
                                                                <div key={`${field} - ${index}`} style={{ fontSize: "12.5px" }}>
                                                                    <strong>
                                                                        {capitalizeFirstWord(field)}
                                                                    </strong> : {p[field]}
                                                                </div>
                                                            )

                                                            )}









                                                            {/* Username: {p.title}  {" - "}
                                                            Date: {dateTransform(p.date)}
                                                            <br />
                                                            Post-Type: {p.type}
                                                            <br />
                                                            Post-Sub-Type: {p.subType}
                                                            <br />
                                                            Price: ${p.price} */}
                                                        </Card.Text>
                                                        <Link to={`/post/${p._id}`} rel="noopener noreferrer" target="_blank">
                                                            <Button variant="primary">Go to post</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Carousel.Item>
                                        ))
                                    }
                                </Carousel>
                            </Col>
                        </Col>
                    </>
                    : latestElements.result === null
                        ?

                        <Container style={{ backgrouncColor: { bgColor } }}>
                            <LoadingSpinner title={`Loading ${fetchType}`} />

                        </Container>
                        : <h1>FAILURE!</h1>
            }




        </>
    )

}

export default LatestItemDisplay;