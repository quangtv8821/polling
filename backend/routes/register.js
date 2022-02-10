const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

require('dotenv').config()

const connection = require('../database/database')

router.post('/', (req, res) => {
    const email = req.body.email;
	const password = req.body.password

    connection.query(
        `SELECT * FROM user WHERE email = ${connection.escape(email)}`,
        (error, result) => {
            if(result.length > 0) {
                return res.json("Email is already exist!")
            } else {
                bcrypt.hash(password, 10, (error, hash) =>{
                    if(error) {
                        return res.send({
                            message: error
                        })
                    } else {
                        connection.query(
                            `INSERT INTO user (email, password) VALUES (${connection.escape(email)}, ${connection.escape(hash)})`,
                           (error, result) => {
                            if(error) {
                                return res.send({
                                    message: error
                                })
                            }
                            return res.json("Register success")
                        })
                    }
                })
            }
        }
    )
})

module.exports = router