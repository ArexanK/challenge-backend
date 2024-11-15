const express = require("express");

const route = express.Router();
const feedController = require("../controller/feedController");

//routes
app.use(route);
app.get("/", feedController.getHomePage);
app.post("/save-post", feedController.savePost)
app.get("/add-new-post", feedController.addNewPost)
app.post("edit-post/:postId", feedController.editPost)
app.get("/delete-post/:postId", feedController.deletePost)



module.exports = route;
