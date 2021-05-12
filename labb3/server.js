// Require and initialize server with express
const express = require("express");
const app = express();

const morgan = require("morgan");

// Port kept as a variable
const PORT = 5000;

// Morgan used for logging
app.use(morgan("dev"));

/**
 *    @TODO: Create test for four endpoints
 *              - Statuscodes
 *              - Type of response
 *              - Value
 *
 * */

// Request one

// Request two

// Request three

// Request four

// Logging out that we listen to port
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
