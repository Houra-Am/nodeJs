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
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});
