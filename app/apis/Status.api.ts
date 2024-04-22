import {Method, request} from '../helpers/request.helpers';

export class StatusAPI {
  static readonly COMPONENT_NAME: string = 'statuslabels';

  static fetchAll = () => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}`,
    });
  };
}