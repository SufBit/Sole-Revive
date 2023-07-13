import React from 'react';
import './cart.css';

const Cart = () => {
  const items = [
    {
      id: 1,
      title: 'Item 1',
      image: 'item1.jpg',
      price: 10,
    },
    {
      id: 2,
      title: 'Item 2',
      image: 'item2.jpg',
      price: 15,
    },
    // Add more items as needed
  ];

  const calculateTotal = () => {
    let total = 0;
    items.forEach(item => {
      total += item.price;
    });
    return total;
  };

  return (
    <div className="cart-container">
      <div className="items-container">
        {items.map(item => (
          <div className="item-card" key={item.id}>
            <div className="item-details">
              <img src={item.image} alt={item.title} className="item-image" />
              <h3 className="item-title">{item.title}</h3>
              <p className="item-price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout-container">
        <h2>Cart Summary</h2>
        {items.map(item => (
          <div className="checkout-item" key={item.id}>
            <p className="checkout-item-title">{item.title}</p>
            <p className="checkout-item-price">${item.price}</p>
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
