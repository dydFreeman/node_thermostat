var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  bodyParser = require('body-parser');

// INIT Firebase
var admin = require("firebase-admin");
// the following file should be replaced with
// the one generated here: https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk
var serviceAccount = require('./nodethermostat-firebase-adminsdk-ngk0t-e0cfb4b175.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodethermostat.firebaseio.com"
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/temperatureRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Thermostat server started on: ' + port);


var noble = require('noble');  
noble.startScanning(); // any service UUID, no duplicates
