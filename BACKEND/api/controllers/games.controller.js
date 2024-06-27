const Game = require('../models/games.model')
const Post = require('../models/posts.model')


const getAllGames = async (req, res) => {
    try {
        const games = await Game.findAll({
            where: req.query
        })

        if (!games) {
            res.status(404).json({
                message: "No games found",
                result: games,
            })
        }

        res.status(200).json({
            message: "All Games fetched",
            result: games,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error getting all games',
            result: error
        })
    }
}

const getOneGame = async (req, res) => {
    try {
        const game = await Game.findByPk(req.params.id, {include:{model:Post}})

        if (!game) {
            res.status(404).json({
                message: "Game not found",
                result: game,
            })
        }

        res.status(200).json({
            message: "Game fetched",
            result: game,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error getting one game',
            result: error
        })
    }
}

const createGame = async (req, res) => {
    try {
        const game = await Game.create(req.body)

        res.status(201).json({
            message: 'Game created',
            result: game,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error creating game',
            result: error
        })
    }
}

const updateOneGame = async (req, res) => {
    try {
        const [result] = await Game.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        )

        if (result === 0) {
            res.status(404).json({
                message: "Game not found",
                result: result,
            })
        }

        res.status(200).json({
            message: "Game updated",
            result: result,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error updating game',
            result: error
        })
    }
}

const deleteOneGame = async (req, res) => {
    try {
        const game = await Game.destroy(
            {
                where: {
                    id:req.params.id,
                },
            })

        if (!game) {
            res.status(404).json({
                message: "Game not deleted",
                result: game,
            })
        }

        res.status(200).json({
            message: "Game DESTROYED, GANON WINS",
            result: game,
        })
    } catch (error) {
         res.status(500).json({
            message: 'Error deleting game',
            result: error
        })
    }
}

const getPostsByGameId = async (req, res) => {
    const { gameId } = req.params;
    try {
        const posts = await Post.findAll({ where: { gameId } });
        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found for this game' });
        }
        res.json({ results: posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createGame,
    getOneGame,
    getAllGames,
    updateOneGame,
    deleteOneGame,
    getPostsByGameId
}