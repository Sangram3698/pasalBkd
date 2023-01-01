const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require("../models/user");

//REGISTER controller
const register = async(req, res) =>{
  try{
    const { firstName, lastName, email, password, address} = req.body;

    // crypting the pswd
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // creating user
    const user = new User({firstName, lastName, email, password: passwordHash, address});

    const parseUser = await user.save();

    res.status(200).json(parseUser);

  }catch(error){
    res.status(400).json({error: error.message});
    console.log("---bk--: register () error  !!");
  }
}


// LOGIN controller
const login = async(req, res) =>{
  try{
    const {lemail, lpassword} = req.body; //login user data

    const user = await User.findOne({email: lemail}); // to check 
    if(!user){
      return res.status(400).json({msg: "User doesn't exist !!"});
    }

    const isMatch = await bcrypt.compare(lpassword, user.password);
    if(!isMatch){
      return res.status.json({msg:"Invalid Password"});
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    
  }catch(error){
    res.status(400).json({error: error.message});
    console.log("--bk--: login() error !!");
  }
}

module.exports = {register, login};