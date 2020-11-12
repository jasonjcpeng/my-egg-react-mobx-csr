const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    const ctx = this.ctx;
    await ctx.render('index.html');
  }
}

module.exports = IndexController;