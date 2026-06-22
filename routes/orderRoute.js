const express = require('express');

const router = express.Router();

const { createOrder, getOrders, getOrder} = require('../controllers/orderController');

// Create Order

router.post('/', createOrder);

// Get All Orders

router.get('/', getOrders);

// Get Single Order

router.get('/:id', getOrder);

module.exports = router;