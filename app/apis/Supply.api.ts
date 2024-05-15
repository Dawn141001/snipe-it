import {Method, request} from '../helpers/request.helpers';
import {ISupply} from '../interface/Supply.interface';

export class SuppliesAPI {
  static readonly COMPONENT_NAME: string = 'suppliers';

  static fetchAll = () => {
    return request({
      method: Method.GET,
      url: `/${this.COMPONENT_NAME}`,
    });
  };
  static createSupply = (data: ISupply) => {
    return request({
      method: Method.POST,
      url: `/${this.COMPONENT_NAME}`,
      data: data,
    });
  };
  // static deleteSupply = (id: string) => {
  //   return request({
  //     method: Method.DELETE,
  //     url: `/${this.COMPONENT_NAME}/${id}`,
  //   });
  // };
}
