import React from 'react';
import './Header.css';
// import 'react-bootstrap'


function Header() {
  return (
    <div>
      <header>
{/* 
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Container>
        </Navbar> */}

        <div id="main-header-logo">
          <img src="./assets/imgs/MaestroBoard-Logo.png" alt="MaestroBoard Logo" id="header-icon"></img>

        </div>

        <h1>MAESTROBOARD</h1>
        <small>buy. sell. trade.connect. | Just chase your muse.</small>
      </header></div>
  );
}

export default Header;
