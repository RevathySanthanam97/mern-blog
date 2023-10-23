const express = require('express');
// const Workout = require('../models/workoutModel')
const router = express.Router();
const {
  createWorkout,
  getSingleWorkout,
  getAllWorkout,
  deleteWorkout,
  updateWorkout,
} = require('../controller/workoutController');

const requireAuth = require('../middleware/requireAuth')

// require auth for all workout routes
router.use(requireAuth)

// GET ALL 
router.get('/', getAllWorkout);

// Get Single
router.get('/:id', getSingleWorkout);

// Post new workout
router.post('/', createWorkout);

// Delete this workout 
router.delete('/:id', deleteWorkout);

// Update this post

router.patch('/:id', updateWorkout);


module.exports = router;