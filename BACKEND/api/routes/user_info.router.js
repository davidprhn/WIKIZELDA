const router = require('express').Router()

const { createUserInfo, updateUserInfo, deleteUserInfo } = require('../controllers/user_info.controller')


router.post("/", createUserInfo)
router.put("/", updateUserInfo)
router.delete("/", deleteUserInfo)

module.exports = router