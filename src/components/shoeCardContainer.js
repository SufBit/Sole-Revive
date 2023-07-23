import React from 'react';
import ShoeCard from './shoeCard';

const ShoeCardContainer = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Top Sellers</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px' }}>
        <ShoeCard
          shoeName="Shoe 1"
          price="99.99"
          link="https://example.com/shoe1"
        />
        <ShoeCard
          shoeName="Shoe 2"
          price="129.99"
          link="https://example.com/shoe2"
        />
        <ShoeCard
          shoeName="Shoe 3"
          price="79.99"
          link="https://example.com/shoe3"
        />
        <ShoeCard
          shoeName="Shoe 4"
          price="149.99"
          link="https://example.com/shoe4"
        />
        <ShoeCard
          shoeName="Shoe 5"
          price="89.99"
          link="https://example.com/shoe5"
        />
      </div>
    </div>
  );
};

export default ShoeCardContainer;