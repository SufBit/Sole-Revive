/////////////////////////////NOT NEEDED FILE



// const express = require('express');
// const router = express.Router();
// const subscriptionsArray = require('../database/subscribersData');

// router.post('/', (req, res) => {
//     if (!req.session.isLoggedIn) {
//         return res.status(401).json({ message: 'User is not logged in' });
//       }
    
//       const { email } = req.body;
    
//       // Check if the user is already subscribed
//       const existingSubscription = subscriptionsArray.find(subscription => subscription === email);
//       if (existingSubscription) {
//         return res.status(409).json({ message: 'User is already subscribed' });
//       }
    
//       // Add the email to your subscriptions array or perform any other necessary operations
//       subscriptionsArray.push(email);
    
//       // Return a success response
//       res.status(200).json({ message: 'Subscribed successfully' });
//   });
  
//   module.exports = router;

const express = require('express');
const router = express.Router();
const subscriptionsArray = require('../database/subscribersData');
const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key'; 

router.get('/checkSession', (req, res) => {
    if (req.session.isLoggedIn) {
      // User is logged in
      res.status(200).json({ isLoggedIn: true });
    } else {
      // User is not logged in
      res.status(200).json({ isLoggedIn: false });
    }
  });

// Middleware for token verification and decoding
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }


  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    console.log('Decoded Token:', decoded);
    req.user = decoded;
    next();
  });
};

router.post('/', authenticateToken, (req, res) => {
  const { email } = req.body;
  const userId = req.user.userId; // Assuming your token payload includes the userId

  if (!userId) {
    return res.status(401).json({ message: 'User is not logged in' });
  }

  // Check if the user is already subscribed
  const existingSubscription = subscriptionsArray.find(subscription => subscription === email);
  if (existingSubscription) {
    return res.status(409).json({ message: 'User is already subscribed' });
  }

  // Add the email to your subscriptions array or perform any other necessary operations
  subscriptionsArray.push(email);

  // Return a success response
  res.status(200).json({ message: 'Subscribed successfully' });
});

router.get('/checkSession', (req, res) => {
    if (req.session.isLoggedIn) {
      // User is logged in
      res.status(200).json({ isLoggedIn: true });
    } else {
      // User is not logged in
      res.status(200).json({ isLoggedIn: false });
    }
  });

module.exports = router;
