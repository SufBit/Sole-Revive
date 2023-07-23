// Page 1 - CheckoutForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [name, setName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const history = useNavigate();

  const handleCreditCardChange = (e) => {
    setCreditCardNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStreetAddressChange = (e) => {
    setStreetAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the inputted data in the parent component's state or context
    const checkoutData = {
      creditCardNumber,
      name,
      streetAddress,
      city,
      zipCode,
    };
    // Navigate to the order confirmation page once submitted, user info gets passed throguh useNavigate
    history('/next-page', { checkoutData });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',
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
          <label htmlFor="streetAddress">Street Address:</label>
          <input
            type="text"
            id="streetAddress"
            value={streetAddress}
            onChange={handleStreetAddressChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" value={city} onChange={handleCityChange} required />
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input type="text" id="zipCode" value={zipCode} onChange={handleZipCodeChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
