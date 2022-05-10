const config = require("../../../config");
const connection = config.connection;
const service = require("../../middlewares/index");

function getUsers(callback) {
  if (connection) {
    connection.query("select * from module;", (err, rows) => {
      console.log(err);
      if (err) {
        callback(null, {
          msg: err,
        });
      } else {
        callback(null, rows);
      }
    });
  }
}

function login(req, callback) {
  if (connection) {
    connection.query(
      QUERY_SELECT_EMAIL  , connection.escape(req.body.email),
      (err, rows) => {
        if (err) {
          callback(null, {
            msg: err,
          });
        } else {
          console.log(rows);
          callback(null, {
            token: service.createToken(result.insertId),
          });
        }
      }
    );
  }
}

function singUp(req, callback) {
  let reqData = {
    nombre: req.body.nombre,
    pass: req.body.pass,
  };
  try {
    if (connection) {
      connection.query(QUERY_UP_USER, reqData, (err, result) => {
        if (err) {
          throw err;
        } else {
          console.log(result.insertId);
          callback(null, {
            token: service.createToken(result.insertId),
          });
        }
      });
    }
  } catch (error) {}
}



module.exports = {
  getUsers,
  login,
  singUp,
};

//#region query
  var  QUERY_SELECT_USERS="SELECT * FROM module";
  var  QUERY_SELECT_EMAIL="SELECT * FROM users WHERE email ?";
  var  QUERY_UP_USER="INSERT INTO user SET ?";
//#endregion
