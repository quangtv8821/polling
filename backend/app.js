const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').createServer(app)

require('dotenv').config()

const authMiddleWare = require('./middleware/auth')

//require router
const indexRoute = require('./routes/index')
const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')
const voteRoute = require('./routes/vote')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//use route
app.use('/', authMiddleWare.authJwt(), (req, res) => {
  return res.send('Hi')
})
app.use('/polls', indexRoute)
app.use('/login', loginRoute)
app.use('/register', registerRoute)
app.use('/vote' , voteRoute)

const port = process.env.PORT || 5500

const io = require('socket.io')(server , {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const db = require("./models/index");
db.sequelize.sync();

io.on('connect', socket => {
  console.log('user connected')
  socket.on('disconnect', () => {
    console.log("user disconnected");
  })
  socket.on('increase', (msg) => {
    console.log('message increase: ' + msg);
    io.emit('increase', msg);
  });
  socket.on('decrease', (msg) => {
    console.log('message decrease: ' + msg);
  });
});

server.listen(port, () => {
    console.log(`App listen on ${port}`);
})