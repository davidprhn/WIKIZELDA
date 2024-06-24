const router = require('express').Router()

const { createUserInfo, updateUserInfo, deleteUserInfo, getAllUserInfos, getOneUserInfo } = require('../controllers/user_info.controller')
const { checkAuth, checkAdmin } = require('../middlewares')


router.get("/", checkAuth, checkAdmin, getAllUserInfos)
router.get("/profile", checkAuth, getOneUserInfo)
router.post("/", createUserInfo)
router.put("/", updateUserInfo)
router.delete("/", deleteUserInfo)

module.exports = router