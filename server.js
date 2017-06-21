var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Video = require('./api/models/video-model'),
  Aula = require('./api/models/aula-model'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/learnpedia'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./api/routes/learnpediaRoutes');
routes(app);



app.listen(port);


console.log('Learnpedia RESTful API server started on: ' + port);
