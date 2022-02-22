const express = require('express')
const router = express.Router()
const date = require('date-and-time')

const db = require("../models")
const Polls = db.polls
const Votes = db.votes

//status = 1 -> recent, 2-> ended, 3 -> upcoming

//get polls by status
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

//get polls information by id
router.get('/polls/:id', async (req, res) =>    {
    //get polls by poll_id
    //http://localhost:5500/polls/:id
    const id = req.params.id
    const polls = await Polls.findAll({
        raw: true,
        where: {
            id: id
        }
    })
    const votes = await Votes.findAll({
        raw: true,
        where: { poll_id: id}
    })

    const max =  await Votes.max('total', {
        where: {
            poll_id: id
        }
    })
    const most_vote = await Votes.findAll({
        raw: true,
        where: {
            total: max
        }
    })

    const promise = polls.map(poll => {
        poll.end = date.format(poll.end,'YYYY/MM/DD HH:mm:ss')
        poll.start = date.format(poll.start,'YYYY/MM/DD HH:mm:ss')
      })
    Promise.all(promise)

    let result = {};
    result.polls = polls[0]
    result.votes = votes
    result.most_vote = most_vote
    return res.json(result)
})

//create poll
router.post("/", async (req, res) => {
    const title = req.body.title
    const total_vote = req.body.total_vote
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

    const poll = await Polls.create({
        title: title,
        total_vote: total_vote,
        start: start,
        end: end,
        status: '3'
    })
    for(let i = 0; i < total_vote; i++) {
        await Votes.create({
            title: vote[i],
            total: '0',
            id_poll: poll.id
        })
    }

    res.json({
        message: "Add poll successfu"
    })
    
})

//delete polls by change poll status to 4
router.delete("/", async (req, res) => {
    const poll_id = req.body.poll_id
    
    try {
        const poll = await Polls.update(
            { status : '4' },
            { where: { id: poll_id } }
        )
        return res.json({
            message: "Delete poll success"
        })
    } catch (err) {
        return res.send(error)
    }
    
})
module.exports = router