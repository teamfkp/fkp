var express = require('express');
var app = express();
var connection = require("../mysql/mysql");

/* GET home page. */
app.post('/contact-us', function (req, res, next) {
  try {
    console.log(req.body)
    // res.render('index', { title: 'Express' });
    var sql = "INSERT INTO `usersdata` (`name`, `email`, `subject`, `msg`) VALUES (?, ?, ?, ?);"
    var values = [req.body.name, req.body.email, req.body.subject, req.body.message];
    connection.query(sql, values, (err, result) => {
      if (err) {
        res.send({ status: false, data: {}, error: err });
      }
      if (result.insertId) {
        res.send({ status: true, data: res.data, error: {} });
      } else {
        res.send({ status: false, data: {}, error: err });
      }
    })
  } catch (er) {
    res.send({ status: false, data: {}, error: er });
  }
});

module.exports = app;
