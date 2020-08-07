const { v4 } = require("uuid");
const timestamp = require("time-stamp");

const generateUuid = () => {
  return v4();
};

const generateTimeStamp = () => {
  return timestamp.utc("YYYY-MM-DD | HH:mm:ss.ms");
};

const randomString = () => {
  console.log(generateTimeStamp() + ": " + generateUuid());
  setTimeout(randomString, 5000);
};

randomString();
