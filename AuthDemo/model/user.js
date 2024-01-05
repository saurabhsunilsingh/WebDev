const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Username cannot be blank']
    }

})

//hijackingyour current password and using pre just before the save.
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username });//if the password is modified then we bcrypt it again 
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser : false;
}

module.exports = mongoose.model('User', userSchema);