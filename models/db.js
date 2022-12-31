const mongoose=require("mongoose");
module.exports=async()=>{
    const connectionParser={
        useNewUrlParser:true,
        useUnifiedTopology:true
    };
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect("mongodb+srv://Sangri33:1234567890asdf@clusterp.wanqp2x.mongodb.net/test",connectionParser);
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error);
    }
}