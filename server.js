var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

var routes = require('./api/routes/articleRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Article RESTful API server started on: ' + port);
