const pool = require('../database/database');

exports.getAboutPage = (req, res) => {
    // Fetch data from the database
    pool.query('SELECT * FROM about_table', (err, rows) => {
        if (err) {
            console.error('Error querying the database: ', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(rows);
    });
};
