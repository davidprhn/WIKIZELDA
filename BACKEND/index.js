require('dotenv').config()

const { checkDB, syncModels } = require('./database')
const defineRelations = require('./database/relations')

const startDB = async () => {
    await checkDB()
    await defineRelations()
    syncModels()
}

startDB()