const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');
app.use(morgan('dev'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path)
    return next();//making sure nothing runs below this 
})
app.use((req, res, next) => {
    console.log('Heyy!!This is my second middleware!! ')
    next();
})
app.use('/dogs', (req, res, next) => {//a variation in app.use where a path 
    //is give and only those path request will be followed
    console.log('I love Dog!');
    next();
})
function passVerifier(req, res, next) {//we converted this to a function from a app.use call for surgical insersion of passverifier
    const { password } = req.query;
    if (password === 'chickennuggets') {
        next();
    }
    // res.send('Sorry you need a password!');
    throw new AppError("Password required !", 401)
}


app.get('/', (req, res) => {
    console.log(`Request Time: ${req.requestTime}`)
    res.send('HOME PAGE');
})
app.get('/error', (req, res) => {
    chicken.fly();
})
app.get('/dogs', (req, res, next) => {
    res.send('WOOF WOOF');
    next();
})
app.get('/secret', passVerifier, (req, res) => {
    res.send('It happens');
})

app.use((req, res) => {//Nothing given in path or as next because we are at 
    //the end of the code and all the request didnt satisfy your request and we didnot found anything.
    res.status(404).send('Not Found!!')
})

app.use((err, req, res, next) => {
    //error handler
    //console.log('***************ERROR*******************');
    // res.status(500).send('Error Encountered proceed with caution !')
    //console.log(err);
    //next(err);

    //this will run even if the status and msg is not explicitly given and will send the below mentioned data.
    const { status = 500, message = 'Something went Wrong' } = err;
    res.status(status).send(message);
})


app.listen(3000, () => {
    console.log('App is running on localhost : 3000')
})