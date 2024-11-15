const mongoose = require("mongoose");

const schema = mongoose.Schema;
const feedSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    minlength: 40,
  },
  user: {
    type: schema.Types.ObjectId,
    ref: "user",
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
