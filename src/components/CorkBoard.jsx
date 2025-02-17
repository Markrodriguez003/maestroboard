// REACT
import { useState, useEffect, useRef, useCallback } from "react";

// CSS
import "./css/Corkboard.css";

// LIBRARIES
import axios from "axios";

// ASSETS
import { PinAngleFill, Filter, ArrowLeftSquare, ArrowRightSquare } from "react-bootstrap-icons";
import pushPin from "../assets/imgs/post-imgs/push-pin2.png"

// COMPONENTS
import PostBoardCard from "./PostBoardCard";
import LoadingSpinner from "./ui/LoadingSpinner";
import { Container, Stack, Button, Image } from "react-bootstrap";
import { SITE_COLORS } from "./css/site";

/*----------------------------------------------------------------------------
|   ⚙️ Use: Corkboard container that pulls posts from DB and presents them  
|   
|   🔧 Todo: Filter Options | User customized corkboard 
|
|   📦 Returns: JSX component
*----------------------------------------------------------------------------*/
//  PAGE ID :
//  1 --> "" (loads all)
//  2 --> 67a689b958dd2affe9acbff4
//  3 --> 67a6855f58dd2affe9acbfdc
//  4 --> 67a67f7558dd2affe9acbfc4
//  5 --> null (won't load)

// PAGE : SPECIFIC ARTICLE : ID : Cursor for page : INDEX PLACE IN POSTS TOTAL TO TAG TO PREVIOUS
// 1    : DRUMMING LESSONS : 67abc7acbc47c8561ebeb4ff : 67abc7acbc47c8561ebeb4ff -> Page 1 -> 1  : NULL
// 2    : Roland MC-505    : 67a689b958dd2affe9acbff4 : 67abc7acbc47c8561ebeb4ff -> Page 2 -> 1  : NULL
// 3    : Retro Accordion  : 67a6855f58dd2affe9acbfdc : 67a689b958dd2affe9acbff4 -> Page 3 -> 2  : 9
// 4    : Vox Bass         : 67a67f7558dd2affe9acbfc4 : 67a6855f58dd2affe9acbfdc -> Page 4 -> 3  : 18

// NEXT CURSOR POSTS ID :
//  1 --> 67a689b958dd2affe9acbff4
//  2 --> 67a6855f58dd2affe9acbfdc
//  3 --> 67a67f7558dd2affe9acbfc4
//  4 --> null

// ? NOTES
// ? https://legacy.reactjs.org/docs/hooks-faq.html#:~:text=It%20is%20only%20safe%20to,or%20values%20derived%20from%20them.

