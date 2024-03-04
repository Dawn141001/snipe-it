import {Method, request} from '../helpers/request.helpers';
import { IAsset } from '../interface/Asset.interface';

export class AssetsAPI {
  static readonly COMPONENT_NAME: string = 'hardware';

  static fetchAll = () => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}`,
    });
  };

  static create = (data:IAsset) => {
    return request({
      method: Method.POST,
      url: `/${this.COMPONENT_NAME}`,
      data:data
    });
  };
  static delete = (id: number) => {
    return request({
      method: Method.DELETE,
      url: `/${this.COMPONENT_NAME}/${id}`,
    });
  };
}
