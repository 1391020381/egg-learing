const isJson = require('koa-is-json');
const zlib = require('zlib');

async function gzip(ctx,next) {
    await next();
    let body = ctx.body;
    if(!body) return ;
    if(isJson(body)){
        body = JSON.stringify(body)
    }
    const stream = zlib.createGzip();
    stream.end(body);
    ctx.body = stream;
    ctx.set('Content-Encoding','gzip')
}
