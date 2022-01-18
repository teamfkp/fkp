var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');

const md5 = require('md5');
var connection = require("../mysql/mysql");
let secret = [
  '-----BEGIN PRIVATE KEY-----',
  'MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAkcd7iupXSHhgIRat',
  'b2gnEiyC3AIf7GCrISTtgM5Lb8kccGjunU8sIqwwd3BV6qD+pExeyvMyU085RHRX',
  'ud1cyQIDAQABAkAzmni6GPAiwDHPJLbqK+VAwq7j8ICabTHGvsqwANalT/O4V75m',
  'e2ExeqV05+jlzVOGrQ953n8Mx1u0uRgPlfoBAiEAyO3qytGKRRzlqBuGwPFPde4a',
  '66ZW4AmRcBwwuKp1zgkCIQC5u/2j/JFzM4GTbpoC0a2u78+tqYQW7Y/Usu6AAubI',
  'wQIhAMKbhMQJ7UUBNwH6HyryzcZn5pUEl7IIMmAGPb4uA0mZAiAbJPhawQzY00w6',
  'qc1kYBSMHowxiza8yxdcNJJarxHfgQIgcw2oEtn8GbvNMOsFg0Q9TPMdQ+uhxhWK',
  'xhVgWkIkTVU=',
  '-----END PRIVATE KEY-----',
].join('\n');


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
        let re = {
          id: result[0].id,
          username: result[0].username,
          status: result[0].status
        };
        jwt.sign(re, secret, { algorithm: 'RS256' }, function (err, token) {
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
