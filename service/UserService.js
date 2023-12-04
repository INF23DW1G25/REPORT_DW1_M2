"use strict"
var sql = require("../utils/database.js")

/**
 *
 * returns List
 **/
exports.userGET = function () {
  return new Promise(function (resolve, reject) {
    sql.query("SELECT * FROM user", function (err, res) {
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
 * body User User object that needs to be added to the store (optional)
 * no response value expected for this operation
 **/
exports.userPOST = function (body) {
  return new Promise(function (resolve, reject) {
    sql.query("INSERT INTO user SET ?", body, function (err, res) {
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
 * user_id Long
 * no response value expected for this operation
 **/
exports.userUser_idDELETE = function (user_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "DELETE FROM user WHERE user_id = ?",
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

/**
 *
 * user_id Long
 * returns User
 **/
exports.userUser_idGET = function (user_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "SELECT * FROM user WHERE user_id = ?",
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

/**
 *
 * body User User object that needs to be added to the store (optional)
 * user_id Long
 * no response value expected for this operation
 **/
exports.userUser_idPUT = function (body, user_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "UPDATE user SET ? WHERE user_id = ?",
      [body, user_id],
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
