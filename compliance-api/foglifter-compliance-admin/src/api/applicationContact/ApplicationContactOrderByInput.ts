import { SortOrder } from "../../util/SortOrder";

export type ApplicationContactOrderByInput = {
  app_id?: SortOrder;
  applicationId?: SortOrder;
  contact_id?: SortOrder;
  created?: SortOrder;
  id?: SortOrder;
  roleEnds?: SortOrder;
  roleStarts?: SortOrder;
  roleType?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
};
