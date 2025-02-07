// REACT
import { useState, useRef, useEffect } from "react";

// CSS
import "./css/Corkboard.css";

// LIBRARIES
import axios from "axios";

// ASSETS
import { PinAngleFill } from "react-bootstrap-icons";

// COMPONENTS
import PostBoardCard from "./PostBoardCard";
import LoadingSpinner from "./ui/LoadingSpinner";
import { Pagination, Stack } from "react-bootstrap";
import { IsComponentVisible } from "./ui/isComponentVisible";
import HeaderPanel from "./ui/HeaderPanel";


/*----------------------------------------------------------------------------
|   ⚙️ Use: Corkboard container that pulls posts from DB and presents them  
|   
|   🔧 Todo: Filter Options | User customized corkboard 
|
|   📦 Returns: JSX component
*----------------------------------------------------------------------------*/


function Corkboard() {

  // GRABS REFERENCE OF ELEMENT ON TOP OF CORKBOARD
  const corkboardTopRef = useRef(null);

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
  // SCROLLS TO TOP 
  if (corkboardTopRef.current) {
    corkboardTopRef.current.scrollIntoView({ behavior: 'smooth' });
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
        .get("http://localhost:3005/api/posts/fetch-all")
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
              totalPosts: response.data.length,
              paginationEntries: firstLoadedPosts
            }
          ));

          // console.log(`INSIDE CORKBOARD::: ${JSON.stringify(response.data)}`)

          // SETS THE FIRST POSTS TO BOARD

          for (let i = 0; i < CORKBOARD_TOTAL_POSTS_ALLOWED; i++) {
            if (response.data[i] === undefined) { break; }
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

      for (let i = POST_GROUP_BEGIN; i <= POST_GROUP_END; i++) {
        if (i === posts.totalPosts) { break; }
        if (posts.allEntries[i] === undefined) { break; }
        // PUSHES POST OBJECTS TO PAGE TAB 
        POST_GROUP.push(posts.allEntries[i]);
      }
      setPosts((prev) => (
        {
          ...prev,
          paginationEntries: POST_GROUP

        }
      ));
    }
    setPaginatedPosts();

  }, [posts.allEntries, posts.paginationIndex, posts.totalPosts]);

  // BRINGING IN INTERSECTION OBSERVER
  // const ref = useRef();
  // const isVisible = IsComponentVisible(ref);

  return (
    <>
      {
        posts.totalPosts === 0
          ?
          <div className="corkboard-card-container shadow-lg" style={{ height: "550px" }} >
            <LoadingSpinner title="Loading Posts">
            </LoadingSpinner>
          </div>
          : <div>
            <div>

              {/* ************************ */}
              {/* FILTER - SEARCH BUTTONS */}
              {/* ************************ */}
              <Stack direction="horizontal" gap={3} id="corkboard-top">
                <Pagination className="ms-auto corkboard-pagination" size="md">
                  {postItems}
                </Pagination>
              </Stack>
            </div>
            {/* ********************************************************************** */}
            {/* CORKBOARD + POST CARDS*/}
            {/* ********************************************************************** */}
            {/* {console.log(`POSTS::: ${posts.paginationEntries.length}`)} */}
            {posts.paginationEntries !== undefined ?
              <div className="corkboard-card-container">
                {posts.paginationEntries?.map((p, i) => (
                  <PostBoardCard {...p} key={`${p._id} - ${i}`}
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
      }


      {/* <div ref={ref}>
        <p>{isVisible ? console.log('is visible!') : console.log('is Not visible!')}</p>
      </div> */}

    </>
  );
}

export default Corkboard;
