const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:  [true, 'Please enter product name'],
        minlength: 3
    },
    price: {
        type: Number,
        required:  [true, 'Please enter product price'],
        min: 1
    },
    category: {
        type: String,
        required: [true, 'Please choose product category'],
        minlength: 3
    },
    stock: {
        type: Number,
        min: 0,
        default: 1
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

