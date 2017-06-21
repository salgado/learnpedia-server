'use strict';
module.exports = function(app) {
  var video = require('../controllers/videoController');
  var aula = require('../controllers/aulaController');


  // video Routes
  app.route('/videos')
    .get(video.list_all_videos)
    .post(video.create_a_video);


  app.route('/videos/:videoId')
    .get(video.read_a_video)
    .put(video.update_a_video)
    .delete(video.delete_a_video);

  // aula Routes
  app.route('/aulas')
  	.get(aula.list_all_aulas)
    .post(aula.create_a_aula);

  app.route('/aulas/:aulaId')
    .get(aula.read_a_aula)
    .put(aula.update_a_aula)
    .delete(aula.delete_a_aula);
};
