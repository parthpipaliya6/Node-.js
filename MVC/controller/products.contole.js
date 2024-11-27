const Product = require("../Model/Product.Schema")

const getProducts = async(req,res) =>{
    try {
        let product = await Product.find();
        res.status(200).send(product);
    } catch (error) {
        console.log(error);
    }
}

const getProductId = async(req,res) =>{
    try {
        let {Productid} = req.params;
        let product = await Product.findById(Productid);
        res.status(200).send(product);
    } catch (error) {
        console.log(error);
    }
}

const postProduct = async(req,res) =>{
    try {
        let product = await Product.create(req.body);
        res.status(201).send(product);
    } catch (error) {
        console.log(error);
    }
}

const patchProduct = async(req,res) =>{
    try {
        let {Productid} = req.params;
        let product = await Product.findByIdAndUpdate(Productid, res.body, {new: true});
        res.status(201).send(product);
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async(req,res) =>{
    try {
        let {Productid} = req.params;
        let product = await Product.findByIdAndUpdate(Productid);
        res.status(201).send(product);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getProducts,
    getProductId,
    postProduct,
    patchProduct,
    deleteProduct,
}