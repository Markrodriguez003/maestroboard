
import "./css/SiteButton.css";
import { Button, Container } from "react-bootstrap";

function SiteButton() {
  return (
    // xs, sm, md, lg , and x
    <div>
      <Container fluid>
        <Button variant="primary" size="lg" className="main-button">
          Sign Up and join the millions of artists logged in!
        </Button>
      </Container>
    </div>
  );
}

export default SiteButton;
