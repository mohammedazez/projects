const express = require("express");
const app = express();

const { PORT, MONGODB_URI_LIVE } = require("./config");
const localPort = PORT || 9000;

const { dbMongo } = require("./config");

console.log("port", PORT);
console.log("MONGODB_URI_LIVE", MONGODB_URI_LIVE);
// console.log("db", dbMongo);

app.get("/", (req, res) => {
  res.send("halo");
});

if (dbMongo) {
  app.listen(localPort, () => {
    console.log(`server run ${localPort}`);
  });
} else {
  console.log("db mongo tidak connect");
}
