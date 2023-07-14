const express = require('express');
const router = express.Router();
const database = require('../database/database');

router.post('/', (req, res) => {
    // set login state false by default
    req.session.isLoggedIn = false

    const { email, password } = req.body;

    if ((email.length <= 0) || (password.length <= 7)) {
        res.json({ success: false });
        return;
    }

    // Construct the SQL query
    const query = `SELECT * FROM user WHERE email = ? AND password = ?`;

    database.query(query, [email, password], (err, result) => {
        if (err) {
            console.error('Error executing login query:', err);
            res.json({ success: false });
        } else {
            if (result.length > 0) {
                // Login successful
                res.json({ success: true });
                req.session.isLoggedIn = true;
                req.session.id = result[0].id
            } else {
                // Login failed
                res.json({ success: false });
                req.session.isLoggedIn = false;
            }
        }
    });
});

// Endpoint to check authentication status
router.get('/authenticated', (req, res) => {
    res.json({ authenticated: req.session.isLoggedIn });
});

module.exports = router;
