const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router()

const db = require("../models")
const Users = db.users

router.post('/', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const result = await Users.findOne({
    where: {
      email: email
    },
  })

  if (!result) {
    return res.json({
      message: "Wrong user information, please check again!"
    })
  }

  bcrypt.compare(
    password,
    result.dataValues.password,
    (error, results) => {
      if (error) {
        return res.send({
          message: "Wrong user information, please check again!"
        })
      }

      if (results) {
        const token = jwt.sign({ id: result.dataValues.id }, process.env.JWT_SECRET, { expiresIn: '30s' })
        return res.json({
          message: "logged in",
          role: result.dataValues.role,
          id: result.dataValues.id,
          token: token
        })
      }
      return res.send({
        message: "Wrong user information, please check again!"
      })
    })
})

module.exports = router
