const Room = require("../models/Room");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllRooms = asyncWrapper(async (req, res) => {
  const colors = req.query.colors;
  const queryObject = {};

  if (colors) queryObject.colors = { $in: colors.split(",") };

  const rooms = await Room.find(queryObject);
  if (rooms.length === 0) {
    return res.status(200).json({ message: "No rooms found" });
  }
  res.status(200).json({ rooms });
});

const createRoom = asyncWrapper(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(201).json({ room });
});

module.exports = { getAllRooms, createRoom };
