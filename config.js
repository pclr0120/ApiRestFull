const mysql = require('mysql');
const env = require('dotenv');

const serverConfig = {
  port: env.PORT_API || 3003,
  SECRET_TOKEN: 'miclavedecode',
};
console.log(env);
const connection = mysql.createConnection({
  host: env.HOST || 'localhost',
  user: env.USER_DB || 'root',
  port: env.PORT_BD || 3306,
  password: env.PASS || '123',
  database: env.DB || 'db_master',
});

module.exports = {
  serverConfig,
  connection,
};
