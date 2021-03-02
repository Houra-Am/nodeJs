const { request } = require("express");
const express = require("express");
const app = express();
app.use(express.json());

const authors = [
  {
    name: "Lawrence Nowell",
    nationality: "UK",
    id: 1,
    books: ["Beowulf"],
  },

  {
    name: "William Shakespeare",
    nationality: "UK",
    id: 2,
    books: ["Hamlet", "Othello, Romeo and Juliet", "MacBeth"],
  },

  {
    name: "Charles Dickens",
    nationality: "US",
    id: 3,
    books: ["Oliver Twist", "A Christmas Carol"],
  },

  {
    name: "Oscar Wilde",
    nationality: "UK",
    id: 4,
    books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
  },
];

const port = 8000;
app.listen(port, () => {
  console.log(
    `Server started on port: to launch, click https://localhost:${port}`
  );
});

app.get("/", (req, res) => {
  res.send("Authors API");
});

app.get("/authors/:id/", (req, res) => {
  const id = parseInt(req.params.id);
  const author = authors.find((author) => author.id === id);
  console.log(author);
  res.send(`${author.name}, ${author.nationality}`);
});

app.get("/authors/:id/books/:books", (req, res) => {
  const id = parseInt(req.params.id);
  const author = authors.find((author) => author.id === id);
  const books = authors[req.params.books].books;
  console.log(author);
  //  console.log(authors[req.params.books.books]);
  res.send(`${authors[req.params.books].books}`);
});

app.get("/json/authors/:id", (req, res) => {
  console.log(req.params.id);
});

app.get("*", (req, res) => {
  res.send("Error 404");
});

//The author with the ID ${req.params.id} does not exist
