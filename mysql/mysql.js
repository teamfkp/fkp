var mysql = require('mysql');
const dbConfig = {
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'b20c676bee39f6',
    password: '5a153d6c',
    database: "heroku_3db8f69c530c186"
}

// var connection = mysql.createConnection(dbConfig);

// connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connected as id ' + connection.threadId);
// });
// module.exports = connection;
let pool = mysql.createPool(dbConfig);
pool.on('connection', function (_conn) {
    if (_conn) {
        // logger.info('Connected the database via threadId %d!!', _conn.threadId);
        _conn.query('SET SESSION auto_increment_increment=1');
    }
});
module.exports = pool;
