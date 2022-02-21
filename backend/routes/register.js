const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

const db = require("../models")
const Users = db.users

router.post('/', async (req, res) => {
    const email = req.body.email
	const password = req.body.password

    const user = await Users.findAll({
        where: {
          email: email
        }
    });
    if(user.length != 0) {
        return res.send("Email is already exist!")
    }
    bcrypt.hash(password, 10, async (error, hash) =>{
        if(error) {
            return res.send({
                message: error
            })
        } else {
            const register = await Users.create({
                email: email,
                password: hash,
                role: 'user'
            })
            res.json({
                message: "Register success"
            })
        }
    })
})

module.exports = router