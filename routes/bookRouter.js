const { Router } = require("express");
const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res.send("<h1>all books</h1>");
});

bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`<h1> book id : ${bookId}'s book</h1>`);
});

module.exports = bookRouter;