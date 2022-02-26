const express = require('express')
const router = express.Router()

const db = require("../models")
const Votes = db.votes
const IsVotes = db.is_votes

router.put('/increase', async (req, res) =>    {
    const vote_id = req.body.vote_id
    const user_id = req.body.user_id

    const votes = await Votes.increment('total', { 
        by: 1, 
        where: { id: vote_id } 
    })

    const is_votes = await IsVotes.update(
        {status: '1',},
        {where: {
            user_id: user_id,
            vote_id: vote_id
        }
    })
    return res.json({
        message: "increase"
    })
})

router.put('/decrease', async (req, res) =>    {
    const vote_id = req.body.vote_id
    const user_id = req.body.user_id

    const votes = await Votes.decrement('total', { 
        by: 1, 
        where: { id: vote_id } 
    })
    const is_votes = await IsVotes.update(
        {status: '0',},
        {where: {
            user_id: user_id,
            vote_id: vote_id
        }
    })
    return res.json({
        message: "decrease"
    })
})

//get is vote

router.post('/', async (req, res) => {
    const user_id = req.body.user_id
    const vote_id = req.body.vote_id

    const is_votes = await IsVotes.findOne(
    {
        where: {
            user_id: user_id,
            vote_id: vote_id
        }
    })
    if(is_votes === null ) {
        const createRow = await IsVotes.create({
            user_id: user_id,
            vote_id: vote_id,
            status: '0'
        })
        return res.json({
            status: 0
        })
    } 
    return res.json({
        status: is_votes.dataValues.status
    })
})

router.get('/:id', async (req, res) => {
    const vote_id = req.params.id
    
    const votes = await Votes.findOne({
        where: {
            id: vote_id
        }
    })
    return res.json({
        total: votes.dataValues.total
    })
})

//update is voted
module.exports = router