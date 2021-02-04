const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
})