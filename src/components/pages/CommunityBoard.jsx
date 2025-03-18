// REACT
import { useState, useEffect } from "react";

// LIBRARIES
import axios from "axios";
import { useSearchParams } from 'react-router-dom';
import { scrollToTop } from "../../utils/scrollToTop";

// ASSETS
import { PinAngleFill, Filter, ArrowLeftSquare, ArrowRightSquare, FileEarmarkXFill } from "react-bootstrap-icons";
import pushPin from "../../assets/imgs/post-imgs/push-pin2.png"
import conductorImage from "../../assets/imgs/misc/MusicNotes2.png";

// COMPONENTS
import Corkboard from "../CorkBoard";
import PostBoardCard from "../PostBoardCard";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Stack, Button, Image, Row, Col, ButtonGroup } from "react-bootstrap";
import { SITE_COLORS } from "../css/site";

// ? NOTES
// ? https://medium.com/@bobjunior542/how-to-use-usesearchparams-in-react-router-6-for-url-search-parameters-c35b5d1ac01c

/*----------------------------------------------------------------------------
|   ⚙️ Use: Corkboard panel that will hold all the posts 
|        
|   🔧 Todo: Add design custom themes (corkboard colors & notecard themes) 
|            | post search filters | randomly insert fake-ads between posts  
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function CommunityBoard() {

  // REACT-DOM URL SEARCH PARAMETER HOOK 
  const [urlParams, setUrlParams] = useSearchParams();

  // PAGINATION TRIGGERS
  const [paginationTrigger, setPaginationTrigger] = useState(false);

  // DISABLE SEARCH ARROW BUTTONS
  const [isNavBtnsDisabled, setIsNavBtnsDisabled] = useState(true);

  // PAGINATION TRIGGERS
  const [currentPage, setCurrentPage] = useState(1);

  // HANDLES POST SORT FILTER STATE
  const [filterPosts, setFilterPosts] = useState(true);

  // POST LOADING STATTE
  const [loading, setLoading] = useState(true);

  // LIMIT TO # OF POSTS 
  const POST_PAGINATION_LIMIT = 9;

  // HOLDS FETCHED POSTS & TOTAL POSTS, 
  const [posts, setPosts] = useState({
    fetchedPosts: [],
    totalPostCount: 0,
  });

  // HANDLES FILTERING OF POSTS 
  function filterPostOrder() {
    setFilterPosts(prev => !prev);
    setCurrentPage((prev) => 1);
    // window.location.reload();
  }

  {/* ********************************************************************** */ }
  {/* SETS URL QUERY PARAMETERS FROM ENTRY*/ }
  {/* ********************************************************************** */ }
  useEffect(() => {
    if (!urlParams.get("page") || !urlParams.get("sort")) {
      setUrlParams({ 'page': currentPage, "sort": filterPosts ? -1 : 1 });
    } else {
      setCurrentPage((prev) => parseInt(urlParams.get("page")));
      setFilterPosts((prev) => parseInt(urlParams.get("sort")) < 0 ? true : false)
    }
  }, [])

  // FETCHES POSTS BY URL QUERIES
  useEffect(() => {
    async function fetch() {
      setLoading(true);
      setPosts((prev) => ({
        ...prev,
        fetchedPosts: [],
      }));
      try {
        console.log(`Page: ${urlParams.get("page")} - Sort: ${urlParams.get("sort")} - CurrentPage: ${currentPage}`)
        const response =
          await axios
            .get(`${import.meta.env.VITE_SERVER_API_URL}/api/posts/fetch?limit=${POST_PAGINATION_LIMIT}&page=${urlParams.get("page")}&sort=${urlParams.get("sort")}`);

        setPosts((prev) => ({
          fetchedPosts: response.data.posts,
          totalPostCount: response.data.totalCount,
        }));

        setTimeout(() => setLoading(false), 1500);
        scrollToTop();
      } catch (error) {
        // TODO: ERROR STATE HANDLING TO FRONTEND;
        setLoading(false);
        console.log(`An error has occured! -> ${error}`)
      }
    }
    fetch();
  }, [urlParams]);


  // SETS PAGE NUMBER WITHOUT GOING OUTSIDE TOTAL POST # BOUNDARIES
  useEffect(() => {
    // FORWARD PAGINATION
    if (paginationTrigger === true) {
      if (currentPage < Math.ceil(posts.totalPostCount / POST_PAGINATION_LIMIT)) {
        setCurrentPage(prev => (prev + 1));
        setUrlParams({ 'page': currentPage, "sort": filterPosts ? -1 : 1 });
      }

      // BACKWARD PAGINATION
    } else if (paginationTrigger === false) {
      if (currentPage > 1) {
        setCurrentPage(prev => (prev - 1));
        setUrlParams({ 'page': currentPage, "sort": filterPosts ? -1 : 1 });
      }
    }
    setPaginationTrigger(null)
  }, [paginationTrigger]);


  // SIDE EFFECT WHEN PAGE NUMBER IS CHANGED
  useEffect(() => {
    setUrlParams({ 'page': currentPage, "sort": filterPosts ? -1 : 1 });
  }, [currentPage, filterPosts])


  return (
    <div className="mt-5 mb-5">
      <>
        {
          loading
            ?
            // LOADING POST CARD BOARD
            <>
              {/* ********************************************************************** */}
              {/* TOP FILTER BY DATE - PREV/NEXT BUTTONS */}
              {/* ********************************************************************** */}
              <Row className="align-items-center justify-content-center mx-auto" >
                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} className="text-center mx-auto" >
                  <Button
                    className="mb-2"
                    size="sm"
                    disabled={isNavBtnsDisabled}
                    onClick={() => filterPostOrder()}
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
                    <Button disabled={isNavBtnsDisabled} onClick={() => setPaginationTrigger(false)} > <ArrowLeftSquare size={"30px"} /></Button>
                    <Button variant="light">  {currentPage} of {Math.ceil(posts.totalPostCount / POST_PAGINATION_LIMIT)}</Button>
                    <Button disabled={isNavBtnsDisabled} onClick={() => setPaginationTrigger(true)} > <ArrowRightSquare size={"30px"} /></Button>
                  </ButtonGroup>
                </Col>
              </Row >
              <Corkboard>

                <div style={{ backgroundColor: SITE_COLORS.main, position: "relative", }} className="w-75 mx-auto" >
                  <Image src={pushPin} style={{ width: "35px", position: "absolute", top: "-15px", left: "50%" }} />
                  <Image src={conductorImage} style={{ width: "155px", transform: "scaleX(-1)", position: "absolute", bottom: "5px", left: "0" }} />
                  <br />
                  <LoadingSpinner title="Loading Posts">
                  </LoadingSpinner>
                  <br />
                  <br />
                  <br />
                  <br />

                </div>
              </Corkboard>
            </>
            : posts.fetchedPosts.length === 0
              ?

              // POST CARD FAILURE
              <>
                <Corkboard>
                  <div style={{ backgroundColor: SITE_COLORS.main, position: "relative" }} className="p-5 text-center">
                    <Image src={pushPin} style={{ width: "35px", position: "absolute", top: "-15px", left: "50%" }} />
                    <div className="mx-auto text-center mb-2">
                      <FileEarmarkXFill size={"128px"} className="text-light" />
                    </div>
                    <h1 className="text-light">Could not fetch posts! </h1>
                    <h1 className="text-light">Please check url & try again later!</h1>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                </Corkboard>
              </>

              : <div>

                {/* ********************************************************************** */}
                {/* TOP FILTER BY DATE - PREV/NEXT BUTTONS */}
                {/* ********************************************************************** */}
                <Row className="align-items-center justify-content-center mx-auto" >
                  <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} className="text-center mx-auto" >
                    <Button
                      className="mb-2"
                      size="sm"
                      onClick={() => filterPostOrder()}
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
                            {/* //! LOADING ISSUE HERE? */}
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
                <br />
                <br />
                <br />
                <br />
              </div >
        }
      </>
    </div >
  );
}

export default CommunityBoard;
