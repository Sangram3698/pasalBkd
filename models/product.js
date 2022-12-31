const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    p_id:{
        type:Number,
        required:true
    },
    p_name:{
        type:String,
        required:true
    },
    seller_name:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        required:true
    }
});
const Product=mongoose.model("Product",productSchema);
module.exports=Product;