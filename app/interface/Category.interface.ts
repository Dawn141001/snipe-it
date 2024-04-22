export interface ICategory {
  id?: number;
  name?: string;
  image?: string;
  category_type?: string;
  has_eula?: boolean;
  use_default_eula?: boolean;
  eula?: string;
  checkin_email?: boolean;
  require_acceptance?: boolean;
  item_count?: number;
  assets_count?: number;
}
