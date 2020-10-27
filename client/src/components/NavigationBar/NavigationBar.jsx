import React from 'react';
import { Nav } from 'react-bootstrap';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="navbarDiv">
      <img
        src="https://banner2.cleanpng.com/20180420/wjq/kisspng-laboratory-flasks-erlenmeyer-flask-clip-art-5ada43f2def0c9.5368127515242536829132.jpg"
        alt="logo"
      />
      <Nav className="navbar" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link eventKey="link-1" 
          className='About-Us'
          href='/About-Us'
          >
            Meet the Team</Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link
            eventKey="link-2"
            className="character-index"
            href="/characters"
          >
            Character Index
          </Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link eventKey="link-3" className="gamestart" href="/game-start">
            Game Start
          </Nav.Link>
        </Nav.Item>

        <Nav.Item></Nav.Item>
      </Nav>
    </div>
  );
}

export default NavigationBar;
