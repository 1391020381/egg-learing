'use strict';
const getLocation = async ctx => { // 在非首页请求的时候 cookies也会有一个默认的 locationId
  const locations = await ctx.model.Location.findAll();
  const locationId = Number(ctx.query.location) || Number(ctx.cookies.get('location'));
  if (locationId) {
    const location = locations.find(({ id }) => id === locationId);
    if (location && location.name) {
      ctx.query.location && ctx.cookies.set('location', locationId);
      return {
        locations,
        location,
      };
    }
  }
  ctx.cookies.set('location', 290);
};

module.exports = {
  getLocation,
};
