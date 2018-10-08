'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/download', app.controller.home.download);
  router.get('/download-image', app.controller.home.downloadImage);
};
