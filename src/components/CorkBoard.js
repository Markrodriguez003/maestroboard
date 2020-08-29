import React from "react";
import "./css/Corkboard.css";
import { Row, Col, Button, Dropdown, Container } from "react-bootstrap";
import corkboardImg from "./imgs/Corkboard.jpg";

function Corkboard() {
    return (
        // xs, sm, md, lg , and x
        <div>
            <div>
                <Container className="filter-btn-container">

                    <Row>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Filter:
                            </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Selling Gear</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Buying Gear</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Looking To Trade</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Looking for Gigs</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Looking for Bandmate</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Looking for to Jam</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Looking for Music Teacher</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Looking for Promoter</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        {/* ************************ */}
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Instrument:
                            </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Electric Guitar</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Bass</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Drums</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Percussion</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Brass</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Woodwind</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Microphones</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Recording Studio Equipment</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>

                </Container>
            </div>


            <img src={corkboardImg} alt="corkboard image" className="board mx-auto text-center"></img>
        </div>
    );
}

export default Corkboard;
