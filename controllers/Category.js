'use strict';

var utils = require('../utils/writer.js');
var Category = require('../service/CategoryService');

module.exports.categoryCategory_idDELETE = function categoryCategory_idDELETE (req, res, next, category_id) {
  Category.categoryCategory_idDELETE(category_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoryCategory_idGET = function categoryCategory_idGET (req, res, next, category_id) {
  Category.categoryCategory_idGET(category_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoryCategory_idPUT = function categoryCategory_idPUT (req, res, next, body, category_id) {
  Category.categoryCategory_idPUT(body, category_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoryGET = function categoryGET (req, res, next) {
  Category.categoryGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.categoryPOST = function categoryPOST (req, res, next, body) {
  Category.categoryPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
