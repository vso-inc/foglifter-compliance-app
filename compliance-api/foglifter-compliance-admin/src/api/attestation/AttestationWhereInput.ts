import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { AttestationHostListRelationFilter } from "../attestationHost/AttestationHostListRelationFilter";
import { AttestationTypeWhereUniqueInput } from "../attestationType/AttestationTypeWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AttestationWhereInput = {
  alternateContactEmail?: StringNullableFilter;
  alternateContactNuid?: StringNullableFilter;
  application?: ApplicationWhereUniqueInput;
  attestationHost?: AttestationHostListRelationFilter;
  attestationType?: AttestationTypeWhereUniqueInput;
  caseId?: StringNullableFilter;
  connectedToAThirdPartySystem?: BooleanFilter;
  created?: DateTimeFilter;
  guid?: StringFilter;
  hasSensitiveData?: BooleanFilter;
  id?: IntFilter;
  impactedRegion?: StringNullableFilter;
  isEmergencyRequest?: BooleanFilter;
  isPermanentRequest?: BooleanFilter;
  justification?: StringFilter;
  longTermSolution?: StringNullableFilter;
  mitigatingCompensatingControls?: StringNullableFilter;
  owningOrganization?: StringNullableFilter;
  primaryContactEmail?: StringFilter;
  primaryContactNuid?: StringFilter;
  remediationPlan?: StringNullableFilter;
  remediationPlanTargetedCompletion?: DateTimeNullableFilter;
  response?: StringNullableFilter;
  riskManagementOption?: StringNullableFilter;
  sentToThirdParty?: DateTimeNullableFilter;
  status?: StringFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
