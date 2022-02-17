const express = require('express')
const cors = require('cors')

const app = express()

const authMiddleWare = require('./middleware/auth')

//require router
const indexRoute = require('./routes/index')
const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')
const createPollRoute = require('./routes/createPoll')
const increaseVoteRoute = require('./routes/increaseVote')
const deletePollRoute = require('./routes/deletePoll')
const getPollRoute = require('./routes/getPoll')
const isVotedRoute = require('./routes/isVoted')

require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//use route
app.use('/', indexRoute)
app.use('/login',loginRoute)
app.use('/register', registerRoute)
app.use('/create-poll', authMiddleWare.authCreatePoll(),createPollRoute)
app.use('/increase-vote', increaseVoteRoute)
app.use('/delete-poll', deletePollRoute)
app.use('/get-poll', getPollRoute)
app.use('/is-voted', isVotedRoute)

const port = process.env.PORT || 5500

app.listen(port, () => {
    console.log(`App listen on ${port}`);
})