// const proxy = require("http-proxy-middleware");

// module.exports = function(app) {
//   app.use(proxy("/auth/google", { target: "http://localhost:5000/" }));
// };

const { createProxyMiddleware } = require("http-proxy-middleware");
// const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    createProxyMiddleware(
      "/auth/google", // replace with your endpoint
      { target: "http://localhost:5000" } // replace with your target
    )
  );
};

//package.json code
// "proxy": {
//     "/auth/google": {
//       "target": "http://localhost:5000"
//     }
//   },
