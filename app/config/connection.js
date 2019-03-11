
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "!Zz1004406",
    database: "beers_db"
})

connection.connect( err => {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return
    }
    console.log("connected as id "+ connection.threadId);
});

module.exports = connection;