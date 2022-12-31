const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        min: 4,
        max: 50
    },
    lastName:{
        type:String,
        required:true,
        min: 4,
        max: 50
    },
    email:{
        type:String,
        required:true,
        unique: true,
        max: 40
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
    }
},{timestamps: true});
const User =mongoose.model("User",userSchema);
module.exports=User;
