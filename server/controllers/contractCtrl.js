module.exports = {
    addCompany: async (req, res) => {
        const db = req.app.get('db')
        const {userid} = req.session
        const {legal_name, terms_of_service, logo, address, city, state, zipcode} = req.body
        const companyInfo = await db.add_company([legal_name, terms_of_service, logo, address, city, state, zipcode, userid])
        res.status(200).send(companyInfo[0])
    }
}