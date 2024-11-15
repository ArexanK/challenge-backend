const feedModel = require("../model/feedModel");

const getHomePage = (req, res) => {
  res.redirect("/");
};

const savePost = (req, res) => {
  console.log(req.body);
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

const addNewPost = (req, res) =>{
    console.log(req.body)
}

const editPost = (req,res) => {
    feedModel.findByIdAndUpdate(req.params.postId, req.body)
    .then(() => {
        res.redirect("/");
        console.log("edit post");
      })
      .catch((err) => {
        console.log(err);
      });
}

const deletePost = (req,res) => {
    feedModel.findByIdAndDelete(req.params.postId)
    .then(() => {
        res.redirect("/");
        console.log("delete post");
      })
      .catch((err) => {
        console.log(err);
      });
}


module.exports = {
  getHomePage,
  savePost,
  addNewPost, 
  editPost, 
  deletePost
};
