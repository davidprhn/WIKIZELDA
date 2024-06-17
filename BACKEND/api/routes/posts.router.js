const router = require('express').Router()

const { createPost, updatePost, deletePost, getAllPosts, getOnePost } = require('../controllers/posts.controller')


router.get("/", getAllPosts)
router.get("/", getOnePost)
router.post("/", createPost)
router.put("/", updatePost)
router.delete("/", deletePost)

module.exports = router