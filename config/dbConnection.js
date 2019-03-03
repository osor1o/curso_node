var mysql = require("mysql");

var connMysql = function() {
  console.log("conexao com o banco estabelecida");
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "9090123",
    database: "portal_noticias"
  });
};

module.exports = function() {
  return connMysql;
};
