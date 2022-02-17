const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()

require('dotenv').config()

const connection = require('../database/database')

router.post('/', (req, res) => {
    const email = req.body.email;
	const password = req.body.password;

    const query = `SELECT * FROM user WHERE email = ${connection.escape(email)} `

    connection.query(query, (error, result, fields) => {
        if(error) {
            return res.send({
                message: error
            })
        }

        if(result.length < 0) {
            return res.send({
                message: "Wrong user information, please check again!"
            })
        }
        bcrypt.compare(
            password, 
            result[0]['password'],
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
        }
    )
})

module.exports = router
