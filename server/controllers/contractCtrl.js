module.exports = {
    addCompany: async (req, res) => {
        const db = req.app.get('db')
        const {userid} = req.session
        const {legalName: legal_name, termsOfService: terms_of_service, logo, address, city, state, zipcode} = req.body
        await db.add_company([legalName, termsOfService, logo, address, city, state, zipcode, userid])
        res.sendStatus(200)
    }
}