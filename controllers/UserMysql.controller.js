const UserModel = require('../models/UserMysql');

function userGet(req, res) {
  UserModel.get((err, data) => {
    res.status(200).send({
      data
    });
  });

};

function login(req, res) {
  UserModel.login(req, (err, data) => {
    res.status(200).send({
      data
    });
  });
};

function singUp(req, res) {
  UserModel.singUp(req, (err, data) => {
    try {
      if (data && data.token) {
        res.status(200).json({
          success: true,
          msg: "Se inserto correctamente",
          data: data
        });
      } else {
        res.status(500).json({
          success: false,
          msg: "Error"
        });
      }
    } catch (error) {

    }
  });


};

module.exports = {
  login,
  userGet,
  singUp
}