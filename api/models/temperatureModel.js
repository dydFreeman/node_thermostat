'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TemperatureSchema = new Schema({
  name: {
    type: String,
    required: 'Acquired temperature (in celsius °)'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Temperature', TemperatureSchema);