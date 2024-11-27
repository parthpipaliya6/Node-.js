const mongoose = require('mongoose');
const PrdoctsSchema = new mongoose.Schema({
    Title:String,
    Img:String,
    Price:Number,
    rating:[{Username:String, Count:Number}]
})

const Product = mongoose.model("Product",PrdoctsSchema);
module.exports = Product;