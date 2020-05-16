const express = require('express');
const path = require('path');

const app = express();

const PORT = 8000;

app.use(express.static(path.join(__dirname, '../client')));

app.listen(PORT, () => {
  console.log(`proxy server is listening on http://54.183.247.65:${PORT}`);
})