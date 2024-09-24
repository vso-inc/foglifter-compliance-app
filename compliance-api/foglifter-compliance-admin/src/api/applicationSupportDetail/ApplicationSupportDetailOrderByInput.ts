import { SortOrder } from "../../util/SortOrder";

export type ApplicationSupportDetailOrderByInput = {
  app_id?: SortOrder;
  businessRequiredRecoveryPointObjective?: SortOrder;
  businessRequiredRecoveryTimeObjective?: SortOrder;
  id?: SortOrder;
  infrastructureSupport?: SortOrder;
  owningOrganization?: SortOrder;
  owningSubOrganization?: SortOrder;
  recoveryPointCapability?: SortOrder;
  recoveryTimeCapability?: SortOrder;
  resiliencyTier?: SortOrder;
  support?: SortOrder;
  supportOrganization?: SortOrder;
  supportTier?: SortOrder;
};
