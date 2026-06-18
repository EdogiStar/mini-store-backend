const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


const port = process.env.PORT || 3000;
const products = require('./routes/productRoute');

app.use('/api/products', products);


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
