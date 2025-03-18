const { Router } = require("express");
const authorRouter = Router();
const { getAuthorById } = require("../controllers/authorController")

authorRouter.get("/", (req, res) => {
  res.send("<h1>all authors</h1>");
});

authorRouter.get("/:authorId", getAuthorById)

module.exports = authorRouter;
