import { SortOrder } from "../../util/SortOrder";

export type BigfixContentResultOrderByInput = {
  applicable?: SortOrder;
  contentId?: SortOrder;
  created?: SortOrder;
  datasourceDeviceId?: SortOrder;
  datasourceSiteId?: SortOrder;
  firstRelevant?: SortOrder;
  id?: SortOrder;
  lastNonRelevant?: SortOrder;
  lastRelevant?: SortOrder;
  relevant?: SortOrder;
  resolved?: SortOrder;
  reverted?: SortOrder;
  typeField?: SortOrder;
  updated?: SortOrder;
};
