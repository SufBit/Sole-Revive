import React from "react";
import ShoeCard from "../components/shoeCard";
export const WishList = () => {
    return (
    <div>
        <h2 style = {{marginTop: '6rem', marginLeft: '5rem', fontWeight: 'bold'}}>Your WishList</h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '100px', margin: '80px', marginLeft: '120px', marginRight: '120px' }}>
        <ShoeCard shoeName="Shoe 1" price="99.99" link="https://example.com/shoe1" />
        <ShoeCard shoeName="Shoe 2" price="129.99" link="https://example.com/shoe2" />
        <ShoeCard shoeName="Shoe 3" price="79.99" link="https://example.com/shoe3" />
      </div>
    </div>
    )
};