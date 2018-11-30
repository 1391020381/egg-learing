'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    const { location, locations } = await this.ctx.helper.getLocation(ctx);
    const hotPlayMovies = await this.app.curl(`https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=${location.id}`, {
      dataType: 'json',
    });
    // this.logger.info('hotPlayMovies:', hotPlayMovies);
    // 注意 nunjucks项目中版本 在取数据时 多了一个字段
    await ctx.render('page/home.tpl', { location, locations, hotPlayMovies });
  }
}

module.exports = HomeController;
