const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Userinfo = connection.define(
    'user_info',
    {
        info: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            defaultValue: 'https://avatarfiles.alphacoders.com/598/thumb-59816.jpg'
        },
    },
    {
        timestamps: false,
    }
)

module.exports = Userinfo