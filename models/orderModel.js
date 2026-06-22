const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

customer: {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
},

items: [
    {
        title: {
            type: String,
            required: true
           },
        price: {
            type: Number,
            required: true
           },
        image: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        }
    }
],

total: {
    type: Number,
    required: true
   },
status: {
    type: String,
    enum: ["Pending", "Processing", "Delivered"],
    default: "Pending"
   }
},
{
timestamps: true

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
