const express = require('express');

const router = express.Router();
const {
  createBlog,
  getSingleBlog,
  getAllBlog,
  deleteBlog,
  updateBlog,
} = require('../controller/blogController');

const requireAuth = require('../middleware/requireAuth')

// require auth for all blog routes
router.use(requireAuth)

// GET ALL 
router.get('/', getAllBlog);

// Get Single
router.get('/:id', getSingleBlog);

// Post new blog
router.post('/', createBlog);

// Delete this blog 
router.delete('/:id', deleteBlog);

// Update this post

router.patch('/:id', updateBlog);


module.exports = router;