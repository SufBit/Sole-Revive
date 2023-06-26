const express = require('express');
const homeRouter = require('./home');
const aboutRouter = require('./about');

// Create an Express application
const app = express();

// Set up routes
app.use('/', homeRouter);
app.use('/about', aboutRouter);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});