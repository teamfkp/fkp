var express = require('express');
var app = express();
// var connection = require("../mysql/mysql");
const fileUpload = require('express-fileupload');
app.use(fileUpload());

function verifyJWT(req, res, next) {
    if (req.headers.authorization) {
        next();
    } else {
        res.send({ status: false, err: "Auth error" })
    }
}

app.post("/", verifyJWT, (req, res) => {
    try {
        console.log("Files", req.files);
        console.log("File", req.file);
        res.send("Success from backend..!")
    } catch (e) {
        console.log("Error", e);
    }
    // var sql = "SELECT * FROM `contact`";
    // connection.query(sql, (err, result) => {
    //     if (err) res.send({ status: false, data: [], err: err })
    //     if (result.length > 0) res.send({ status: true, data: result, err: {} })
    //     else res.send({ status: false, data: result, err: err })
    // })
});

module.exports = app;