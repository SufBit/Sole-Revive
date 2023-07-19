const express = require('express');
const router = express.Router();
const { addSubscription, getAllSubscriptions } = require('../database/subscriberData');
const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key'; 


// Middleware to authenticate the token
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

    req.user = user;
    next();
  });
};

// Subscribers endpoint
router.post('/', authenticateToken, (req, res) => {
  const subscription = req.body;

  // Add the subscription to the subscriptions array
  addSubscription(subscription);

  res.sendStatus(200);
});

// Get all subscribers endpoint
router.get('/', authenticateToken, (req, res) => {
  // Retrieve all subscriptions from the subscriptions array
  const subscriptions = getAllSubscriptions();

  res.json(subscriptions);
});

module.exports = router;