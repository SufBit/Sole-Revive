import ShoeCard from '../components/shoeCard';
import Button from 'react-bootstrap/Button';
import React from "react";
import Filter from '../components/Filter';

export const BuyPage = () => {

  const handleFilter = (brand, price, size) => {
    // Update state or perform filtering operations based on the filter values
  };
    return (

      <div className="BuyPage" style={{ backgroundColor: 'white' }}>
      <div style={{ textAlign: 'center', backgroundColor: 'white' }}>
        <div>
          <h2 style={{ marginBottom: '2.5rem', marginTop: '3.5rem' }}>Shop All Shoes</h2>
          <h5 style={{ fontSize: '1.05rem', marginBottom: '8.5rem', fontWeight: 'lighter' }}>Shop from our wide variety of shoes including our new releases, professionally refurbished shoes, and more</h5>
          <div style={{ textAlign: 'center' }}>
            <Filter handleFilter={handleFilter} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', margin: '60px' }}>
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
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', margin: '60px' }}>
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
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', margin: '60px' }}>
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
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '40px' }}>
          <Button variant="primary" size="lg">See More</Button>
        </div>
        <div style={{ marginBottom: '40px' }}></div> {/* Empty div for additional spacing */}
      </div>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        {/* Footer */}
      </div>
    </div>
     
    );
}
