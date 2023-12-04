const mysql = require("mysql")
const userService = require("./service/UserService")
const categoryService = require("./service/CategoryService")
const taskService = require("./service/TaskService")

const app = express()
const port = 8080

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
