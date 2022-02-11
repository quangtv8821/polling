const { response } = require('express')
const express = require('express')
const router = express.Router()

const connection = require('../database/database')
//turn status to 2 == delete

router.post('/', (req, res) => {
    const pollId = req.body.poll_id

    connection.query(
        `SELECT * FROM poll WHERE id = '${pollId}' AND status = '2'`,
        (error, result) => {
            if(error) {
                console.log(error);
                return;
            }

            if(result.length > 0) {
                return res.send({
                    messsage: "Poll is already delete"
                })
            }
            connection.query(
                `UPDATE poll SET status = 2 WHERE id = '${pollId}'`,
                (error, result) => {
                    if(error) {
                        console.log(error);
                        return res.send({
                            messsage: error
                        })
                    }
        
                    return res.json({
                        messsage: "Delete poll success"
                })
            })
        }
    )


})

module.exports = router