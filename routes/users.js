var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');

const md5 = require('md5');
var connection = require("../mysql/mysql");

/* GET users listing. */
app.post('/', async function (req, res, next) {
  try {
    var password = await md5(req.body?.password)
    // res.render('index', { title: 'Express' });
    var sql = "SELECT * FROM `admin` WHERE `username` = ? and `password` = ?";
    var values = [req.body.username, password];
    connection.query(sql, values, async (err, result) => {
      if (err) {
        res.send({ status: false, data: {}, error: err });
      }
      if (result.length == 1) {
        console.log(result[0]);
        let re = result[0];
        jwt.sign({
          id: re.id,
          username: re.username,
          status: re.status
        }, "focuskingphotography", { algorithm: 'RS256' }, function (err, token) {
          console.log(token);
          res.send({ status: true, data: result[0].status, accessToken: token, error: {} });
        });

      } else {
        res.send({ status: false, data: {}, error: err });
      }
    })
  } catch (er) {
    console.log(er)
    res.send({ status: false, data: {}, error: er });
  }
});

module.exports = app;
