require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

// application
const app = express();

// middleware
app.use(express.json())

app.use((req,  res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes 
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// connect to db
mongoose.connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT_NUM, () => {
      console.log("Listening to port with app", process.env.PORT_NUM);
    });
  })
  .catch((error) => {console.log(error)})
