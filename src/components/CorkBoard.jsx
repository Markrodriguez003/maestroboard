// REACT
import { useState, useRef, useEffect } from "react";

// CSS
import "./css/Corkboard.css";

// LIBRARIES
import axios from "axios";

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


    // SCROLLS TO TOP 
    if (corkboardTopRef.current) {
      corkboardTopRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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

          console.log(`INSIDE CORKBOARD::: ${JSON.stringify(response.data)}`)

          // SETS THE FIRST POSTS TO BOARD
          for (let i = 0; i < CORKBOARD_TOTAL_POSTS_ALLOWED; i++) {
            if (response.data[0] === undefined) { break; }
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
              {/* ********************************************************************** */}
              {/* CORKBOARD HEADER */}
              {/* ********************************************************************** */}

              <HeaderPanel >
                <h1 style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "55px",
                  borderRadius: "5px",
                  display: "inline-block",
                  padding: "1px"

                }}
                  ref={corkboardTopRef}>Community Board |
                </h1>
                <small style={{ color: "white", fontSize: "18px" }}>  Latest music related posts</small>
                <hr style={{ color: "white", borderTop: "4px white solid" }} />
              </HeaderPanel>
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
            {posts.paginationEntries !== undefined ?
              <div className="corkboard-card-container">
                {posts.paginationEntries?.map((p, i) => (
                  <div key={`div ${i}`}>
                    {/* {console.log(`POSTS::: ${JSON.stringify(posts.paginationEntries)}`)} */}
                    {/* {console.log(`POST P: ${JSON.stringify(p)}`)} */}
                    {/* <h1 key={`title ${i}`}>{fasf}</h1>
                    <h1 key={`email ${i}`}>{p.email}</h1>
                    <h1 key={`username ${i}`}>{p.username}</h1>
                    <h1 key={`price ${i}`}>{p.price}</h1>
                    <h1 key={`zip ${i}`}>{p.zip}</h1>
                    <h1 key={`type ${i}`}>{p.type}</h1>
                    <h1 key={`trade ${i}`}>{p.trade}</h1>
                    <h1 key={`equipment ${i}`}>{p.equipment}</h1>
                    <h1 key={`date ${i}`}>{p.date}</h1>
                    <h1 key={`p[hone] ${i}`}>{p.phone}</h1>
                    <h1 key={`p[fashone] ${i}`}>{p.body}</h1>
                    <h1 key={`p[fassfashone] ${i}`}>{p.images}</h1> */}
                  </div>

                  // <PostBoardCard
                  //   key={`post-${p.title} - ${i}-${p._id}`}
                  //   title={p.title}
                  //   email={p.email}
                  //   username={p.username}
                  //   price={p.price}
                  //   zip={p.zip}
                  //   trade={p.trade}
                  //   type={p.type}
                  //   equipment={p.equipment}
                  //   date={p.date}
                  //   phone={p.phone}
                  //   body={p.body}
                  //   images={p.images}
                  // />
                ))}
                {/* <h1>POSTS!</h1> */}
                {/* {console.log(`POSTS::: ${JSON.stringify(posts.paginationEntries)}`)} */}
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
