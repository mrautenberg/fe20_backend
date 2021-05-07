const express = require("express");
const app = express();
// We don't use the const colors
// require runs the function making it possible to use the pkg
const colors = require("colors");
const morgan = require("morgan");

const PORT = 5000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ msg: "Hello world!" });
});

app.listen(PORT, () => {
  console.log(`Server is listening for port ${PORT}`.cyan.bold);
});
