const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { PORT, MONGODB_URI_LIVE } = require("./config");
const localPort = PORT || 9000;

const { dbMongo } = require("./config");
const studentRouter = require("./routes/StudentController");
const classRoomRouter = require("./routes/ClassRoomController");

console.log("port", PORT);
// console.log("MONGODB_URI_LIVE", MONGODB_URI_LIVE);
// console.log("db", dbMongo);

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("halo");
});

app.use(studentRouter);
app.use(classRoomRouter);

app.use(() => {
  console.log("halooooooo");
})

if (dbMongo) {
  app.listen(localPort, () => {
    console.log(`server run ${localPort}`);
  });
} else {
  console.log("db mongo tidak connect");
}
