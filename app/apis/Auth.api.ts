import {Method, request} from '../helpers/request.helpers';

export class AuthAPI {
  static readonly COMPONENT_NAME: string = 'users';

  static getMe = (id: number) => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}/1`,
    });
  };
}
