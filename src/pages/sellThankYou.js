import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    color: 'green',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'green',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};

function SellThankYouPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Thank you for selling your shoes to us.</h1>
      <p style={styles.message}>You can view the estimated price and item in the "Sold" option under your user profile.</p>
      <Link to="/sellData" style={styles.button}>Take me there</Link>
    </div>
  );
}

export default SellThankYouPage;
