const express = require('express');


const router = express.Router();


const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');


// GET all products
router.get('/', getProducts);

// GET one product
router.get('/:id', getProduct);

// CREATE product
router.post('/', createProduct);

// UPDATE product
router.put('/:id', updateProduct);

// DELETE product
router.delete('/:id', deleteProduct);


// Export router
module.exports = router;