import { SortOrder } from "../../util/SortOrder";

export type MaintenanceWindowOrderByInput = {
  asset_id?: SortOrder;
  created?: SortOrder;
  id?: SortOrder;
  maintWindowAvailableDayOfWeek?: SortOrder;
  maintWindowAvailableMonths?: SortOrder;
  maintWindowAvailableWeeksOfMonth?: SortOrder;
  maintWindowCloseTime?: SortOrder;
  maintWindowLastInside?: SortOrder;
  maintWindowLevelOfSupport?: SortOrder;
  maintWindowOpenTime?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
};
