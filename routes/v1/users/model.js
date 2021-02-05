const mongoose = require('mongoose');
const idPlugin = require('mongoose-id');

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(idPlugin);
const User = mongoose.model('User', userSchema);
module.exports = User;
