module.exports = function(application) {
  application.get("/noticias", function(req, res) {
    var connection = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

    NoticiasDAO.getNoticias(function (error, result) {
      res.render("noticias/noticias", { noticias: result });
    });
  });
};
