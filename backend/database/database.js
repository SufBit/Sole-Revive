const mysql = require('mysql');

// Set up MySQL connection
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'solerevive',
});

pool.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = pool;