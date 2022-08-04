'use strict';

const express = require('express');
const bodyParser = require('body-parser');
//const hbs = require('express-handlebars');
//const mysql = require('mysql');
const app = express();
const api = require('./src/main/index');
const versionApi = '/api/v2';
//#region  services
console.log(versionApi);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(versionApi, api.routerPermission);
app.use(versionApi, api.routerUser);
//#endregion

module.exports = app;
