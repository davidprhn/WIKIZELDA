const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Notifications = connection.define(
    'notifications',
    {
        notification: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
)

module.exports = Notifications