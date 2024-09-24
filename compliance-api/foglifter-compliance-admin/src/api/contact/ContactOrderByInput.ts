import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  created?: SortOrder;
  department?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  nuid?: SortOrder;
  reportsTo?: SortOrder;
  title?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
  workPhone?: SortOrder;
};
