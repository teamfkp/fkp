var express = require('express');
var app = express();
var connection = require("../mysql/mysql");

/* GET home page. */
app.post('/contact-us', function (req, res, next) {
  try {
    console.log(req.body)
    // res.render('index', { title: 'Express' });
    var sql = "INSERT INTO `contact` (`name`, `email`, `cat`, `contactdesc`) VALUES (?, ?, ?, ?);"
    var values = [req.body.name, req.body.email, req.body.subject, req.body.message];
    connection.query(sql, values, (err, result) => {
      if (err) {
        res.send({ status: false, data: {}, error: err });
      }
      console.log(err);
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

function verifyJWT(req, res, next) {
  if (req.headers.authorization) {
    next();
  } else {
    res.send({ status: false, err: "Auth error" })
  }
}

app.get("/contacts", verifyJWT, (req, res, next) => {
  var sql = "SELECT * FROM `contact`";
  connection.query(sql, (err, result) => {
    if (err) res.send({ status: false, data: [], err: err })
    if (result.length > 0) res.send({ status: true, data: result, err: {} })
    else res.send({ status: false, data: result, err: err })
  })
})

module.exports = app;
