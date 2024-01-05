const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    liker: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
    const user = new User({ username: 'chickenfan99', age: 61 });
    const tweet1 = new Tweet({ text: 'My first tweet', likes: 0 });
    tweet1.user = user;
    console.log(user);
    user.save();
    console.log(tweet1);
    tweet1.save();
}
//makeTweets();
const findTweet = async () => {
    const t = await Tweet.find({}).populate('user');
    console.log(t);//this gives us complete data about theuser and not just the reference
}
// findTweet();
const addTweets = async () => {
    //const user = new User({ username: 'chickenfan99', age: 61 });
    const user = await User.findOne({ username: 'chickenfan99' });
    const tweet2 = new Tweet({ text: 'My 2nd tweet', likes: 0 });
    tweet2.user = user;
    console.log(user);
    // user.save();
    console.log(tweet2);
    tweet2.save();
}
// addTweets();
