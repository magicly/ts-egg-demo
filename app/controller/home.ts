import { Controller } from 'egg';

export default class HomeController extends Controller {
  async index() {
    const result = await this.service.home.getTopics(1, 1);
    this.ctx.body = result;
  }
}
