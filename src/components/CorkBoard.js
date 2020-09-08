import React, { useState, useEffect } from "react";
import "./css/Corkboard.css";
import Header from "./Header";
import Footer from "./Footer";
import corkboardImg from "./imgs/User-Corkboard.jpg";
import PostBoardCard from "./PostBoardCard";
import BoardPostModal from "./BoardPostModal";
// import CardReplyModal from "./CardReplyModal";
import {
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  Container,
  Carousel
} from "react-bootstrap";
function Corkboard() {

  // CAROUSEL STATE FUNCTION

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



  const [testPost, setTestPost] = useState([{}]);


  useEffect(() => {
    async function grabPosts() {
      let response = await fetch("/api/loadPosts");
      let postData = await response.json();
      // console.log("Post Data: " + JSON.stringify(postData)); // GIVES ME ALL & INDIVIDUAL DB POSTS DATA !! 
      setTestPost(postData);
    }
    grabPosts();
  }, []);

  // console.log("Posts[0] ===>" + testPost[0].title );
  // console.log("Posts[0] ===>" + JSON.stringify(testPost[0]) );





  // #region
  // ******************************************** 
  // OLD CODE *********************************** 
  // ******************************************** 

  // const [post, setPost] = useState(null);
  // const [testPost, setTestPost] = useState(null);

  // useEffect (async () => {
  //   let response = await fetch("/api/loadPosts");
  //   let postData = await response.json();
  //   let thePost = postData[0];
  //   setTestPost(thePost);
  // }, [])

  // async function to fetch posts
  // async function fetchPosts() {
  //   // await response of fetch call
  //   let response = await fetch("/api/loadPosts");
  //   // only proceed once promise is resolved
  //   let data = await response.json();
  //   // only proceed once second promise is resolved
  //   return data;
  // }

  // // trigger async function
  // // log response or catch error of fetch promise
  // let fposts;
  // fetchPosts()
  //   .then(data =>{ 
  //     fposts = JSON.stringify(data);
  //     console.log("1st:" + JSON.stringify(fposts[0].title));
  //   })
  //   .catch(reason => console.log(reason.message))

  // ******************************************** 
  // OLD CODE *********************************** 
  // ******************************************** 
  //#endregion


  return (

    <div >
      <Header />
      <div>
        {/* ********************************************************************** */}
        {/* CORKBOARD HEADER */}
        {/* ********************************************************************** */}
        <h4 className="display-4 corkBoard-title">Community Board <span className="lead"> - Search or post all your music needs here!</span></h4>

        {/* ************************ */}
        {/* FILTER - SEARCH BUTTONS */}
        {/* ************************ */}
        <Container>
          <div className="filter-btn-container">
            <Row>
              <Col xs sm md lg={2}>
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Filter:
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Selling Gear
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Buying Gear</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      {" "}
                      Looking To Trade
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-4">
                      Looking for Gigs
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-5">
                      Looking for Bandmate
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-6">
                      Looking for a Jam
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-7">
                      Looking for Music Teacher
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-8">
                      Looking for Promoter / Manager
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col xs sm md lg={2}>
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Instrument:
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-9">
                      Electric Guitar
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-10">Bass</Dropdown.Item>
                    <Dropdown.Item href="#/action-11">Drums</Dropdown.Item>
                    <Dropdown.Item href="#/action-12">Percussion</Dropdown.Item>
                    <Dropdown.Item href="#/action-13">Brass</Dropdown.Item>
                    <Dropdown.Item href="#/action-14">Woodwind</Dropdown.Item>
                    <Dropdown.Item href="#/action-15">
                      Microphones
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-16">
                      Recording Studio Equipment
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col xs sm md lg={2}>
                <Form.Group>
                  <Form.Control type="text" placeholder="Enter Zipcode" />
                </Form.Group>
              </Col>

              <Col xs sm md lg={3}>
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Miles from Zipcode:
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-10">5 Miles</Dropdown.Item>
                    <Dropdown.Item href="#/action-11">15 Miles</Dropdown.Item>
                    <Dropdown.Item href="#/action-12">35 Miles</Dropdown.Item>
                    <Dropdown.Item href="#/action-13">80 Miles</Dropdown.Item>
                    <Dropdown.Item href="#/action-15">120 Miles</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs sm md lg={1}>
                {" "}
                <Button variant="info">Search!</Button>{" "}
              </Col>
              <Col xs sm md lg={2}>
                {" "}
                <BoardPostModal />
              </Col>

            </Row>
          </div>
        </Container>
      </div>

      {/* ********************************************************************** */}
      {/* CORKBOARD */}
      {/* ********************************************************************** */}


      {/* ********************************************************************** */}
      {/* CORKBOARD CARDS */}
      {/* ********************************************************************** */}
      {/* <PostBoardCard /> */}
      <img src={corkboardImg} alt="corkboard image" className="board" ></img>
      <Container className="corkboard-card-container">


        {/* <Row className="mb-3">
            {testPost.map((p, i) =>
              (<Col xs={12} sm={12} md lg={3} className="individualCard">
                <PostBoardCard title={p.title} email={p.email}
                  username={p.username} price={p.price} zip={p.zip} trade={p.trade}
                  type={p.type} equipment={p.equipment} date={p.date} phone={p.phone}
                  body={p.body} /></Col>))}
          </Row> */}



        {/* <Carousel activeIndex={index} onSelect={handleSelect} autoPlay={null} className="carousel-container" > */}
{/* 
        <Carousel.Item> */}
            <Row className="mb-3 p-4 mx-auto text-center">
              {testPost.map((p, i) =>
                (<Col xs={12} sm={12} md={2} lg={2} className="individualCard">
                  <PostBoardCard key={0} title={p.title} email={p.email}
                    username={p.username} price={p.price} zip={p.zip} trade={p.trade}
                    type={p.type} equipment={p.equipment} date={p.date} phone={p.phone}
                    body={p.body} /></Col>))}
            </Row>
          {/* </Carousel.Item> */}

   


        {/* </Carousel> */}




      </Container>
      <Footer />
    </div>
  );
}

export default Corkboard;
