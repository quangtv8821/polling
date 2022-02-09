const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

//require router
const authRoute = require('./routes/auth')
const app = express()

require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//use route
app.use('/auth', authRoute)
app.get('/', (req, res) => {
    res.send("hi")
})
//add mysql
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

connection.connect( (error) => {
    if(!!error) {
        console.log(error);
    } else {
        console.log("connected");
    }
})

const port = process.env.PORT || 5500

app.listen(port, () => {
    console.log(`App listen on ${port}`);
})