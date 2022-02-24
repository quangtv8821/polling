const jwt = require('jsonwebtoken')
require('dotenv').config()

const authJwt = () => {
  return (req, res, next) => {
    try {
      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1]
      //set bearer authorization
      if (!token) {
        return res.status(403).send({ message: "No token provided!" });
      }
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          return res.json({ message: "Unauthorized!" });
        }
        next();
      });
    } catch (error) {
      console.log(error);
    }
  }
}

const authCreatePoll = () => {
  return (req, res, next) => {
    if (!req.body.title || !req.body.total_vote || !req.body.start || !req.body.end || !req.body.vote) {
      return res.send("Missing information")
    }
    next()
  }
}

module.exports = {
  authJwt,
  authCreatePoll
}