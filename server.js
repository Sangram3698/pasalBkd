const express=require('express');
const mongoose=require("mongoose");
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser");
const morgan = require("morgan");
require("dotenv").config();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));


// /Routes of user model
app.use("/user",require("./routes/UserRoute"));
app.use("/product", require("./routes/productRoute"));

// Routes for auth
app.use("/auth", require("./routes/authRoute"));


//connecting database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGDB_URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then(console.log("Database connected successfully"));
PORT = process.env.PORT || 5500;
app.listen(PORT,()=>{
    console.log(`\n\n-------> http://localhost: ${PORT}<-----------`);
});



