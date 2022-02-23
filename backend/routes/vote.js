const express = require('express')
const router = express.Router()

const db = require("../models")
const Votes = db.votes
const Is_votes = db.is_votes

router.put('/increase', async (req, res) =>    {
    const vote_id = req.body.vote_id
    const user_id = req.body.user_id

    const votes = await Votes.increment('total', { 
        by: 1, 
        where: { id: vote_id } 
    })

    const is_votes = await Is_votes.update(
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
    const is_votes = await Is_votes.update(
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

    console.log(vote_id);
    const is_votes = await Is_votes.findAll(
    {
        raw: true,
        where: {
            user_id: user_id,
            vote_id: vote_id
        }
    })
    if(is_votes.length === 0 ) {
        const createRow = await Is_votes.create({
            user_id: user_id,
            vote_id: vote_id,
            status: '0'
        })
        return res.json({
            status: createRow[0].status
        })
    } 
    return res.json({
        id: is_votes[0].id,
        status: is_votes[0].status
    })
})

//update is voted
module.exports = router