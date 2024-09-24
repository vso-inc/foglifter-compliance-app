import { SortOrder } from "../../util/SortOrder";

export type OperationsCalendarOrderByInput = {
  asset_id?: SortOrder;
  changeCoordinator?: SortOrder;
  changeManager?: SortOrder;
  changeRequest?: SortOrder;
  primary_contact_id?: SortOrder;
  created?: SortOrder;
  developmentManager?: SortOrder;
  id?: SortOrder;
  lastPatched?: SortOrder;
  locked?: SortOrder;
  lockedBy?: SortOrder;
  note?: SortOrder;
  status_id?: SortOrder;
  projectManager?: SortOrder;
  reasonCode?: SortOrder;
  scheduled?: SortOrder;
  scheduledBy?: SortOrder;
  serviceId?: SortOrder;
  technicalLead?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
};
