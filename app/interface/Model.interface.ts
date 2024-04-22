import {ICategory} from './Category.interface';

export interface IModel {
  id?: number;
  name?: string;
  category?: ICategory;
}
