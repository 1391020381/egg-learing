'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538969269270_1081';

  // add your config here
  config.middleware = [ 'errorHandler' ];

  return config;
};
