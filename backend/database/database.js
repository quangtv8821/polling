// const mysql = require('mysql')

// const connection = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE
// })

// connection.connect( (error) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("connected");
//     }
//     connection.query('UPDATE poll SET status = 2 WHERE NOW() > end')
//     connection.query('UPDATE poll set status = 1 WHERE NOW() <= end AND NOW() >= start')
// })

//database poll có status -> 1 đang diễn ra 
//2 -> đã end
//3 -> sắp tới

// module.exports = connection