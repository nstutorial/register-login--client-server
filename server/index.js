const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// test routes
//app.get("/", (req, res) => {
//  res.status(200).send({
//    message: "server is running",
//  });
//});

// main routes
app.use("/api/v1/user", require("./routes/userRoutes"));

//port
const port = process.env.PORT || 8080;

//listen
app.listen(port, () => {
  console.log(
    `Server is Running ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
