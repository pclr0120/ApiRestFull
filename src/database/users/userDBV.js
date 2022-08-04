const config = require('../../../config');
const connection = config.connection;
const service = require('../../middlewares/index');
const responseMessage = require('../../utils/const');
const responseMessageError = responseMessage.responseMessageError;
const responseMessageSuccess = responseMessage.responseMessageSuccess;


function getUsers(callback) {
  try {
    if (connection) {
      connection.query(QUERY_SELECT_USERS, (err, result) => {
        console.log(err);
        if (err) {
          callback(null, {
            responseMessageError,
          });
        } else {
          callback(null, { responseMessageSuccess, result });
        }
      });
    }
  } catch (error) {
    callback(null, {
      responseMessageError,
    });
    console.error(error);
  }
}

function login(req, callback) {
  try {
    if (connection) {
      connection.query(QUERY_SELECT_EMAIL, connection.escape(req.body.email), (err, result) => {
        if (err) {
          callback(null, {
            responseMessageError,
          });
        } else {
          console.log(result);
          callback(null, {
            responseMessageSuccess,
            token: service.createToken(result.insertId),
          });
        }
      });
    }
  } catch (error) {
    callback(null, {
      responseMessageError,
    });
    console.error(error);
  }
}

function singUp(req, callback) {
  try {
    let reqData = {
      nombre: req.body.nombre,
      pass: req.body.pass,
    };

    if (connection) {
      connection.query(QUERY_UP_USER, reqData, (err, result) => {
        if (err) {
          throw err;
        } else {
          console.log(result.insertId);
          if (result.insertId > 0) {
            callback(null, {
              responseMessageSuccess,
            });
          } else {
            callback(null, {
              responseMessageError,
            });
          }
        }
      });
    }
  } catch (error) {
    callback(null, {
      responseMessageError,
    });
    console.error(error);
  }
}

module.exports = {
  getUsers,
  login,
  singUp,
};

//#region query
var QUERY_SELECT_USERS = 'SELECT * FROM users';
var QUERY_SELECT_EMAIL = 'SELECT * FROM users WHERE email =?';
var QUERY_UP_USER = 'INSERT INTO user SET ?';
//#endregion
