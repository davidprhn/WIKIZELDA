const router = require('express').Router()

const { createPost, updatePost, deletePost } = require('../controllers/posts.controller')


router.post("/", createPost)
router.put("/", updatePost)
router.delete("/", deletePost)

module.exports = router