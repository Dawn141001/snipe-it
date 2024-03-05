import {Method, request} from '../helpers/request.helpers';

export class ModelsAPI {
  static readonly COMPONENT_NAME: string = 'models';

  static fetchAll = () => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}`,
    });
  };
}
