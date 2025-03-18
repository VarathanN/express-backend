const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("<h1>welcome page i guess :)</h1>");
});

indexRouter.get("/index", (req, res) => {
  res.send("<h1>index page</h1>");
  const query = req.query;
  console.log(query);
});

module.exports = indexRouter;
