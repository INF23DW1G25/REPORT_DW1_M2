"use strict"
var sql = require("../utils/database.js")

/**
 *
 * category_id Long
 * no response value expected for this operation
 **/
exports.categoryCategory_idDELETE = function (category_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "DELETE FROM category WHERE category_id = ?",
      category_id,
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
 * category_id Long
 * returns Category
 **/
exports.categoryCategory_idGET = function (category_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "SELECT * FROM category WHERE category_id = ?",
      category_id,
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
 * body Category Category object that needs to be added to the store (optional)
 * category_id Long
 * no response value expected for this operation
 **/
exports.categoryCategory_idPUT = function (body, category_id) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "UPDATE category SET ? WHERE category_id = ?",
      [body, category_id],
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
 * returns List
 **/
exports.categoryGET = function () {
  return new Promise(function (resolve, reject) {
    sql.query("SELECT * FROM category", function (err, res) {
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
 * body Category Category object that needs to be added to the store (optional)
 * no response value expected for this operation
 **/
exports.categoryPOST = function (body) {
  return new Promise(function (resolve, reject) {
    sql.query(
      "INSERT INTO category (name) VALUES ('name')",
      [body],
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
