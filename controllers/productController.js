const Product = require('../models/productModel');
const Joi = require('joi');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).send(products);
    }catch(error){
        res.status(500).send('Server error');
    }
};

const getProduct = async (req, res) => {
    try{
        const { id } = req.params;
    
        const product = await Product.findById(id);

        if (!product)
            return res.status(404).send('Product not found');

        res.send(product);
    }catch(error){
        res.status(500).send('Server failed');
    }
};

const createProduct = async (req, res) => {
    try{
        const { error } = validateProduct(req.body);

        if (error)
            return res.status(400).send(error.details[0].message);

        const product= await Product.create(req.body);

        res.status(201).send(product);
    }catch(error){
        res.status(500).send('Server failure');
    }
};

const updateProduct = async (req, res) => {
    try{
        const { error } = validateProduct(req.body);

        if (error)
            return res.status(400).send(error.details[0].message);
    
        const { id } = req.params;
    
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product)
            return res.status(404).send('Product not found');
    
        const updatedProduct = await Product.findById(id);
        res.send(updatedProduct);
    }catch(error){
       res.status(500).send('Server failed');
    }
};

const deleteProduct = async (req, res) => {
    try{
        const { id } = req.params;
    
        const product = await Product.findByIdAndDelete(id);
    
        if (!product)
            return res.status(404).send('Product not found');

        res.send("Product deleted successfully");
    }catch(error){
       res.status(500).send('Server failed');
    }
};


// Validation function
function validateProduct(product) {

    const schema = Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().required(),
    });

    return schema.validate(product);
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct 
};