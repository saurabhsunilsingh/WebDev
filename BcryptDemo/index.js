const bcrypt = require('bcrypt');
const { log } = require('console');


const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pw, salt)
    console.log(salt);
    console.log(hash);

}
//We donot need to exclusively make salt and hash separate wecan do it in single function
const hashPasswordSaltTogether = async (pw) => {
    // const salt = await bcrypt.genSalt(10); just removed this 
    const hash = await bcrypt.hash(pw, 10); //and added the saltRound number here
    // console.log(salt);
    console.log(hash);

}

hashPassword('Monkey');
hashPasswordSaltTogether('Monkey');

//now counter checking the password using compare 

const login = async (pw, hashPassword) => {
    const result = await bcrypt.compare(pw, hashPassword);
    if (result) {
        console.log('Logged in Successfully');
    }
    else {
        console.log('incorrect Password!')
    }
}
const login2 = async (pw, hashPasswordSaltTogether) => {
    const result = await bcrypt.compare(pw, hashPasswordSaltTogether);
    if (result) {
        console.log('Logged in Successfully');
    }
    else {
        console.log('incorrect Password!')
    }
}

login('Monkey','$2b$10$1ZkcUePLHj8RLw6J89Urvuf10GGibPTfSz/tR5oJnAaYsYJofTvVK');
login2('Monkey','$2b$10$1ZkcUePLHj8RLw6J89Urvuf10GGibPTfSz/tR5oJnAaYsYJofTvVK');