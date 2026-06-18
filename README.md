# Build Database Schema

# Overview

This project demonstrates backend database schema design using MongoDB and Mongoose. It includes a Mongoose model with validation rules, database connection configuration using environment variables, and a clean backend-ready folder structure.

# Project Structure

build-database-schema/
│
├── config/
│   └── db.js
│
├── models/
│   └── Product.js
│
├── .env.example
├── .gitignore
├── package.json
└── README.md

# Model Description

This project uses a Product model with the following fields:

- name → String, required, minimum length validation
- price → Number, required, minimum value validation
- category → String, enum validation (allowed categories only)
- stock → Number, default value and minimum validation
- inStock → Boolean, default value enabled

Validation rules help maintain accurate and consistent product records.

# Installation

Clone the repository and install dependencies:

npm install

Environment Setup

Create a ".env" file in the project root and add your MongoDB connection string.

Example:

MONGO_URI=your_mongodb_connection_string

You can copy from:

cp .env.example .env

# Dependencies

- Node.js
- Mongoose
- dotenv
- joi


# build-database-schema
