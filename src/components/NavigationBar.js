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

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="brand-text">SoleRevive</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="mr-3">Home</Nav.Link>
            <Nav.Link href="#link" className="mr-3">Buy</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="mr-3">
              <NavDropdown.Item href="#action/3.1">Sell</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
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
              <Button variant="success" className="mr-2">Log In</Button>
              <Button variant="primary" className="mr-2">Sign Up</Button>
              <Button variant="link" className="cart-button"><FaShoppingCart /></Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};



export default NavigationBar;

