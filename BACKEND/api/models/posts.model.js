const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Post = connection.define(
    'post',
    {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        }
    },
    {
        timestamps: false
    }
)

module.exports = Post