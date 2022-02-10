const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    auth: (req, res, next) => {
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