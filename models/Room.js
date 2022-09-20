const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Project has to have a name"],
    trim: true,
  },
  colors: {
    type: [String],
    required: [true, "At least one color tag has to be provided"],
  },
});

module.exports = mongoose.model("Room", RoomSchema);
