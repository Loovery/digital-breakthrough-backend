const mongoose = require('mongoose');

const RegionSchema = new mongoose.Schema({
  regionname: String,
  subjectId: String,
},
{
  timestamps: true,
});

module.exports = mongoose.model('Region', RegionSchema);
