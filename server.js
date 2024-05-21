const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const carRouter = require('./controllers/cars.js');

mongoose.connect(process.env.MONGODB_URI);

// mongoose.connection.on('connected', () => {
//   console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
// });

app.use(express.json());

app.use('/cars', carRouter);

app.listen(3030, () => {
  console.log('Working fine!');
});