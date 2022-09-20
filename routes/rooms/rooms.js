const express = require("express");
const router = express.Router();
const { getAllRooms, getRoom, createRoom } = require("../../controllers/rooms");

router.route("/").get(getAllRooms).post(createRoom);
router.route("/:color").get(getRoom);

module.exports = router;
