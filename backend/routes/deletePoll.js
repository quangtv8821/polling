const { response } = require('express')
const express = require('express')
const router = express.Router()

const connection = require('../database/database')
//turn status to 4 == delete

router.post('/', (req, res) => {
    const pollId = req.body.poll_id
    console.log(pollId);
    connection.query(
        `SELECT * FROM poll WHERE id = '${pollId}' AND status = '4'`,
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
                `UPDATE poll SET status = 4 WHERE id = '${pollId}'`,
                (error, result) => {
                    if(error) {
                        console.log(error);
                        return res.send({
                            messsage: error
                        })
                    }
        
                return res.json({
                    message: "Delete poll success"
                })
            })
        }
    )
})

module.exports = router