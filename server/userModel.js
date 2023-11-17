
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  userid:{
    type:String,
    required:true,
    unique: true
  },
  phoneno: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;