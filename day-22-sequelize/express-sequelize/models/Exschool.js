const {Sequelize} = require('sequelize');
const sequelize = require('../config/db');

const Exschool = sequelize.define("exschool", {
  name: Sequelize.STRING,
}, {
  underscored: true,
  timestamps: false,
  freezeTableName: true
})

module.exports = Exschool