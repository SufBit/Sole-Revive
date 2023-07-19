import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FaShoppingCart } from 'react-icons/fa'; 
import './NavigationBar.css';
import { Link, useNavigate } from "react-router-dom"
import UserDropdown from './UserDropdown';


const NavigationBar = ({ isLoggedIn, handleLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const navigate = useNavigate();


  const fetchSearchSuggestions = (query) => {
    fetch(`http://localhost:3001/api/suggestions?suggestion=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchSuggestions(data);
      })
      .catch((error) => {
        console.error('Error fetching search suggestions:', error);
      });
  };

  useEffect(() => {
    fetchSearchSuggestions(searchQuery);
  }, [searchQuery]);

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSearchSuggestions([]);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }

    // Navigate to ShoeDisplay page with the selected shoe's ID as a parameter
    navigate(`/shoes/${searchQuery}`);
  };

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
      <div className="mr-3">
          <div className="search-bar-container">
            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
            {searchSuggestions.length > 0 && (
              <ul className="list-group mt-2 suggestions-container">
                {searchSuggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="list-group-item suggestion-item"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="d-flex align-items-center">
              <div className="mr-2">
                {!isLoggedIn && (
                  <Link to="/login" className="btn btn-success">
                    Log In
                  </Link>
                )}
              </div>
              <div className="mr-2">
                {!isLoggedIn && (
                  <Link to="/signup" className="btn btn-primary">
                    Sign Up
                  </Link>
                )}
              </div>
              {isLoggedIn && <UserDropdown handleLogout={handleLogout}/>}
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

