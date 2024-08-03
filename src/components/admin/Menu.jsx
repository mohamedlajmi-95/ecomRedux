import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>BY LAJMI</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/categories">
            CATEGORIES
          </Nav.Link>
          <Nav.Link as={Link} to="/scategories">
            SOUS CATEGORIES
          </Nav.Link>
          <Nav.Link as={Link} to="/articles">
            LIST ARTICLES
          </Nav.Link>
        </Nav>
      </Container>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="success">Chercher</Button>
      </Form>
    </Navbar>
  );
};

export default Menu;
