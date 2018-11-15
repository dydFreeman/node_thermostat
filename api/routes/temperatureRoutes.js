'use strict';
module.exports = function(app) {
  var temperature = require('../controllers/temperatureController');

  // temperature Routes
  app.route('/temperature')
    .get(temperature.list_all_temperatures)
    .post(temperature.create_a_temperature);
};