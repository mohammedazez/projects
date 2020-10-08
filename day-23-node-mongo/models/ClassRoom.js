const mongoose = require("mongoose");

const ClassRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
  },
});

const ClassRoom = mongoose.model("class-room", ClassRoomSchema);
module.exports = ClassRoom;
