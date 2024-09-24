import { AttestationHostWhereUniqueInput } from "../attestationHost/AttestationHostWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatchChannelFixletWhereUniqueInput } from "../patchChannelFixlet/PatchChannelFixletWhereUniqueInput";

export type AttestationHostFixletWhereInput = {
  attestationHost?: AttestationHostWhereUniqueInput;
  checklistId?: IntNullableFilter;
  checklistName?: StringNullableFilter;
  created?: DateTimeFilter;
  id?: IntFilter;
  name?: StringFilter;
  patchChannelFixlet?: PatchChannelFixletWhereUniqueInput;
  tssSpec?: StringNullableFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
