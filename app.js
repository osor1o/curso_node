var app = require("./config/server");

// var rotaNoticias = require("./app/routes/noticias")(app);
// var rotaFormInclusaoNoticias = require("./app/routes/form_inclusao_noticia")(app);
// var rotaHome = require("./app/routes/home")(app);

app.listen(3000, function() {
  console.log("servidor rodando com express!");
});
