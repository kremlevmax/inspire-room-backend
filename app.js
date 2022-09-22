const express = require("express");
const morgan = require("morgan");
const rooms = require("./routes/rooms/rooms");
const connectDB = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/v1/rooms", rooms);
app.use(errorHandlerMiddleware);

const startApp = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on a port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
