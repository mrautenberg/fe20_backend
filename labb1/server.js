// Require express and create webserver
const express = require("express");
const app = express();

// Morgan used for logging
const morgan = require("morgan");

// Colors used for colorizing messages in console
const colors = require("colors");

// Path required for serving static files
const path = require("path");

// PORT as a variable for easier maintenance
const PORT = 5000;

// Serve all files in the public folder
// currently serving an index.html file with an img and simple stylesheet
app.use(express.static(path.join(__dirname, "public")));

// Morgan logging middleware initialized
app.use(morgan("dev"));

// GET random number between 0 & 1023
app.get("/api/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 1023);

  res.json({ number: randomNumber });
});

// Write a number in the URL and add it to a random number
app.get("/api/custom_random/:num", (req, res) => {
  // Access URL param value in req object
  const params = req.params;

  // Custom random which floors the values that get added
  const customRandom = Math.floor(Math.random() * parseInt(params.num));

  res.json({ number: customRandom });
});

app.post("/api/:word", (req, res) => {
  // Hantera data och ge tillbaks information

  // Access the word from params
  const word = req.params.word;

  // Make word into uppcase
  const uppercase = word.toUpperCase();

  // Check length of the word
  const wordLength = word.length;

  res.json({
    msg: `Your word in uppercase: ${uppercase}`,
    wordLength: wordLength,
  });
});

// Listen to server on port 5000
// cyan.bold just added for the fun of it, doesn't really matter
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`.cyan.bold);
});
