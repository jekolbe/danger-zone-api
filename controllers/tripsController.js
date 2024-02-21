const Trip = require('../models/trips');

exports.listAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSingleTrip = async (req, res) => {
  try {
    const trip = await Trip.findOne({id: req.params.id});
    console.log(trip);
    if (!trip) {
      return res.status(404).json({ message: 'Cannot find trip' });
    }
    res.json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
