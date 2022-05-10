const mysql = require('mysql');

require('dotenv').config();


serverConfig={
  port: process.env.PORT_API || 3003,
   SECRET_TOKEN: 'miclavedecode'
}

console.log(process.env);
connection = mysql.createConnection({
  host:  process.env.HOST || "localhost",
  user: process.env.USER_DB || "root",
  port: process.env.PORT || 3306,
  password: process.env.PASS || "123",
  database: process.env.DB || "db_master"
});

module.exports= {
  serverConfig,connection
}