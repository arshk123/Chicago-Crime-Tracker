var mysql = require('mysql');
var app = require('express');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crime_stats"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(JSON.stringify({
        "message" : "aye",
        "data"  : []
  }))
  //con.query("SELECT * FROM Crime", function (err, result, fields) {   
    //if (err) throw err;
    //res.end(JSON.stringify(result));
  //});
}).listen(8180, "172.22.94.193");