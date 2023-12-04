"use strict"
var sql = require("../utils/database.js")

/**
 *
 * returns List
 **/
exports.taskGET = function () {
  return new Promise(function (resolve, reject) {
    sql.query("SELECT * FROM task", function (err, res) {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        console.log(res)
        resolve(res)
      }
    })
  })
}

/**
 *
 * body Task Task object that needs to be added to the store (optional)
 * no response value expected for this operation
 **/
exports.taskPOST = function (body) {
  return new Promise(function (resolve, reject) {
    sql.query("INSERT INTO task SET ?", body, function (err, res) {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        console.log(res)
        resolve(res)
      }
    })
  })
}

/**
 *
 * task_id Long
 * no response value expected for this operation
 **/
exports.taskTask_idDELETE = function (task_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "DELETE FROM task WHERE task_id = ?",
      task_id,
      function (err, res) {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          console.log(res)
          resolve(res)
        }
      }
    )
  })
}

/**
 *
 * task_id Long
 * returns Task
 **/
exports.taskTask_idGET = function (task_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "SELECT * FROM task WHERE task_id = ?",
      task_id,
      function (err, res) {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          console.log(res)
          resolve(res)
        }
      }
    )
  })
}

/**
 *
 * body Task Task object that needs to be added to the store (optional)
 * task_id Long
 * no response value expected for this operation
 **/
exports.taskTask_idPUT = function (body, task_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "UPDATE task SET ? WHERE task_id = ?",
      [body, task_id],
      function (err, res) {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          console.log(res)
          resolve(res)
        }
      }
    )
  })
}

/**
 *
 * user_id Long
 * returns List
 **/
exports.userUser_idTaskGET = function (user_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "SELECT * FROM task WHERE user_id = ?",
      user_id,
      function (err, res) {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          console.log(res)
          resolve(res)
        }
      }
    )
  })
}
