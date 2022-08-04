const config = require('../../../config');
const connection = config.connection;
//const service = require('../../middlewares/index');

function get(callback) {
  if (connection) {
    connection.query(QUERY_SELECT_USERS, (err, rows) => {
      if (err) {
        throw err;
      } else {
        callback(null, rows);
      }
    });
  }
}

module.exports = {
  get,
};

//#region query
var QUERY_SELECT_USERS = 'SELECT * FROM module';

//#endregion
