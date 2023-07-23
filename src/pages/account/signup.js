import React, { Component } from 'react';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      signupSuccess: false,
      alreadyRegistered: false, // Track if user is already registered
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSignUp = (event) => {
    event.preventDefault();

    // Use email as the username
    const { email, password } = this.state;

    // Create the user object
    const user = {
      username: email, // Use email as the username
      password,
    };

    // Fetch the signup API endpoint with the user data
    fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the response from the server

        if (data.message === 'Username is already taken') {
          this.setState({ alreadyRegistered: true }); // Set already registered to true
        } else {
          this.setState({ signupSuccess: true }); // Set signup success to true
        }
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
  };

  render() {
    const { email, password, signupSuccess, alreadyRegistered } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <form
          style={{
            border: '1px solid black',
            padding: '20px',
            borderRadius: '5px',
            width: '400px',
          }}
          onSubmit={this.handleSignUp}
        >
          <h3>Sign Up</h3>
          {signupSuccess && (
            <p style={{ color: 'green' }}>Signup successful! Please log in.</p>
          )}
          {alreadyRegistered && (
            <p style={{ color: 'red' }}>You are already registered. Please log in.</p>
          )}
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/login">sign in?</a>
          </p>
        </form>
      </div>
    );
  }
}