function Corkboard() {

  // FILTERING OPTIONS
  const [filterLatestPosts, setFilterLatestPosts] = useState(true);

  // PAGINATION TRIGGERS
  const [paginationTrigger, setPaginationTrigger] = useState(false);

  // PAGINATION TRIGGERS
  const [currentPage, setCurrentPage] = useState(1);

  // POST LOADING STATTE
  const [loading, setLoading] = useState(true);



  // LIMIT TO # OF POSTS 
  const POST_PAGINATION_LIMIT = 9;

  // POSTS OBJECT
  // HOLDS FETCHED POSTS, PREVIOUS AND CURRENT DB ID CURSOR, TOTAL PAGES, 
  // LOADING STATE AND FILTERED LATEST POSTS
  const [posts, setPosts] = useState({
    fetchedPosts: [],
    totalPostCount: 0,

  });

  {/* ********************************************************************** */ }
  {/* GRABS ARTICLES FROM BACK-END BY PASSING / SAVING ARTICLE ID CURSOR*/ }
  {/* ********************************************************************** */ }


  const fetchData = useCallback(async (page = 1) => {
    console.log(`PAGE -> ${page}`)
    try {
      const response = await axios.get(`http://localhost:3005/api/posts/fetch?limit=${POST_PAGINATION_LIMIT}&page=${page}`);
      setPosts((prev) => ({
        fetchedPosts: [...response.data.posts],
        loading: false,
        totalPostCount: response.data.totalCount
      }));
    } catch (error) {
      // TODO: ERROR STATE HANDLING TO FRONTEND
      console.log(`An error has occured! -> ${error}`)
    }
  }, []);

  useEffect(() => {
    console.log(`POSTS TOTAL COUNT: ${posts.totalPostCount}`)
    console.log(`CURRENT PAGE: ${currentPage}`)
  }, [posts.totalPostCount, currentPage])

  // INITIAL FETCH OF POSTS
  useEffect(() => {
    fetchData(currentPage);
  }, [fetchData, currentPage]);

  useEffect(() => {
    function nextPosts() {
      if (currentPage < Math.ceil(posts.totalPostCount / POST_PAGINATION_LIMIT)) {

        setCurrentPage(prev => (prev + 1)),

          setPosts((prev) => (
            {
              ...prev,
              loading: true,
              fetchedPosts: [],
            }
          ))

        fetchData(currentPage);
      }
    }

    function previousPosts() {
      if (currentPage > 1) {

        setCurrentPage(prev => (prev - 1)),
          console.log(`PREVIOUS! ${currentPage}`)

        setPosts((prev) => (
          {
            ...prev,
            loading: true,
            fetchedPosts: [],
          }
        ))
        fetchData(currentPage);
      }
    }


    if (paginationTrigger === true) {
      nextPosts();
    } else if (paginationTrigger === false) {
      previousPosts();
    }

    setPaginationTrigger(null)

  }, [paginationTrigger, currentPage, fetchData, posts.totalPostCount, posts.fetchedPosts])

  return (
    <>
      {
        posts.fetchedPosts.length === 0
          ?
          <div className="corkboard-card-container shadow-lg" style={{ height: "550px" }} >
            <div style={{ backgroundColor: SITE_COLORS.main, position: "relative" }} className="p-5">
              <Image src={pushPin} style={{ width: "35px", position: "absolute", top: "-15px", left: "50%" }} />
              <LoadingSpinner title="Loading Posts">
              </LoadingSpinner>
            </div>
          </div>
          : <div>

            {/* ************************ */}
            {/* FILTER - SEARCH BUTTONS */}
            {/* ************************ */}
            <Container>

              <Stack direction="horizontal" gap={1} className="justify-content-between" >
                <Button
                  className="mb-2"
                  onClick={() => setFilterLatestPosts((prev) => !prev)}
                >
                  <Filter style={{ transform: filterLatestPosts ? "rotate(0deg) " : "rotate(180deg)", marginBottom: "4px", fontSize: "20px" }} />
                  Filter: Date - {filterLatestPosts ? "Latest to Oldest" : "Oldest to Latest"}
                </Button>
                <div className="text-light text-bg-primary p-2">
                  There are {posts.totalPostCount} posts!
                </div>
                <div className="px-4 py-2 float-end">
                  <Button className="p-1 m-0">
                    <ArrowLeftSquare size={"29px"}
                      onClick={() =>
                        setPaginationTrigger(false)

                      }
                    />
                  </Button>
                  <span style={{ backgroundColor: "white", padding: "4px 12px" }}>{currentPage} of {Math.ceil(posts.totalPostCount / POST_PAGINATION_LIMIT)}</span>

                  <Button className="p-1 m-0">
                    <ArrowRightSquare size={"29px"}
                      onClick={() =>
                        setPaginationTrigger(true)

                      }
                    />
                  </Button>

                </div>
              </Stack>
            </Container>

            {/* ********************************************************************** */}
            {/* CORKBOARD + POST CARDS*/}
            {/* ********************************************************************** */}
            {posts.fetchedPosts.length !== undefined ?
              <div className="corkboard-card-container">

                {posts.fetchedPosts.map((p, i) => (
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

          </div >
      }
    </>
  );
}

export default Corkboard;
