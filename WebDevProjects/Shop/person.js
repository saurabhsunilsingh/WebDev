const mongoose = require('mongoose');

personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName')
    .get(function () {
        return `${this.first} ${this.last}`
    })
    .set(function (v) {
        this.first = v.substr(0, v.indexOf(' '));
        this.last = v.substr(v.indexOf(' ') + 1);
    })

personSchema.pre('save', async function (){
    console.log("About to Save !!")
})   
personSchema.post('save', async function (){
    console.log("Just Saved !!")
})  
module.exports = mongoose.model('persons', personSchema);
