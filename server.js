// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var tablelist = [
  {
    customerName: "Dummy Customer . . . he's an idiot",
    phoneNumber: "512-555-1234",
    customerEmail: "dumbcustomer_1@yahoo.co",
    customerID: "dummy1"
  },
  {
    customerName: "Dummy Customer2",
    phoneNumber: "512-555-4321",
    customerEmail: "dumbcustomer_2@yahoo.co",
    customerID: "dummy2"
  },
  {
    customerName: "Dummy Customer3",
    phoneNumber: "512-555-5678",
    customerEmail: "dumbcustomer_3@yahoo.co",
    customerID: "dummy3"
  },
  {
    customerName: "Dummy Customer4",
    phoneNumber: "512-555-8765",
    customerEmail: "dumbcustomer_4@yahoo.co",
    customerID: "dummy4"
  },
  {
    customerName: "Dummy Customer5",
    phoneNumber: "512-555-9999",
    customerEmail: "dumbcustomer_5@yahoo.co",
    customerID: "dummy5"
  }
];

waitlist = [
  {
    customerName: "Joseph P Linestander",
    phoneNumber: "512-555-0000",
    customerEmail: "joe_p_l@hotmail.com",
    customerID: "joe_p_l"
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/waitlist", function(req, res) {
  res.sendFile(path.join(__dirname, "waitlist.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
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

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
