// Require express and create webserver
const express = require("express");
const app = express();

// Path required for serving static files
const path = require("path");

// PORT as a variable for easier maintenance
const PORT = 5000;

// Serve all files in the public folder
// currently serving an index.html file with an img and simple stylesheet
app.use(express.static(path.join(__dirname, "public")));

// ============== CONTINUE HERE VG  ================== //

/*
  - GET/api/random -- returnera ett JSON-objekt i formatet {"number": tal} där tal är mellan 0 och 1023
  - GET/api/custom_random/num -- returnera ett slumpmässigt tal mellan + och num enligt samma princip som ovan
  - Skapa ytterligare en enpoint, gärna POST som hanterar data och ger tillbaks information, t ex antal vokaler
*/

// Testing get request to "/hello"
app.get("/hello", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.get("/api/random", (req, res) => {
  // res.json({"number": 13 });
  res.json({ number: "Random number between 0 and 1023 returned!" });
});

app.get("/api/custom_random/num", (req, res) => {
  res.send("Data accessed!");
});

app.post("/api/INGENANINGJUSTNU!!!", (req, res) => {
  // Hantera data och ge tillbaks information, t ex antal vokaler
  res.send("Data posted!");
});

// Listen to server on port 5000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
