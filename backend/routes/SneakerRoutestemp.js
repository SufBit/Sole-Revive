const express = require('express');
const router = express.Router();
const sneakerData = require('../database/sneakerData');
const { addToCart, removeFromCart } = require('../database/cartArray');
const itemController = require('../database/sellArray');
const secretKey = 'your-secret-key'; 
const jwt = require('jsonwebtoken');


const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    console.log('Decoded user from token:', user);
    req.user = user;
    console.log(req.user);
    next();
  });
};

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

// r
router.post('/sell',authenticateToken, (req, res) => {
  const { name, price, condition, image } = req.body;
  const username = req.user.username; 

  // Add the item using the addItem function from itemController
  itemController.addItem( username, name, price, condition, image);

  res.json({ message: 'Item added successfully' });
});


// Example route that fetches all items
// router.get('/sell/items', (req, res) => {
//   // Get all items using the getAllItems function from itemController
//   const items = itemController.getAllItems();

//   res.json(items);
// });

router.get('/sell/items',authenticateToken, (req, res) => {
  const username = req.user.username;

  // Get all items for the specified user using the getAllItemsForUser function from itemController
  const items = itemController.getAllItemsForUser(username);

  res.json(items);
});

module.exports = router;