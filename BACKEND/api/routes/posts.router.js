const router = require('express').Router()

const { createPost, updatePost, deletePost, getAllPosts, getOnePost, addPost } = require('../controllers/posts.controller')

const {
    checkAuth
} = require('../middlewares')

router.get("/", getAllPosts)
router.get("/", getOnePost)
router.post("/", createPost)
router.put("/", updatePost)
router.delete("/", deletePost)
router.post("/:id", checkAuth, addPost)

module.exports = router