module.exports = {
    addCompany: async (req, res) => {
        const db = req.app.get('db')
        const {userid} = req.session
        const {legal_name, terms_of_service, logo, address, city, state, zipcode} = req.body
        const companyInfo = await db.add_company([legal_name, terms_of_service, logo, address, city, state, zipcode, userid])
        res.status(200).send(companyInfo[0])
    },
    addClient: async (req, res) => {
        const db = req.app.get('db')
        const {userid} = req.session
        const {client_name, signatory} = req.body
        const clientInfo = await db.add_client([client_name, signatory, userid])
        res.status(200).send(clientInfo[0])
    },
    addFeatures: async (req, res) => {
        const db = req.app.get('db')
        const {userid} = req.session
        const {title, description, price} = req.body
        const featuresInfo = await db.add_features([title, description, price, userid])
        res.status(200).send(featuresInfo[0])
    },
    addTerms: async (req, res) => {
        const db = req.app.get('db')
        const {userid} = req.session
        const {effective_date, contract_length, autorenew, payment_frequency, collections_protection, chargeback_protection} = req.body
        const termsInfo = await db.add_terms([effective_date, contract_length, autorenew, payment_frequency, collections_protection, chargeback_protection, userid])
        res.status(200).send(termsInfo[0])
    },
    addContract: async (req, res) => {
        const db = req.app.get('db')
        const {userid} = req.session
        const {contract_name, company_id, client_id, features_id, terms_id} = req.body
        const contractInfo = await db.add_contract([contract_name, company_id, client_id, features_id, terms_id, userid])
        res.status(200).send(contractInfo[0])
    },
    getDocuments: async (req, res) => {
        const db = req.app.get('db')
        const {userid} = req.session
        db.get_all_documents()
        .then( result => {
            const filteredResult = result.filter(el => el.user_id === +userid)
            res.status(200).send(filteredResult)
           
        })
        .catch(err => {
            console.log(`Problem with getting all documents: ${err}`)
            res.status(500).send(`Problem with getting all docuemnts: ${err}`)
        })

    },
    getOneDocument: async (req, res) => {
        const db = req.app.get('db')
        // console.log(req.params)
        const {id} = req.params
        const {userid} = req.session
        // console.log(userid)
        
        await db.get_one_document(id).then(result => {
            // console.log(result)
            // console.log(result.id)
            if(result[0].user_id === userid){

            res.status(200).send(result)
            } else {
                res.status(401).send('Unathorized')
            }
        }).catch(err => {
            console.log(`Problem with getting one document: ${err}`)
            res.status(500).send(`Problem with getting one docuemnt: ${err}`)
        })
    }
}