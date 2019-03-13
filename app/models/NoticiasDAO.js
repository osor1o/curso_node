class NoticiasDAO {
    constructor(connection) {
        this._connection = connection;
    }

    getNoticias(callback) {
        this._connection.query("select * from noticias", callback);
    };

    getNoticia(callback) {
        this._connection.query("select * from noticias where id_noticia = 2", callback);
    };

    salvarNoticia(noticia, callback) {
        this._connection.query("insert into noticias set ? ", noticia, callback);
    };

}

module.exports = function() {
    return NoticiasDAO;
};
