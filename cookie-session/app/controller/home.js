'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.session.count = (this.ctx.session.count || 0) + 1;
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
