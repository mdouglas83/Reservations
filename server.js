var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var tablelist = [], waitlist = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/tables2", function(req, res) {
  res.sendFile(path.join(__dirname, "tables2.html"));
});

app.get("/waitlist", function(req, res) {
  res.sendFile(path.join(__dirname, "waitlist.html"));
});

app.get("/reserve2", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve2.html"));
});

app.get("/api/tables", function(req, res) {
  res.json(tablelist);
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});

app.post("/api/tables", function(req, res) {
  var newtable = req.body;
  console.log(newtable);
  if (tablelist.length < 5) {
    tablelist.push(newtable);
    return res.json(true);
  } else {
    waitlist.push(newtable);
    return res.json(false);
  }
});

app.post("/api/clear", function(req, res) {
  tablelist = [];
  waitlist = [];
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});