const permissionDBV = require('../../database/permission/permissionDBV');
const auth = require('../../middlewares/auth');
const express = require('express');
const routerPermission = express.Router();

//#region routes
const getEndpointAddress = '/permission';
routerPermission.get(getEndpointAddress + '/get',auth, getPermission);
console.log("permissionSV Working");
//#endregion


function getPermission(req, res) {
    permissionDBV.get((err, data) => {
    res.status(200).send({
      data
    });
  });
};

module.exports =
routerPermission