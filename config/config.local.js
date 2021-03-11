exports.cluster = {
  listen: {
    port: 7001,
  }
}

exports.httpclient = {
  request: {
    enableProxy: false,
    rejectUnauthorized: false,
    proxy: process.env.http_proxy,
  },
};