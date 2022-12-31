const express=require('express');
const connection=require("./models/db")
const mongoose=require("mongoose");
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser");

//middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));


// /Routes of user model
app.use("/user",require("./routes/UserRoute"));
app.use("/product", require("./routes/productRoute"));

//connecting database
connection();



app.listen(3000,()=>{
    console.log("\n\n-------> http://localhost:3000\n\n-----------");
});



