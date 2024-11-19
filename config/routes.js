const express = require("express");
const route = express.Router();
const feedController = require("../controller/feedController");

//routes

route.get("/", feedController.getHomePage);
route.post("/save-post", feedController.savePost);
route.get("/add-new-post", feedController.savePost);
route.post("/edit-post/:postId", feedController.editPost);
route.get("/delete-post/:postId", feedController.deletePost);

module.exports = route;
