const express = require('express')
const router = express.Router()

const connection = require('../database/database')
router.post('/', (req, res) =>{
     const voteId = req.body.vote_id

     connection.query(
          `UPDATE vote SET total = total + 1 WHERE id = '${voteId}'`,
          (error, result) => {
               if(error) {
                    return res.send({
                         messsage: error
                    })
               }

               connection.query(
                    `SELECT total FROM vote WHERE id = '${voteId}'`,
                    (error, result) => {
                         if(error) {
                              return res.send({
                                   messsage: error
                              })
                         }

                         return res.json({
                              result: result
                         })
                    }
               )       
     })
})

router.get('/', (req, res) => {
     const pollId = req.body.poll_id

     connection.query(
          `SELECT total FROM vote WHERE id_poll = '${pollId}'`,
          (error, result) => {
               if(error) {
                    return res.send({
                         messsage: error
                    })
               }

               return res.json({
                    result: result
               })
          }
     )       
})

module.exports = router