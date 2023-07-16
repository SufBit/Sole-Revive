import React, { useState } from 'react';
import './sell.css'; // Import the CSS file for Sell component
import { Link } from 'react-router-dom';


function Sell() {
  const [shoe, setShoe] = useState('');
  const [size, setSize] = useState('');
  const [offer, setOffer] = useState('');
  const [image, setImage] = useState(null);
  const [condition, setCondition] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleShoeChange = (event) => {
    const { value } = event.target;
    setShoe(value);

    // Fetch the suggestions from the backend API
    fetch(`http://localhost:3001/api/suggestions?suggestion=${value}`)
      .then((response) => response.json())
      .then((data) => {
        setSuggestions(data);
      })
      .catch((error) => {
        console.error('Error fetching suggestions:', error);
      });
  };

  const handleSuggestionClick = (suggestion) => {
    setShoe(suggestion);
    setSuggestions([]); // Clear suggestions
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleOfferChange = (event) => {
    setOffer(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    try {
      // Fetch the sneakers data from the backend API
      fetch('http://localhost:3001/api/sneakers')
        .then((response) => response.json())
        .then((sneakersData) => {
          // Find the sneaker data based on the shoe name
          const sneaker = sneakersData.find((item) => item.name === shoe);
  
          if (sneaker && sneaker.stockXprice) {
            // Calculate the reduced price based on the condition and stockXprice
            let reducedPrice = offer;
            if (condition === 'Used - Excellent') {
              reducedPrice = sneaker.stockXprice * 0.8; // 80% of stockXprice
            } else if (condition === 'Used - Good') {
              reducedPrice = sneaker.stockXprice * 0.7; // 70% of stockXprice
            } else if (condition === 'Used - Fair') {
              reducedPrice = sneaker.stockXprice * 0.6; // 60% of stockXprice
            } else if (condition === 'Used - Poor') {
              reducedPrice = sneaker.stockXprice * 0.5; // 50% of stockXprice
            }
  
            // Create an object with the sell data
            const sellData = {
              name: shoe,
              price: reducedPrice,
              condition,
              image
            };
  
            // Send the sell data to your endpoint
            fetch('http://localhost:3001/api/sell', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(sellData),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log('Sell data submitted successfully:', data);
                // Optionally, you can redirect the user to a different page or perform other actions
              })
              .catch((error) => {
                console.error('Error submitting sell data:', error);
                // Handle the error
              });
          } else {
            console.error('Error fetching sneaker data or stockXprice not found');
          }
        })
        .catch((error) => {
          console.error('Error fetching sneakers data:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  

  return (
    <div className="sell-container">
      <h1 className="sell-heading">Sell Your Worn-Out Shoes</h1>
      <form onSubmit={handleSubmit} className="sell-form">
        <label>
          Shoe:
          <input type="text" className="form-control" id="shoeInput" value={shoe} onChange={handleShoeChange} />
          {suggestions.length > 0 && (
            <ul className="list-group mt-2">
              {suggestions.map((suggestion) => (
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
        </label>
        <br />
        <label>
          Size (US):
          <select value={size} onChange={handleSizeChange}>
            <option value="">Select size</option>
            {[...Array(16)].map((_, index) => (
              <option value={`Men ${index + 6}`} key={`men-${index + 6}`}>Men {index + 6}</option>
            ))}
            {[...Array(15)].map((_, index) => (
              <option value={`Women ${index + 6}`} key={`women-${index + 6}`}>Women {index + 6}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Offer Price:
          <input type="text" value={offer} onChange={handleOfferChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <br />
        <label>
          Condition:
          <select value={condition} onChange={handleConditionChange}>
            <option value="">Select condition</option>
            <option value="New">New</option>
            <option value="Used - Excellent">Used - Excellent</option>
            <option value="Used - Good">Used - Good</option>
            <option value="Used - Fair">Used - Fair</option>
            <option value="Used - Poor">Used - Poor</option>
          </select>
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </label>
        <br />
        <Link to="/sellThankYou">
          <button type="submit" className="sell-button">
            Sell
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Sell;