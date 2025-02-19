// REACT
import { useState, useEffect, useRef, useCallback } from "react";

// CSS
import "./css/Corkboard.css";

// LIBRARIES
import axios from "axios";

// ASSETS
import { PinAngleFill, Filter, ArrowLeftSquare, ArrowRightSquare, FileEarmarkXFill } from "react-bootstrap-icons";
import pushPin from "../assets/imgs/post-imgs/push-pin2.png"

// COMPONENTS
import PostBoardCard from "./PostBoardCard";
import LoadingSpinner from "./ui/LoadingSpinner";
import { Stack, Button, Image, Row, Col, ButtonGroup } from "react-bootstrap";
import { SITE_COLORS } from "./css/site";

/*----------------------------------------------------------------------------
|   ⚙️ Use: Corkboard container that pulls posts from DB and presents them  
|   
|   🔧 Todo: Filter Options | User customized corkboard 
|
|   📦 Returns: JSX component
*----------------------------------------------------------------------------*/

function Corkboard() {


  // PAGINATION TRIGGERS
  const [paginationTrigger, setPaginationTrigger] = useState(false);

  // PAGINATION TRIGGERS
  const [currentPage, setCurrentPage] = useState(1);

  // HANDLES POST SORT FILTER STATE
  const [filterPosts, setFilterPosts] = useState(true);

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
    sort: -1,
    loading: true

  });

  // FUNCTION TO PUSH PAGE TO TOP
  function scrollToTop() {
    window.scrollTo(0, 0);
  };

  {/* ********************************************************************** */ }
  {/* FETCHES POSTS FROM BACK-END BY PASSING PAGE + SORT TYPE*/ }
  {/* ********************************************************************** */ }
  const fetchData = useCallback(async (page = 1, sort = -1) => {
    scrollToTop();
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3005/api/posts/fetch?limit=${POST_PAGINATION_LIMIT}&page=${page}&sort=${sort}`);
      setPosts((prev) => ({
        ...prev,
        fetchedPosts: [...response.data.posts],
        totalPostCount: response.data.totalCount,
      }));
      setLoading(false);
    } catch (error) {
      // TODO: ERROR STATE HANDLING TO FRONTEND;
      setLoading(false);
      console.log(`An error has occured! -> ${error}`)
    }
  }, []);

  // INITIAL FETCH OF POSTS
  useEffect(() => {
    fetchData(currentPage, posts.sort);
  }, [fetchData, currentPage, posts.sort]);


  // CHECKS SEARCH FILTER FOR SORTING
  useEffect(() => {

    if (filterPosts) {
      setPosts(prev => ({
        ...prev,
        sort: -1
      }))
      setCurrentPage(1);
      fetchData(currentPage);

    } else if (filterPosts == false) {
      setPosts(prev => ({
        ...prev,
        sort: 1
      }))

      setCurrentPage(1);
      fetchData(currentPage)
    }

  }, [filterPosts])

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
        loading
          ?
          <div className="corkboard-card-container shadow-lg" style={{ height: "550px" }} >
            <div style={{ backgroundColor: SITE_COLORS.main, position: "relative" }} className="p-5">
              <Image src={pushPin} style={{ width: "35px", position: "absolute", top: "-15px", left: "50%" }} />
              <LoadingSpinner title="Loading Posts">
              </LoadingSpinner>
            </div>
          </div>
          : posts.fetchedPosts.length === 0
            ?
            <div className="corkboard-card-container shadow-lg" style={{ height: "550px" }} >
              <div style={{ backgroundColor: SITE_COLORS.main, position: "relative" }} className="p-5 text-center">
                <Image src={pushPin} style={{ width: "35px", position: "absolute", top: "-15px", left: "50%" }} />
                <div className="mx-auto text-center mb-2">
                  <FileEarmarkXFill size={"128px"} className="text-light" />
                </div>
                <h1 className="text-light">Could not fetch posts! </h1>
                <h1 className="text-light">Please try again later!</h1>
              </div>
            </div> : <div>

              {/* ************************ */}
              {/* FILTER - SEARCH BUTTONS */}
              {/* ************************ */}

              <Row className="align-items-center justify-content-center mx-auto" >
                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} className="text-center mx-auto" >
                  <Button
                    className="mb-2"
                    size="sm"
                    onClick={() => setFilterPosts(prev => !prev)}
                  >
                    <Filter style={{ transform: posts.filterLatestPosts ? "rotate(0deg) " : "rotate(180deg)", marginBottom: "4px", fontSize: "20px" }} />
                    {filterPosts ? "Latest to Oldest" : "Oldest to Latest"}
                  </Button>
                </Col>

                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} className="text-center mx-auto">
                  <Button className="mb-2 pb-2" size="sm">
                    <PinAngleFill className="mb-1" />
                    {" "} Total Posts: {posts.totalPostCount} posts
                  </Button>
                </Col>

                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} className="text-center mx-auto">
                  <ButtonGroup size="sm" className="mb-2">
                    <Button onClick={() => setPaginationTrigger(false)} > <ArrowLeftSquare size={"30px"} /></Button>
                    <Button variant="light">  {currentPage} of {Math.ceil(posts.totalPostCount / POST_PAGINATION_LIMIT)}</Button>
                    <Button onClick={() => setPaginationTrigger(true)} > <ArrowRightSquare size={"30px"} /></Button>
                  </ButtonGroup>
                </Col>
              </Row >

              {/* ********************************************************************** */}
              {/* CORKBOARD + POST CARDS*/}
              {/* ********************************************************************** */}
              {
                posts.fetchedPosts.length !== undefined ?
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
              <Row className="align-items-center justify-content-center mx-auto" >
                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} className="text-center mx-auto" >
                  <Button
                    className="mb-2"
                    size="sm"
                    onClick={() => setFilterPosts(prev => !prev)}
                  >
                    <Filter style={{ transform: posts.filterLatestPosts ? "rotate(0deg) " : "rotate(180deg)", marginBottom: "4px", fontSize: "20px" }} />
                    {filterPosts ? "Latest to Oldest" : "Oldest to Latest"}
                  </Button>
                </Col>

                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} className="text-center mx-auto">
                  <Button className="mb-2 pb-2" size="sm">
                    <PinAngleFill className="mb-1" />
                    {" "} Total Posts: {posts.totalPostCount} posts
                  </Button>
                </Col>

                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} className="text-center mx-auto">
                  <ButtonGroup size="sm" className="mb-2">
                    <Button onClick={() => setPaginationTrigger(false)} > <ArrowLeftSquare size={"30px"} /></Button>
                    <Button variant="light">  {currentPage} of {Math.ceil(posts.totalPostCount / POST_PAGINATION_LIMIT)}</Button>
                    <Button onClick={() => setPaginationTrigger(true)} > <ArrowRightSquare size={"30px"} /></Button>
                  </ButtonGroup>
                </Col>
              </Row >
            </div >
      }
    </>
  );
}

export default Corkboard;
