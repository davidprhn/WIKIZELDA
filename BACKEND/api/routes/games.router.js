const router = require('express').Router()

const { getAllGames, getOneGame, createGame, updateOneGame, deleteOneGame, getPostsByGameId } = require('../controllers/games.controller')


router.get('/', getAllGames)
router.get('/:id', getOneGame)
router.get('/:gameId/posts', getPostsByGameId);
router.post('/', createGame)
router.put('/:id', updateOneGame)
router.delete('/:id', deleteOneGame)

module.exports = router