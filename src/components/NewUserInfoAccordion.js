import React from "react";
import "./css/NewUserInfoAccordion.css";
import { EmojiSunglasses } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
import { Row, Col, Button, Card, Accordion, Jumbotron } from "react-bootstrap";
import muse from "./imgs/muse.png";
function NewUserInfoAccordion() {

    return (
        <div>
            {/* ******************************************************************************************************/}
            {/* NEWBIE INFO ACCORDION LINK */}
            {/* ******************************************************************************************************/}

            <Accordion defaultActiveKey="0" className="newbie-accordion">
                <Card className="newbie-card"  >
                    <Card.Header className="newbie-card">
                        <Accordion.Toggle as={Button} variant="link" eventKey="1" className="newbie-accordion-btn mx-auto">
                            <span className="btn-text lead"> <EmojiSunglasses className="mb-1" /> New to our site?</span>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="newbie-card">
                            <Jumbotron className="main-jumbotron">
                                <Row>
                                    <Col>
                                        <img src={muse} className="muse-logo mt-4"></img>
                                    </Col>
                                    <Col className="muse-container">
                                        <h1 className="mt-4 mr-3">Want help finding your muse?</h1>
                                        <p className="lead mr-3">
                                            Then sign up! You will be able to push your craft to higher heights by using our site.</p>
                                        <hr />

                                        <div>

                                            <ul class="newbie-ul mr-3">
                                                <li>Search by zipcode for new music gear. You can trade, sell and buy!</li>
                                                <li>Lookout for music festival dates, workshops & gear promotions!</li>
                                                <li>Read the latest gear reviews and releases!</li>
                                                <li>Look for instrument repair techs, music tutors & band managers.</li>
                                                <li>Be your own promoter! Seek out band gig or session work!</li>
                                                <li>Mingle with your fellow artists by using our forum!</li>
                                                <li>All this and more! </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                                
                                    <Button variant="info" className="btn btn-lg mb-3 newUserInfo-btn" href="/signup" >Sign Up!</Button>
                                
                            </Jumbotron>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}
export default NewUserInfoAccordion