const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    Pname:{
        type:String,
        required:true
    },
    Brand:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    }
}, {timestamps:true});

const Product=mongoose.model("Product",productSchema);
module.exports=Product;