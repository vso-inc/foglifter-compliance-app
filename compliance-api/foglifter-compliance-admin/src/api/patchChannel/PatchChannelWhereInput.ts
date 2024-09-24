import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatchChannelFixletListRelationFilter } from "../patchChannelFixlet/PatchChannelFixletListRelationFilter";
import { SubMgmtBigfixRequestPatchChannelIncludeListListRelationFilter } from "../subMgmtBigfixRequestPatchChannelIncludeList/SubMgmtBigfixRequestPatchChannelIncludeListListRelationFilter";

export type PatchChannelWhereInput = {
  created?: DateTimeFilter;
  id?: IntFilter;
  isUserSelectable?: BooleanFilter;
  name?: StringFilter;
  note?: StringNullableFilter;
  operatingSystem?: StringFilter;
  patchChannelFixlet?: PatchChannelFixletListRelationFilter;
  subMgmtBigfixRequestPatchChannelIncludeList?: SubMgmtBigfixRequestPatchChannelIncludeListListRelationFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
