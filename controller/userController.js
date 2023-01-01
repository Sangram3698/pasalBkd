
const User = require('../models/user');
// get one
const getUser = async (req, res) =>{
try{
    const {id} = req.body;
    const user = await User.findById(id);

    res.status(200).json(user);

}catch(error){
    res.status(500).json({error:error.message});
    console.log("---bk--: getUser error !!");
}

}

//everyone
const getUsers=async(req,res)=>{
 try{
    const user = await User.find();
    res.json(user);
 }catch(error){
    res.status(500).json({error:error.message});
    console.log("----bk--: getUsers error !!");
 }
}


/* 
// Due to registeration user creation
const postUser= async (req,res)=>{  

        try{
            const data = req.body;            
            const resUser = await User(data).save();
            
            res.status(200).json(resUser);
        }catch(error){
            res.status(400).json({error: error.message})
            console.log("-----bk---: postUser error !!");
        }
    }


const putUser=async(req,res)=>{ 
        try{
           const newUser=await User.findById(req.params.id);
           newUser.new=!newUser.new;
           newUser.save();
           res.status(200).json(newUser);
       
        }catch(error){
           res.status(404).json({error: error.message});
           console.log("---bk---: putUser () error !!");
        } 
}*/

const deleteUser=async(req,res)=>{
    try{
        const delUser=await User.findByIdAndDelete(req.params.id);
        res.status(200).json(delUser);
    }catch(error){
        res.status(400).json({error: error.message});
        console.log("----bk--: deleteUser() !!");
    }
}

module.exports={getUsers,getUser,deleteUser};


// ---------------- version 2.0 features -----------------------

// const updateUserAddress = async(req, res)=>{
//     try{
//         // const {id} = req.params;
//         const userUpdate = req.body;
//         const user = await User.findById(userUpdate.id);

//         user.address = userUpdate.address;
        
//         user.save();
//     }catch(error){

//     }
// }