const path = require("path");
const fs = require("fs");
exports.keys = "my-cookie-secret-key"; // cookie加密key
exports.view = {
  // 模板引擎
  defaultViewEngine: "nunjucks",
  mapping: {
    ".html": "nunjucks",
  },
  root: [
    path.join(__dirname, "../app/public/"),
    path.join(__dirname, "../app/template/"),
  ].join(","),
};
exports.static = {
  // 静态文件地址
  maxAge: 31536000,
  prefix: "/",
  dir: [
    path.join(__dirname, "../app/public/"),
    path.join(__dirname, "../app/static/"),
  ],
};
exports.siteFile = {
  // 强行设置favicon
  "/favicon.ico": fs.readFileSync(path.join(__dirname, "../favicon.ico")),
};

exports.security = {
  csrf: false,
};

exports.cors = {
  origin: "http://localhost:7002",
  credentials: true,
  allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
};

exports.httpProxy = {
  timeout: 60 * 1000,
};

exports.apiProxyMap = {
  "/crash/": {
    host: "www.baidu.com:80",
    protocol: "http",
  },
};
