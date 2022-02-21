const express = require('express')
const router = express.Router()
const date = require('date-and-time')

const db = require("../models")
const Polls = db.polls

//status = 1 -> recent, 2-> ended, 3 -> upcoming

router.get('/polls', async (req, res) =>    {
    //http://localhost:5500/polls?status=3
    const status = req.query.status
    const polls = await Polls.findAll({
        raw: true,
        where: {
            status: status
        }
    })

    const promise = polls.map(poll => {
        poll.end = date.format(poll.end,'YYYY/MM/DD HH:mm:ss')
        poll.start = date.format(poll.start,'YYYY/MM/DD HH:mm:ss')
      })
      Promise.all(promise)

    return res.json(polls)
})

router.get('/polls/:id', async (req, res) =>    {
    //http://localhost:5500/polls/:id
    const id = req.params.id
    console.log(id);
    const polls = await Polls.findAll({
        raw: true,
        where: {
            id: id
        }
    })

    return res.json(polls)
})

router.post("/", async (req, res) => {
    const title = req.body.title
    const totalVote = req.body.total_vote
    const start = req.body.start
    const end = req.body.end

    const vote =  req.body.vote

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