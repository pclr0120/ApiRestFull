'use strict'
const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')
function createToken (user) {
  const payload = {
    sub: user,
    iat: moment().unix(),
    exp: moment().add(5, 'days').unix() //fecha caducidad del token
  }
  return jwt.encode(payload, config.serverConfig.SECRET_TOKEN)
}
function decodeToken (token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, config.serverConfig.SECRET_TOKEN)
      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: 'su token ha expirado'
        })
      }
      resolve(payload.sub)
    } catch (err) {
      reject({
        status: 500,
        message: 'Token invalido'
      })
    }
  })

  return decoded
}

module.exports = {
  createToken,
  decodeToken
}
