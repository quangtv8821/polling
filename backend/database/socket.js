const app = express()
const server = require('http').createServer(app)

const io = require('socket.io')(server , {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

io.on('connect', socket => {
  console.log('có người kết nối này');
});

module.exports = io