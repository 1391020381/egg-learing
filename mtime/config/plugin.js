'use strict';

// had enabled by egg
// exports.static = true;
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
