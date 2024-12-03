const { render } = require("nodeman/lib/mustache");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const feedModel = require("../model/feedModel");

const getHomePage = (req, res) => {
  feedModel
    .find()
    .then((result) => {
      res.render("index", { feed: result });
    })

    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occurred while fetching the feed.");
    });
};
const getPostId = (req, res) => {
  const postId = req.params.postId;
  feedModel
    .findOne({ _id: postId })
    .then((feeds) => {
      res.json(feeds);
    })
    .catch((err) => {
      console.log(err);
    });
};

const savePost = (req, res) => {
  const { userName,created_at, title, message } = req.body;
  const NewPost = new feedModel(req.body);
  NewPost.save()
    .then(() => {
      res.redirect("/");
      console.log("post saved");
    })
    .catch((err) => {
      console.log(err);
    });
};

const editPost = (req, res) => {
  feedModel
    .findByIdAndUpdate(req.params.postId, req.body)
    .then(() => {
      res.redirect("/");
      console.log("edit post");
    })
    .catch((err) => {
      console.log(err);
    });
};



const deletePost = (req, res) => {
  feedModel
    .findByIdAndDelete(req.params.postId)
    .then(() => {
      res.redirect("/");
      console.log("delete post");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getHomePage,
  getPostId,
  savePost,
  editPost,
  deletePost,
  
};
