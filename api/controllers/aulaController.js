'use strict';
var mongoose = require('mongoose'),
  Aula = mongoose.model('Aula');

exports.list_all_aulas = function(req, res) {
  Aula.find({}, function(err, aula) {
    if (err)
      res.send(err);
    res.json(aula);
  });
};

exports.create_a_aula = function(req, res) {
  var new_aula = new Aula(req.body);
  new_aula.save(function(err, aula) {
    if (err)
      res.send(err);
    res.json(aula);
  });
};

exports.read_a_aula = function(req, res) {
  Aula.findById(req.params.aulaId, function(err, aula) {
    if (err)
      res.send(err);
    res.json(aula);
  });
};

exports.update_a_aula = function(req, res) {
  Aula.findOneAndUpdate(req.params.aulaId, req.body, {new: true}, function(err, aula) {
    if (err)
      res.send(err);
    res.json(aula);
  });
};


exports.delete_a_aula = function(req, res) {
  Aula.remove({
    _id: req.params.aulaId
  }, function(err, aula) {
    if (err)
      res.send(err);
    res.json({ message: 'aula successfully deleted' });
  });
};

