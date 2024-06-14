const router = require('express').Router()

const userRouter = require('./user.router')
const userInfoRouter = require('./user_info.router')
const postRouter = require('./posts.router')

router.use('/user', userRouter)
router.use('/userinfo', userInfoRouter)
router.use('/post', postRouter)

module.exports = router