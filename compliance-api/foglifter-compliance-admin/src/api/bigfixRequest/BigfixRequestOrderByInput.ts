import { SortOrder } from "../../util/SortOrder";

export type BigfixRequestOrderByInput = {
  actionScriptId?: SortOrder;
  asset_id?: SortOrder;
  bigfixEnvironment?: SortOrder;
  request_type?: SortOrder;
  computerId?: SortOrder;
  computerStatus?: SortOrder;
  created?: SortOrder;
  httpResponse?: SortOrder;
  httpResponseMessage?: SortOrder;
  id?: SortOrder;
  request?: SortOrder;
  requestComputerSettings?: SortOrder;
  requestStatus?: SortOrder;
  response?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
};
