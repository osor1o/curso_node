module.exports = function() {
  this.getNoticias = function(connection, callback) {
    connection.query("select * from noticias", callback);
  };

  this.getNoticia = function(connection, callback) {
    connection.query("select * from noticias where id_noticia = 2", callback);
  };

  return this;
};
