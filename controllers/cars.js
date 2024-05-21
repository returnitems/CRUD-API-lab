const Car = require('../models/car.js');
const express = require('express');
const router = express.Router();


//Create route
router.post('/', async (req, res) => {
    try {
        const createdCar = await Car.create(req.body);
        res.json(createdCar)
    } catch (error) {
        console.log(error);
    }
});

//Read route
router.get('/', async (req, res) => {
    try {
        const getCars = await Car.find();
        res.json(getCars)
    } catch (error) {
        console.log(error);
    }
});

//Show route
router.get('/:carId', async (req, res) => {
    try {
        const findCar = await Car.findById(req.params.carId);
        res.json(findCar);
    } catch (error) {
        console.log(error);
    }
});

//Update route
router.put('/:carId', async (req, res) => {
    try {
        const updateCar = await Car.findByIdAndUpdate(req.params.carId, req.body, {new:true});
        res.json(updateCar)
    } catch (error) {
        console.log(error);
    }
});

//Delete route
router.delete('/:carId', async (req, res) => {
    try {
        const deleteCar = await Car.findByIdAndDelete(req.params.carId);
        res.json(deleteCar)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;