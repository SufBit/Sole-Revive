// Page 1 - CheckoutForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CheckoutForm = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const history = useNavigate();

  const handleCreditCardChange = (e) => {
    setCreditCardNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the inputted data in the parent component's state or context
    const checkoutData = {
      creditCardNumber,
      name,
      address,
    };
    // Navigate to the second page
    history('/next-page', { checkoutData });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="creditCardNumber">Credit Card Number:</label>
        <input
          type="text"
          id="creditCardNumber"
          value={creditCardNumber}
          onChange={handleCreditCardChange}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={handleAddressChange} required />
      </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
