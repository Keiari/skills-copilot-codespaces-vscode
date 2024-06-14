// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments module
const comments = require('./comments.js');

// Use the comments module
app.use('/comments', comments);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});