import React from "react";
import "./css/UserSavedBoard.css";
// import corkboardImg from "./imgs/User-Corkboard.jpg";
import { TextareaResize, CaretDown } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
// import Header from "./Header";
// import Footer from "./Footer";
// import UserAccountBadgePanel from "./UserAccountBadgePanel";
// import UserAccountDetailsPanel from "./UserAccountDetailsPanel";
import PostBoardCard from "./PostBoardCard";
import {
  Card,
  Accordion,
  Carousel,
  Button,
  Row,
  Col,
} from "react-bootstrap";

function UserSavedBoard() {
  return (
    /* ********************************************************************** */
    /* USER CUSTOM BOARD */
    /* ********************************************************************** */
    <div>
      {/* User Saved Board */}
      <Accordion defaultActiveKey="0" className="entire-myboard-container">
        <Card className="accordion-container">
          <Card.Header className="">
            <h4 className="lead display-4 text-white">
              {" "}
              <span>
                {" "}
                <TextareaResize className="mr-1" />{" "}
              </span>{" "}
              My Saved Board{" "}
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <CaretDown
                  style={{ transform: "scale(1.5)", color: "white" }}
                />
              </Accordion.Toggle>
            </h4>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="1"
            ></Accordion.Toggle>
          </Card.Header>
        </Card>
        <Card className="board-container">
          <Accordion.Collapse eventKey="1">
            <Card.Body className="userBoard-corkBoard">
              {/* INSERT CARD POST HERE */}

              <div>
                {/* FIRST POST CARD-DECK */}
                <Carousel>
                  <Carousel.Item>
                    <Row>
                      <Col>
                        <PostBoardCard />
                      </Col>
                      <Col>
                        <PostBoardCard />
                      </Col>
                      <Col>
                        <PostBoardCard />
                      </Col>
                    </Row>
                  </Carousel.Item>

                  {/* SECOND POST CARD-DECK */}

                  <Carousel.Item>
                  <Row>
                      <Col>
                        <PostBoardCard />
                      </Col>
                      <Col>
                        <PostBoardCard />
                      </Col>
                      <Col>
                        <PostBoardCard />
                      </Col>
                    </Row>

                  </Carousel.Item>

                  {/* THIRD POST CARD-DECK */}
                  <Carousel.Item>
                  <Row>
                      <Col>
                        <PostBoardCard />
                      </Col>
                      <Col>
                        <PostBoardCard />
                      </Col>
                      <Col>
                        <PostBoardCard />
                      </Col>
                    </Row>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default UserSavedBoard;
