import { useState, useEffect } from "react";
import "./css/Corkboard.css";
import axios from "axios";
import BoardPostModal from "./BoardPostModal";
import PostBoardCard from "./PostBoardCard";

import { Container, Pagination, Row, Col, Stack } from "react-bootstrap";

function Corkboard() {

  // ALL POSTS FROM DB, SEPARATED PAGINATED POSTS, TOTAL POSTS, & PAGINATION TABS TO STATE 
  const [posts, setPosts] = useState({
    totalPosts: 0,
    allEntries: [],
    paginationEntries: [],
    paginationTotal: 0,
    paginationIndex: 1,
    loading: false
  });

  // TOTAL POSTS ALLOWS ON CORKBOARD PANEL
  const CORKBOARD_TOTAL_POSTS_ALLOWED = 9;

  // SETS PAGINATION INDEX WHEN USER CLICKS ON PAGINATION TAB
  function handlePaginationIndex(currentIndex) {
    setPosts((prev) => (
      {
        ...prev,
        paginationIndex: parseInt(currentIndex, 10)
      }
    ));
  }

  // SETS ACTIVE PAGINATED TAB
  let active = 1;

  // INTIATED PAGINATED TABS VARIABLE 
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

          // TEMPORARY ARRAY OF POSTS
          let firstLoadedPosts = [];

          // SETTING 
          setPosts((prev) => (
            {
              ...prev,
              allEntries: response.data,
              paginationTotal: PAGINATION_TABS,
              totalPosts: (response.data.length),
              paginationEntries: firstLoadedPosts
            }
          ));

          // SETS THE FIRST POSTS TO BOARD
          for (let i = 0; i < CORKBOARD_TOTAL_POSTS_ALLOWED; i++) {
            if (response.data[0] === undefined) { break; }
            // console.log(`Posts[${i} --> ${JSON.stringify(response.data[i])}]`)
            firstLoadedPosts.push(response.data[i]);
          }
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
      const POST_GROUP = [];
      let POST_GROUP_BEGIN;
      let POST_GROUP_END;

      // SETS THE ENDING MARKER FOR ARRAY OF GROUPED POST
      POST_GROUP_END = (posts.paginationIndex * CORKBOARD_TOTAL_POSTS_ALLOWED) - 1;

      // SETS THE BEGINNING MARKER FOR ARRAY OF GROUPED POST
      POST_GROUP_BEGIN = (posts.paginationIndex * CORKBOARD_TOTAL_POSTS_ALLOWED) - CORKBOARD_TOTAL_POSTS_ALLOWED;

      // console.log(`POST ARRAY FOR PAGINATION: -> ${POST_GROUP_BEGIN} - ${POST_GROUP_END}`);

      for (; POST_GROUP_BEGIN <= POST_GROUP_END; POST_GROUP_BEGIN++) {
        // console.log(`POST:: ${JSON.stringify(posts.allEntries[POST_GROUP_BEGIN])}`);

        if (POST_GROUP_BEGIN === posts.totalPosts - 1) { break; }

        if (posts.allEntries[POST_GROUP_BEGIN] === undefined) { break; }

        // PUSHES POST OBJECTS TO PAGE TAB 
        POST_GROUP.push(posts.allEntries[POST_GROUP_BEGIN]);
      }
      setPosts((prev) => (
        {
          ...prev,
          paginationEntries: POST_GROUP

        }
      ));
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


        <Stack direction="horizontal" gap={3}>
          <Pagination className="ms-auto corkboard-pagination" size="md">
            {postItems}
          </Pagination>
        </Stack>
      </div>

      {/* ********************************************************************** */}
      {/* CORKBOARD + POST CARDS*/}
      {/* ********************************************************************** */}


      {posts.paginationEntries !== undefined ?

        <div className="corkboard-card-container shadow-lg ">

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

        :
        <div className="corkboard-card-container shadow-lg" style={{ height: "400px" }}>
          <Stack gap={3} className="col-md-5 mx-auto">
            <h1 className="p-2" style={{ color: "white", fontSize: "40px" }}> Posterboard is empty!</h1>
            <small className="p-2" style={{ color: "white" }}> Come back later!</small>
          </Stack>
        </div>
      }

      <Stack direction="horizontal" gap={3} className="mt-2">
        <Pagination className="ms-auto corkboard-pagination" size="md">
          {postItems}
        </Pagination>
      </Stack>

    </div >
  );
}

export default Corkboard;
