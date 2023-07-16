import React, { useEffect, useState } from 'react';
import ShoeCard from '../components/shoeCard';
import Button from 'react-bootstrap/Button';
import Filter from '../components/Filter';
// import { useHistory } from "react-router-dom";


const BuyPage = () => {

  console.log('BuyPage component rendered');
  
  const [shoeData, setShoeData] = useState([]);
  const [filteredShoeData, setFilteredShoeData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8);

  useEffect(() => {
    const fetchShoeData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/sneakers');
        const data = await response.json();
        setShoeData(data);
        setFilteredShoeData(data);
      } catch (error) {
        console.error('Error fetching shoe data:', error);
      }
    };
  
    fetchShoeData();
  }, []);

  const handleFilter = (selectedBrands, selectedPriceRange, selectedSizes) => {
    // Filter the shoe data based on the selected options
    let filteredData = shoeData;
  
    if (selectedBrands.length > 0) {
      filteredData = filteredData.filter((shoe) => selectedBrands.includes(shoe.brand));
    }
  
    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split('-');
      filteredData = filteredData.filter((shoe) => shoe.price >= Number(minPrice) && shoe.price <= Number(maxPrice));
    }
  
    if (selectedSizes.length > 0) {
      filteredData = filteredData.filter((shoe) => selectedSizes.includes(shoe.size));
    }
  
    // Update the filtered shoe data
    setFilteredShoeData(filteredData);
  };

  

  const handleSeeMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '100px', margin: '60px' }}>
          {filteredShoeData.slice(0, visibleItems).map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          
          ))}
        </div>
        {visibleItems < filteredShoeData.length && (
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '40px' }}>
            <Button variant="primary" size="lg" onClick={handleSeeMore}>See More</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyPage;
