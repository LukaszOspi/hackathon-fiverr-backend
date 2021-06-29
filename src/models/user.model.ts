const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  surname: String,
  profession: String,
  events: String,
});

const UserModel = mongoose.model("User", schema);

module.exports = UserModel;
