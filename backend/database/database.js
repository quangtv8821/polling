const mysql = require('mysql')

require('dotenv').config()

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

//database poll có status -> 1 đang diễn ra 
//2 -> đã end
//3 -> sắp tới

module.exports = connection