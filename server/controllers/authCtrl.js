const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const user = await db.find_user([email])
        if (user[0]) return res.status(200).send({message: 'Email is already registered'})

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let {first_name, last_name} = req.body

        const newUser = await db.create_user([first_name, last_name, email, hash ])

        req.session.userid = newUser[0].userid

        res.status(201).send(newUser[0])
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {email, password} = req.body
        const user = await db.find_user([email])
        if (!user[0]) return res.status(200).send({message: 'Incorrect email'})
        const result = bcrypt.compareSync(password, user[0].password)
        if(!result) return res.status(200).send({message: 'Incorrect password'})
        req.session.userid = user[0].userid
        res.status(200).send(user[0])
    },
    logout: async (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}