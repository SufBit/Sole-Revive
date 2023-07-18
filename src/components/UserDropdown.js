import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './UserDropdown.css';
import { Link } from 'react-router-dom';

const UserDropdown = ({handleLogout }) => {

  const handleLogoutClick = () => {
    // Call the handleLogout function passed from the parent component
    handleLogout();
  };

  return (
    <NavDropdown title={<UserAvatar />} id="basic-nav-dropdown" align="end" className="mr-3">
      <NavDropdown.Item as={Link} to="/bought">Bought</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="./sellData">Sold</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="./WishList">Wishlist</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={handleLogoutClick}>Log out</NavDropdown.Item>
    </NavDropdown>
  );
};

const UserAvatar = () => {
  return (
    <div className="user-avatar">
      {/* Replace the following line with your user avatar component */}
      <img src={process.env.PUBLIC_URL + '/images/User.png'} alt="User Avatar" className="avatar" />
    </div>
  );
};

export default UserDropdown;
