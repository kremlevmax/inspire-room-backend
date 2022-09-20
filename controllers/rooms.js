const Room = require("../models/Room");

const getAllRooms = (req, res) => {
  console.log("All rooms");
};

const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json({ room });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getRoom = (req, res) => {
  console.log("One room");
};

module.exports = { getAllRooms, getRoom, createRoom };
