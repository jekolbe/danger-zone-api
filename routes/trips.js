const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/tripsController');

router.get('/', tripsController.listAllTrips);
router.get('/:id', tripsController.getSingleTrip);

module.exports = router;