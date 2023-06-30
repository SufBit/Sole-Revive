const express = require('express');
const router = express.Router();
const database = require('../database/database');

router.post('/', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if ((firstName.length <= 0) || (lastName.length <= 0) || (email.length <= 0) || (password.length <= 7)) {
        res.json({ success: false });
        return;
    }

    // Construct the SQL query
    const query = `INSERT INTO user (firstName, lastName, email, password) VALUES (?, ?, ?, ?)`;

    // Execute the query with the form data
    database.query(query, [firstName, lastName, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting data into MySQL:', err);
            res.json({ success: false });
        } else {
            console.log('Data inserted successfully');
            res.json({ success: true });
        }
    });
});

module.exports = router;
