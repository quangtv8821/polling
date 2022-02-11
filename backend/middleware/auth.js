const jwt = require('jsonwebtoken')
require('dotenv').config()

const authJwt = () => {
    return (req, res, next) => {
        try {
            const token = req.cookies //set cookie o frontend
            console.log(token);
            const verify = jwt.verify(
                token,
                process.env.SECRET,
            );
    
            if(verify) {
                next()
            }
        }
        catch (error) {
            return res.send({
                message: "Pls login",
                token: token
            })
        }
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