// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.json({
    comments: [
      {
        id: 1,
        body: 'Hello, world!',
      },
      {
        id: 2,
        body: 'This is a comment.',
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});