import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import photo from '../assets/photo.jpg'
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
              src={photo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
          />
          News App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={ NavLink } to='/'>News</Nav.Link>
            <Nav.Link as={ NavLink } to='/about'>About us</Nav.Link>
            <Nav.Link as={ NavLink } to='/contact'>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent
