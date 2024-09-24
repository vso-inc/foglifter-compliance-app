import { AttestationHostFixletListRelationFilter } from "../attestationHostFixlet/AttestationHostFixletListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { PatchChannelWhereUniqueInput } from "../patchChannel/PatchChannelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PatchChannelFixletWhereInput = {
  attestationHostFixlet?: AttestationHostFixletListRelationFilter;
  commonPlatformEnumerationTag?: StringNullableFilter;
  created?: DateTimeFilter;
  fixletCategory?: StringNullableFilter;
  fixletName?: StringNullableFilter;
  fixletSourceReleased?: DateTimeNullableFilter;
  fixletTag?: StringNullableFilter;
  id?: IntFilter;
  patchChannel?: PatchChannelWhereUniqueInput;
  relevantCount?: StringNullableFilter;
  site?: StringNullableFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
