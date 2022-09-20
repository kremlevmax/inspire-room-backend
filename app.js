const express = require("express");
const app = express();

const rooms = require("./routes/rooms/rooms");
const port = 3000;

app.use(express.json());
app.use("/api/v1/rooms", rooms);

app.listen(port, () => {
  console.log(`Server is listening on a port ${port}...`);
});
