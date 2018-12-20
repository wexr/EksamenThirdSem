'use strict';
module.exports = function(app) {
  var controller = require('../controller/controller');
  // todoList Routes
  app.route('/hentinfo')
    .get(controller.hentinfo);
    

  app.route('/hentinfo2')
    .post(controller.hentinfo2);

    app.route('/hentinfo3')
    .post(controller.hentinfo3);

  app.route('/opretinfo')
  .post(controller.opretinfo);

  app.route('/opretinfo2')
  .post(controller.opretinfo2);
};