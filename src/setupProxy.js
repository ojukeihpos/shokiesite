/*"proxy": {
    "/auth/discord": {
      "target": "http://localhost:7777"
    }
  },*/

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(createProxyMiddleware("/auth/discord", { target: "http://localhost:7777" }))
}