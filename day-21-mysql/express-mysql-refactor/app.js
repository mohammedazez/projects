const express = require('express');
const connection = require('./config/db');

const userRouter = require('./route/user');
const exschoolRouter = require('./route/exschool');

const app = express()

// Tes koneksi
connection.connect(err => {
  if (err) {
    console.log(err.sqlMessage)
  } else {
    console.log("success connect to mysql")
  }
})

app.get("/", (req, res) => {
  res.json("wellcome")
})

app.use("/user", userRouter)
app.use("/exschool", exschoolRouter)

app.listen(3000, () => {
  console.log("This app running on port 3000")
})