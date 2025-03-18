const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

// response methods
// app.use((req, res) => {
//   // This works and this ends the request-response cycle
//   res.send("Hello");

//   // However, it does not exit the function so this will still run
//   console.log("will still run!!");

//   // This will then throw an error that we cannot send again after sending to the client already
//   res.send("Bye");
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is up and running in ${PORT}`);
});

app.get("/error-next", (req, res, next) => {
  const error = new Error("Something went wrong!");
  next(error); // Pass error to next middleware
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});
