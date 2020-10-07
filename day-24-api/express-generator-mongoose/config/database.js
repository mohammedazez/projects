const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/school', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

module.exports = db