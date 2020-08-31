import React from "react";
import "./css/Corkboard.css";
import Header from "./Header"
import Footer from "./Footer"
import corkboardImg from "./imgs/User-Corkboard.jpg";
import PostBoardCard from "./PostBoardCard";
import { GearFill } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components

import {
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  Container,
  Accordion,
  Card,
} from "react-bootstrap";
function Corkboard() {
  return (
    // xs, sm, md, lg , and x
    <div>
      <Header />
      <div>
        {/* ********************************************************************** */}
        {/* DROP FILTERS */}
        {/* ********************************************************************** */}

        {/* <Accordion defaultActiveKey="0" className="user-board-accordion">
          <Card className="user-board-accordion">
            <Card.Header className="user-board-accordion">
              <h4 className="display-4 corkBoard-title">My Saved Board</h4>

              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="1"
              ></Accordion.Toggle>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="user-board-accordion">  <img
                src={corkboardImg}
                alt="corkboard image"
                className="myBoard"
              /></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
 */}



        <h4 className="display-4 corkBoard-title">Community Board</h4>
        {/* ************************ */}
        {/* FILTER - SEARCH BUTTONS */}
        {/* ************************ */}
        <Container>
          <div className="filter-btn-container">
            <Row className="" xs sm md lg={6}>
              <Col xs sm md lg={2}>
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Filter:
                </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Selling Gear</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Buying Gear</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Looking To Trade
                  </Dropdown.Item>
                    <Dropdown.Item href="#/action-4">
                      Looking for Gigs
                  </Dropdown.Item>
                    <Dropdown.Item href="#/action-5">
                      Looking for Bandmate
                  </Dropdown.Item>
                    <Dropdown.Item href="#/action-6">
                      Looking for to Jam
                  </Dropdown.Item>
                    <Dropdown.Item href="#/action-7">
                      Looking for Music Teacher
                  </Dropdown.Item>
                    <Dropdown.Item href="#/action-8">
                      Looking for Promoter
                  </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col xs sm md lg={2}>
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Instrument:
                </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-9">
                      Electric Guitar
                  </Dropdown.Item>
                    <Dropdown.Item href="#/action-10">Bass</Dropdown.Item>
                    <Dropdown.Item href="#/action-11">Drums</Dropdown.Item>
                    <Dropdown.Item href="#/action-12">Percussion</Dropdown.Item>
                    <Dropdown.Item href="#/action-13">Brass</Dropdown.Item>
                    <Dropdown.Item href="#/action-14">Woodwind</Dropdown.Item>
                    <Dropdown.Item href="#/action-15">Microphones</Dropdown.Item>
                    <Dropdown.Item href="#/action-16">
                      Recording Studio Equipment
                  </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              <Col xs sm md lg={2}>
                <Form.Group>
                  <Form.Control type="text" placeholder="Enter Zipcode" />
                </Form.Group>
              </Col>

              <Col xs sm md lg={3}>
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Miles from Zipcode:
                </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-10">5 Miles</Dropdown.Item>
                    <Dropdown.Item href="#/action-11">15 Miles</Dropdown.Item>
                    <Dropdown.Item href="#/action-12">35 Miles</Dropdown.Item>
                    <Dropdown.Item href="#/action-13">80 Miles</Dropdown.Item>
                    <Dropdown.Item href="#/action-15">120 Miles</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs sm md lg={2}>
                {" "}
                <Button variant="info">Search!</Button>{" "}
              </Col>

            </Row>
          </div>
        </Container>
      </div>

      {/* ********************************************************************** */}
      {/* CORKBOARD */}
      {/* ********************************************************************** */}

      <img src={corkboardImg} alt="corkboard image" className="board"></img>

      {/* ********************************************************************** */}
      {/* CORKBOARD CARDS */}
      {/* ********************************************************************** */}
      <PostBoardCard />
      {/* <Container className="corkboard-card-container">
        <Row>
          <Col xs sm md lg={4} className="individualCard">
            <PostBoardCard />
          </Col>
          <Col xs sm md lg={4} className="individualCard">
            <PostBoardCard />
          </Col>
          <Col xs sm md lg={4} className="individualCard">
            <PostBoardCard />
          </Col>
          <Col xs sm md lg={4} className="individualCard">
            <PostBoardCard />
          </Col>
       
        </Row>
      </Container> */}

      {/* ********************************************************************** */}
      {/* FOOTER */}
      {/* ********************************************************************** */}

      <Footer />
    </div>
  );
}

export default Corkboard;
