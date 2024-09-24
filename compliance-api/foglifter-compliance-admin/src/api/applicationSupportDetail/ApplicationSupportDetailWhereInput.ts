import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type ApplicationSupportDetailWhereInput = {
  application?: ApplicationWhereUniqueInput;
  businessRequiredRecoveryPointObjective?: StringNullableFilter;
  businessRequiredRecoveryTimeObjective?: StringNullableFilter;
  id?: IntFilter;
  infrastructureSupport?: StringNullableFilter;
  owningOrganization?: StringNullableFilter;
  owningSubOrganization?: StringNullableFilter;
  recoveryPointCapability?: StringNullableFilter;
  recoveryTimeCapability?: StringNullableFilter;
  resiliencyTier?: StringNullableFilter;
  support?: StringNullableFilter;
  supportOrganization?: StringNullableFilter;
  supportTier?: StringNullableFilter;
};
