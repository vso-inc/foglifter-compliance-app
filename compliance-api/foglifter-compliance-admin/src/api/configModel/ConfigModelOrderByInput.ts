import { SortOrder } from "../../util/SortOrder";

export type ConfigModelOrderByInput = {
  configName?: SortOrder;
  configValue?: SortOrder;
  created?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
};
