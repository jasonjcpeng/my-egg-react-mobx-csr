const Controller = require('egg').Controller;

class ApiController extends Controller {
  async index() {
    const ctx = this.ctx;
    const realPath = ctx.path.replace(/^\/api/, '');
    const host = this.switchHost(realPath);
    host && await ctx.proxyRequest(host.host, {
      rewrite(urlObj) {
        urlObj.pathname = realPath;
        urlObj.protocol = host.protocol;
        return urlObj;
      },
    });
  }

  switchHost(path) {
    const config = this.ctx.app.config.apiProxyMap;
    let resultItem = ''
    if (Object.keys(config).some((item, key) => {
      const reg = new RegExp(`^${item}.*`)
      resultItem = item;
      return !!path.match(reg);
    })) return config[resultItem]
    return false
  }
}

module.exports = ApiController;