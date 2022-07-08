var mysql = require('mysql');

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'electron-db'
});

function connectDB () {
    connection.connect((error) => {
        if (error) {
            throw error;
            return;
        }
        console.log("Connected to the mysql database.");

    });
}

