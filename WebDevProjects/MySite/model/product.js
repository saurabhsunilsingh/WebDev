const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be blank']
        // maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['Fruit', 'Vegetable', 'Dairy']
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref:'Farm' //the Farm model
    }
})

const Product = mongoose.model('Product', productSchema);
// const newP= new Product({
//     name:'Apple',
//     price:1,
//     categories:'Fruit'
// })
// newP.save();
// Product.deleteMany({name:'Apple'});

module.exports = Product;