import React from "react";
import "./css/UserBoard.css";
import corkboardImg from "./imgs/User-Corkboard.jpg";
import { CaretDown } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
import Header from "./Header"
import Footer from "./Footer"
import UserAccountBadgePanel from "./UserAccountBadgePanel"
import UserAccountDetailsPanel from "./UserAccountBadgePanel"
import { Card, Accordion, Form, Button, Row, Col } from "react-bootstrap";

function UserBoard() {
    return (

        /* ********************************************************************** */
        /* USER CUSTOM BOARD */
        /* ********************************************************************** */
        <div >
            {/* User Saved Board */}
            <Accordion defaultActiveKey="0" className="entire-myboard-container">
                <Card className="accordion-container">
                    <Card.Header className="">
                        <h4 className="userBoard-header display-4">My Saved Board  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <CaretDown style={{ transform: "scale(1.5)", color: "white" }} />
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
                        <Card.Body className="userBoard-corkBoard">  <img
                            src={corkboardImg}
                            alt="corkboard image"
                            className="myBoard"
                        /></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div >


    );
}

export default UserBoard;








