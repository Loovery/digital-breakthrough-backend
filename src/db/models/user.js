const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  phone: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: String,
},
{
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
