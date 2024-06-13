const router = require('express').Router()

const userRouter = require('./user.router')
const userInfoRouter = require('./user_info.router')

router.use('/user', userRouter)
router.use('/userinfo', userInfoRouter)

module.exports = router