const express = require('express');
const results = require('./routes/results.js');

const app = express();
app.listen(3000, () => {
  console.log('Server up and running');
});

app.use(express.json());
app.use('/results', results);
