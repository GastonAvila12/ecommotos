import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../img/logo.png";

import "../Navbar/Navbar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
        <Link to={"/"} className="link" href="http://localhost:3000/">{" "}<img src={logo} className="imgNav" alt="cuadros" href="http://localhost:3000/"></img> 
          Reznik
          E-commerce{" "}
              </Link>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link bg="dark" variant="dark">
              {" "}
              <Link to={"/"} className="link" href="http://localhost:3000/">{" "}Home{" "}
              </Link>{" "}
            </Nav.Link>
            <NavDropdown title="Motos" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/categorias/sport"> Sport </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/categorias/naked"> Naked </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
