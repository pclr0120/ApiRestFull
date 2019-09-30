const mysql = require('mysql');

require('dotenv').config()


serverConfig={
  port: process.env.PORT || 3003,
   SECRET_TOKEN: 'miclavedecode'
}

console.log(process.env);
connection = mysql.createConnection({
  
  host:  process.env.HOST,
  user: process.env.usuario,
  password: process.env.PASS,
  database: process.env.DATABASE
});

module.exports= {
  serverConfig,connection


}