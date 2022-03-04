const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').createServer(app)
var session = require('express-session');
var passport = require('passport');

var SQLiteStore = require('connect-sqlite3')(session);


require('dotenv').config()

const authMiddleWare = require('./middleware/auth')

//require router
const indexRoute = require('./routes/index')
const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')
const voteRoute = require('./routes/vote')
const googleLoginRoute = require('./routes/googleLogin')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
app.use(passport.authenticate('session'));

//use route
app.use('/user', authMiddleWare.authJwt(), (req, res) => {
  return res.json({
    header: req.headers['authorization'],
    message: 'login'
  })
})
app.use('/polls', indexRoute)
app.use('/login',loginRoute)
app.use('/register', registerRoute)
app.use('/vote', voteRoute)
app.use('/', googleLoginRoute)

const port = process.env.PORT || 5500

const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const db = require("./models/index")
db.sequelize.sync()

io.on('connect', socket => {
  socket.on('disconnect', () => {
    console.log("user disconnected")
  })
  socket.on('data', (msg) => {
    io.emit('data', msg)
  });
})

server.listen(port, () => {
  console.log(`App listen on ${port}`);
})