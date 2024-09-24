import { PatchChannel } from "../patchChannel/PatchChannel";
import { SubMgmtChangeLog } from "../subMgmtChangeLog/SubMgmtChangeLog";

export type SubMgmtBigfixRequestPatchChannelIncludeList = {
  id: number;
  patchChannel?: PatchChannel;
  subMgmtChangeLog?: SubMgmtChangeLog;
};
