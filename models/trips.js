const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  dangerousness: String,
});

module.exports = mongoose.model('Trip', TripSchema);