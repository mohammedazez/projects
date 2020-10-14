const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "class-room"
  },
  // dateRegister: {
  //   type: Date,
  //   default: Date.now(),
  // },
});

const Student = mongoose.model("students", StudentSchema);

module.exports = Student;
