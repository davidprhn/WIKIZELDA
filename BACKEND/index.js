require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const { checkDB, syncModels } = require('./database')
const defineRelations = require('./database/relations')

const startDB = async () => {
    await checkDB()
    await defineRelations()
    syncModels()
}

const router = require('./api/routes');
const app = express()
app.use(morgan('dev'))

app.use('/api', router)

app.listen(process.env.PORT, () => {
    console.log(`Server started!! Listening on port ${process.env.PORT}`)
    startDB()
})


