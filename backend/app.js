const express = require('express')
const cors = require('cors')

const app = express()

const authMiddleWare = require('./middleware/auth')
const authRoleMiddleWare = require('./middleware/authRole')

//require router
const indexRoute = require('./routes/index')
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
app.use('/', indexRoute)
app.use('/login',loginRoute)
app.use('/register', registerRoute)
app.use('/create-poll', authRoleMiddleWare.authRole("admin"), authMiddleWare.authCreatePoll(),createPollRoute)
app.use('/increase-vote', increaseVoter)
app.use('/delete-poll', authRoleMiddleWare.authRole("admin"), deletePollRoute)

const port = process.env.PORT || 5500

app.listen(port, () => {
    console.log(`App listen on ${port}`);
})