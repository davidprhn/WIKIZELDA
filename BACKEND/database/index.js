const { Sequelize } = require('sequelize')

const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
}
)

const checkDB = async () => {
    try {
    await connection.authenticate()
     console.log('Connection has been established successfully.')
    } catch (error) {
     console.error('Unable to connect to the database:', error)
    }
}

module.exports = {
    connection,
    checkDB
}