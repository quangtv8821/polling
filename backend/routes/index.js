const express = require('express')

const router = express.Router()

const connection = require('../database/database')

//status = 1 -> recent, 2-> ended, 3 -> upcoming

//get ended vote
router.get('/ended-poll', (req, res) => {
    connection.query(
        `SELECT * FROM poll WHERE status = '2'`,
        (error, result) => {
            if(error) {
                return res.send({
                    message: error
                })
            }
            if(result.length <= 0) {
                return res.json({
                    message: "There are no ended vote"
                })
            }


            console.log(result)
            return res.json(result)
        }
    )
})
router.get('/max', (req, res) => {
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
//get recent vote
router.get('/recent-poll', (req, res) => {
    connection.query(
        `SELECT * FROM poll WHERE status = '1'`,
        (error, result) => {
            if(error) {
                return res.send({
                    message: error
                })
            }
            if(result.length <= 0) {
                return res.json({
                    message: "There are no recent vote"
                })
            }
            return res.json(result)
        }
    )
})

//get upcoming vote
router.get('/upcoming-poll', (req, res) => {
    connection.query(
        `SELECT * FROM poll WHERE status = '3'`,
        (error, result) => {
            if(error) {
                return res.send({
                    message: error
                })
            }
            if(result.length <= 0) {
                return res.json({
                    message: "There are no upcoming vote"
                })
            }
            return res.json(result)
        }
    )
})

module.exports = router