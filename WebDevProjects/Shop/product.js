const mongoose = require('mongoose');
productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }

});
productSchema.methods.greet = function () {
    console.log("The Product you searched for");
    console.log(`-is ${this.name}`)
}
productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}
productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}
productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 10 });
     
}


module.exports = mongoose.model('products', productSchema);
