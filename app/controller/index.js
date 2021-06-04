const Controller = require("egg").Controller;
class IndexController extends Controller {
  async index() {
    const ctx = this.ctx;
    await ctx.render("index.html");
  }

  async healthy() {
    const ctx = this.ctx;
    return (ctx.body = "ok");
  }
}

module.exports = IndexController;
