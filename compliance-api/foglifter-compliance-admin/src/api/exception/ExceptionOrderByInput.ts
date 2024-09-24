import { SortOrder } from "../../util/SortOrder";

export type ExceptionOrderByInput = {
  asset_id?: SortOrder;
  created?: SortOrder;
  exceptionEnd?: SortOrder;
  exceptionReason?: SortOrder;
  exceptionStart?: SortOrder;
  exceptionType?: SortOrder;
  id?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
};
