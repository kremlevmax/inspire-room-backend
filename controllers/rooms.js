const Room = require("../models/Room");

const getAllRooms = async (req, res) => {
  const rooms = await Room.find({});
  res.status(200).json({ rooms });
};

const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json({ room });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getRoom = async (req, res) => {
  const { color: roomColor } = req.params;
  const rooms = await Room.find({ colors: { $all: [roomColor] } });
  res.status(200).json({ rooms });
};

module.exports = { getAllRooms, getRoom, createRoom };
