// const express = require('express');
// const router = express.Router();
// const database = require('../database/database');

// router.post('/', (req, res) => {
//     // set login state false by default
//     req.session.isLoggedIn = false

//     const { email, password } = req.body;

//     if ((email.length <= 0) || (password.length <= 7)) {
//         res.json({ success: false });
//         return;
//     }

//     // Construct the SQL query
//     const query = `SELECT * FROM user WHERE email = ? AND password = ?`;

//     database.query(query, [email, password], (err, result) => {
//         if (err) {
//             console.error('Error executing login query:', err);
//             res.json({ success: false });
//         } else {
//             if (result.length > 0) {
//                 // Login successful
//                 res.json({ success: true });
//                 req.session.isLoggedIn = true;
//                 req.session.id = result[0].id
//             } else {
//                 // Login failed
//                 res.json({ success: false });
//                 req.session.isLoggedIn = false;
//             }
//         }
//     });
// });

// // Endpoint to check authentication status
// router.get('/authenticated', (req, res) => {
//     res.json({ authenticated: req.session.isLoggedIn });
// });

// module.exports = router;


const express = require('express');
const bcrypt = require('bcrypt');
const usersArray = require('./users');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the usersArray
    const user = usersArray.find(user => user.username === username);

    // If user not found or password does not match, return error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    
    res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



module.exports = router;

