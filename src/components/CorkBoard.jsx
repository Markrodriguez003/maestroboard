import { useState, useEffect } from "react";
import "./css/Corkboard.css";
import axios from "axios";
import BoardPostModal from "./BoardPostModal";
import PostBoardCard from "./PostBoardCard";

import { Container, Pagination, Row, Col } from "react-bootstrap";

function Corkboard() {

  // SETS ALL POSTS from DB, total posts, & PAGINATION TABS TO STATE 
  const [posts, setPosts] = useState({
    totalPosts: 0,
    allEntries: [],
    paginationEntries: [],
    paginationTotal: 0,
    paginationIndex: 1,
  });

  // TOTAL POSTS ALLOWS ON 1 CORKBOARD PANEL
  const CORKBOARD_TOTAL_POSTS_ALLOWED = 9;

  const POST_GROUP = [];
  let POST_GROUP_BEGIN;
  let POST_GROUP_END;

  // SETS PAGINATION INDEX 
  const [index, setIndex] = useState(1);

  // HANDLES SETTING CURRENT PAGINATION INDEX WHEN USER CLICK
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function handlePaginationIndex(currentIndex) {
    // let activeIndex = parseInt(currentIndex, 10);
    setPosts((prev) => (
      {
        ...prev,
        paginationIndex: parseInt(currentIndex, 10)
      }
    ));
  }

  let active = 1;
  let postItems = [];

  // SETS AMOUNT OF PAGINATION # TABS
  for (let i = 1; i <= posts.paginationTotal; i++) {
    postItems.push(
      <Pagination.Item key={i} active={i === active} onClick={(e) => handlePaginationIndex(e.target.innerText)}>
        {i}
      </Pagination.Item >,
    );
  }

  {/* ********************************************************************** */ }
  {/* GRABS POSTS FROM BACK-END*/ }
  {/* ********************************************************************** */ }
  useEffect(() => {

    // GRABS ALL POSTS FROM DB
    async function grabPosts() {
      await axios
        .get("http://localhost:3005/api/loadPosts")
        .then((response) => {

          // HOW MANY PAGINATION TABS NEEDED
          let PAGINATION_TABS = Math.ceil(response.data.length / CORKBOARD_TOTAL_POSTS_ALLOWED);

          setPosts((prev) => (
            {
              ...prev,
              allEntries: response.data,
              paginationTotal: PAGINATION_TABS,
              totalPosts: (response.data.length)
            }
          ));
          // console.log(`posts total:: ${posts.paginationTotal}, total posts in db::: ${posts.totalPosts}`);
        })
        .catch((err) => console.log(err));
    }
    grabPosts();

  }, []);


  {/* ********************************************************************** */ }
  {/* SETS INDEX AND GROUPS POSTS ACCORIDNG TO ALLOWED POST LIMIT PER CORKBOARD PANEL*/ }
  {/* ********************************************************************** */ }

  useEffect(() => {

    // GRABS ALL POSTS FROM DB
    async function setPaginatedPosts() {
      console.log(`Active pagination index is::::: ${posts.paginationIndex}`);
      const POST_GROUP = [];
      let POST_GROUP_BEGIN;
      let POST_GROUP_END;

      // SETS THE ENDING MARKER FOR ARRAY OF GROUPED POST
      POST_GROUP_END = (posts.paginationIndex * CORKBOARD_TOTAL_POSTS_ALLOWED) - 1;

      // SETS THE BEGINNING MARKER FOR ARRAY OF GROUPED POST
      POST_GROUP_BEGIN = (posts.paginationIndex * CORKBOARD_TOTAL_POSTS_ALLOWED) - CORKBOARD_TOTAL_POSTS_ALLOWED;

      console.log(`POST ARRAY FOR PAGINATION: -> ${POST_GROUP_BEGIN} - ${POST_GROUP_END}`);

      for (; POST_GROUP_BEGIN <= POST_GROUP_END; POST_GROUP_BEGIN++) {
        // console.log(`POST:: ${JSON.stringify(posts.allEntries[POST_GROUP_BEGIN])}`);

        if (POST_GROUP_BEGIN === posts.totalPosts - 1) {
          break;
        }

        if (posts.allEntries[POST_GROUP_BEGIN] === undefined) {
          break;
        }

        // PUSHES POST OBJECTS TO PAGE TAB 
        POST_GROUP.push(posts.allEntries[POST_GROUP_BEGIN]);
      }

      // setPosts.paginationEntries
      setPosts((prev) => (
        {
          ...prev,
          paginationEntries: POST_GROUP

        }
      ));

      // console.log(`Paginated Posts:::: ${JSON.stringify(posts.paginationEntries)}`)

    }

    setPaginatedPosts();

  }, [posts.paginationIndex]);


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
            <Col className="ml-auto">
              <Pagination>
                {postItems}
              </Pagination>
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
        {/* {posts.allEntries?.map((p, i) => ( */}
        {posts.paginationEntries?.map((p, i) => (
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
