// External Dependancies
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  gender: String,
  email: String,
  dob: Date,
  accountcreated: Date,
  mobilenumber: Number,
  googleid: Number
});

module.exports = mongoose.model("User", userSchema);
