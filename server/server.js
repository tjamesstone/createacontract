//IMPORTS
require('dotenv').config()
const express = require('express')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const massive = require('massive')
const session = require('express-session')
const authCtrl = './controllers/authCtrl.js'
const contractCtrl = './controllers/contractCtrl.js'

const app = express()



//MIDDLEWARE
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

//ENDPOINTS

//AUTH ENDPOINTS
app.post('/auth/register', authCtrl.register)

//CONTRACT ENDPOINTS

//MASSIVE AND APP LISTENING

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database is set')
    app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))
})






