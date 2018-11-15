'use strict';

var mongoose = require('mongoose'),
  Temperature = mongoose.model('Temperature');

exports.list_all_temperatures = function(req, res) {
    Temperature.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_temperature = function(req, res) {
  var new_temperature = new Temperature(req.body);
  new_temperature.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};