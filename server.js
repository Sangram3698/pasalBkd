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


// /Routes
app.use("/api",require("./routes/UserRoute"));

//connecting database
connection();



app.listen(3000,()=>{
    console.log("http://localhost:3000");
});



