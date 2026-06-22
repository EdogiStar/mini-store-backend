const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
app.use(cors());
dotenv.config();

const connectDB = require('./config/db');


app.use(express.json());
app.use(express.urlencoded({extended: false}));


const port = process.env.PORT || 3000;
const products = require('./routes/productRoute');
const orders = require('./routes/orderRoute');

app.use('/api/products', products);
app.use('/api/orders', orders);

app.get('/', (req, res) => {
    res.send('Mini Store Backend API is running...');
});

const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Server is running on port ${port}...`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

startServer();
