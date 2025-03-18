const { Router } = require("express");
const authorRouter = Router();

authorRouter.get("/", (req, res) => {
  res.send("<h1>all authors</h1>");
});

authorRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`<h1> author id : ${authorId}</h1>`);
});

module.exports = authorRouter;
