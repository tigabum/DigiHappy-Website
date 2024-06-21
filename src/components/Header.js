// src/components/Header.js
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Digihappy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/osta">
            Osta
          </Nav.Link>
          <Nav.Link as={Link} to="/senioritabletti">
            Senioritabletti
          </Nav.Link>
          <Nav.Link as={Link} to="/senioripuhelin">
            Senioripuhelin
          </Nav.Link>
          <Nav.Link as={Link} to="/turvaranneke">
            Turvaranneke
          </Nav.Link>
          <Nav.Link as={Link} to="/yrityksille">
            Yrityksille
          </Nav.Link>
          <Nav.Link as={Link} to="/meista">
            Meistä
          </Nav.Link>
          <Nav.Link as={Link} to="/blog">
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
