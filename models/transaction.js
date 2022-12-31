const mongoose=require("mongoose");

const transactionSchema = new mongoose.Schema({
    t_id:{
        type:Array,
        required: true,
        unique: true
    },
    sellerAndBuyer:{
        type: Array,
        required: true
    },
    status: String,
    
},{timestamps: true});

export const transactionModel = mongoose.model("transactionModel", transactionSchema);