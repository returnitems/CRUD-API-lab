const Car = require('../models/car.js');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const createdCar = await Car.create(req.body);
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;