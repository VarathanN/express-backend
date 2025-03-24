const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
  res.render("about", { links: links });
});

app.get("/error-next", (req, res, next) => {
  const error = new Error("Something went wrong!");
  next(error); // Pass error to next middleware
});

// middlewares
// function middleware1(req, res, next) {
//   console.log("Middleware 1");
//   next(); // Pass control to the next middleware
// }

// function middleware2(req, res, next) {
//   console.log("Middleware 2");
//   // res.send("Response from Middleware 2");
//   next();
//   // request-response cycle ends here
// }

// function middleware3(req, res, next) {
//   console.log("Middleware 3");
//   res.send("Response from Middleware 3");
// }

// app.use(middleware1);
// app.use(middleware2);
// app.use(middleware3);
// // will log `Middleware 1` -> `Middleware 2` and send a response with the text "Response from Middleware 2"

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

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});
