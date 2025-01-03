
import "./css/UserAccountDetailsPanel.css";
import UserAccountBadgePanel from "./UserAccountBadgePanel";
import UserSavedBoard from "./UserSavedBoard";
import { People, Gear, CaretDown } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
import {
  Accordion,
  Container,
  ListGroup,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";

let userAccountDetails = {
  userName: "Asmongo1S4",
  email: "amsongo22@gmail.com",
  phoneNumber: "08645897755",
  altPhoneNumber: "091286421",
  userAddress: {
    address1: "Five Square Tower",
    address2: "1762-02 NW 317th Ave",
    zip: "2009E73",
    city: "Miami",
    country: "United States",
  },
  joinDate: "12/12/21",
};

function UserAccountDetailsPanel() {
  return (
    <div>
      <Container className="details-panel-container">
        <Card>
          {/* **************** */}
          {/* USERBOARD POST PANEL */}
          {/* **************** */}
          <UserSavedBoard />
          {/* **************** */}
          {/* USER BADGES PANEL */}
          {/* **************** */}
          <UserAccountBadgePanel />

          {/* **************** */}
          {/* ACCOUNT INFORMATION PANEL */}
          {/* **************** */}

          <div>
            <Accordion
              defaultActiveKey="0"
              className="entire-Userdetails-container"
            >
              <Card className="accordion-details-container">
                <Card.Header className="">
                  <h4 className="lead display-4 text-white">
                    {" "}
                    <span>
                      {" "}
                      <People />{" "}
                    </span>{" "}
                    Account Details{" "}
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
              <Card className="board-details-container">
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {/* **************** */}
                    <div>
                      <Card.Header className="lead display-4"></Card.Header>
                      <Card.Body>
                        <Card.Title className="panel-sub-header">
                          Account Credentials
                        </Card.Title>
                        <Card.Text>
                          <em className="text-secondary lead">
                            {" "}
                            Please keep all information up to date and do not
                            share any of this information to any users.{" "}
                          </em>
                        </Card.Text>
                        <ListGroup variant="flush">
                          <Row>
                            <Col>
                              <ListGroup.Item>
                                <span className="font-weight-bold">
                                  Username:
                                </span>{" "}
                                {userAccountDetails.userName}
                              </ListGroup.Item>
                            </Col>

                            <Col>
                              <ListGroup.Item>
                                <a href="#">Change Username </a>
                                <Gear />{" "}
                              </ListGroup.Item>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <ListGroup.Item>
                                <span className="font-weight-bold">
                                  Password:{" "}
                                </span>{" "}
                                **********
                              </ListGroup.Item>
                            </Col>
                            <Col>
                              <ListGroup.Item>
                                <a href="#">Change Password </a>
                                <Gear />{" "}
                              </ListGroup.Item>
                            </Col>
                          </Row>
                          <hr />
                          <Row>
                            <Col>
                              <Card.Title className="panel-sub-header">
                                <span className="panel-sub-header">
                                  Contact Information
                                </span>
                              </Card.Title>
                            </Col>

                            <Col className="change-setting-fx">
                              {" "}
                              <a href="#">Change Settings</a> <Gear />
                            </Col>
                          </Row>
                          <ListGroup.Item>
                            {" "}
                            <span className="font-weight-bold">
                              Address 1:{" "}
                            </span>{" "}
                            {userAccountDetails.userAddress.address1}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span className="font-weight-bold">
                              Address 2:{" "}
                            </span>
                            {userAccountDetails.userAddress.address2}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span className="font-weight-bold">Zipcode: </span>
                            {userAccountDetails.userAddress.zip}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span className="font-weight-bold">Country: </span>
                            {userAccountDetails.userAddress.country}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span className="font-weight-bold">Email: </span>
                            {userAccountDetails.email}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span className="font-weight-bold">
                              Phone Number:{" "}
                            </span>
                            {userAccountDetails.phoneNumber}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <span className="font-weight-bold">
                              Alternate Phone Number:{" "}
                            </span>
                            {userAccountDetails.altPhoneNumber}
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Button variant="outline-danger">
                              Delete Account
                            </Button>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default UserAccountDetailsPanel;
