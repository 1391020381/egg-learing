'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');
class HomeController extends Controller {
  async index() {
    this.ctx.body = [
      '<a download href="/download">download</a>',
      '<br>',
      '<a download href="/download-image">download image</a>',
    ].join('');
  }
  async download() {
    this.logger.info('dir:', this.app.config.static);
    const filePath = path.resolve(this.app.config.static.dir, 'hello.txt');
    this.logger.info('filePath:', filePath);
    // this.ctx.set('Content-Type', 'application/octet-stream');
    // this.ctx.body = fs.createReadStream(filePath);
    const content = fs.readdirSync(filePath);
    this.logger.info('content:', content);
    this.ctx.body = content;
  }
  async downloadImage() {
    const url = 'http://cdn2.ettoday.net/images/1200/1200526.jpg';
    const res = await this.ctx.curl(url, {
      stream: true,
    });
    this.ctx.type = 'jpg';
    this.ctx.body = res.res;
  }
}

module.exports = HomeController;
