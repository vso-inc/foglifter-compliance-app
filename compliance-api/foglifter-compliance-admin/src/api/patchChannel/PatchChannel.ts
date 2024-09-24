import { PatchChannelFixlet } from "../patchChannelFixlet/PatchChannelFixlet";
import { SubMgmtBigfixRequestPatchChannelIncludeList } from "../subMgmtBigfixRequestPatchChannelIncludeList/SubMgmtBigfixRequestPatchChannelIncludeList";

export type PatchChannel = {
  created: Date;
  id: number;
  isUserSelectable: boolean;
  name: string;
  note: string | null;
  operatingSystem: string;
  patchChannelFixlet?: Array<PatchChannelFixlet>;
  subMgmtBigfixRequestPatchChannelIncludeList?: Array<SubMgmtBigfixRequestPatchChannelIncludeList>;
  updated: Date;
  updatedBy: string;
};
