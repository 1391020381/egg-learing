'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    const { location, locations } = await this.ctx.helper.getLocation(ctx);
    const hotPlayMovies = await this.app.curl(`https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=${location.id}`, {
      dataType: 'json',
    });
    await ctx.render('page/home.tpl', { location, locations, hotPlayMovies });
  }
}

module.exports = HomeController;
