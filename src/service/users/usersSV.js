const userDBV = require('../../database/users/userDBV');
//const auth = require('../../middlewares/auth');
const express = require('express');
const routerUser = express.Router();

//#region routes
const getEndpointAddress = '/users';
routerUser.get(getEndpointAddress + '/get', userGet);
routerUser.get(getEndpointAddress + '/login', login);
routerUser.get(getEndpointAddress + '/singUp', singUp);
console.log('UsersSV Working');
//#endregion

function userGet(req, res) {
  userDBV.getUsers((err, data) => {
    res.status(200).send({
      data,
    });
  });
}

function login(req, res) {
  userDBV.login(req, (err, data) => {
    res.status(200).send({
      data,
    });
  });
}

function singUp(req, res) {
  userDBV.singUp(req, (err, data) => {
    res.status(200).json({
      data
    });
  });
}

module.exports = routerUser;
