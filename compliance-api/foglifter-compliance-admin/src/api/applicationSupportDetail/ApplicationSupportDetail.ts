import { Application } from "../application/Application";

export type ApplicationSupportDetail = {
  application?: Application | null;
  businessRequiredRecoveryPointObjective: string | null;
  businessRequiredRecoveryTimeObjective: string | null;
  id: number;
  infrastructureSupport: string | null;
  owningOrganization: string | null;
  owningSubOrganization: string | null;
  recoveryPointCapability: string | null;
  recoveryTimeCapability: string | null;
  resiliencyTier: string | null;
  support: string | null;
  supportOrganization: string | null;
  supportTier: string | null;
};
