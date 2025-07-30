const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb+srv://drstrange12444440:PjKpmrqJguZBQ6v4@drstrange.icpyxcl.mongodb.net/Leetcode')
}

module.exports = main;


