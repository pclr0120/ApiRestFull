const config = require('../config')
const connection = config.connection;
const service = require('../services')

function get(callback) {

  if (connection) {
    connection.query('SELECT * FROM user',
      (err, rows) => {
        if (err) {
          throw err
        } else {

          callback(null, rows);
        }
      }
    )
  }
};

function login(req, callback) {
  if (connection) {
    connection.query('SELECT * FROM user WHERE nombre=' + connection.escape((req.body.email)),
      (err, rows) => {
        if (err) {
          callback(null, {
            "msg": err
          });
        } else {
          console.log(rows)
          callback(null, {
            token: service.createToken(result.insertId)
          })
        }
      }
    )
  }
};

function singUp(req, callback) {
  let reqData = {
    nombre: req.body.nombre,
    pass: req.body.pass



  }
  try {
    if (connection) {
      connection.query('INSERT INTO user SET ?', reqData,
        (err, result) => {
          if (err) {
            throw err;
          } else {
            console.log(result.insertId);
            callback(null, {
              token: service.createToken(result.insertId)
            })
          }
        }
      )
    }

  } catch (error) {

  }
};


module.exports = {
  get,
  login,
  singUp
}