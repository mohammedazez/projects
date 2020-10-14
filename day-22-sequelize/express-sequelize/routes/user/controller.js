const Exschool = require('../../models/Exschool');
const User = require('../../models/User');

module.exports = {
  getAllUser : (req, res) => {
    User.findAll({
      include: [Exschool],
      attributes: { exclude: ['exschool_id', 'exschoolId'] },
    })
    .then(data => {
      res.json(data)
    })
  }
}