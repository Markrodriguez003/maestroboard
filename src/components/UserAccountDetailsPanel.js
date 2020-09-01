import React from "react";
import "./css/UserAccountDetailsPanel.css";
import UserAccountBadgePanel from "./UserAccountBadgePanel"
import { Key } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
import { Container, ListGroup, Tabs, Tab, Card, Form, Badge, Button, Row, Col } from "react-bootstrap";

function UserAccountDetailsPanel() {
    return (
        <div>
            <Container>

                <Card>
                    <UserAccountBadgePanel />
                    <Card.Header className="lead display-4">Account Details</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>


                        <ListGroup variant="flush">
                            <ListGroup.Item>Username:</ListGroup.Item>
                            <ListGroup.Item>Password:</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>



                </Card>
            </Container>
        </div>
    );
}

export default UserAccountDetailsPanel;
