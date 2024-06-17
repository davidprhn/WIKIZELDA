const router = require('express').Router()

const { createUser, getAllUsers, getOneUser, updateOneUser, deleteOneUser } = require('../controllers/user.controller')
const { checkAuth } = require('../middlewares')


router.get('/', checkAuth, getAllUsers)
router.get('/:id', getOneUser)
router.post('/', createUser)
router.put('/:id', updateOneUser)
router.delete('/:id', deleteOneUser)

module.exports = router