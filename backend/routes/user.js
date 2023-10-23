const express = require('express');
const { LoginUser, SignUpUser } = require('../controller/userController');

const userRoutes = express.Router();

//Login Route
userRoutes.post('/login', LoginUser)

//Signup Route
userRoutes.post('/signup', SignUpUser)

module.exports = userRoutes