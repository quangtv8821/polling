const express = require('express')

const router = express.Router()

const connection = require('../database/database')


router.post('/', (req, res) => {
    const vote_id = req.body.vote_id
    connection.query(
        `SELECT total FROM vote WHERE id='${vote_id}'`,
        (error, result) => {
            if(error) {
                console.log(error)
            }
            return res.json(result)
        }
    )
})
module.exports = router