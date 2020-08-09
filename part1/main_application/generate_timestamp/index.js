const { v4 } = require("uuid");
const timestamp = require("time-stamp");
const fs = require("fs");

const generateUuid = () => {
  return v4();
};

const generateTimeStamp = () => {
  return timestamp.utc("YYYY-MM-DD | HH:mm:ss.ms");
};

const randomString = () => {
  let newString = generateTimeStamp() + ": " + generateUuid();
  fs.writeFile("/usr/src/app/files/file.txt", newString, function (err) {
    if (err) {
      console.log("error writing file");
    } else {
      console.log("file updated");
    }
  });
  setTimeout(randomString, 5000);
};

randomString();
