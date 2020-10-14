const express = require('express');
const mysql = require('mysql');

const app = express()

// Membuat koneksi ke mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "school"
})

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

const queryUser = `select 
users.id,
users.name,
users.email,
users.birth_data,
exschool.name as exschool_name
from users join exschool 
on users.exschool_id = exschool.id`

app.get("/user", (req, res) => {
  // Menjalankan sebuah query
  connection.query(queryUser, 
  (err, data, fields) => {
    if (err) {
      console.log(err)
    } else {
      res.json(data)
    }
  })
})

app.get("/user/:id", (req, res) => {
    // Menjalankan sebuah query
  connection.query(`${queryUser} where users.id = ${req.params.id} `, 
  (err, data, fields) => {
    if (err) {
      console.log(err)
    } else {
      res.json(data)
    }
  })
})

app.get("/exschool", (req, res) => {
  // Menjalankan sebuah query
  connection.query("select * from exschool",
  (err, data, fields) => {
    if (err) {
      console.log(err)
    } else {
      res.json(data)
    }
  })
})

app.listen(3000, () => {
  console.log("This app running on port 3000")
})