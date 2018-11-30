'use strict';
const Controller = require('egg').Controller;

class HotController extends Controller {
  async index(ctx) {
    const { location, locations } = await ctx.helper.getLocation(ctx);
    const locationMovies = await this.app.curl(`https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=${location.id}`, {
      dataType: 'json',
    }).then(res => res.data);
    await ctx.render('page/hot.tpl', { location, locations, locationMovies });

  }
}

module.exports = HotController;
