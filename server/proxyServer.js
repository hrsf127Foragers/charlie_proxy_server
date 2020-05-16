const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

const PORT = 8000;

app.use(express.static(path.join(__dirname, '../client')));

app.get('/api/:restaurant_id/reviews', (req, res) => {
  console.log('rest id => ', req.params.restaurant_id)
  axios.get(`http://54.183.220.133:3001/api/${req.params.restaurant_id}/reviews`)
    .then(({data}) => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

app.listen(PORT, () => {
  console.log(`proxy server is listening on http://54.183.247.65:${PORT}`);
})