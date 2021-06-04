exports.cluster = {
  listen: {
    port: 80,
  },
};

exports.apiProxyMap = {
  "/crash/": {
    host: "www.baidu.com:80",
    protocol: "http",
  },
};
