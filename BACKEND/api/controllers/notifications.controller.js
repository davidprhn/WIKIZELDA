const Notification = require('../models/notifications.model')


const getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.findAll({
            where: req.query
        })

        if (!games) {
            res.status(404).json({
                message: "No notifications found",
                result: notifications,
            })
        }

        res.status(200).json({
            message: "All Notifications fetched",
            result: notifications,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error getting all notifications',
            result: error
        })
    }
}

const getOneNotification = async (req, res) => {
    try {
        const notification = await Notification.findByPk(req.params)

        if (!notification) {
            res.status(404).json({
                message: "Notification not found",
                result: notification,
            })
        }

        res.status(200).json({
            message: "Notification fetched",
            result: notification,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error getting one notification',
            result: error
        })
    }
}

const createNotification = async (req, res) => {
    try {
        const notification = await Notification.create(req.body)

        res.status(201).json({
            message: 'Notification created',
            result: notification,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error creating notification',
            result: error
        })
    }
}

const updateOneNotification = async (req, res) => {
    try {
        const [result] = await Notification.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        )

        if (result === 0) {
            res.status(404).json({
                message: "Notification not found",
                result: result,
            })
        }

        res.status(200).json({
            message: "Notification updated",
            result: result,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error updating notification',
            result: error
        })
    }
}

const deleteOneNotification = async (req, res) => {
    try {
        const notification = await Notification.destroy(
            {
                where: {
                    id:req.params.id,
                },
            })

        if (!notification) {
            res.status(404).json({
                message: "Notification not deleted",
                result: notification,
            })
        }

        res.status(200).json({
            message: "Notification DESTROYED",
            result: notification,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error deleting notification',
            result: error
        })
    }
}

module.exports = {
    createNotification,
    getOneNotification,
    getAllNotifications,
    updateOneNotification,
    deleteOneNotification
}