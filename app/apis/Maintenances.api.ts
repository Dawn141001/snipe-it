import {Method, request} from '../helpers/request.helpers';

export class MainternancesAPI {
  static readonly COMPONENT_NAME: string = 'maintenances';

  static fetchAll = () => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}`,
    });
  };

  static fetchByID = (id: number) => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}?asset_id=${id}`,
    });
  };
}
