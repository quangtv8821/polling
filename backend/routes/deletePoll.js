const express = require('express')
const router = express.Router()

const connection = require('../database/database')
//turn status to 2 == delete

router.post('/', (req, res) => {
    const pollId = req.body.poll_id

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
                result: result
        })
    })
})

module.exports = router