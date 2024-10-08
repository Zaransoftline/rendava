const express = require('express');
const path = require('path');
const app = express();
const hostname = 'localhost';
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', async(req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
