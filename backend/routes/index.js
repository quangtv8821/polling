const express = require('express')

const router = express.Router()

const connection = require('../database/database')

//status = 1 -> recent, 2-> ended, 3 -> upcoming

//get ended vote
router.get('/ended-vote', (req, res) => {
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

            for(let i = 0; i < result.length; i++) {
                connection.query(
                    `SELECT * FROM vote WHERE total = (SELECT MAX(total) FROM vote WHERE id_poll = '${result[i].id}') and id_poll = '${result[i].id}'`,
                    (sError, sResult) => {
                        if(sError) {
                            console.log(sError);
                        }
                        result[i].most_vote = sResult[i].title
                        console.log(result)
                    }
                )
            }

            return res.json(result)
        }
    )
})

//get recent vote
router.get('/recent-vote', (req, res) => {
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
router.get('/upcoming-vote', (req, res) => {
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