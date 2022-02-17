const { response } = require('express')
const express = require('express')
const router = express.Router()

const connection = require('../database/database')

router.post("/", (req, res) => {
    const title = req.body.title
    const totalVote = req.body.total_vote
    const start = req.body.start
    const end = req.body.end

    const vote =  req.body.vote

    // let query = `INSERT INTO poll (id, title, total_vote, start, end) VALUES (NULL, '${title}', '${totalVote}', '${start}', '${end}')`
    //if dont insert start time
    //`INSERT INTO poll (id, title, total_vote, start, end) VALUES (NULL, '${title}', '${totalVote}', current_timestamp(), '${end})'`

    //format json to post
    // {
    //     "title" : "Bài đăng số 15",
    //     "total_vote" : "4",
    //     "start" : "2022-02-11 12:00:00",
    //     "end" : "2022-02-11 17:00:00",
    //     "vote": [
    //         "Lựa chọn một",
    //         "Lựa chọn hai",
    //         "Lựa chọn ba",
    //         "Lựa chọn bốn"
    //     ]
    // }

    connection.query(
        `INSERT INTO poll (id, title, total_vote, start, end, status) VALUES (NULL, '${title}', '${totalVote}', '${start}', '${end}', '3')`,
        (error, result) => {
            
            if(error) {
 
                return res.send({
                    message: error
                })
            }
             //result.insertId là id của poll
            for(let i = 0; i < totalVote; i++) {
                connection.query(
                    `INSERT INTO vote (id, title, total, id_poll) VALUES (NULL, '${vote[i]}', '', '${result.insertId}')`,
                    (error, result) => {
                        if(error) {
                            return res.send({
                                message: error
                        })
                    }
                })
            } 
            return res.status(200).send({
                message: "Add poll successful"
            })
        }
    )   
})

module.exports = router