import {Method, request} from '../helpers/request.helpers';
import {IStatus} from '../interface/Status.interface';

export class StatusAPI {
  static readonly COMPONENT_NAME: string = 'statuslabels';

  static fetchAll = () => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}`,
    });
  };
  static createStatus = (data: IStatus) => {
    return request({
      method: Method.POST,
      url: `/${this.COMPONENT_NAME}`,
      data: data,
    });
  };
}
