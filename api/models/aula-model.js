'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectId = Schema.ObjectId;

var AulaSchema = new Schema({
  id : objectId,
  titulo: {
    type: String,
    Required: 'Insira o nome',
    unique : true
  },
  descricao: {
    type: String,
    Required: 'Insira a url do aula'
  },
  id_video: {
    type : mongoose.Schema.Types.ObjectId, ref: 'Video' 
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Aula', AulaSchema);