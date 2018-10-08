'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      env: this.ctx.app.config.env,
      config: this.ctx.app.config.keys,
    };
  }
}

module.exports = HomeController;
