const router = require('express').Router()


const { getAllNotifications, getOneNotification, createNotification, updateOneNotification, deleteOneNotification } = require('../controllers/notifications.controller')


router.get('/', getAllNotifications)
router.get('/:id', getOneNotification)
router.post('/', createNotification)
router.put('/:id', updateOneNotification)
router.delete('/:id', deleteOneNotification)

module.exports = router