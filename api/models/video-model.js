'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectId = Schema.ObjectId;

var VideoSchema = new Schema({
  id : objectId,
  titulo: {
    type: String,
    Required: 'Insira o nome ',
    unique: true
  },
  url: {
    type: String,
    Required: 'Insira a url do video'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Video', VideoSchema);