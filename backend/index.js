const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const errormiddleware = require("./utils/error");
require("dotenv").config();
const app = express();
const port = 8000;
const cors = require("cors");
//middlewares
app.use(cors());
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);
app.use(errormiddleware);
app.use(bodyparser.json());
const jwt = require("jsonwebtoken");
mongoose.connect(process.env.MONGOOSE).then((data) => {
  console.log("Connect to Mongodb server:" + data.connection.host);
});
app.listen(process.env.PORT, () => {
  console.log("listening on:" + process.env.PORT);
});
//routes
const userRoutes = require("./Routes/UserRoutes");
app.use("/api/v2/user", userRoutes);
