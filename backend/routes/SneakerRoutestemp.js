const express = require('express');
const router = express.Router();
const sneakerData = require('../sneakerData');
const { addToCart, removeFromCart } = require('../cartArray');

router.get('/sneakers', (req, res) => {
  const { brand, price, size } = req.query;

  let filteredData = sneakerData;

  if (brand) {
    filteredData = filteredData.filter((shoe) => shoe.brand === brand);
  }

  if (price) {
    filteredData = filteredData.filter((shoe) => shoe.price <= price);
  }

  if (size) {
    filteredData = filteredData.filter((shoe) => shoe.size === parseInt(size));
  }

  if (!brand && !price && !size) {
    // No filters applied, respond with all sneakers
    res.json(sneakerData);
  } else {
    // Respond with filtered data
    res.json(filteredData);
  }
  
});

router.get('/sneakers/:id', (req, res) => {
  const { id } = req.params;
  const shoe = sneakerData.find((shoe) => shoe.id === parseInt(id));

  if (shoe) {
    res.json(shoe);
  } else {
    res.status(404).json({ message: 'Shoe not found' });
  }
});

module.exports = router;


router.post('/sneakers/:id/cart', (req, res) => {
  const { id } = req.params;
  const shoe = sneakerData.find((shoe) => shoe.id === parseInt(id));

  if (shoe) {
    // Add the shoe to the cart
    addToCart(shoe);

    res.status(201).json({ message: 'Item added to cart successfully' });
  } else {
    res.status(404).json({ message: 'Shoe not found' });
  }
});

router.delete('/sneakers/:id/cart', (req, res) => {
  const { id } = req.params;

  // Remove the sneaker from the cart
  removeFromCart(id);

  res.status(200).json({ message: 'Item removed from cart successfully' });
});