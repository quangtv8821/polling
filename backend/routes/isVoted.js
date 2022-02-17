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
            // result = result[0].status
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
                    messsage: error
                })
            }
            if(Object.keys(result).length === 0) {
                connection.query(
                    `INSERT INTO is_voted (id_user, id_vote) VALUES ('${id_user}', '${id_vote}')`,
                    (error, result) => {
                    if(error) {
                        return res.send({
                            messsage: error
                        })
                    }
                    return res.json(result)
                })
            }
            return res.json({
                messsage: "already update is voted"
            })
    })
})
module.exports = router