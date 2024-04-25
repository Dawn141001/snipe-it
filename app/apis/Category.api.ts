import {Method, request} from '../helpers/request.helpers';
import {ICategory} from '../interface/Category.interface';

export class CategoriesAPI {
  static readonly COMPONENT_NAME: string = 'categories';

  static fetchAll = () => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}`,
    });
  };
  static createCategory = (data: ICategory) => {
    return request({
      method: Method.POST,
      url: `/${this.COMPONENT_NAME}`,
      data: data,
    });
  };
  static deleteCategory = (id: string) => {
    return request({
      method: Method.DELETE,
      url: `/${this.COMPONENT_NAME}/${id}`,
    });
  };
}
