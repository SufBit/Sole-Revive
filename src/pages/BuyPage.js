
import ShoeCard from '../components/shoeCard';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
export const BuyPage = () => {
  return (
    <div className="BuyPage" style={{ backgroundColor: 'lightgray', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '2.5rem', marginTop: '3.5rem' }}>
          <h2>Shop All Shoes</h2>
          <h5 style={{ fontSize: '1.05rem', marginBottom: '8.5rem', fontWeight: 'normal' }}>
            Shop from our wide variety of shoes including our new releases, professionally refurbished shoes, and more
          </h5>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '1rem', marginLeft: '4rem' }}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Style</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Price</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Color</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', margin: '60px' }}>
          <ShoeCard shoeName="Shoe 1" price="99.99" link="https://example.com/shoe1" />
            <ShoeCard shoeName="Shoe 2" price="129.99" link="https://example.com/shoe2" />
            <ShoeCard shoeName="Shoe 3" price="79.99" link="https://example.com/shoe3" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', margin: '60px' }}>
          <ShoeCard shoeName="Shoe 1" price="99.99" link="https://example.com/shoe1" />
            <ShoeCard shoeName="Shoe 2" price="129.99" link="https://example.com/shoe2" />
            <ShoeCard shoeName="Shoe 3" price="79.99" link="https://example.com/shoe3" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', margin: '60px' }}>
          <ShoeCard shoeName="Shoe 1" price="99.99" link="https://example.com/shoe1" />
            <ShoeCard shoeName="Shoe 2" price="129.99" link="https://example.com/shoe2" />
            <ShoeCard shoeName="Shoe 3" price="79.99" link="https://example.com/shoe3" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '2rem' }}>
            <Button variant="primary" size="lg">
              See More
            </Button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        {/* Footer */}
      </div>
    </div>
  );
};
