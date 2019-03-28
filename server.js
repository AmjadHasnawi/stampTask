const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const secret = require('./dsa.js');
const endpoints = require('./endpoints.js')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Delegate api calls to another file
app.use('/endpoints', endpoints)


//database connection
mongoose.connect(secret.mongodb.dbURI)
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
})


const port = process.env.PORT || 5000;

// if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'dist')));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
// }

app.listen(port, () => console.log(`Listening on port ${port}`));
