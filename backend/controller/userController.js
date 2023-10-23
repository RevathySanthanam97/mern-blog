const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

// login
const LoginUser = async(req, res) => {
  const { username, email, password} = req.body;
  try {
    const user = await UserModel.login(username, email, password)

    // Create a json web token 
    const token = createToken(user._id)
    res.status(200).json({email, user, token})
  } catch (error) {
    res.status(400).json({ error: error.message})
  }
}

// signup
const SignUpUser = async(req, res) => {
  const {username, email, password} = req.body;
  try {
    const user = await UserModel.signup(username, email, password)

    // Create a json web token 
    const token = createToken(user._id)
    res.status(200).json({email, user, token})
  } catch (error) {
    res.status(400).json({ error: error.message})
  }
}

module.exports = {
  LoginUser,
  SignUpUser,
}