// REACT
import { useState, useEffect, Suspense, lazy } from "react";

// LIBRARIES
import axios from "axios";

// DESIGN
import { Newspaper } from "react-bootstrap-icons";

// COMPONENTS
import { Row, Col, Carousel, Image, Container, Stack, Button } from "react-bootstrap";
// import NewsArticle from "../NewsArticle";
import HeaderPanel from "../ui/HeaderPanel";
import QuickArticlesPanel from "../ui/QuickArticlesPanel";
const NewsArticle = lazy(() => import('../NewsArticle'));

// TEST ARTICLES
import testArticles from "../../../server/scripts/quickArticles.json";

// TEST IMAGES
import art0 from "../../assets/imgs/article-imgs/Article-6.png";
import art1 from "../../assets/imgs/article-imgs/Article-7.jpg";
import art2 from "../../assets/imgs/article-imgs/cherry_audio_filtomika-uuzeCu5kdMie8Q2mvxdJyEhnqkQsd5uI.jpg";
import art3 from "../../assets/imgs/article-imgs/sonicware_cydrums-zarNCId1V3mndGsHKl2qxggf2yTkPlHz.jpg";
import art4 from "../../assets/imgs/article-imgs/ReasonStudiosReason13_01-PCQEOqvQcRmoHW4.vaAbh2bBWaPic.G..jpg";
import art5 from "../../assets/imgs/article-imgs/gforce_icondrum-VbBqP7q2fhho0u4Owuy8ogyQcWb0dJbu.jpg";
import art6 from "../../assets/imgs/article-imgs/dw_soundworks_pure_cherry-h9x72Z7Ge1ztQJch1lAtKS_NHwcFNxnT.jpg";
import art7 from "../../assets/imgs/article-imgs/acustica_thing_th2-XoCqxvfulcyTbOSNFTxmm5ho4Uh4WaV..jpg";
import art8 from "../../assets/imgs/article-imgs/ferrofish-pulse-8-ae-lifestyle_shot01-K4f..DPWtq2sGQZvoCd72StfAdOb3AX9.jpeg";
import art9 from "../../assets/imgs/article-imgs/shure_mv7i-QBocPxIf61AupuKTF1yVbCJsl691_CtL.jpg";
import art10 from "../../assets/imgs/article-imgs/vsl_duality_strings_fx-.cy.Viyobd9Q8RpRi.rBwglDVpgQs2qq.jpg";
import art11 from "../../assets/imgs/article-imgs/heritage_audio_britstrip-S0QZft37xbhlqBFNJGgNn0DlQ9LmeCYi.jpg";
import art12 from "../../assets/imgs/article-imgs/ehx_pico_360_looper-rFLWiQqGq7BTFISnWlnRqJm4_br75Srs.jpg";
import art13 from "../../assets/imgs/article-imgs/noise_makers_studio_verb-_f0mRUoqFz2ji2ierL8k7t6j_XFJl8BM.jpg";
import art14 from "../../assets/imgs/article-imgs/arturia_minifreak_update-SUJg_hvE3.61xEorshylhFt7pBmbuN0w.jpg";
import art15 from "../../assets/imgs/article-imgs/tracktion_biotek_3-rck6L30aXYxytjFU216BJV8Bx8VkSlq7.jpg";
import art16 from "../../assets/imgs/article-imgs/softube_console_1_mkiii_update-lAbiWXNWCaZT.1BkrSgJ8dOOTsjQYBih.jpg";
import art17 from "../../assets/imgs/article-imgs/hamstead_soundworks_redwing-1Z6d9c0kRf1n7lq.jlRWhmZyH579VAG6.jpg";
import LoadingSpinner from "../ui/LoadingSpinner";


// TEST IMAGES
const exampleImages = [
  art0,
  art1,
  art2,
  art3,
  art4,
  art5,
  art6,
  art7,
  art8,
  art9,
  art10,
  art11,
  art12,
  art13,
  art14,
  art15,
  art16,
  art17,
]


/*----------------------------------------------------------------------------
|   ⚙️ Use: News page that will show news articles and announcements
|                  
|   🔧 Todo: Search / filter options for pulling articles
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function News(props) {


  const ARTICLE_PAGINATION_LIMIT = 12;

  const [articles, setArticles] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);


  {/* ********************************************************************** */ }
  {/* GRABS ARTICLES FROM BACK-END*/ }
  {/* ********************************************************************** */ }

  const fetchArticles = async (cursor) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3005/api/articles/fetch?limit=${ARTICLE_PAGINATION_LIMIT}${cursor ? `&cursor=${cursor}` : ''}`);
      setArticles(prevItems => [...prevItems, ...response.data.data]);
      setNextCursor(response.data.nextCursor);
    } catch (error) {
      console.error('Error fetching articles!:', error);
    } finally {
      setLoading(false);
    }
  };

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
        <div>
          <Container fluid>
            <Row lg={2} xs={1} sm={1} className="justify-content-start p-3">
              <Col lg={8} className="w-">
                <Carousel className="mt-0" style={{ width: "100%" }}>
                  {
                    articles.map(function (a, i) {
                      return (
                        <Carousel.Item style={{ textAlign: "center" }} key={`top-carousel-article-${i}`}>
                          <Image src={exampleImages[i]} width={"100%"} height={"550px"} className="mx-auto" style={{ objectFit: "cover" }} />
                          <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.75)" }}>
                            <h3>{a.title}</h3>
                            <p>{a.subTitle}</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      )
                    })
                  }
                </Carousel >
              </Col>

              <Col lg={4}>
                <QuickArticlesPanel articles={testArticles} />
              </Col>
            </Row >
          </Container>

          <hr style={{ color: "white" }} />
          <Suspense fallback={<LoadingSpinner type="grow" title="Loading Article" />}>
            {
              articles.map(function (a, i) {
                return (
                  < NewsArticle key={`${articles.title} - ${i}`} article={articles[i]} rowInverse={i % 2 === 1 ? "flex-row-reverse" : "flex-row"} artImage={exampleImages[i]} />
                )
              })
            }
          </Suspense>
          <div>
            {loading && <p>Loading...</p>}
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


