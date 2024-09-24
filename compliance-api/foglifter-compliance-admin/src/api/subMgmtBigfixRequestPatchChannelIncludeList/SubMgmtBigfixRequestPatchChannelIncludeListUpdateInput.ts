import { PatchChannelWhereUniqueInput } from "../patchChannel/PatchChannelWhereUniqueInput";
import { SubMgmtChangeLogWhereUniqueInput } from "../subMgmtChangeLog/SubMgmtChangeLogWhereUniqueInput";

export type SubMgmtBigfixRequestPatchChannelIncludeListUpdateInput = {
  patchChannel?: PatchChannelWhereUniqueInput;
  subMgmtChangeLog?: SubMgmtChangeLogWhereUniqueInput;
};
