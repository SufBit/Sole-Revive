const express = require('express');
const router = express.Router();
const { updateUserSubscription, getAllSubscriptions } = require('../database/users');
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
  const userId = req.user.username; // Get the current user's username
  const { action } = req.body;

  if (action === 'subscribe') {
    updateUserSubscription(userId, true); // Subscribe the user
    res.status(200).json({ message: 'Subscribed successfully!' });
  } else if (action === 'unsubscribe') {
    updateUserSubscription(userId, false); // Unsubscribe the user
    res.status(200).json({ message: 'Unsubscribed successfully!' });
  } else {
    res.status(400).json({ message: 'Invalid action' });
  }
});

// Get all subscribers endpoint
router.get('/', authenticateToken, (req, res) => {
  // Retrieve all subscriptions from the users map for the current user
  const userId = req.user.username; // Get the current user's username
  const subscriptions = getAllSubscriptions(userId);

  res.json(subscriptions);
});

module.exports = router;