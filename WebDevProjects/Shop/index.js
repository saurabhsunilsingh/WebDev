const express = require('express');
const mongoose = require('mongoose');
const Product = require('./product.js');
const Person = require('./person.js');

const app = express();

mongoose.set('strictQuery', false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;
const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://saurabhsunilsingh:9595927447@mydatabase.h6qpn8p.mongodb.net/products?retryWrites=true&w=majority');
        app.listen(3000, () => {
            console.log("Listening on port" + PORT);
        });
    } catch (err) {
        console.log(err.message);
    }
}
start();

app.get('/', (req, res) => {
    res.send("GET Product Site!");
})
app.post('/', (req, res) => {
    res.send("POST Product Site!");
})
const bike = new Product({
    onSale: false,
    name: "Bike Helmet",
    price: 299,
    categories: ['Head gear', 'Safety']
})
// bike.save()
//     .then(data => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log('Error retrieving users', error);
//     });
// Product.findOneAndUpdate({ name: 'Bike Helmet' }, { price: 100 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log('Error retrieving users', error);
//     });

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    foundProduct.greet();
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);  
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);

}

const tammy= new Person({first:'Tammy',last:'Chow'})
tammy.save();
console.log(tammy.fullName);
tammy.fullName='Tammy Xiao';
console.log(tammy.fullName);

// findProduct();

Product.fireSale().then(res => console.log(res))