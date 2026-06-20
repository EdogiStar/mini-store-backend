const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required:  [true, 'Please enter product name'],
        minlength: 3
    },
    price: {
        type: Number,
        required:  [true, 'Please enter product price'],
        min: 1
    },
    image: {
        type: String,
        required: [true, 'Please enter product image']
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

