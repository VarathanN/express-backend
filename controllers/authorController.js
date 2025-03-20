const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomerNotFoundError = require("../errors/CustomerNotFoundError");

const getAuthorById =  asyncHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomerNotFoundError("Author not found");
  }

  res.send(`<h1>Author Name: ${author.name}</h1>`);
});

module.exports = { getAuthorById };