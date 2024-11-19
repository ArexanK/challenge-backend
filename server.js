const express = require("express");
require("./config/mongoose");
require("dotenv").config();
const app = express();
const PORT = 3200;
const routes = require("./config/routes");

//EJS
app.set("view engine", "ejs");

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", routes);

//server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
