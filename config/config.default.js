const path = require('path');
exports.keys = 'my-cookie-secret-key';
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.html': 'nunjucks',
  },
  root: path.join(__dirname, '../app/public/')
};
exports.static = {
  maxAge: 31536000,
  prefix: '/'
};