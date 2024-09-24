import { IntFilter } from "../../util/IntFilter";
import { PatchChannelWhereUniqueInput } from "../patchChannel/PatchChannelWhereUniqueInput";
import { SubMgmtChangeLogWhereUniqueInput } from "../subMgmtChangeLog/SubMgmtChangeLogWhereUniqueInput";

export type SubMgmtBigfixRequestPatchChannelIncludeListWhereInput = {
  id?: IntFilter;
  patchChannel?: PatchChannelWhereUniqueInput;
  subMgmtChangeLog?: SubMgmtChangeLogWhereUniqueInput;
};
