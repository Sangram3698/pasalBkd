const router = require("express").Router();
const { getProduct, getProducts, createProductPost} = require("../controller/productControllers");
const Product =require("../models/product")

router.get("/:id",getProduct);

router.get("/", getProducts);

router.post("/post",createProductPost);

// router.put("/onlineOrder/:id",onlineOrder)

module.exports=router;