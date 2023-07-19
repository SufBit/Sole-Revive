const express = require('express');
const router = express.Router();
const sneakerData = require('../database/sneakerData');

router.get('/', (req, res) => {
  const { suggestion } = req.query;

  if (!suggestion) {
    res.json([]);
    return;
  }

  const filteredData = sneakerData.filter((shoe) =>
    shoe.name.toLowerCase().includes(suggestion.toLowerCase())
  );

  const suggestions = filteredData.map((shoe) => shoe.name);

  res.json(suggestions);
});

module.exports = router;