const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String},
    price: { type: Number, required: true },
    image: { type: String },
},{timestamps: true});

// creating a model
const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel

