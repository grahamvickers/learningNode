const config = require('../config');
const mysql = require('mysql');


var connect  = mysql.createPool({
  connectionLimit : 10,
  queueLimit      : 100,
  host            : config.host,
  user            : config.uname,
  password        : config.upass,
  database        : config.db,
  port            : config.port
});
 
module.exports = connect;