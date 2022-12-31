const Product = require("../models/product");

const getProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("----bk--: getProduct() !!");
  }
};

const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("---k--: getProducts error !!");
  }
};

const createProductPost = async (req, res) => {
  try {
    const data = req.body;
    const newProduct = new Product(data).save();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({error:error.message}); 
    console.log("---k--: createProductPost () !!");   
  }
};

module.exports = {getProduct, getProducts, createProductPost};

