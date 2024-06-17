const User = require('../models/user.model')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: req.query
        })

        if (!users) {
            res.status(404).json({
                message: "No users found",
                result: users,
            })
        }

        res.status(200).json({
            message: "All Users fetched",
            result: users,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error getting all users',
            result: error
        })
    }
}

const getOneUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params)

        if (!user) {
            res.status(404).json({
                message: "User not found",
                result: user,
            })
        }

        res.status(200).json({
            message: "User fetched",
            result: user,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error getting one user',
            result: error
        })
    }
}

const createUser = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALTS))
        req.body.password = bcrypt.hashSync(req.body.password, salt)
        const user = await User.create(req.body)

        res.status(201).json({
            message: 'User created',
            result: user,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error creating user',
            result: error
        })
    }
}

const updateOneUser = async (req, res) => {
    try {
        const [result] = await User.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        )

        if (result === 0) {
            res.status(404).json({
                message: "User not found",
                result: result,
            })
        }

        res.status(200).json({
            message: "User updated",
            result: result,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error updating user',
            result: error
        })
    }
}

const deleteOneUser = async (req, res) => {
    try {
        const user = await User.destroy(
            {
                where: {
                    id:req.params.id,
                },
            })

        if (!user) {
            res.status(404).json({
                message: "User not deleted",
                result: user,
            })
        }

        res.status(200).json({
            message: "User DESTROYED",
            result: user,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error deleting user',
            result: error
        })
    }
}

module.exports = {
    createUser,
    getOneUser,
    getAllUsers,
    updateOneUser,
    deleteOneUser
}