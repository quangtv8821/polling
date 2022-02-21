const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()

const db = require("../models")
const Users = db.users

router.post('/', async (req, res) => {
    const email = req.body.email
	const password = req.body.password

    const result = await Users.findAll({
        where: {
            email: email
        },
        raw: true
    })

    if(result.length < 0) {
        return res.send({
            message: "Wrong user information, please check again!"
        })
    }

    bcrypt.compare(
        password, 
        result[0].password,
        (error, results) =>{
            if(error) {
                return res.send({
                    message: "Wrong user information, please check again!"
                })
            }

            if(results) {
                const token = jwt.sign({id: result[0].id}, process.env.SECRET, {expiresIn: '15m'})
                return res.json({
                    message: "logged in",
                    role: result[0]['role'],
                    id: result[0]['id'],
                    token: token
                })
            }
            return res.send({
                message: "Wrong user information, please check again!"
            })
    })
})

module.exports = router
