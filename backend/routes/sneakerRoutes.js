// routes/sneakerRoutes.js
const express = require('express');
const router = express.Router();
const sneakersData = require('../sneakersData'); // Import the sneaker data array

// Route to get the sneaker data
router.get('/sneakers', (req, res) => {
  res.json(sneakersData);
});

module.exports = router;