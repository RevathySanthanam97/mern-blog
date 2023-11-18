const BlogModel = require('../models/blogModel');
const mongoose = require('mongoose');

// Get all Blog
const getAllBlog = async (req, res) => {
  const user_id = req.user._id;
  const blogs = await BlogModel.find({user_id}).sort({ createdAt: -1 })
  res.status(200).json(blogs)
}

// Get single blog
const getSingleBlog = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({error: 'No Such Blog'})
  }
  const blog = await BlogModel.findById(id)
  if (!blog) {
    res.status(400).json({error: 'No Such Blog'})
  }
  res.status(200).json(blog)
}

// Create a Blog
const createBlog = async (req, res) => {
  const {title, imageUrl, tags, content} = req.body;
  try {
    const user_id = req.user._id
    const blog = await BlogModel.create({
      title, imageUrl, tags, content, user_id,
    })
    res.status(200).json(blog)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// Delete a Blog
const deleteBlog = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({error: 'No Such Blog'})
  }
  const blog = await BlogModel.findOneAndDelete({_id: id})
  if (!blog) {
    res.status(400).json({error: 'No Such Blog'})
  } 
  res.status(200).json(blog)
}

// Update a blog
const updateBlog = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({error: 'No Such Blog'})
  }
  const blog = await BlogModel.findOneAndUpdate({ _id:id }, {
    ...req.body
  })
  if (!blog) {
    res.status(400).json({error: 'No Such Blog'})
  } 
  res.status(200).json(blog)
}

module.exports = {
  getAllBlog,
  getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog
}