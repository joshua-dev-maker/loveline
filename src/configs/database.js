const mysql = require("mysql2");
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Pikalord01!",
  database: "learngrazac",
  port: "5432",
});
pool.query("SELECT NOW()", (err, res) => {
  if (!err) {
    return console.log("database on");
  } else {
    console.log(err.message);
  }
});
module.exports = pool;

// const database = mysql.createDatabase({
//   host: "localhost",
//   user: "root",
//   password: "123456789",
//   database: " ",
//   port: "3306",
// });

// database.connect(function (err) {
//   if (err) {
//     return console.error("error: " + err.message);
//   }

//   console.log("Connected");
// });
// module.exports = database.promise();
