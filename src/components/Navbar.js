import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navibar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-hover">Home</Nav.Link>
            <Nav.Link as={Link} to="/academics" className="nav-hover">Academics</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-hover">Projects</Nav.Link>
            <Nav.Link as={Link} to="/skills" className="nav-hover">Skills</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-hover">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;