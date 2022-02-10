const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()

require('dotenv').config()

const connection = require('../database/database')

router.post('/', (req, res) => {
    const email = req.body.email;
	const password = req.body.password;

    const query = `SELECT * FROM user WHERE email = ${connection.escape(email)} AND password = ${connection.escape(password)}`

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

        console.log(result);

        if(result.length > 0) {
            const token = jwt.sign({id: result[0].id}, process.env.SECRET, {expiresIn: '15m'})

            res.cookie("token", token)

            return res.json({
                message: "logged in",
                token: token
            })
        }

        // bcrypt.compare(
        //     password, 
        //     result[0]['password'],
        //     (error, results) =>{
        //         if(error) {
        //             return res.send({
        //                 message: "Wrong user information, please check again!"
        //             })
        //         }

        //         console.log(results);//results return false
        //         console.log(result[0]['password']);

        //         if(results) {
        //             const token = jwt.sign({id: result[0].id}, process.env.SECRET, {expiresIn: '15m'})
        
        //             return res.json({
        //                 message: "logged in",
        //                 token: token
        //             })
        //         }
        //         return res.send({
        //             message: "Wrong user information, please check again!"
        //         })
        //     })
        }
    )
})

router.post('/post', (req, res) => {
    bcrypt.compare(
        req.body.password,
        '$2a$10$hEg6x57woSPKSpROt.EStON',
        (err, result) => {
            console.log(result)

            res.send(result)
        }
    )
})

module.exports = router
