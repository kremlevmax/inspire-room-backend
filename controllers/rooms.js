const Room = require("../models/Room");
const asyncWrapper = require("../middleware/async");

const getAllRooms = asyncWrapper(async (req, res) => {
  const rooms = await Room.find({});
  res.status(200).json({ rooms });
});

const createRoom = asyncWrapper(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(201).json({ room });
});

const getRoom = asyncWrapper(async (req, res) => {
  const { color: roomColor } = req.params;
  const rooms = await Room.find({ colors: { $all: [roomColor] } });
  res.status(200).json({ rooms });
});

module.exports = { getAllRooms, getRoom, createRoom };
