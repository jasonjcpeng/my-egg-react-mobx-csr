exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.httpProxy = {
  enable: true,
  package: '@eggjs/http-proxy',
};
exports.cors = {
  enable: process.env.NODE_ENV === 'development',
  package: 'egg-cors',
};

exports.proxyagent = {
  enable: process.env.NODE_ENV === 'development',
  package: 'egg-development-proxyagent',
};