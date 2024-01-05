const express = require('express');
const app = express();
const session = require('express-session');



const sessionOptions = { secret: 'thisisasecret', resave: false, saveUninitialized: false };
app.use(session(sessionOptions));

app.get('/viewcount', (req, res) => {
    // res.send("Viewed this page X Times");
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have visited this page ${req.session.count} times`);
})

// we give some data in  a session and this will be a username for a register.
app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`);
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
