import React from "react";
import "./components/css/xampleBoard.css";
import { Row, Col, Card, Container } from "react-bootstrap";

function ExampleBoard() {
  let cardColor = "rgb(9, 173, 173)";

  return (
    // xs, sm, md, lg , and x
    <div className="main-example-board-container">
      <hr></hr>
      <Container fluid>
        <Row>
          <Col xs sm md lg={7}>
            <img
              src="./assets/imgs/example-corkboard.png"
              className="main-example-board"
            ></img>
          </Col>
          <Col xs sm md lg={5}>
            <Card>
              <Card.Img variant="top" src="#" className="intro-imgs" />
              <Card.Body style={{ backgroundColor: cardColor }}>
                <Card.Title className="intro-card-text">
                  Our community boards are stocked with new posts and inquiries hourly!
                </Card.Title>
                <Card.Text className="intro-card-text">
                  <hr></hr>
                  Search for any instrument locally or nationally by zip code.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ExampleBoard;
