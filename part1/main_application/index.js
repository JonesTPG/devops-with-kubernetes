const express = require('express');
const { v4 } = require('uuid');
const timestamp = require('time-stamp');

const app = express();
const port = 3000;

let string;

const generateUuid = () => {
  return v4();
};

const generateTimeStamp = () => {
  return timestamp.utc('YYYY-MM-DD | HH:mm:ss.ms');
};

const randomString = () => {
  let newString = generateTimeStamp() + ': ' + generateUuid();
  console.log(newString);
  string = newString;
  setTimeout(randomString, 5000);
};

app.get('/', (req, res) => {
  res.send(string);
});

app.listen(port, () => console.log('Server started in port ' + port));

randomString();
