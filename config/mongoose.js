const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.error("Connection error", err);
    throw err;
  });
