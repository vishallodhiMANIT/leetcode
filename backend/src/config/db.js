const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb+srv://ironman12444444:2RHZz6r5hC9Iav2l@cluster0.npbrlfe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Leetcode')
}

module.exports = main;


