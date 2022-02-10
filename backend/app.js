const express = require('express')
const cors = require('cors')

const app = express()

const jwtMiddleWare = require('./middleware/authJwt')

//require router
const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')
const createPollRoute = require('./routes/createPoll')
const increaseVoter = require('./routes/increaseVote')
const deletePollRoute = require('./routes/deletePoll')

require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//use route
app.use('/login',loginRoute)
app.use('/register', jwtMiddleWare.auth, registerRoute)
app.use('/create-poll', createPollRoute)
app.use('/increase-vote', increaseVoter)
app.use('./delete-poll', deletePollRoute)

const port = process.env.PORT || 5500

app.listen(port, () => {
    console.log(`App listen on ${port}`);
})