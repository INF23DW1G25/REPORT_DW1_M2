'use strict';

var utils = require('../utils/writer.js');
var Task = require('../service/TaskService');

module.exports.taskGET = function taskGET (req, res, next) {
  Task.taskGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.taskPOST = function taskPOST (req, res, next, body) {
  Task.taskPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.taskTask_idDELETE = function taskTask_idDELETE (req, res, next, task_id) {
  Task.taskTask_idDELETE(task_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.taskTask_idGET = function taskTask_idGET (req, res, next, task_id) {
  Task.taskTask_idGET(task_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.taskTask_idPUT = function taskTask_idPUT (req, res, next, body, task_id) {
  Task.taskTask_idPUT(body, task_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUser_idTaskGET = function userUser_idTaskGET (req, res, next, user_id) {
  Task.userUser_idTaskGET(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
