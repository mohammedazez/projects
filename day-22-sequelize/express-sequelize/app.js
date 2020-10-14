const express = require('express');
const sequelize = require('./config/db');

const User = require('./models/User');
const Teacher = require('./models/Teacher');
const Exschool = require('./models/Exschool');


const userRouter = require('./routes/user');

const app = express()

sequelize
.authenticate()
.then(() => {
  console.log("Connection has been established successfully.")
  User.sync()
  Teacher.sync()
  Exschool.sync()
})
.catch(err => {
  console.log('Unable to connect to the database:', err)
})

app.get("/", (req, res) =>{
  res.send("wellcome to sequelize")
})

app.use("/user", userRouter)

app.listen(3000, () => {
  console.log("running on port 3000");
})