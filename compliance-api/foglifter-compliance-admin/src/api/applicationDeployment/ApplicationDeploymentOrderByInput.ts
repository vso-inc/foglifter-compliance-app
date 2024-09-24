import { SortOrder } from "../../util/SortOrder";

export type ApplicationDeploymentOrderByInput = {
  app_id?: SortOrder;
  asset_id?: SortOrder;
  created?: SortOrder;
  deploymentId?: SortOrder;
  deploymentName?: SortOrder;
  deploymentNote?: SortOrder;
  deploymentStatus?: SortOrder;
  deploymentType?: SortOrder;
  id?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
};
