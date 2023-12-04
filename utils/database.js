"use strict"

const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "mysql",
  user: "mysql",
  password: "1234",
  database: "todo_list",
})

connection.connect((err) => {
  if (err) {
    console.log("Error on database connection.")
    throw err
  }

  console.log("Database connection active.")
})

module.exports = connection
