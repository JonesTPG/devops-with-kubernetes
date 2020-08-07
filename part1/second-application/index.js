const express = require("express");

const app = express();
const port = 3000;

let counter = 0;

app.get("/", (req, res) => {
  counter = counter + 1;
  res.send("pong " + counter);
});

app.listen(port, () => console.log("Server started in port " + port));
