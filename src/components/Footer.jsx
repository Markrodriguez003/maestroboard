
import "./css/Footer.css";
import { Navbar, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <div>

      <Navbar sticky="bottom"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="main-footer"
      >
        <a href="#">
          <img
            className="footer-icon"
            src="./assets/imgs/Maestro-Logo-R.png"
            alt="MaestroBoard Logo"
          ></img>
        </a>
        <Row>
          <Col>
            <Navbar.Brand href="#home" className="footer-title d-flex float-right">
              MaestroBoard
              <small className="footer-small-text">
                buy. sell. trade.connect. |{"  "}
                <span className="footer-muse-small">
                  {" "}
                  Chase your <span>
                    <a
                      href="https://en.wikipedia.org/wiki/Euterpe#:~:text=Euterpe%20(%2Fju%CB%90%CB%88t,named%20muse%20of%20lyric%20poetry."
                      className="muse-anchor"
                    >
                      muse
                    </a></span>
                  .{" "}
                </span>
              </small>
            </Navbar.Brand>
          </Col>
          {/* <Col>
              <a href="#">Site-map</a>
              <a href="#">Legal</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
          
          </Col> */}
        </Row>

      </Navbar>
    </div >
  );
}

export default Footer;
