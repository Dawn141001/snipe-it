import {ICategory} from './Category.interface';
import {IModel} from './Model.interface';
import {IStatus} from './Status.interface';

enum Status {
  Pending,
  Deployed,
  Archived,
  ReadyToDeploy,
}
enum CheckInOut {
  CheckIn,
  CheckOut,
}
interface IAssignedTo {
  email?: string;
  employee_number?: string;
  first_name?: string;
  id?: number;
  last_name?: string;
  name?: string;
  type?: string;
  username?: string;
}

export interface IAsset {
  id?: string;
  name?: string;
  asset_tag?: string;
  assigned_to?: IAssignedTo;
  manufacturer?: string;
  image?: string;
  status_id: number;
  model_id: number;
  model?: IModel | null;
  category?: ICategory | null;
  status_label?: IModel | null;
  location?: string;
  purchase_cost?: number;
}
