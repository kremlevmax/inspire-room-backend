const getAllRooms = (req, res) => {
  res.send("All Rooms");
};

const getRoom = (req, res) => {
  res.send("One Room");
};

const createRoom = (req, res) => {
  res.send("Room Created");
};

module.exports = { getAllRooms, getRoom, createRoom };
