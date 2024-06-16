const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true
    },
    firstName:{
        type:String,
        unique: true
    },
    lastName:{
        type:String,
        unique: true
    },
    email:{
        type:String,
        unique: true
    },
    address:{
        type:String
    }
});

//When returning a user Object, return everything besides the password
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword;
    }
});

module.exports = mongoose.model('User', userSchema);