const { request } = require("express");
const express = require("express");
const app = express();

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
  console.log("Server started on port: " + port);
});

app.get("/authors", (req, res) => {
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
  const books = authors.books[req.params.books];
  console.log(books);
  res.send(`${author.books}`);
});
