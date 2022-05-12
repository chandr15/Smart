const mongoose = require('mongoose');

const LocalitySchema = new mongoose.Schema({
  state: {
    type: String,
    required: true
  },
  areaPin: {
    type: String,
    required: true
  },
  latt: {
    type: String,
    required: true
  },
  longt: {
    type: String,
    required: true
  },
  assignedCode:{
    type: String,
    required: true
  }
});

const Locality = mongoose.model('Locality', LocalitySchema);

module.exports = Locality;
