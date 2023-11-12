const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/properties',
    createProxyMiddleware({
      target: 'https://victor-4ot8.onrender.com',
      changeOrigin: true,
    })
  );
};
