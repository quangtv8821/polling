const express = require('express')

const router = express.Router()

const connection = require('../database/database')

router.post('/', (req, res) => {
    const id_user = req.body.id_user
    const id_vote = req.body.id_vote
    connection.query(
        `SELECT * FROM is_voted WHERE id_user = '${id_user}' AND id_vote = '${id_vote}'`,
        (error, result) => {
            if(error) {
                return res.send({
                    messsage: error
                })
            }
            return res.json(result)
    })
})

router.post('/check-user', (req, res) => {
    const id_user = req.body.id_user
    const id_vote = req.body.id_vote
    connection.query(
        `SELECT * FROM is_voted WHERE id_user = '${id_user}' AND id_vote = '${id_vote}'`,
        (error, result) => {
            if(error) {
                return res.send({
                    message: error
                })
            }
            if(Object.keys(result).length === 0) {
                connection.query(
                    `INSERT INTO is_voted (id_user, id_vote) VALUES ('${id_user}', '${id_vote}')`,
                    (error, result) => {
                    if(error) {
                        return res.send({
                            message: error
                        })
                    }
                })
                return res.json({
                    message: "update is voted table"
                })
            }
            return res.json({
                message: "user has been voted"
            })
    })
})

router.post('/check-vote', (req, res) => {
    const id_user = req.body.id_user
    const id_vote = req.body.id_vote
    connection.query(
        `SELECT * FROM is_voted WHERE id_user = '${id_user}' AND id_vote = '${id_vote}' AND status = '1'`,
        (error, result) => {
        if(error) {
            return res.send({
                message: error
            })
        }
        if(Object.keys(result).length === 0) {
            //chua vote thi return 1
            return res.json({
                data: 0
            })
        }
        return res.json({
            data: 1
        });
    })
})
module.exports = router