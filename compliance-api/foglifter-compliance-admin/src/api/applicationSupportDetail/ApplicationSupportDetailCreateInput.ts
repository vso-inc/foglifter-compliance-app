import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type ApplicationSupportDetailCreateInput = {
  application?: ApplicationWhereUniqueInput | null;
  businessRequiredRecoveryPointObjective?: string | null;
  businessRequiredRecoveryTimeObjective?: string | null;
  infrastructureSupport?: string | null;
  owningOrganization?: string | null;
  owningSubOrganization?: string | null;
  recoveryPointCapability?: string | null;
  recoveryTimeCapability?: string | null;
  resiliencyTier?: string | null;
  support?: string | null;
  supportOrganization?: string | null;
  supportTier?: string | null;
};
