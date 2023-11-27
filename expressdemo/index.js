// app.js

const express = require('express');
const app = express();
const port = 3000;

// Define a route to welcome users
app.get('/', (req, res) => {
  res.send('Welcome to SelvaMathan Webpage!7376222AL198');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
