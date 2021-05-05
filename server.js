// Require express and create webserver
const express = require("express");
const app = express();

// Keeping PORT as a variable
// to only have to change it in one place
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listen to server on port 5000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
