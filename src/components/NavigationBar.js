import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FaShoppingCart } from 'react-icons/fa'; 
import './NavigationBar.css';
import { Link } from "react-router-dom"

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand as={Link} to="/" className="brand-text"> <div className="brand-container">
            <img
              src={process.env.PUBLIC_URL + '/favicon.ico'}
              alt="Favicon"
              className="favicon"
            /> {/* Add this line */}
            SoleRevive
          </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/BuyPage" className="mr-3">Buy</Nav.Link>
        <Nav.Link as={Link} to="/sell" className="mr-3">Sell</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="mr-3">
          <NavDropdown.Item as={Link} to="/review">Reviews</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <div className="d-flex align-items-center justify-content-between flex-grow-1"> {/* Use flex-grow-1 to expand the search bar and cart button */}
        <div className="mr-3"> {/* Add margin to the right for the search bar */}
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search" className="mr-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        <div className="d-flex align-items-center"> {/* Add margin to the left for the cart button */}
          <Link to="/login" className="btn btn-success mr-2">Log In</Link>
          <Link to="/signup" className="btn btn-primary mr-2">Sign Up</Link>
          <Link to="/cart" className="btn btn-link cart-button">
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};



export default NavigationBar;

