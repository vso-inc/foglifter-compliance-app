import { SortOrder } from "../../util/SortOrder";

export type ApplicationLifecycleDetailOrderByInput = {
  actualDecommission?: SortOrder;
  actualRetirement?: SortOrder;
  app_id?: SortOrder;
  decommissionProcess?: SortOrder;
  decommissionState?: SortOrder;
  id?: SortOrder;
  isDrEnabled?: SortOrder;
  plannedDecommission?: SortOrder;
  plannedRetirement?: SortOrder;
};
