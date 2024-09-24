import { PatchChannelFixletCreateNestedManyWithoutPatchChannelsInput } from "./PatchChannelFixletCreateNestedManyWithoutPatchChannelsInput";
import { SubMgmtBigfixRequestPatchChannelIncludeListCreateNestedManyWithoutPatchChannelsInput } from "./SubMgmtBigfixRequestPatchChannelIncludeListCreateNestedManyWithoutPatchChannelsInput";

export type PatchChannelCreateInput = {
  isUserSelectable: boolean;
  name: string;
  note?: string | null;
  operatingSystem: string;
  patchChannelFixlet?: PatchChannelFixletCreateNestedManyWithoutPatchChannelsInput;
  subMgmtBigfixRequestPatchChannelIncludeList?: SubMgmtBigfixRequestPatchChannelIncludeListCreateNestedManyWithoutPatchChannelsInput;
  updatedBy: string;
};
