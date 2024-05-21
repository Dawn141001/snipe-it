import {Method, request} from '../helpers/request.helpers';
import {IMaintenaces} from '../interface/Maintenaces.interface';

export class MainternancesAPI {
  static readonly COMPONENT_NAME: string = 'maintenances';

  static fetchAll = () => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}`,
    });
  };

  static createMaintenance = (data: IMaintenaces) => {
    return request({
      method: Method.POST,
      url: `/${this.COMPONENT_NAME}`,
      data: data,
    });
  };

  static fetchByID = (id: number) => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}?asset_id=${id}`,
    });
  };
}
