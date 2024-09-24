import { AttestationListRelationFilter } from "../attestation/AttestationListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type AttestationTypeWhereInput = {
  attestation?: AttestationListRelationFilter;
  created?: DateTimeFilter;
  description?: StringFilter;
  id?: IntFilter;
  name?: StringFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
