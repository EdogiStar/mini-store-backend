const Order = require('../models/orderModel');
const Joi = require('joi');

// CREATE ORDER

const createOrder = async (req, res) => {
    try {
        const { error } = validateOrder(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const order = await Order.create(req.body);
        res.status(201).send(order);
    }catch (error) {
        res.status(500).send('Failed to create order');
    }
};

// GET ALL ORDERS

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).sort({createdAt: -1});
        res.send(orders);
    }catch (error) {
        res.status(500).send('Failed to fetch orders');
    }
};

// GET SINGLE ORDER

const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).send('Order not found');
        res.send(order);
   }catch (error) {
       res.status(500).send('Failed to fetch order');
   }
};

// VALIDATION

function validateOrder(order) {

const schema = Joi.object({
    customer: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        address: Joi.string().required()
    }).required(),
    items: Joi.array().items(
        Joi.object({
            title: Joi.string().required(),
            price: Joi.number().required(),
            image: Joi.string().required(),
            quantity: Joi.number().min(1).required()
        })
    ).min(1).required(),
    total: Joi.number().positive().required()});
    
    return schema.validate(order);
}

module.exports = {
    createOrder,
    getOrders,
    getOrder
};