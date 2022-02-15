const express = require('express')

const router = express.Router()

const connection = require('../database/database')

router.get('/poll-content', (req, res) => {
    const id = req.query.id
    connection.query(
        `SELECT * FROM vote WHERE id_poll = '${id}'`,
        (error, result) => {
            if(error) {
                return res.send({
                    messsage: error
                })
            }
            return res.json(result)
    })
})

router.get('/poll-title', (req, res) => {
    const id = req.query.id
    connection.query(
        `SELECT * FROM poll WHERE id = '${id}'`,
        (error, result) => {
            if(error) {
                return res.send({
                    messsage: error
                })
            }
            return res.json(result)
    })
})

module.exports = router