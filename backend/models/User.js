const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({

    first_name:{
        type:String,
    },
    last_name:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String,
    },
    password:{
        type:String
    }

})

const user = mongoose.model("User",User);
module.exports = user;