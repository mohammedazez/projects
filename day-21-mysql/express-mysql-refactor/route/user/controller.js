const connection = require('../../config/db');

const queryUser = `select 
users.id,
users.name,
users.email,
users.birth_data,
exschool.name as exschool_name
from users join exschool 
on users.exschool_id = exschool.id`

module.exports = {
  getAllUser: (req, res) => {
    // Menjalankan sebuah query
    connection.query(queryUser, 
    (err, data, fields) => {
      if (err) {
        console.log(err)
      } else {
        res.json(data)
      }
    })
  },

  getUserById : (req, res) => {
    // Menjalankan sebuah query
  connection.query(`${queryUser} where users.id = ${req.params.id} `, 
  (err, data, fields) => {
    if (err) {
      console.log(err)
    } else {
      res.json(data)
    }
  })
}
}