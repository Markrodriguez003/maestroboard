import React from "react";
import "./IntroCard.css";
import { CardDeck, Card, Row, Col, Container } from "react-bootstrap";
/*
    Card components for the intro page. There are 3 in the front page
*/
function IntroCard() {
  // let cardColor = "rgb(9, 173, 173)";

  return (
    // xs, sm, md, lg, and x style={{backgroundColor: "lightblue"}}
    <div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="img_avatar.png" alt="Avatar" />
            <div class="card">
              <h1>John Doe</h1>
              <p class="title">CEO Founder, Example</p>
              <p>Harvard University</p>
              <a href="#"><i class="fa fa-dribbble"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
              <a href="#"><i class="fa fa-facebook"></i></a>
              <p><button>Contact</button></p>
            </div>
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect  Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroCard;









/* OLD BOOTSTRAP CARD.. FUCKING SUCKS
  <Row >
          <Col style={{ backgroundColor: "transparent" }}>
            <Card>
              <Card.Img variant="top" src="#" className="intro-imgs" />
              <Card.Body style={{ backgroundColor: cardColor }}>
                <Card.Title className="intro-card-text">
                  Look for the best deals!
              </Card.Title>
                <Card.Text className="intro-card-text">
                  <hr></hr>
                Buy, sell, trade music gear by zip code using our community
                boards. And the best part? It's free to sign up!
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="#" className="intro-imgs" />
              <Card.Body style={{ backgroundColor: cardColor }}>
                <Card.Title className="intro-card-text">
                  Look for the best deals!
              </Card.Title>
                <Card.Text className="intro-card-text">
                  <hr></hr>
                Buy, sell, trade music gear by zip code using our community
                boards. And the best part? It's free to sign up!
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src="#" className="intro-imgs" />
              <Card.Body style={{ backgroundColor: cardColor }}>
                <Card.Title className="intro-card-text">
                  Look for the best deals!
              </Card.Title>
                <Card.Text className="intro-card-text">
                  <hr></hr>
                Buy, sell, trade music gear by zip code using our community
                boards. And the best part? It's free to sign up!
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="#" className="intro-imgs" />
              <Card.Body style={{ backgroundColor: cardColor }}>
                <Card.Title className="intro-card-text">
                  Look for the best deals!
              </Card.Title>
                <Card.Text className="intro-card-text">
                  <hr></hr>
                Buy, sell, trade music gear by zip code using our community
                boards. And the best part? It's free to sign up!
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
*/

/*
<CardDeck>
          <Card>
            <Card.Img variant="top" src="#" className="intro-imgs" />
            <Card.Body style={{ backgroundColor: cardColor }}>
              <Card.Title className="intro-card-text">
                Look for the best deals!
            </Card.Title>
              <Card.Text className="intro-card-text">
                <hr></hr>
              Buy, sell, trade music gear by zip code using our community
              boards. And the best part? It's free to sign up!
            </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body style={{ backgroundColor: cardColor }}>
              <Card.Title className="intro-card-text">
                Find your next bandmate!
            </Card.Title>
              <Card.Text className="intro-card-text">
                <hr></hr>
              Fill in that empty slot with a new bandmate! Use our forums or our
              community boards to find bandmembers. Search options include genre
              and band role.
            </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body style={{ backgroundColor: cardColor }}>
              <Card.Title className="intro-card-text">
                Book your next gig!
            </Card.Title>
              <Card.Text className="intro-card-text">
                <hr></hr>
              You want a place to book your next band gig? You want to search
              for next tour? Or perhaps you want to offer your skills as a music
              teacher? Well, this is the place to be!
            </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body style={{ backgroundColor: cardColor }}>
              <Card.Title className="intro-card-text">
                Share and meet new musicians and artists vai our forums!
            </Card.Title>
              <Card.Text className="intro-card-text">
                <hr></hr>
              Ask questions, talk about the latest greatest album or review that next progressive jazz rock album that just came out!
              Get to know your fellow artist!
            </Card.Text>
            </Card.Body>
          </Card>
      </Ca

*/
