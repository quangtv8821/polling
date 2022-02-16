const express = require('express')
const date = require('date-and-time')

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
            for(let i = 0; i < result.length; i++) {
                result[i].end = date.format(result[i].end,'YYYY/MM/DD HH:mm:ss')
            }
            return res.json(result)
    })
})
router.post('/most-vote', (req, res) => {
    const id = req.body.id
    connection.query(
        `SELECT * FROM vote WHERE total = (SELECT MAX(total) FROM vote WHERE id_poll = '${id}') and id_poll = '${id}'`,
        (error, result) => {
            if(error) {
                console.log(error)
            }
            return res.json(result)
        }
    )
})
module.exports = router