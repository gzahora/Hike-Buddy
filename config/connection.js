// Set up MySQL connection.
require("dotenv").config();

var password = require("../keys.js");

var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: password.sql.password,
    database: "nationalParks"
  });
}
<<<<<<< HEAD

=======
>>>>>>> 025a0164c47059caf3ef1bc8053c13a54535220a
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
