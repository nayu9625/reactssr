const Router = require('@koa/router');
const fs = require('fs');
const { resolve } = require('path');
const router = new Router();
const { renderToString } = require('react-dom/server');
const serverBundle = require('../../../dist/server.bundle.js').default;
const template = fs.readFileSync(resolve(__dirname, '../../../dist/index.html'), 'utf-8');

const templateRender = () => {
  return ({html, store}) => {
    return (
      template.replace('<div id="app"></div>', `<div id="app">${html}</div>${store}`)
    )
  }
}

module.exports = (app) => {
  router.get(['/', '/about'], async (ctx, next) => {
    const render = templateRender();
    const jsx = await serverBundle(ctx);
    const html = await renderToString(jsx);
    console.log(ctx.window)
    ctx.body = render({
      html,
      store: `<script>window.REDUX_STATE=${JSON.stringify(ctx.window)}</script>`,
    });
  })
  router.get('/api/getUserInfo', ctx => {
    ctx.body = {
      code: 200,
      message: 'ok',
      data: {
        name: 'ny',
        address: '松江',
      }
    }
  })
  app.use(router.routes()).use(router.allowedMethods())
}