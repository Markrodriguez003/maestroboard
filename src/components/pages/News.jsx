// REACT
import { useState, useEffect, Suspense, lazy } from "react";

// LIBRARIES
import axios from "axios";
import { Link } from "react-router";

// ASSETS
import defaultImage from "../../assets/imgs/misc/missing-img.png";
import advertisment from "../../assets/imgs/ads/5541626.jpg"


// COMPONENTS
import { Row, Col, Carousel, Image, Container, Stack, Button } from "react-bootstrap";
import HeaderPanel from "../ui/HeaderPanel";
import QuickArticlesPanel from "../ui/QuickArticlesPanel";
import LoadingSpinner from "../ui/LoadingSpinner";

// LAZY COMPONENTS
const NewsArticle = lazy(() => import('../NewsArticle'));

// TEST ARTICLES
import testArticles from "../../../server/scripts/quickArticles.json";

/*----------------------------------------------------------------------------
|   ⚙️ Use: News page that will show news articles and announcements
|                  
|   🔧 Todo: Search / filter options for pulling articles
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function News(props) {
  // # OF ARTICLES TO PULL
  const ARTICLE_PAGINATION_LIMIT = 12;

  // HOLDS PULLED ARTICLES
  const [articles, setArticles] = useState([]);

  // HOLDS PULLED ARTICLES FOR CAROUSEL
  const [carouselArticles, setCarouselArticles] = useState([]);

  // HOLDS NEXT ARTICLE ID PLACE TO PULL NEW SET OF ARTICLES FROM DB
  const [nextCursor, setNextCursor] = useState(null);

  // SETS PULLED ARTICLES STATE
  const [loading, setLoading] = useState(false);


  {/* ********************************************************************** */ }
  {/* GRABS ARTICLES FROM BACK-END*/ }
  {/* ********************************************************************** */ }

  const fetchArticles = async (cursor) => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/api/articles/fetch?limit=${ARTICLE_PAGINATION_LIMIT}${cursor ? `&cursor=${cursor}` : ''}`);
      setArticles(prevItems => [...prevItems, ...response.data.data]);

      if (cursor === undefined || cursor.length === 0) {
        setCarouselArticles(() => [...response.data.data]);
      }

      setNextCursor(response.data.nextCursor);


    } catch (error) {
      console.error('Error fetching articles!:', error);
    } finally {
      setLoading(false);
    }
  };

  // SCROLLS TO TOP WHEN NAVIGATING FROM A PREVIOUS WINDOW
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    fetchArticles();
  }, []);

  const loadMore = () => {
    if (nextCursor) {
      fetchArticles(nextCursor);
    }
  };
  return (
    <>

      {articles !== undefined
        ?
        <div className="mb-5">
          <Container fluid className="p-0 m-0 mt-3">
            <Row lg={2} xs={1} sm={1} className="justify-content-start p-0 m-0">
              <Col lg={8} sm={12} xs={12} md={12} xl={8} className="m-0 p-0 mb-2">
                {
                  carouselArticles.length !== 0 ? <Carousel className="m-0 p-0">
                    {
                      carouselArticles.slice(0, 5).map((article, index) => {
                        return (
                          <Carousel.Item style={{ textAlign: "center" }} key={`top-carousel-article-${index}`}>
                            <Image
                              src={article.image_urls ? article.image_urls[0] : defaultImage}
                              width={"100%"}
                              height={"550px"}
                              className="mx-auto"
                              style={{ objectFit: "cover" }}
                              onError={event => {
                                event.target.onerror = null
                                event.target.src = defaultImage
                              }}
                            />
                            <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.75)" }}>
                              <h3>{article.title}</h3>
                              <p>{article.subTitle}</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        )
                      })
                    }
                  </Carousel > :
                    <>
                      <br />
                      <HeaderPanel width="w-75">
                        <LoadingSpinner title={"Loading Articles"} />
                        <br />
                        <br />
                      </HeaderPanel>
                    </>
                }
              </Col>

              <Col lg={4}>
                <QuickArticlesPanel articles={testArticles} />
              </Col>
            </Row >
          </Container>

          <hr style={{ color: "white" }} />

          {/* ADVERTISMENT */}
          <Link to={"https://guitarcenter.com"} >
            <Image src={advertisment} className="w-100" />
          </Link>

          {/* ARTICLES */}
          <Suspense fallback={<LoadingSpinner type="grow" title="Loading Article" />}>
            {
              articles.map(function (a, i) {
                return (
                  < NewsArticle key={`${articles.title} - ${i}`} article={articles[i]} rowInverse={i % 2 === 1 ? "flex-row-reverse" : "flex-row"} artImage={a.image_urls[0]} />
                )
              })
            }
          </Suspense>
          <div>
            {loading &&
              <>
                <br />
                <HeaderPanel width="w-75">
                  <LoadingSpinner title={"Loading Articles"} />
                </HeaderPanel>
              </>
            }
            {nextCursor && !loading && (
              <div className="mx-auto text-center mt-4">
                <Button variant="secondary" onClick={loadMore}>Load More Articles</Button>
              </div>
            )}
          </div>
        </div>
        :
        <div style={{ marginBottom: "500px", marginTop: "150px" }}>
          <LoadingSpinner type="grow" title="Loading News" />
        </div>
      }
    </>
  );
}

export default News;


