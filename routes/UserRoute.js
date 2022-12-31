const router=require("express").Router();
const User=require("../models/user")

router.get("/user",async(req,res)=>{
    const user = await User.find();
    res.json(user);
});

router.post("/user/post",(req,res)=>{
    const user=new User({
        userName:req.body.userName,
        password:req.body.password,
        email:req.body.email,
    });
    user.save();
    res.json(user);
})

router.put("user/:id",async(req,res)=>{
 try{
    const newUser=await User.findById(req.params.id);
    newUser.new=!newUser.new;
    newUser.save();
    res.status(200).json(newUser);

 }catch(error){
    res.status(404).json({error: error.message});
 }

})
router.delete("user/:id",async(req,res)=>{
    const delUser=await User.findByIdAndDelete(req.params.id);
    res.json(delUser); 
})

module.exports=router;