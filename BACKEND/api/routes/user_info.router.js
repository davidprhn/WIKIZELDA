const router = require('express').Router()

const { createUserInfo, updateUserInfo, deleteUserInfo, getAllUserInfos, getOneUserInfo } = require('../controllers/user_info.controller')


router.get("/", getAllUserInfos)
router.get("/", getOneUserInfo)
router.post("/", createUserInfo)
router.put("/", updateUserInfo)
router.delete("/", deleteUserInfo)

module.exports = router