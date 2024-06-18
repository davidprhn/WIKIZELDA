const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Game = connection.define(
    'game',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        launch_year: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificulty: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        guide: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        game_image: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'https://www.researchgate.net/profile/Tc-Graham/publication/220982725/figure/fig1/AS:340689062776843@1458238010699/In-the-Legend-of-Zelda-The-Wind-Waker-the-players-avatar-points-to-interesting-objects.png'
        },
    },
    {
        timestamps: false,
    }
)

module.exports = Game