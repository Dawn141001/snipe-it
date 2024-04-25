import {Method, request} from '../helpers/request.helpers';
import {IModel} from '../interface/Model.interface';

export class ModelsAPI {
  static readonly COMPONENT_NAME: string = 'models';

  static fetchAll = () => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}`,
    });
  };

  static createModel = (data: IModel) => {
    return request({
      method: Method.POST,
      url: `/${this.COMPONENT_NAME}`,
      data: data,
    });
  };
}
