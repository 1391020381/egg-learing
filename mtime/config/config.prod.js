'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538969269270_1081';

  // add your config here
  // config.middleware = [ 'errorHandler' ];

  config.view = {
    defaultViewEngine: 'nujucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  config.sequelize = {
    dialect: 'mysql',
    database: 'mtime',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: '',
  };

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '',
      database: 'mtime',
    },
    app: true,
    agent: false,
  };
  return config;
};
