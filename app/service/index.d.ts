import Home from './home';
declare module 'egg' {
  export interface IService {// tslint:disable-line
    home: Home;
  }
}
