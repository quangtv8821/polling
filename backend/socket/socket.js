const app = express()
const server = require('http').createServer(app)

const io = require('socket.io')(server , {
  cors: {
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST"]
  }
});

module.exports = io