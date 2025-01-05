import { useState, useEffect } from "react";
import "./css/Corkboard.css";
import axios from "axios";
import BoardPostModal from "./BoardPostModal";
import PostBoardCard from "./PostBoardCard";

import { Container, Pagination, Row, Col } from "react-bootstrap";

function Corkboard() {

  // SETS ALL POSTS & PAGINATION TABS TO STATE 
  const [posts, setPosts] = useState([{
    'total': 0,
    'pagination_total': 0,

  }]);


  // TOTAL POSTS DISPLAYED ON A SINGLE CORKBOARD 
  const AMOUNT_OF_BOARD_POSTS = 9;

  {/* ********************************************************************** */ }
  {/* GRABS POSTS FROM BACK-END*/ }
  {/* ********************************************************************** */ }
  useEffect(() => {



    // GRABS ALL POSTS FROM DB
    async function grabPosts() {
      axios
        .get("http://localhost:3005/api/loadPosts")
        .then((response) => {
          setPosts(response);

          // TOTAL AMOUNT OF POSTS IN DB
          const TOTAL_DB_POSTS = posts.length;

 


          // SETS AMOUNT OF PAGINATION # TABS
          for (let number = 1; number <= 5; number++) {
            postItems.push(
              <Pagination.Item key={number} active={number === active} onClick={(e) => loadPaginatedPosts(e.target.innerText)}>
                {number}
              </Pagination.Item >,
            );
          }

          // for (let number = 1; number <= 5; number++) {
          //   postItems.push(
          //     <Pagination.Item key={number} active={number === active} onClick={(e) => loadPaginatedPosts(e.target.innerText)}>
          //       {number}
          //     </Pagination.Item >,
          //   );
          // }
        })
        .catch((err) => console.log(err));
    }
    grabPosts();



  }, []);



  // PAGINATION

  // SETS PAGINATION INDEX 
  // const [index, setIndex] = useState({ currentIndex: 1 });
  const [index, setIndex] = useState(1);

  // HANDLES SETTING CURRENT PAGINATION INDEX WHEN USER CLICK
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  let active = 1;
  let postItems = [];


  /* 
   
  EXAMPLES:
  1 - 0-8 
  2 - 9-17
  3 - 18-26
  4 - 27-35
  5 - 36-44
  6 - 45-53
  7 - 53-61
   
  */





  function loadPaginatedPosts(currentIndex) {
    let activeIndex = parseInt(currentIndex, 10);
    let paginationStartIndex = (activeIndex * AMOUNT_OF_POSTS) - AMOUNT_OF_POSTS;
    let postsTempArry = [];
    let paginationTempVar;

    console.log(`Total posts in db ${TOTAL_DB_POSTS} `);
    console.log(`*********************************************** `);
    console.log(`Total posts display on a single corkboard panel: ${AMOUNT_OF_BOARD_POSTS} `);
    console.log(`*********************************************** `);
    console.log(`Amount of pagination tabs: ${TOTAL_PAGINATION_TABS} `);
    console.log(`*********************************************** `);
    console.log(`Indexed Posts Array START --> ${activeIndex}::: Indexed Posts Array END --> ${paginationStartIndex + 8} `)
    console.log(`*********************************************** `);

    // for (let i = 0; i < 9; i++) {
    //   paginationTempVar = paginationStartIndex;
    //   // postsTempArry.push(posts[paginationTempVar]);
    //   paginationTempVar++;
    //   console.log()
    // }
  }


  return (
    <div>
      <div>
        {/* ********************************************************************** */}
        {/* CORKBOARD HEADER */}
        {/* ********************************************************************** */}
        <Container className="shadow-md">
          <h4 className="display-4 corkBoard-title ">
            Community Board <br />
            <span className="lead">
              Search or post all your music needs here!
            </span>
          </h4>
        </Container>
        {/* ************************ */}
        {/* FILTER - SEARCH BUTTONS */}
        {/* ************************ */}
        <Container>
          <Row>
            <Col className="ml-auto"><Pagination>{postItems}</Pagination>
              {/* <Col><BoardPostModal /></Col> */}
            </Col>
          </Row>

          <br />
        </Container>
      </div>

      {/* ********************************************************************** */}
      {/* CORKBOARD + POST CARDS*/}
      {/* ********************************************************************** */}

      <div className="corkboard-card-container shadow-lg ">
        {posts.data?.map((p, i) => (
          <PostBoardCard
            key={`post-${p.title} - ${i}`}
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

        ))}
      </div>
    </div>
  );
}

export default Corkboard;
