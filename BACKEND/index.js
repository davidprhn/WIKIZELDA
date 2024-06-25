require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const { checkDB, syncModels } = require('./database')
const defineRelations = require('./database/relations')

const startDB = async () => {
    await checkDB()
    await defineRelations()
    syncModels()
}

const router = require('./api/routes');

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api', router)

app.listen(process.env.DB_PORT, () => {
    console.log(`Server started!! Listening on port ${process.env.DB_PORT}`)
    startDB()
})


