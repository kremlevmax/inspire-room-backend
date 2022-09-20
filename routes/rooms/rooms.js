const express = require("express");
const router = express.Router();
const {
  getAllRooms,
  getRoom,
  createRoom,
} = require("../../controllers/rooms/rooms");

router.route("/").get(getAllRooms).post(createRoom);
router.route("/:id").get(getRoom);

module.exports = router;
