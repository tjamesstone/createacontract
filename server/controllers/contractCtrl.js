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
    }
}