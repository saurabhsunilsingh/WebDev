const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address: [
        {
            _id: { _id: false },
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true
            }
        }
    ],
})

const User = mongoose.model('User', userSchema);
const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter',
        address: {
            street: '123 Sesame St.',
            city: 'NYC',
            state: 'NY',
            country: 'USA'
        }
    })
    const res = await u.save();
    console.log(res);
}
const addAddress = async (id) => {
    const user = await User.findById(id)
    user.address.push(
        {
            street: '99 Sesame St.',
            city: 'NYC',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await u.save();
    console.log(res);
}
makeUser();
