const Post = require('../models/posts.model')


const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            where: req.query
        })

        if (!posts) {
            res.status(404).json({
                message: "No posts found",
                result: posts,
            })
        }

        res.status(200).json({
            message: "All Posts fetched",
            result: posts,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error getting all posts',
            result: error
        })
    }
}

const getOnePost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params)

        if (!post) {
            res.status(404).json({
                message: "Post not found",
                result: post,
            })
        }

        res.status(200).json({
            message: "Post fetched",
            result: post,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error getting one post',
            result: error
        })
    }
}

const createPost = async (req, res) => {
    try {
        const newPost = { ...req.body, userId: res.locals.user.id }
        const post = await Post.create(newPost)

        res.status(200).json({
            message: 'Post created',
            result: post,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error creating post',
            result: error
        })
    }
}

const updatePost = async (req, res) => {
    try {
        const [result] = await Post.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        )

        if (result === 0) {
            res.status(404).json({
                message: "Post not found",
                result: result,
            })
        }

        res.status(200).json({
            message: "Post updated",
            result: result,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error updating Post',
            result: error
        })
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await Post.destroy(
            {
                where: {
                    id:req.params.id,
                },
            })

        if (!post) {
            res.status(404).json({
                message: "Post not deleted",
                result: post,
            })
        }

        res.status(200).json({
            message: "Post DESTROYED",
            result: post,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error deleting Post',
            result: error
        })
    }
}

const addPost = async (req, res) => {
    try {
        const gamePost = await Post.findByPk(req.params.id)

        if (!gamePost) {
           return res.status(404).json()
        }

        await gamePost.setUser(res.locals.user)

        res.status(200).json({
            message: 'Post added',
            result: gamePost
        })
    } catch (error) {
        console.log(error)
         res.status(500).json({
            message: 'Error posting into game',
            result: error
        })
    }
}

module.exports = {
    getAllPosts,
    getOnePost,
    createPost,
    updatePost,
    deletePost,
    addPost
}