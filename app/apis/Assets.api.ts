import {Method, request} from '../helpers/request.helpers';
import {IAsset} from '../interface/Asset.interface';

export class AssetsAPI {
  static readonly COMPONENT_NAME: string = 'hardware';

  static fetchAll = (id?: string, search?: string) => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}?search=${search ? search : ''}`,
      params: {
        category_id: id,
      },
    });
  };
  static getAssetById = (id: number) => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}/${id}`,
    });
  };
  static getAssetByTag = (id: string) => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}/bytag/${id}`,
    });
  };
  static create = (data: IAsset) => {
    return request({
      method: Method.POST,
      url: `/${this.COMPONENT_NAME}`,
      data: data,
    });
  };
  static delete = (id: number) => {
    return request({
      method: Method.DELETE,
      url: `/${this.COMPONENT_NAME}/${id}`,
    });
  };
}
