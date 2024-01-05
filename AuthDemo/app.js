const express = require('express');
const app = express();
const User = require('./model/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/authDemo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'notagoodsecret' }))

const requireLogin = (req, res, next) => {//middleware function
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
}
app.get('/', (req, res) => {
    res.send('Home Page');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const user = new User({ username, password })
    await user.save();
    req.session.user_id = user._id;//keeping them logged in 
    res.redirect('/');
})

app.get('/login', async (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    // res.send(req.body);
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
        // res.send('Welcome!');

    } else {
        res.redirect('/login');
        // res.send('Try Again!')
    }

})

app.post('/logout', async (req, res) => {
    // req.session._id = null;
    req.session.destroy();//destroy everthing on the session 
    res.redirect('/login');
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret');

})

app.get('/topsecret', requireLogin, (req, res) => {
    res.send('Top Secret !!!!!!!!!');
})

app.listen(3000, () => {
    console.log('Serving your app!')
})