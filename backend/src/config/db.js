const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb+srv://vishal:vishalBhai@cluster0.8wbrdzd.mongodb.net/Leetocde')
}

module.exports = main;


