const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const signupRouter = require('./routes/signupRoutes');
const loginRouter = require('./routes/loginRoutes');

const app = express();
const cors = require('cors')
const port = 3001;

// use session management
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // 1 s = 1000 ms
    // 1 min = 1000 * 60 ms = 60000 ms
    // 1 hr = 60000 * 60 ms = 3600000 ms
    // 1 day = 24 * 3600000 ms = 86400000 ms
    // 1 week = 86400000 * 7 ms = 604800000 ms
    cookie: { maxAge: 604800000 }
}))

app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

// Configure body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// signup route
app.use('/post/signup', signupRouter);

// login route
app.use('/post/login', loginRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
