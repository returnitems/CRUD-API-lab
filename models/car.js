const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    year:Number,
    make:String,
    model:String,
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;