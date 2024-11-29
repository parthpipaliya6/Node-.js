const Product = require("../models/product.model");

const createProduct = async (req, res) => {
  console.log(req.file);

  if (req.file) {
    req.body.img = req.file.path;
  }

  try {
    let product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    let product = await Product.findById(productId);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

const updateProduct = async (req, res) => {
  let { productId } = req.params;
  try {
    let product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    let product = await Product.findByIdAndDelete(productId);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};