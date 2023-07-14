
import ShoeCard from '../components/shoeCard';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';

export const BuyPage = () => {
  const [showMore, setShowMore] = useState(false);

  const handleSeeMore = () => {
    setShowMore(true);
  };

  return (
    <div className="BuyPage" style={{ backgroundColor: 'white' }}>
      <div style={{ textAlign: 'center', backgroundColor: 'white' }}>
        <div>
          <h2 style={{ marginBottom: '2.5rem', marginTop: '3.5rem' }}>Shop All Shoes</h2>
          <h5 style={{ fontSize: '1.05rem', marginBottom: '8.5rem', fontWeight: 'lighter' }}>Shop from our wide variety of shoes including our new releases, professionally refurbished shoes, and more</h5>
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
      {/* Render the first set of ShowCard components */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', margin: '60px' }}>
        <ShoeCard shoeName="Shoe 1" price="99.99" link="https://example.com/shoe1" />
        <ShoeCard shoeName="Shoe 2" price="129.99" link="https://example.com/shoe2" />
        <ShoeCard shoeName="Shoe 3" price="79.99" link="https://example.com/shoe3" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', margin: '60px' }}>
            <ShoeCard shoeName="Shoe 4" price="89.99" link="https://example.com/shoe4" />
            <ShoeCard shoeName="Shoe 5" price="109.99" link="https://example.com/shoe5" />
            <ShoeCard shoeName="Shoe 6" price="69.99" link="https://example.com/shoe6" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', margin: '60px' }}>
            <ShoeCard shoeName="Shoe 7" price="79.99" link="https://example.com/shoe7" />
            <ShoeCard shoeName="Shoe 8" price="149.99" link="https://example.com/shoe8" />
            <ShoeCard shoeName="Shoe 9" price="99.99" link="https://example.com/shoe9" />
          </div>

      {/* Render additional ShowCard components if showMore is true */}
      {showMore && (
        <>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', margin: '60px' }}>
            <ShoeCard shoeName="Shoe 10" price="89.99" link="https://example.com/shoe4" />
            <ShoeCard shoeName="Shoe 11" price="109.99" link="https://example.com/shoe5" />
            <ShoeCard shoeName="Shoe 12" price="69.99" link="https://example.com/shoe6" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', margin: '60px' }}>
            <ShoeCard shoeName="Shoe 13" price="79.99" link="https://example.com/shoe7" />
            <ShoeCard shoeName="Shoe 14" price="149.99" link="https://example.com/shoe8" />
            <ShoeCard shoeName="Shoe 15" price="99.99" link="https://example.com/shoe9" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', margin: '60px' }}>
            <ShoeCard shoeName="Shoe 16" price="129.99" link="https://example.com/shoe10" />
            <ShoeCard shoeName="Shoe 17" price="89.99" link="https://example.com/shoe11" />
            <ShoeCard shoeName="Shoe 18" price="79.99" link="https://example.com/shoe12" />
          </div>
        </>
      )}

      {/* Render the "See More" button */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '40px' }}>
        {!showMore && <Button variant="primary" size="lg" onClick={handleSeeMore}>See More</Button>}
      </div>

      <div style={{ marginBottom:'40px' }}></div> 
      {/* Empty div for additional spacing /}
</div>
<div style={{ marginTop: '2rem', textAlign: 'center' }}>
{/ Footer */}
</div>
</div>
)};

