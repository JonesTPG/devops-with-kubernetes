const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  fs.readFile('/usr/src/app/files/file.txt', function (err, contents) {
    if (err) {
      console.log('error reading file');
      res.status(500).send();
    } else {
      res.send(contents);
    }
  });
});

app.listen(port, () => console.log('Server started in port ' + port));
