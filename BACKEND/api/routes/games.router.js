const router = require('express').Router()

const { getAllGames, getOneGame, createGame, updateOneGame, deleteOneGame } = require('../controllers/games.controller')


router.get('/', getAllGames)
router.get('/:id', getOneGame)
router.post('/', createGame)
router.put('/:id', updateOneGame)
router.delete('/:id', deleteOneGame)

module.exports = router