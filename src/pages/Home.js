import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import './Home.css'; //
import ShoeCard from '../components/shoeCard';

export const Home = () => {

  const [shoeData, setShoeData] = useState([]);

  useEffect(() => {
    const fetchShoeData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/sneakers');
        const data = await response.json();
        setShoeData(data);
      } catch (error) {
        console.error('Error fetching shoe data:', error);
      }
    };

    fetchShoeData();
  }, []);

  const displayedShoes = shoeData.slice(0, 4);
  return (
    <div>
        <Carousel />

        <h2 className="top-sellers-heading">Top Sellers</h2>
        <div className="shoe-card-container"> {/* Apply flexbox layout to the shoe card container */}
        {displayedShoes.map((shoe) => (
          <ShoeCard key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
    

  )
}
