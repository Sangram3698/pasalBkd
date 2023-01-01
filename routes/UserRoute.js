const router=require("express").Router();
const { getUser, getUsers,deleteUser } = require("../controller/userController");
const User=require("../models/user")

router.get("/", getUsers);
router.get("/:id", getUser);

// router.post("/post",postUser);
// router.put("/:id",putUser)

router.delete("/delete/:id",deleteUser);

module.exports=router;