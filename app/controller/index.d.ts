import HomeController from './home';
declare module 'egg' {
  export interface IController {// tslint:disable-line
    home: HomeController;
  }
}
