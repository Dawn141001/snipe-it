import {Method, request} from '../helpers/request.helpers';

export class CategoriesAPI {
  static readonly COMPONENT_NAME: string = 'categories';

  static fetchAll = () => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}`,
    });
  };

  
}
