const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();
app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");
app.use(express.static("public"));

const port = 8000;
app.listen(port, () => {
  console.log("Server started on port: " + port);
});

app.get("/", (req, res) => {
  res.render("home", {
    lang: req.params.lang,
    greeting: "Hi there",
    img: "./img/tenor.gif",
  });
});

app.get("/:lang?", (req, res) => {
  switch (req.params.lang) {
    case "fr":
      res.render("home", {
        lang: req.params.lang,
        greeting: "Bonjour, ça va ?",
        img: "./img/bonjour.jpg",
      });
      break;
    case "en":
      res.render("home", {
        lang: req.params.lang,
        greeting: "Hi, how are you?",
        img: "./img/hello.jpg",
      });
      break;
    case "es":
      res.render("home", {
        lang: req.params.lang,
        greeting: "Hola, ¿Cómo estás?",
        img: "./img/hola.png",
      });
      break;
    default:
      res.render("home");
  }
});
