'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538987343030_8969';

  // add your config here
  config.middleware = [];
  config.security = {
    csrf: false,
    ctoken: false,
  };
  return config;
};
