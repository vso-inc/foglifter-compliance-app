import { SortOrder } from "../../util/SortOrder";

export type DatasourceDeviceOrderByInput = {
  asset_id?: SortOrder;
  created?: SortOrder;
  datasourceId?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  isLocked?: SortOrder;
  lastReportSent?: SortOrder;
  lastReportTime?: SortOrder;
  name?: SortOrder;
  reportNumber?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
};
