const Controller = require('egg').Controller;
class mtpReportController extends Controller {
  async index() {
    const ctx = this.ctx;
    await ctx.render('mtpreport.html');
  }
}

module.exports = mtpReportController;