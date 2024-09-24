import { PatchChannelFixletUpdateManyWithoutPatchChannelsInput } from "./PatchChannelFixletUpdateManyWithoutPatchChannelsInput";
import { SubMgmtBigfixRequestPatchChannelIncludeListUpdateManyWithoutPatchChannelsInput } from "./SubMgmtBigfixRequestPatchChannelIncludeListUpdateManyWithoutPatchChannelsInput";

export type PatchChannelUpdateInput = {
  isUserSelectable?: boolean;
  name?: string;
  note?: string | null;
  operatingSystem?: string;
  patchChannelFixlet?: PatchChannelFixletUpdateManyWithoutPatchChannelsInput;
  subMgmtBigfixRequestPatchChannelIncludeList?: SubMgmtBigfixRequestPatchChannelIncludeListUpdateManyWithoutPatchChannelsInput;
  updatedBy?: string;
};
