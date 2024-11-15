const mongoose = require("mongoose");

const schema = mongoose.Schema;
const feedSchema = new schema({

  userName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    minlength: 40,
  },

  created_at: {
    type: Date,
    default: Date.now,
    get: function (createdAt) {
      return moment(createdAt).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
});

module.exports = mongoose.model("feed", feedSchema);
