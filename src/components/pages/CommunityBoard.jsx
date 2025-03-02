// REACT
import { useState, useEffect, useCallback } from "react";

// LIBRARIES
import axios from "axios";

// ASSETS
import { PinAngleFill, Filter, ArrowLeftSquare, ArrowRightSquare, FileEarmarkXFill } from "react-bootstrap-icons";
import pushPin from "../../assets/imgs/post-imgs/push-pin2.png"

// COMPONENTS
import Corkboard from "../CorkBoard";
import PostBoardCard from "../PostBoardCard";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Stack, Button, Image, Row, Col, ButtonGroup } from "react-bootstrap";
import { SITE_COLORS } from "../css/site";

/*----------------------------------------------------------------------------
|   ⚙️ Use: Corkboard panel that will hold all the posts 
|        
|   🔧 Todo: Add design custom themes (corkboard colors & notecard themes) 
|            | post search filters | randomly insert fake-ads between posts  
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function CommunityBoard() {


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
    setLoading(true);
    try {
      // const response = await axios.get(`http://localhost:3005/api/posts/fetch?limit=${POST_PAGINATION_LIMIT}&page=${page}&sort=${sort}`);
      const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/api/posts/fetch?limit=${POST_PAGINATION_LIMIT}&page=${page}&sort=${sort}`);
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
          setLoading(true);
        setPosts((prev) => (
          {
            ...prev,
            fetchedPosts: [],
          }
        ))

        fetchData(currentPage);
      }
    }

    function previousPosts() {
      if (currentPage > 1) {

        setCurrentPage(prev => (prev - 1)),
          setLoading(true);
        setPosts((prev) => (
          {
            ...prev,
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
    <div className="mt-5">
      <>
        {
          loading
            ?
            // LOADING POST CARD BOARD
            <Corkboard>
              <div style={{ backgroundColor: SITE_COLORS.main, position: "relative", }} >
                <Image src={pushPin} style={{ width: "35px", position: "absolute", top: "-15px", left: "50%" }} />
                <br />
                <LoadingSpinner title="Loading Posts">
                </LoadingSpinner>
                <br />

              </div>
            </Corkboard>
            : posts.fetchedPosts.length === 0
              ?

              // POST CARD FAILURE
              <Corkboard>
                <div style={{ backgroundColor: SITE_COLORS.main, position: "relative" }} className="p-5 text-center">
                  <Image src={pushPin} style={{ width: "35px", position: "absolute", top: "-15px", left: "50%" }} />
                  <div className="mx-auto text-center mb-2">
                    <FileEarmarkXFill size={"128px"} className="text-light" />
                  </div>
                  <h1 className="text-light">Could not fetch posts! </h1>
                  <h1 className="text-light">Please try again later!</h1>
                </div>
              </Corkboard> : <div>

                {/* ********************************************************************** */}
                {/* TOP FILTER BY DATE - PREV/NEXT BUTTONS */}
                {/* ********************************************************************** */}
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
                    <Corkboard  >
                      <Row className="gap-5 justify-content-center">
                        {posts.fetchedPosts.map((p, i) => (
                          <Col
                            style={{ width: "26rem", height: "36rem" }}
                            className="p-0 m-0"
                            key={`${p._id} - ${i}`}
                            xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                            <PostBoardCard {...p} />
                          </Col>
                        ))}
                      </Row>
                    </Corkboard>
                    :
                    <Corkboard>
                      <Stack gap={3} className="col-md-5 mx-auto">
                        <h1 className="p-2" style={{ color: "white", fontSize: "40px" }}> Posterboard is empty!</h1>
                        <small className="p-2" style={{ color: "white" }}> Come back later!</small>
                      </Stack>
                    </Corkboard>
                }

                {/* BOTTOM FILTER BY DATE + PREV/NEXT BUTTONS */}
                <Row className="align-items-center justify-content-center mx-auto mt-2" >
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
    </div >
  );
}

export default CommunityBoard;
