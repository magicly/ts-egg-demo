import * as assert from 'assert';
import mm from 'egg-mock';

describe('test/app/controller/home.test.js', () => {
  const app = mm.app();
  before(async () => {
    await app.ready();
  });

  after(() => app.close());

  afterEach(mm.restore);

  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should GET /', async () => {
    const result = await app
      .httpRequest()
      .get('/')
      .expect(200);
    const json = JSON.parse(result.text);
    assert(json.success === true);
  });
});
