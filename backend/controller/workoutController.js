const WorkoutModel = require('../models/workoutModel');
const mongoose = require('mongoose');

// Get all Workout
const getAllWorkout = async (req, res) => {
  const user_id = req.user._id;
  const workouts = await WorkoutModel.find({user_id}).sort({ createdAt: -1 })
  res.status(200).json(workouts)
}

// Get single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({error: 'No Such Workout'})
  }
  const workout = await WorkoutModel.findById(id)
  if (!workout) {
    res.status(400).json({error: 'No Such Workout'})
  }
  res.status(200).json(workout)
}

// Create a Workout
const createWorkout = async (req, res) => {
  const {title, load, reps} = req.body;
  try {
    const user_id = req.user._id
    const workout = await WorkoutModel.create({
      title, load, reps, user_id,
    })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Delete a Workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({error: 'No Such Workout'})
  }
  const workout = await WorkoutModel.findOneAndDelete({_id: id})
  if (!workout) {
    res.status(400).json({error: 'No Such Workout'})
  } 
  res.status(200).json(workout)
}

// Update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({error: 'No Such Workout'})
  }
  const workout = await WorkoutModel.findOneAndUpdate({ _id:id }, {
    ...req.body
  })
  if (!workout) {
    res.status(400).json({error: 'No Such Workout'})
  } 
  res.status(200).json(workout)
}

module.exports = {
  getAllWorkout,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}