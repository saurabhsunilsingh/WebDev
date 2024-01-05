const mongoose = require('mongoose');
customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('clients', customerSchema);