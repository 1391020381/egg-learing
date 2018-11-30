'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hot', controller.hot.index.index);
  router.get('/new', controller.new.index.index);
};
