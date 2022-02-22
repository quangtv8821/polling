const jwt = require('jsonwebtoken')
require('dotenv').config()

const authJwt = () => {
    return (req, res, next) => {
        // try {
            // const token = req.headers.authorization
            // const verify = jwt.verify(
            //     token,
            //     process.env.SECRET,
            // );
            // console.log(token);
            // if(!token) {
            //     return res.send("no provided")
            // }
            // if(verify === false) {
            //     return res.status(401).send({ message: "Unauthorized!" });
            // }
            // next()
        // }
        // catch (error) {
        //     return res.send({
        //         message: "Pls login"
        //     })
        // }
        // let token = req.headers["x-access-token"];
        //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjQ1NTQxNTk0LCJleHAiOjE2NDU1NDI0OTR9.laUVessdwYs_RfA4Z0OKcbcBcjCVxgJIYMxwJZxF1pc
        let token = req.headers["authorization"]
        if (!token) {
            return res.status(403).send({ message: "No token provided!" });
        }
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
            }

            next();
        });
    }
}

const authCreatePoll = () => {
    return (req, res, next) => {
        if(!req.body.title || !req.body.total_vote || !req.body.start || !req.body.end || !req.body.vote) {
            return res.send("Missing information")
        }
        next()
    }
}

module.exports = {
    authJwt,
    authCreatePoll
}