const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     {name:'Goddess Melon',price:4.99,saeason:'Summer'},
//     {name:'Sugar baby Melon',price:3.99,saeason:'Summer'},
//     {name:'Asparagus',price:1.99,saeason:'Spring'},
//     {name:'Musk Melon',price:2.99,saeason:'Summer'}
// ])

const makeFarm = async () => {
    const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda,CA' });
    const melon = await Product.findOne({ name: 'Goddess Melon' });
    farm.products.push(melon)
    await farm.save()
    console.log(farm);
}
//makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    const watermelon = await Product.findOne({ name: 'Sugar baby Melon' });
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}
//addProduct();

Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products')
    .then(farm => console.log(farm))
