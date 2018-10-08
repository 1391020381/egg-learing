'use strict';
module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + 'justdoit';
  config.middleware = [];
  return config;
};
