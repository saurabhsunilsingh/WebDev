const mongoose = require('mongoose');
const Product = require('./product');
const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true,'Email required!']
    },
    products:[
        {
            type:Schema.Types.ObjectId,
            ref:'Product' //the Product model
        }
    ]

})
const Farm = mongoose.model('Farm', farmSchema);
 
module.exports = Farm;