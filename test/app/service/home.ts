import * as assert from 'assert';
import { Context } from 'egg';
import mm from 'egg-mock';

describe('test/app/service/home.test.js', () => {
  const app = mm.app();
  let ctx: Context;

  before(async () => {
    await app.ready();
    ctx = app.mockContext();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('getTopics', async () => {
    const list = await ctx.service.home.getTopics();
    assert(list.success === false);
  });
});
