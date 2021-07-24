var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'heroku_3db8f69c530c186',
    user: 'b20c676bee39f6',
    password: '5a153d6c',
    database: "fkp"
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
module.exports = connection;
