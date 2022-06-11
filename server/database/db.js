const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const autoIncrement= require('mongoose-auto-increment')
const connection = mongoose.connect("mongodb://localhost:27017/data");
const UserSchema = new Schema({
    name:String,
    username:String,
    email:String,
    phone:String,

})
autoIncrement.initialize(mongoose.connection)
UserSchema.plugin(autoIncrement.plugin,'user')

const User = model("user", UserSchema);
module.exports={User,connection}