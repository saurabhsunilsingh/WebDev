const express = require('express');
const mongoose = require('mongoose');
const Customer = require('./models/customer');

const app = express();

mongoose.set('strictQuery', false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;
const customers = [
    {
        "name": "Caleeb",
        "industry": "Music"
    },
    {
        "name": "Kal",
        "industry": "Travel"
    },
    {
        "name": "Sau",
        "industry": "Game"
    },
    {
        "name": "DJ",
        "industry": "EDM"
    }
]

const customer = new Customer({
    name: 'Saurabh',
    industry: 'Software Development'
});

app.get('/', (req, res) => {
    res.send(customer);
})

app.get('/api/customers', async (req, res) => {
    try {
        const result = await Customer.find();
        res.send({ "customers": result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.post('/', (req, res) => {
    res.send("This is a POST request");
})

app.post('/api/customers', async (req, res) => {
    console.log(req.body);
    const customer = new Customer(req.body);
    //     {//we can write the code below when we need something additional of req.body
    //     name: req.body.name,
    //     industry: req.body.industry
    // }
    try {
        await customer.save();
        res.status(201).json({ customer });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})
// Customer.insertMany([
//     { name: 'Saurabh', industry: 'Software Development'},
//     { name: 'Sourav', industry: 'Data Science Development'},
//     { name: 'Saurav', industry: 'IT Development'},
//     { name: 'Sourabh', industry: 'Web Development'},
// ])
Customer.updateOne({ name: "Kio" }, { industry: "Police Cat" }).then();

Customer.updateMany({ name: "Saurabh" }, { industry: "SE" })
.then(RES => {
    console.log(RES);
});



Customer.find({name:"Saurabh"})
    .then((customers) => {
        console.log(customers);
    })
    .catch((error) => {
        console.log('Error retrieving users', error);
    });



const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://saurabhsunilsingh:9595927447@mydatabase.h6qpn8p.mongodb.net/customers?retryWrites=true&w=majority');
        app.listen(3000, () => {
            console.log("Listening on port" + PORT);
        });
    } catch (err) {
        console.log(err.message);
    }
}
start();





