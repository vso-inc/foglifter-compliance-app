import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { AttestationWhereUniqueInput } from "../attestation/AttestationWhereUniqueInput";
import { AttestationHostFixletListRelationFilter } from "../attestationHostFixlet/AttestationHostFixletListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AttestationHostWhereInput = {
  asset?: AssetWhereUniqueInput;
  attestation?: AttestationWhereUniqueInput;
  attestationHostFixlet?: AttestationHostFixletListRelationFilter;
  created?: DateTimeFilter;
  id?: IntFilter;
  isSupportedByThirdParty?: BooleanNullableFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
