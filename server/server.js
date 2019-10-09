//IMPORTS
require('dotenv').config()
const express = require('express')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const massive = require('massive')
const session = require('express-session')
const contractCtrl = require('./controllers/contractCtrl.js')
const authCtrl = require('./controllers/authCtrl')
const stripe = require("stripe")("sk_test_FFifD8c4zMyr59GvISOEkoRu00Pg7AEj8C")

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
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout )
app.get('/api/auth/me', authCtrl.findUser)


//CONTRACT ENDPOINTS

//BUILDER ENDPOINTS
app.post('/api/company/new/', contractCtrl.addCompany)
app.post('/api/client/new/', contractCtrl.addClient)
app.post('/api/features/new/', contractCtrl.addFeatures)
app.post('/api/terms/new/', contractCtrl.addTerms)
app.post('/api/contracts/new', contractCtrl.addContract)

//DOCUMENTS ENDPOINTS
app.get('/api/documents', contractCtrl.getDocuments)
app.get('/api/doc/:id', contractCtrl.getOneDocument)
app.delete('/api/doc/:id', contractCtrl.deleteDoc)
app.put('/api/doc/:id', contractCtrl.editDoc)

//STRIPE ENDPOINTS
app.post('/charge', contractCtrl.charge)


//MASSIVE AND APP LISTENING

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database is set')
    app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))
})






