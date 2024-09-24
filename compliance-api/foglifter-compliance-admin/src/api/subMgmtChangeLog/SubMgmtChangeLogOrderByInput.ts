import { SortOrder } from "../../util/SortOrder";

export type SubMgmtChangeLogOrderByInput = {
  action?: SortOrder;
  asset_id?: SortOrder;
  bigfix_request_id?: SortOrder;
  created?: SortOrder;
  hostname?: SortOrder;
  id?: SortOrder;
  patchChannelIncludeList?: SortOrder;
  status?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
};
