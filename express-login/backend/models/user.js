const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  firstName: { type: String },
  surname: { type: String, unique: false },
  birthDay: Date,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;

// ### Signup
// Cette page doit avoir:
// - un champs `email`
// - un champs `password`
// - un champs `confirm password`
// - un champs `firstName`
// - un champs `surname`
// - et un champs date of birth
