//require the library
const mongoose = require("mongoose");

//connect to the database
mongoose.connect(
  // "mongodb+srv://MAMS:Mams@2020@cluster0.5pqha.mongodb.net/<dbname>?retryWrites=true&w=majority"
//   "mongodb+srv://admin-sanjeev:sANJEEVsk@28@cluster0-qcpgk.mongodb.net/inno_hunt_db",
  "mongodb+srv://MAMS:Mams@2020@cluster0.5pqha.mongodb.net/mams_tedx_db",
  { useNewUrlParser: true }
);

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on("error", function (err) {
  console.log(err.message);
});

//up and running then print the message
db.once("open", function () {
  console.log("Successfully connected to the database");
});

module.exports = db;
