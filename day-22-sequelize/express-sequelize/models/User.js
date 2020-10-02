const {Sequelize, INTEGER} = require('sequelize');
const sequelize = require('../config/db');
const Exschool = require('./Exschool');

const User = sequelize.define("users", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  birth_data: Sequelize.DATE,
  exschool_id: Sequelize.INTEGER,
}, {
  underscored: true,
  timestamps: false
})
User.belongsTo(Exschool)

module.exports = User