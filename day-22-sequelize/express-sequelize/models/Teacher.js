const {Sequelize} = require('sequelize');
const sequelize = require('../config/db');

const Teacher = sequelize.define("teacher", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
}, {
  underscored: true,
  timestamps: false
})

module.exports = Teacher