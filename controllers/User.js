'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userGET = function userGET (req, res, next) {
  User.userGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userPOST = function userPOST (req, res, next, body) {
  User.userPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUser_idDELETE = function userUser_idDELETE (req, res, next, user_id) {
  User.userUser_idDELETE(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUser_idGET = function userUser_idGET (req, res, next, user_id) {
  User.userUser_idGET(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUser_idPUT = function userUser_idPUT (req, res, next, body, user_id) {
  User.userUser_idPUT(body, user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
