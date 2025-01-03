
import "./css/UserAccountBadgePanel.css";
import { PieChartFill } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
import { Badge, Button, Row, Col } from "react-bootstrap";

const userProfileDetails = {
  forumAlerts: 5,
  savePosts: 3,
  totalPosts: 2,
  unreadMessages: 6,
};

function UserAccountBadgePanel() {
  return (
    <div className="userBadgeContainer-bg mx-auto text-center">
      <h4 className="lead display-4 text-black float-left ml-3">
        <span>
          <PieChartFill />
        </span>{" "}
        Account Updates{" "}
      </h4>
      <Row className="userBadgeContainer">
        <Col xs sm md lg={3}>
          <Button variant="info">
            Saved Posts{" "}
            <Badge variant="light">{userProfileDetails.savePosts}</Badge>
            <span className="sr-only">Save Posts</span>
          </Button>
        </Col>
        <Col xs sm md lg={3}>
          <Button variant="success">
            User posts{" "}
            <Badge variant="light">{userProfileDetails.totalPosts}</Badge>
            <span className="sr-only">User posts </span>
          </Button>
        </Col>
        <Col xs sm md lg={3}>
          <Button variant="warning">
            Unread Forum Messages{" "}
            <Badge variant="light">{userProfileDetails.forumAlerts}</Badge>
            <span className="sr-only">Unread Forum Messages </span>
          </Button>
        </Col>
        <Col xs sm md lg={3}>
          <Button variant="primary">
            Unread Messages{" "}
            <Badge variant="light">{userProfileDetails.unreadMessages}</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default UserAccountBadgePanel;
