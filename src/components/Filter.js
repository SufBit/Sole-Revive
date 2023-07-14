import React, { useState } from 'react';

const Filter = ({ handleFilter }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedSizes, setSelectedSizes] = useState([]);

  const brands = ['Adidas', 'Nike', 'Puma'];
  const priceRanges = [
    { label: '$0 - $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $150', value: '100-150' },
    { label: '$150 - $200', value: '150-200' },
    { label: '$200 - $250', value: '200-250' },
  ];
  const sizes = ['US 5', 'US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13'];

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handlePriceChange = (event) => {
    const priceRange = event.target.value;
    setSelectedPriceRange(priceRange);
  };

  const handleSizeChange = (event) => {
    const size = event.target.value;
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((item) => item !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFilter(selectedBrands, selectedPriceRange, selectedSizes);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div>
          <h4>Brands:</h4>
          {brands.map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={handleBrandChange}
              />
              {brand}
            </label>
          ))}
        </div>
        <div>
          <h4>Price Range:</h4>
          {priceRanges.map((range) => (
            <label key={range.value}>
              <input
                type="radio"
                value={range.value}
                checked={selectedPriceRange === range.value}
                onChange={handlePriceChange}
              />
              {range.label}
            </label>
          ))}
        </div>
        <div>
          <h4>Sizes:</h4>
          {sizes.map((size) => (
            <label key={size}>
              <input
                type="checkbox"
                value={size}
                checked={selectedSizes.includes(size)}
                onChange={handleSizeChange}
              />
              {size}
            </label>
          ))}
        </div>
        <button type="submit" style={{ backgroundColor: 'green', marginTop: '10px', padding: '5px 10px', borderRadius: '4px', color: 'white' }}>
          Apply Filter
        </button>
      </form>
    </div>
  );
};

export default Filter;