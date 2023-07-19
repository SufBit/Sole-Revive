import React from 'react';
import './cart.css';
import { useEffect, useState } from 'react';

const Cart = ({ isSubscribed }) => {
  
  const [cartItems, setCartItems] = useState([]);
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += isSubscribed ? item.subPrice : item.price;
    });
    return total;
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:3001/cart');
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (itemId) => {

    console.log('Item ID:', itemId);
    try {
      const response = await fetch(`http://localhost:3001/api/sneakers/${itemId}/cart`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Item removed from cart successfully
        console.log('Item removed from cart successfully');
        // Update the cart items in the state by filtering out the removed item
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
      } else {
        console.error('Error removing item from cart');
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };
  
  

  return (
    <div className="cart-container">
      <div className="items-container">
        {cartItems.map(item => (
          <div className="item-card" key={item.id}>
            <div className="item-details">
              <img src={item.image} alt={item.name} className="item-image" />
              <h3 className="item-title">{item.name}</h3>
              <p className="item-price">{isSubscribed ? `$${item.subPrice}` : `$${item.price}`}</p>
              <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout-container">
        <h2>Cart Summary</h2>
        {cartItems.map(item => (
          <div className="checkout-item" key={item.id}>
            <p className="checkout-item-title">{item.name}</p>
            <p className="checkout-item-price">{isSubscribed ? `$${item.subPrice}` : `$${item.price}`}</p>
          </div>
        ))}
        <hr />
        <div className="checkout-total">
          <p>Total: ${calculateTotal()}</p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
