const db = require("../db");
const asyncHandler = require("express-async-handler")

const getAuthorById =  asyncHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    res.status(404).send("<h1>Author not found</h1>");
    return;
  }

  res.send(`<h1>Author Name: ${author.name}</h1>`);
});

module.exports = { getAuthorById };