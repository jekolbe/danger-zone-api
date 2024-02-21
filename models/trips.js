const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    dangerousness: String,
});

module.exports = mongoose.model('Trip', TripSchema);