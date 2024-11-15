const mongoose = require("mongoose");

const schema = mongoose.Schema;
const userSchema = new schema({
  userName: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
    get: function (createdAt) {
      return moment(createdAt).format("MMMM Do YYYY, h:mm:ss a");
    },
  },

});

module.exports = mongoose.model("user", userSchema);
