'use strict';
const Service = require('egg').Service;
class TopicService extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = 'https://cnodejs.org/api/v1';
  }
  async require(url, opts) {
    url = `${this.root}${url}`;
    opts = Object.assign({
      timeout: [ '30s', '30s' ],
      dataType: 'json',
    }, opts);
    return this.ctx.curl(url, opts);
  }
  checkSuccess(result) {
    if (result.status !== 200) {
      const errorMsg = result.data && result.data.error.msg ? result.data.error_msg : 'unknown error';
      this.ctx.thorw(result.status, errorMsg);
    }
    if (!result.data.success) {
      this.ctx.thorw(500, 'remote response error', {
        data: result.data,
      });
    }
  }
}
module.exports = TopicService;
