import { SortOrder } from "../../util/SortOrder";

export type RebootWindowOrderByInput = {
  asset_id?: SortOrder;
  created?: SortOrder;
  id?: SortOrder;
  rebootWindowAvailableDayOfWeek?: SortOrder;
  rebootWindowAvailableMonths?: SortOrder;
  rebootWindowAvailableWeeksOfMonth?: SortOrder;
  rebootWindowCloseTime?: SortOrder;
  rebootWindowOpenTime?: SortOrder;
  updated?: SortOrder;
};
