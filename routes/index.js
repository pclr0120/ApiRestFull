'use strict'
const express = require('express')
const auth = require('../middlewares/auth')
const user=require('../controllers/UserMysql.controller');
const api = express.Router()
api.get('/user',auth, user.userGet)
api.get('/login', user.login)
api.get('/singUp', user.singUp)
module.exports = api
