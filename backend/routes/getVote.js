const express = require('express')

const router = express.Router()

const connection = require('../database/database')

router.get('/', (req, res) => {
    const id = req.body.id
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

module.exports = router