const router = require('express').Router()

const userRouter = require('./user.router')
const userInfoRouter = require('./user_info.router')
const postRouter = require('./posts.router')
const gameRouter = require('./games.router')
const notificationRouter = require('./notifications.router')
const authRouter = require('./auth.router')

router.use('/user', userRouter)
router.use('/userinfo', userInfoRouter)
router.use('/post', postRouter)
router.use('/game', gameRouter)
router.use('/notification', notificationRouter)
router.use('/auth', authRouter)

module.exports = router