const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post('/', (req, res) => {
  const fName = req.body.firstName;
  const lName = req.body.lastName;
  const email = req.body.email;

  console.log(fName, lName, email);
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
})
