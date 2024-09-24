import { SortOrder } from "../../util/SortOrder";

export type TssChangeLogOrderByInput = {
  action?: SortOrder;
  applyOn?: SortOrder;
  applyOnNextScheduledMaintWindow?: SortOrder;
  asset_id?: SortOrder;
  bigfix_request_id?: SortOrder;
  created?: SortOrder;
  id?: SortOrder;
  remediationWindowHours?: SortOrder;
  status?: SortOrder;
  tssIncludeList?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
};
