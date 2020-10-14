const connection = require('../../config/db');

module.exports = {
  getAllExschool: (req, res) => {
    // Menjalankan sebuah query
    connection.query("select * from exschool",
    (err, data, fields) => {
      if (err) {
        console.log(err)
      } else {
        res.json(data)
      }
    })
  },

}