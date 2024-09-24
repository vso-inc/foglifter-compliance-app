import { PatchChannelWhereUniqueInput } from "../patchChannel/PatchChannelWhereUniqueInput";
import { SubMgmtChangeLogWhereUniqueInput } from "../subMgmtChangeLog/SubMgmtChangeLogWhereUniqueInput";

export type SubMgmtBigfixRequestPatchChannelIncludeListCreateInput = {
  patchChannel: PatchChannelWhereUniqueInput;
  subMgmtChangeLog: SubMgmtChangeLogWhereUniqueInput;
};
