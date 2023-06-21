import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home" className="brand-text">SoleRevive</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className="d-flex align-items-center justify-content-start"> {/* Use a container div for centering */}
            <Form className="d-flex">
              <FormControl type="text" placeholder="Search" className="mr-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
        </div>
        <Nav>
          <Button variant="success" className="ml-2">Log In</Button>
          <Button variant="primary" className="ml-2">Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};



export default NavigationBar;

