const UserInfo = require('../models/user_info.model')


const getAllUserInfos = async (req, res) => {
    try {
        const userinfos = await UserInfo.findAll({
            where: req.query
        })

        if (!userinfos) {
            res.status(404).json({
                message: "No userinfos found",
                result: userinfos,
            })
        }

        res.status(200).json({
            message: "All UserInfos fetched",
            result: userinfos,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error getting all userinfos',
            result: error
        })
    }
}

const getOneUserInfo = async (req, res) => {
    try {
        const userinfo = await UserInfo.findByPk(req.params)

        if (!userinfo) {
            res.status(404).json({
                message: "UserInfo not found",
                result: userinfo,
            })
        }

        res.status(200).json({
            message: "UserInfo fetched",
            result: userinfo,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error getting one userinfo',
            result: error
        })
    }
}

const createUserInfo = async (req, res) => {
    try {
        const infoUser = await UserInfo.create(req.body)

        res.status(200).json({
            message: 'UserInfo created',
            result: infoUser,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error creating UserInfo',
            result: error
        })
    }
}

const updateUserInfo = async (req, res) => {
    try {
        const [result] = await UserInfo.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        )

        if (result === 0) {
            res.status(404).json({
                message: "UserInfo not found",
                result: result,
            })
        }

        res.status(200).json({
            message: "UserInfo updated",
            result: result,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error updating UserInfo',
            result: error
        })
    }
}

const deleteUserInfo = async (req, res) => {
    try {
        const infoUser = await UserInfo.destroy(
            {
                where: {
                    id:req.params.id,
                },
            })

        if (!infoUser) {
            res.status(404).json({
                message: "UserInfo not deleted",
                result: infoUser,
            })
        }

        res.status(200).json({
            message: "UserInfo DESTROYED",
            result: infoUser,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error deleting UserInfo',
            result: error
        })
    }
}

module.exports = {
    getAllUserInfos,
    getOneUserInfo,
    createUserInfo,
    updateUserInfo,
    deleteUserInfo
}