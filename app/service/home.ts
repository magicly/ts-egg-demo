import { Service } from 'egg';

interface NewsResult {
  success: boolean;
  data: Array<{
    id: string;
    author_id: string;
    content: string;
    title: string;
    create_at: string;
    author: {
      loginname: string;
      avatar_url: string;
    };
  }>;
}

export default class Home extends Service {
  /**
   * get topics
   * @param page - page number
   * @param pageSize - page count
   */
  public async getTopics(page?: number, pageSize?: number): Promise<NewsResult> {
    page = page || 1;
    pageSize = pageSize || this.getConfig().pageSize;

    try {
      const result = await this.request(`topics`, {
        data: {
          page,
          limit: 1,
        },
      });
      return result;
    } catch (e) {
      this.ctx.logger.error(e);
    }
  }

  private getConfig() {
    return this.app.config.news;
  }

  /**
   * request api
   * @param api - Api name
   * @param opts - urllib options
   */
  private async request(api: string, opts?: object) {
    const options = {
      dataType: 'json',
      timeout: ['30s', '30s'],
      ...opts,
    };

    const result = await this.ctx.curl(`${this.getConfig().urlPrefix}/${api}`, options);
    return result.data;
  }
}
