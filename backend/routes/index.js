const express = require('express')
const router = express.Router()
const date = require('date-and-time')
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
            for(let i = 0; i < result.length; i++) {
                result[i].end = date.format(result[i].end,'YYYY/MM/DD HH:mm:ss')
                result[i].start = date.format(result[i].start,'YYYY/MM/DD HH:mm:ss')
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
            for(let i = 0; i < result.length; i++) {
                result[i].end = date.format(result[i].end,'YYYY/MM/DD HH:mm:ss')
                result[i].start = date.format(result[i].start,'YYYY/MM/DD HH:mm:ss')
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
            for(let i = 0; i < result.length; i++) {
                result[i].end = date.format(result[i].end,'YYYY/MM/DD HH:mm:ss')
                result[i].start = date.format(result[i].start,'YYYY/MM/DD HH:mm:ss')
            }
            return res.json(result)
        }
    )
})

module.exports = router