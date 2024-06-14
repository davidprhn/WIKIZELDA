const Post = require('../models/posts.model')



const createPost = async (req, res) => {
    try {
        const newPost = { ...req.body, userId: res.local.user.id }
        const post = await Post.create(newPost)

        res.status(200).json({
            message: 'Post created',
            result: post,
        })
    } catch (error) {
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

module.exports = {
    createPost,
    updatePost,
    deletePost
}