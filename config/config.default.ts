import { EggAppConfig } from 'egg';

export default (appInfo: EggAppConfig) => {
  const config: any = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519550771568_3176';

  // add your config here
  config.middleware = [];

  config.news = {
    urlPrefix: 'https://cnodejs.org/api/v1',
    pageSize: 5,
  };

  return config;
};

declare module 'egg' {
  export interface Application {
    config: EggAppConfig & { news: { urlPrefix: string; pageSize: number } };
  }
}
