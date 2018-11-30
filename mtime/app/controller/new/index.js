'use strict';
const Controller = require('egg').Controller;

class NewController extends Controller {
  async index() {
    const { ctx, app } = this;
    const { location, locations } = await ctx.helper.getLocation(ctx);
    const movieComingNew = await app.curl(`https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=${location.id}`, {
      dataType: 'json',
    }).then(res => res.data);
    await ctx.render('page/new.tpl', { location, locations, movieComingNew });
  }
}

module.exports = NewController;
