const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session=require('express-session');
const flash= require('connect-flash')

const sessionOptions = { secret: 'thisisasecret', resave: false, saveUninitialized: false };
app.use(session(sessionOptions));
app.use(flash());

mongoose.set('strictQuery', false);

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Product = require('./model/product.js');
const Farm = require('./model/farm.js');
const categories = ['Fruit', 'Vegetable', 'Dairy'];
const { findById } = require('./model/product.js');
const AppError = require('../Middleware/AppError.js');


//ONLINE MONGODB DATABASE
// mongoose.connect('mongodb+srv://saurabhsunilsingh:9595927447@mydatabase.h6qpn8p.mongodb.net/mysite?retryWrites=true&w=majority')
//     .then(() => {
//         console.log('Mongo Connection Established')
//     })
//     .catch(() => {
//         console.log('Mongo Connection failed to established')
//         console.log(err);
//     })

mongoose.connect('mongodb://127.0.0.1:27017/farmStand?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
})

app.use((req,res,next)=>{
    res.locals.messages=req.flash('success');
    next();
})
//FARM ROUTES
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
})
app.get('/farms/new', (req, res) => {
    res.render('farms/new');
})
app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    //this will print the farm with complete description of the product array
    console.log(farm)
    res.render('farms/show', { farm });
})
app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success','Successfully created a new Farm!');
    res.redirect('/farms');
})

app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', { categories, farm });
})
app.post('/farms/:id/products', async (req, res) => {
    //1 res.send(req.body);
    //await product.save();
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`);
    //this console will print farm with product only as a object id reference and no description
    console.log(farm);
})
//PRODUCT ROUTES

app.get('/', (req, res) => {
    res.send('A GET request!!')
    console.log('A GET request!')
})
app.get('/products', wrapAsync(async (req, res) => {

    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' })
    }

    //console.log(products);

}))
app.get('/dog', (req, res) => {
    res.send('Woof!')
    console.log('A GET request!')
})
app.get('/products/new', (req, res) => {
    //basic error handling- throw new AppError('Not Allowed!',401);
    res.render('products/new', { categories });
})
function wrapAsync(fn) {
    //we wrote this function to replace the try and catch implmentation
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}
app.post('/products', wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
}))
app.get('/products/:id', async (req, res, next) => {

    const { id } = req.params;
    const product = await Product.findById(id).populate('farm','name');
    // console.log('here');
    // console.log(product);
    // if (!product) {
    //     return next(new AppError('Product not found!', 404));//added out error to our next for error handling
    //     //empty next means that it will search for next middleware
    // }
    // // console.log(product);
    res.render('products/show', { product })

})
app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {

    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        next(new AppError('Product not found!', 404));//added out error to our next for error handling
        //empty next means that it will search for next middleware
    }
    res.render('products/edit', { product, categories })

}))
app.put('/products/:id', wrapAsync(async (req, res, next) => {

    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);

}))
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})
const handleValidationError = err => {
    console.log(err);
    return new AppError(`Validation Failed! ${err.message}`, 400);
}
app.use((err, req, res, next) => {
    console.log(err.name);//to see the names by the Mongoose Errors
    if (err.name === 'ValidationError') err = handleValidationError(err);
    //ix(err.name ==='CastError') err= handleCastError(err);   
    next(err);
})
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong !' } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('App is listening on port 3000!')
}
)