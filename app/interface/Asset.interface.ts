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
  id?: number;
  name?: string;
  status_id?: number;
  model_id?: number;
  purchase_cost?: number;
  purchase_date?: {date?: string} | string | null;
  supplier?: {id?: string; name?: string} | null;
  notes: string;
  supplier_id: number;
  asset_tag?: string;
  assigned_to?: IAssignedTo;
  image?: string;
  model?: IModel | null;
  category?: ICategory | null;
  status_label?: IModel | null;
  location?: string;
}
