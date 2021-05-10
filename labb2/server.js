const express = require("express");
const app = express();
// We don't use the const colors
// require runs the function making it possible to use the pkg
const colors = require("colors");
const morgan = require("morgan");
const fs = require("fs");

const PORT = 5000;

app.use(morgan("dev"));

// GET counter data
app.get("/api/counter", (req, res) => {
  // Check which data in counter text file ( i.e current counter state)
  fs.readFile("./db/counter.txt", (err, data) => {
    // If error, log to console
    if (err) {
      console.log(err);

      res.status(400).json({ success: false, msg: "Bad Request" });
    }

    // turn data in counter into string
    let countNum = data.toString();

    res.json({ success: true, counter: countNum });
  });
});

// Add one to counter
app.put("/api/add", (req, res) => {
  // Check which data in counter text file ( i.e current counter state)
  fs.readFile("./db/counter.txt", (err, data) => {
    // If error, log to console
    if (err) {
      console.log(err);
      res.status(400).json({ success: false, msg: "Bad Request" });
    }

    // 1. Make content of counter.txt into a number and add 1
    // 2. Make it a string & put it in a new variable
    addOne = (Number(data) + 1).toString();
    console.log(
      `You have added one on the counter. The new number is: ${addOne}`
    );

    // Update the state of counter by adding 1 to it
    fs.writeFile("./db/counter.txt", addOne, () => {
      res.json({ success: true });
    });
  });
});

// Subtract one from counter
app.get("/api/subtract", (req, res) => {
  // Check which data in counter text file ( i.e current counter state)
  fs.readFile("./db/counter.txt", (err, data) => {
    // If error, log to console
    if (err) {
      console.log(err);
      res.status(400).json({ success: false, mssg: "Bad Request" });
    }

    // 1. Make content of counter.txt into a number and add 1
    // 2. Make it a string & put it in a new variable
    subtractOne = (Number(data) - 1).toString();
    console.log(
      `You have added one on the counter. The new number is: ${subtractOne}`
    );

    // Update the state of counter by adding 1 to it
    fs.writeFile("./db/counter.txt", subtractOne, () => {
      res.json({ success: true, counter: subtractOne });
    });
  });
});

// Listen for server on port 5000
app.listen(PORT, () => {
  console.log(`Server is listening for port ${PORT}`.cyan.bold);
});
