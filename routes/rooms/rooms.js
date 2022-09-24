const express = require("express");
const router = express.Router();
const { getAllRooms, createRoom } = require("../../controllers/rooms");

router.route("/").get(getAllRooms).post(createRoom);

module.exports = router;
