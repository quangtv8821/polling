const express = require('express')
const router = express.Router()

const connection = require('../database/database')
router.post('/', (req, res) =>{
     const voteId = req.body.vote_id

     connection.query(
          `UPDATE vote SET total = total - 1 WHERE id = '${voteId}'`,
          (error, result) => {
               if(error) {
                    return res.send({
                         messsage: error
                    })
               }
               return res.json({
                    result: result
               })   
     })
})

router.post('/vote', (req, res) => {
     const user_id = req.body.user_id
     const vote_id = req.body.vote_id
     connection.query(
         `UPDATE is_voted SET status = 0 WHERE id_user = '${user_id}' AND id_vote = '${vote_id}'`,
         (error, result) => {
             if(error) {
                 return res.send({
                     messsage: error
                 })
             }
             return res.json(result)
     })
})

module.exports = router