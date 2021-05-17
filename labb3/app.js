const express = require("express");

const app = express();
const PORT = 5000;

const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());

// Test if server is running

// Get a random number between 0 - 1023
app.get("/api/random", (req, res) => {
  // const randomNumber = Math.floor(Math.random() * 1023);

  const random = 55;

  res.send({ status: "success", number: random });
});

// Add two numbers
app.post("/api/add", (req, res) => {
  const add = (num1, num2) => {
    return num1 + num2;
  };

  res.json({ status: "success", number: add(num1, num2) });
});

// Subtract num 2 from num 1 numbers
app.post("/api/subtract", (req, res) => {
  const subtract = (num1, num2) => {
    return num1 - num2;
  };

  res.json({ status: "success", number: subtract(num1, num2) });
});

// Post a word and return number of letters
// and word in UPPERCASE
app.post("/api", (req, res) => {
  // Access the word from params
  const word = req.body.word;

  // Make word into uppcase
  const uppercase = word.toUpperCase();

  // Check length of the word
  const wordLength = word.length;

  res.send({
    status: "success",
    msg: `Your word in uppercase: ${uppercase}`,
    wordLength: wordLength,
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

module.exports = app;
