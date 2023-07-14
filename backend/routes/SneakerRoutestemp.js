const express = require('express');
const router = express.Router();
const sneakerData = require('../sneakerData');

router.get('/sneakers', (req, res) => {
  res.json(sneakerData);
});

module.exports = router;