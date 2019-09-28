const mongoose = require('mongoose');

const JetcalcServerSchema = new mongoose.Schema({
  servername: String,
  domainname: {
    type: String,
    unique: true,
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model('JetcalcServer', JetcalcServerSchema);
