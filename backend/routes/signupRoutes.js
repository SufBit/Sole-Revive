// const express = require('express');
// const router = express.Router();
// const database = require('../database/database');

// router.post('/', (req, res) => {
//     const { firstName, lastName, email, password } = req.body;

//     if ((firstName.length <= 0) || (lastName.length <= 0) || (email.length <= 0) || (password.length <= 7)) {
//         res.json({ success: false });
//         return;
//     }

//     // Construct the SQL query
//     const query = `INSERT INTO user (firstName, lastName, email, password) VALUES (?, ?, ?, ?)`;

//     // Execute the query with the form data
//     database.query(query, [firstName, lastName, email, password], (err, result) => {
//         if (err) {
//             console.error('Error inserting data into MySQL:', err);
//             res.json({ success: false });
//         } else {
//             console.log('Data inserted successfully');
//             res.json({ success: true });
//         }
//     });
// });

// module.exports = router;


const express = require('express');
const bcrypt = require('bcrypt');
const usersArray = require('./users');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username is already taken
    const existingUser = usersArray.find(user => user.username === username);
    if (existingUser) {
      return res.status(409).json({ message: 'Username is already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      password: hashedPassword,
    };

    usersArray.push(newUser);

    res.status(200).json({ message: 'Signup successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

