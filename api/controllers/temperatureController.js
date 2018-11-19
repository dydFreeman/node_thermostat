'use strict';

// Import Admin SDK
var admin = require('firebase-admin');

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref();

exports.list_all_temperatures = function (req, res) {
  var tempRef = ref.child('temperature');
  tempRef.orderByChild('timestamp').once('value', function(data) {
    res.send(data);
  });
};

exports.create_a_temperature = function (req, res) {
  var value = {
    ...req.body,
    timestamp: new Date().getTime()
  }
  var tempRef = ref.child('temperature');
  tempRef.push(value).then(() => {
    console.log('req.body', req.body);
    res.send('Temperature set', req.body);
  });
};