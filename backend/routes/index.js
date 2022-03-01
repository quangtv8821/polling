const express = require('express')
const router = express.Router()
const date = require('date-and-time')
const db = require("../models")
const Polls = db.polls
const Votes = db.votes
const Sequelize = require('sequelize')

//status = 1 -> recent, 2-> ended, 3 -> upcoming

//get polls by status

router.get('/', async (req, res) => {
  const status = req.query.status

  const polls = await Polls.findAll({
    attributes: ["id","title","total_vote","end","start"],
    where: {
      status: status
    },
    group: ['votes.id'],
    include: {
      model: Votes,
      attributes: ["title","total"],
    },
    order: [['votes','total', 'desc']]
  });
  
  const result = polls.map(item => ({
    id: item.dataValues.id,
    title: item.dataValues.title,
    total_vote: item.dataValues.total_vote,
    start: date.format(item.dataValues.start, 'YYYY/MM/DD HH:mm:ss'),
    end: date.format(item.dataValues.end, 'YYYY/MM/DD HH:mm:ss'),
    votes: item.votes[0].dataValues
  }))
  return res.json(result)
})

//get polls information by id
router.get('/:id', async (req, res) => {
  //http://localhost:5500/polls/:id
  const id = req.params.id

  const polls = await Polls.findOne({
    where: {
      id: id
    }
  })

  const votes = await Votes.findAll({
    where: { pollId: id }
  })

  const max = await Votes.max('total', {
    where: {
      pollId: id
    }
  })

  const most_vote = await Votes.findAll({
    where: {
      total: max,
      pollId: id
    }
  })

  polls.dataValues.end = date.format(polls.dataValues.end, 'YYYY/MM/DD HH:mm:ss')

  let result = {};
  result.polls = polls.dataValues
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

  const vote = req.body.vote

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
    status: ''
  })
  for (let item of vote) {
    await Votes.create({
      title: item,
      total: '0',
      pollId: poll.id
    })
  }

  res.json({
    message: "Add poll successful"
  })

})

//delete polls by change poll status to 4
router.delete("/:id", async (req, res) => {
  const poll_id = req.params.id
  try {
    const poll = await Polls.update(
      { status: '4' },
      { where: { id: poll_id } }
    )
    return res.json({
      message: "Delete poll success"
    })
  } catch (error) {
    return res.send(error)
  }

})
module.exports = router