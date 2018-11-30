'use strict';
const Controller = require('egg').Controller;
class MovieController extends Controller {
  async index() {
    const { ctx, app } = this;
    const id = ctx.params.id;
    const { location, locations } = await ctx.helper.getLocation(ctx);
    const movieDetail = await app.curl(`https://ticket-api-m.mtime.cn/movie/detail.api?locationId=${location.id}&movieId=${id}`, {
      dataType: 'json',
    }).then(res => res.data.data);
    const movieComment = await app.curl(`https://ticket-api-m.mtime.cn/movie/hotComment.api?movieId=${id}`, {
      dataType: 'json',
    });
    const movieImages = await app.curl(`https://api-m.mtime.cn/Movie/ImageAll.api?movieId=${id}`, {
      dataType: 'json',
    }).then(res => res.data.dta);
    await ctx.render('page/movie.tpl', {
      location,
      locations,
      id,
      movieDetail,
      movieComment,
      movieImages,
    });
  }

}

module.exports = MovieController;
